'use client'

import React, {ReactNode} from "react";
import Link from "next/link";

interface ICustomLinkProps {
    href: string;
    children: ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({href, children}) => {
    const isInternalLink = href.startsWith('/');

    if (isInternalLink) {
        return (
            <Link
                href={href}
                className="text-accent hover:no-underline"
                style={{
                    wordBreak: 'break-word',
                    whiteSpace: 'normal'
                }}
            >
                {children}
            </Link>
        );
    }

    const isTableOfContentLink = href.startsWith('#');

    if (isTableOfContentLink) {
        return (
            <a
                href={href} className="text-text-secondary"
                style={{
                    wordBreak: 'break-word',
                    whiteSpace: 'normal'
                }}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href} target="_blank" rel="noopener noreferrer"
            className="text-accent hover:no-underline"
            style={{
                wordBreak: 'break-word',
                whiteSpace: 'normal'
            }}
        >
            {children}
        </a>
    );
};

export default CustomLink;
