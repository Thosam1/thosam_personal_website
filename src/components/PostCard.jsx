import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    return (
        <Link className="unstyled" href={`/blog/${post.slug}`}>
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
            </div>
        </Link>
    )
}