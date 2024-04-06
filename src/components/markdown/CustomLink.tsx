import Link from "next/link";

export function CustomLink(props : any){
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/'));

    if (isInternalLink) {
      return (
        <Link href={href} className="text-blue-600 dark:text-blue-500 hover:no-underline">
          {props.children}
        </Link>
      );
    }

    return <a target="_blank" {...props} className="text-blue-600 dark:text-blue-500" />;
  };