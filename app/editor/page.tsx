"use client";

import MainLayout from "../components/Editor/main-layout/main-layout";
import Editor from "../components/Editor/editor/editor";
import Preview from "../components/Editor/preview/preview";
import MarkdownProvider from "../components/Editor/providers/markdown-provider";
import SignInBtn from "../components/SignIn/SignInBtn";

export default function Home() {
  return (
    <MarkdownProvider>
      <SignInBtn />
      <MainLayout>
        <MainLayout.Column>
          <Editor />
        </MainLayout.Column>
        <MainLayout.Column>
          <Preview />
        </MainLayout.Column>
      </MainLayout>
    </MarkdownProvider>
  );
}
