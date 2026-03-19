"use client"
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { useRef } from "react";
import { useGSAP, fadeUp } from "@/animations/gsapAnimations";

export default function PostCard(props: any) {
    const { post } = props
    const ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (ref.current) fadeUp(ref.current, { delay: 0.2 })
    }, { scope: ref })

    return (
        <div ref={ref} style={{ opacity: 0 }}>
            <Link className="unstyled" href={`/blog/${post.slug}`}>
                <div className="flex flex-col p-5 mb-5 rounded-lg hover:bg-bg-highlight">
                    <div className="flex flex-row items-center justify-between font-sm text-sm">
                        <p>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
                    </div>
                    <div className="font-semibold py-2 text-2xl text-text-primary">{post.title}</div>
                    <p className="font-sm">{post.summary}</p>
                </div>
            </Link>
        </div>
    )
}
