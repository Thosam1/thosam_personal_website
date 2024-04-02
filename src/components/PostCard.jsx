import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function PostCard(props) {
    const { post } = props
    return (
        <Link className="unstyled" href={`/blog/${post.slug}`}>
            <div className="flex flex-col gap-2 p-5 mb-5 rounded-lg border hover:bg-gray-100">
                <div className="font-bold">{post.title}</div>
                <p className="font-sm">{post.summary}</p>
                <p className="font-sm">{format(parseISO(post.publishedAt), "MMMM dd, yyyy")}</p>
            </div>
        </Link>
    )
}