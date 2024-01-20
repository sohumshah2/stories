import { useState } from "react";
import TitleBar from "../title-bar/title-bar";
import { useMarkdown } from "../providers/markdown-provider";
import "./editor.css";
import { connectMongoDB } from "@/lib/mongodb";
import { useSession } from "next-auth/react";

const Editor = () => {
  const [markdown, setMarkdown] = useMarkdown() || ["", () => {}];
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [storyName, setStoryName] = useState("");

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

  const saveStory = async () => {
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

      <textarea className="editor" value={markdown} onChange={updateMarkdown} />
      <button onClick={downloadFile}>Download File</button>
    </div>
  );
};

export default Editor;
