"use client"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
    oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({ node, inline, className, children, ...props }: any) => {

    const match = /language-(\w+)/.exec(className || '');

    return (
        <div>
            {!inline && match ? (
                <SyntaxHighlighter
                    showLineNumbers={true}
                    style={oneLight}
                    // PreTag={CustomPreTag}
                    language={match[1]}
                    {...props}>
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code {...props}>
                    {children}
                </code>
            )}
        </div>
    )
}

export default CodeBlock;
