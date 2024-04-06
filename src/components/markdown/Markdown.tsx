import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CustomLink } from './CustomLink';
import CodeBlock from './CodeBlock';

type MarkdownRendererProps = {
    children: string;
};

const MarkdownRenderer = ({ children: markdown }: MarkdownRendererProps) => {
    return (
        <Markdown
            className="prose prose-pre:none max-w-none pt-4 leading-10 bg-white" // no need if appears in "Wrapper"

            remarkPlugins={[remarkGfm]}
            // rehypePlugins={[rehypeRaw]}
            components={{
                h1: ({ node, ...props }) => <h1 className="font-semibold pt-12" {...props} />,
                h2: ({ node, ...props }) => <h2 className="font-semibold pt-12" {...props} />,
                h3: ({ node, ...props }) => <h3 className="font-semibold pt-12" {...props} />,
                // p: ({ node, ...props }) => <p className="text-md " {...props} />,
                p: ({ node, ...props }) => <p className="font-light" style={{ fontSize: '18px' }} {...props} />,
                a: ({ node, ...props }) => <CustomLink {...props} />,
                code: ({ node, ...props }) => <CodeBlock {...props} />,
            }}
        >
            {markdown}
        </Markdown>
    );
}

export default MarkdownRenderer;
