import React, {ReactNode} from "react";

interface ICustomLinkProps {
    href: string;
    children: ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({href, children}) => {
    const isInternalLink = href.startsWith('/');

    if (isInternalLink) {
        return (
            <a href={href} className="text-blue-600 dark:text-blue-500 hover:no-underline">
                {children}
            </a>
        );
    }

    const isTableOfContentLink = href.startsWith('#');

    if (isTableOfContentLink) {
        return (
            <a href={href} className="text-slate-700">
                {children}
            </a>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer"
           className="text-blue-600 dark:text-blue-500 hover:no-underline">
            {children}
        </a>
    );
};

export default CustomLink;
