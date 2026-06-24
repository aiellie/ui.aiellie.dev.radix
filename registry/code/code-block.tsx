"use client";

import { FileCodeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCallback, useState } from "react";
import type { BundledLanguage } from "shiki";

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockLanguageSelector,
  CodeBlockLanguageSelectorContent,
  CodeBlockLanguageSelectorItem,
  CodeBlockLanguageSelectorTrigger,
  CodeBlockLanguageSelectorValue,
  CodeBlockTitle,
} from "@/components/ui/code/code-block";

const codeExamples = {
  go: {
    code: `package main

import "fmt"

func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

func main() {
    fmt.Println(greet("World"))
}`,
    filename: "greet.go",
  },
  python: {
    code: `def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("World"))`,
    filename: "greet.py",
  },
  rust: {
    code: `fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("{}", greet("World"));
}`,
    filename: "greet.rs",
  },
  typescript: {
    code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`,
    filename: "greet.ts",
  },
} as const;

type Language = keyof typeof codeExamples;

const languages: { value: Language; label: string }[] = [
  { label: "TypeScript", value: "typescript" },
  { label: "Python", value: "python" },
  { label: "Rust", value: "rust" },
  { label: "Go", value: "go" },
];

const handleCopy = () => {
  console.log("Copied code to clipboard");
};

const handleCopyError = () => {
  console.error("Failed to copy code to clipboard");
};

export function CodeBlockExample() {
  const [language, setLanguage] = useState<Language>("typescript");
  const { code, filename } = codeExamples[language];

  const handleLanguageChange = useCallback((value: string) => {
    setLanguage(value as Language);
  }, []);

  return (
    <CodeBlock code={code} language={language as BundledLanguage}>
      <CodeBlockHeader>
        <CodeBlockTitle>
          <HugeiconsIcon icon={FileCodeIcon} strokeWidth={2} className="size-4" />
          <CodeBlockFilename>{filename}</CodeBlockFilename>
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockLanguageSelector
            onValueChange={handleLanguageChange}
            value={language}
          >
            <CodeBlockLanguageSelectorTrigger>
              <CodeBlockLanguageSelectorValue />
            </CodeBlockLanguageSelectorTrigger>
            <CodeBlockLanguageSelectorContent>
              {languages.map((lang) => (
                <CodeBlockLanguageSelectorItem
                  key={lang.value}
                  value={lang.value}
                >
                  {lang.label}
                </CodeBlockLanguageSelectorItem>
              ))}
            </CodeBlockLanguageSelectorContent>
          </CodeBlockLanguageSelector>
          <CodeBlockCopyButton onCopy={handleCopy} onError={handleCopyError} />
        </CodeBlockActions>
      </CodeBlockHeader>
    </CodeBlock>
  );
}
