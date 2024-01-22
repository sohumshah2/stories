import { useEffect, useState } from "react";
import TitleBar from "../title-bar/title-bar";
import { useMarkdown } from "../providers/markdown-provider";
import "./editor.css";
import { connectMongoDB } from "@/lib/mongodb";
import { useSession } from "next-auth/react";
import ImageUpload from "../imageUpload/imageUpload";

const Editor = () => {
  const [markdown, setMarkdown] = useMarkdown() || ["", () => {}];
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [storyName, setStoryName] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined); // this is the local url

  const defaultImageSrc =
    "https://stories-bucket.s3.ap-southeast-2.amazonaws.com/defaultStoryImage.jpg";

  const [imageSrc, setImageSrc] = useState<string>(defaultImageSrc); // this is the url to be saved in the db
  // TODO: figure out how to use the .env var instead of hardcoding the url

  console.log("default stiory image", imageSrc);

  const accessToken = useSession().data?.user?.accessToken;
  const email = useSession().data?.user?.email;

  const getWordsCount = (str: String) => {
    return (str.match(/(\w+)/g) || "").length;
  };

  const getCharsCount = (str: String) => {
    return str.length;
  };

  const updateMarkdown = (event: { target: { value: string } }) => {
    const value = event.target.value;

    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };

  const downloadFile = () => {
    const link = document.createElement("a");
    const file = new Blob([markdown], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "Untitled.md";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  useEffect(() => {
    if (imageSrc !== defaultImageSrc) {
      saveStory();
    }
  }, [imageSrc]);

  // TODO: create a separate save story button component! and import here!
  const saveStory = async () => {
    console.log("imageSrc", imageSrc);
    try {
      const res = await fetch("http://localhost:3000/api/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: storyName,
          contents: markdown,
          author: email,
          dateCreated: new Date(),
          dateLastModified: new Date(),
          imageSrc: imageSrc,
        }),
      });
      if (!res.ok) {
        throw Error();
      }
    } catch (error) {
      console.log("Error saving story", error);
    }
  };

  return (
    <div className="editor__wrap">
      <TitleBar title="Editor" aside={`${words} Words ${chars} Characters`} />
      <input
        className="border border-gray-300 p-2"
        placeholder="Enter story name"
        value={storyName}
        onChange={(event) => {
          setStoryName(event.target.value);
        }}
      />
      <button onClick={saveStory}>Save story</button>
      <ImageUpload
        setImage={setImage}
        setImageUrl={setImageUrl}
        imageUrl={imageUrl}
        saveStory={saveStory}
        setImageSrc={setImageSrc}
      />{" "}
      {/* temporary */}
      {imageUrl && image && (
        <div className="rounded-lg overflow-hidden w-32 h-32 relative">
          <img
            className="object-cover w-48 h-36"
            src={imageUrl}
            alt={image.name}
          />
        </div>
      )}
      <textarea className="editor" value={markdown} onChange={updateMarkdown} />
      <button onClick={downloadFile}>Download File</button>
    </div>
  );
};

export default Editor;
