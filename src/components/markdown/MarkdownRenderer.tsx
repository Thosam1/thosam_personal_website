import React from 'react';
import CustomMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from "remark-toc";
import CustomLink from './CustomLink';
import CodeBlock from './CodeBlock';

type MarkdownRendererProps = {
	content: string;
};

const generateSlug = (string: string) => {
	let str = string.replace(/^\s+|\s+$/g, "");
	str = str.toLowerCase();
	str = str
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
   return str;
};

let components = {
	h1: ({ ...props }) => <h1 id={generateSlug(props.children)} className="font-semibold pt-12" {...props}>{props.children}</h1>,
	h2: ({ ...props }) => <h2 id={generateSlug(props.children)} className="font-semibold pt-12" {...props}>{props.children}</h2>,
	h3: ({ ...props }) => <h3 id={generateSlug(props.children)} className="font-semibold" {...props}>{props.children}</h3>,
	//p: ({ ...props }) => <p className="text-md " {...props} />,
	p: ({ ...props }) => <p className="font-light" style={{ fontSize: '18px' }} {...props} />,
	a: ({ ...props }) => <CustomLink href={props?.href || '/'}>{props.children}</CustomLink>,
	code: ({ ...props }) => <CodeBlock {...props} />,
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
	return (
		<CustomMarkdown
			className="prose prose-pre:none max-w-none pt-4 leading-10 bg-white" // no need if appears in "Wrapper"
			remarkPlugins={[[remarkGfm], [remarkToc, { heading: "Table of contents", maxDepth: 3 }]]}
			components={{ ...components }}
		>
			{content}
		</CustomMarkdown>
	);
}
