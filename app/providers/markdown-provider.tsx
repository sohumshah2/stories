import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type MarkdownContextValue = [string, Dispatch<SetStateAction<string>>];

const MarkdownContext = createContext<MarkdownContextValue | null>(null);

const MarkdownProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
        { children }
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => useContext(MarkdownContext);

export default MarkdownProvider;