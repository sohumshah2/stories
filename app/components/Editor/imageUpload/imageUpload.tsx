import { useState } from "react";
import { getSignedURL } from "@/app/actions";
import { getSession, useSession } from "next-auth/react";

const ImageUpload = ({
  setImage,
  setImageUrl,
  imageUrl,
  saveStory,
  setImageSrc,
}: any) => {
  const [file, setLocalFile] = useState(null);

  const accessToken = useSession().data?.user?.accessToken;

  const handleUpload = async () => {
    console.log("file", { file });

    try {
      if (file) {
        const computeSHA256 = async (file: File) => {
          const buffer = await file.arrayBuffer();
          const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
          return hashHex;
        };

        const checksum = await computeSHA256(file);
        const signedUrlResult = await getSignedURL(
          file.type,
          file.size,
          checksum
        );

        console.log("signedUrlResult", signedUrlResult);
        if (signedUrlResult.failure !== undefined) {
          throw new Error("error getting signed url");
        }
        const url = signedUrlResult.success.url;

        await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });
        console.log("url", url);
        setImageSrc(url.split("?")[0]);
        // saveStory();
      }
    } catch (error) {
      console.error("error uploading image", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setLocalFile(selectedFile);
    setImage(selectedFile); // Pass the file state to the parent component

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    } else {
      setImageUrl(undefined);
    }
  };

  // move this to a separate component or different file
  const getStoryMetadata = async () => {
    console.log(await getSession());
    console.log("accestoken", accessToken);
    try {
      const author = (await getSession())?.user?.email || "";
      const url = `http://localhost:3000/api/stories?author=${encodeURIComponent(
        author
      )}`;
      console.log("url", url);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) {
        console.log("Error getting story metadata");
      }
      const data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log("Error getting story metadata", error);
    }
  };

  // move this to a separate component or different file
  const getStoryContents = async () => {
    console.log(await getSession());
    try {
      const author = (await getSession())?.user?.email || "";
      const url = `http://localhost:3000/api/story?author=${encodeURIComponent(
        author
      )}&storyId=${encodeURIComponent("65af9ce976db47e7673c5216")}`;
      console.log("url", url);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res.ok) {
        console.log("Error getting story contents");
      }
      const data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log("Error getting story contents", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload Image</button>
      <button onClick={getStoryMetadata}>Get story metadata</button>{" "}
      {/* temporary */}
      <button onClick={getStoryContents}>Get story contents</button>{" "}
      {/* temporary */}
    </div>
  );
};

export default ImageUpload;
