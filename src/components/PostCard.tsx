"use client"
import { TransitionLink } from "@/components/PageTransition";
import { parseISO, format } from "date-fns";
import { useRef, useEffect } from "react";
import { gsap } from "@/animations/gsapAnimations";

export default function PostCard(props: any) {
    const { post } = props
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(el,
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
                    )
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} style={{ opacity: 0 }}>
            <TransitionLink className="unstyled" href={`/blog/${post.slug}`}>
                <div className="flex flex-col p-5 mb-5 rounded-lg hover:bg-bg-highlight">
                    <div className="flex flex-row items-center justify-between font-sm text-sm">
                        <p>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
                    </div>
                    <div className="font-semibold py-2 text-2xl text-text-primary">{post.title}</div>
                    <p className="font-sm">{post.summary}</p>
                </div>
            </TransitionLink>
        </div>
    )
}
