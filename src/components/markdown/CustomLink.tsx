import Link from "next/link";
import React, { ReactNode } from "react";

interface ICustomLinkProps {
    href: string;
    children: ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({ href, children }) => {
    const isInternalLink = href.startsWith('/');

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a className="text-blue-600 dark:text-blue-500 hover:no-underline">
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:no-underline">
            {children}
        </a>
    );
};

export default CustomLink;
