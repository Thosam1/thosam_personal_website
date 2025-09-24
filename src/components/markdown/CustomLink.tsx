import React, {ReactNode} from "react";

interface ICustomLinkProps {
    href: string;
    children: ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({href, children}) => {
    const isInternalLink = href.startsWith('/');

    if (isInternalLink) {
        return (
            <a
                href={href}
                className="text-blue-600 hover:no-underline"
                style={{
                    wordBreak: 'break-word',  // Ensures long links wrap to the next line
                    whiteSpace: 'normal'      // Prevents the link from stretching out horizontally
                }}
            >
                {children}
            </a>
        );
    }

    const isTableOfContentLink = href.startsWith('#');

    if (isTableOfContentLink) {
        return (
            <a
                href={href} className="text-slate-700"
                style={{
                    wordBreak: 'break-word',  // Ensures long links wrap to the next line
                    whiteSpace: 'normal'      // Prevents the link from stretching out horizontally
                }}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href} target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:no-underline"
            style={{
                wordBreak: 'break-word',  // Ensures long links wrap to the next line
                whiteSpace: 'normal'      // Prevents the link from stretching out horizontally
            }}
        >
            {children}
        </a>
    );
};

export default CustomLink;
