'use client';

import { EditorView } from "@codemirror/view";
import { useExtensionWithDependency } from "./useExtensionWithDependency";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { markdown } from "@codemirror/lang-markdown";

export const useSyntaxHighlightingExtension = (language: string, view: EditorView | undefined) => {
    const extension = useExtensionWithDependency(
        view ?? null,
        () => {
            switch (language.toLowerCase()) {
                case "typescript":
                case "javascript":
                    return javascript({
                        jsx: true,
                        typescript: true,
                    });
                case "python":
                    return python();
                case "markdown":
                    return markdown();
                default:
                    return [];
            }
        },
        [language]
    );

    return extension;
}