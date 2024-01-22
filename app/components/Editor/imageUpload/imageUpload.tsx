import { useState } from "react";
import { getSignedURL } from "@/app/actions";

const ImageUpload = ({
  setImage,
  setImageUrl,
  imageUrl,
  saveStory,
  setImageSrc,
}: any) => {
  const [file, setLocalFile] = useState(null);

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

  return (
    <div>
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
