"use client"
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/animations/animations";

export default function PostCard(props : any) {
    const { post } = props
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            variants={fadeUpVariant()}
        >
            <Link className="unstyled" href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-2 p-5 mb-5 rounded-lg hover:bg-gray-100">
                    <div className="font-semibold text-xl">{post.title}</div>
                    <p className="font-sm">{post.summary}</p>
                    <div className="w-full text-right">
                    <p className="font-sm text-xs">{format(parseISO(post.publishedAt), "MMMM dd, yyyy")}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}