"use client"
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/animations/animations";
import { Suspense } from 'react';
import { IBlogPostMetadata } from '@/utils/interfaces';
import ViewCounter from '@/components/ViewCounter';

interface ICardProps {
    post: IBlogPostMetadata
    views: number
}

export default function PostCard(props : ICardProps) {
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
                <div className="flex flex-col p-5 mb-5 rounded-lg hover:bg-gray-100">
                    <div className="flex flex-row items-center justify-between font-sm text-sm">
                        <p>{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
                        <Suspense>
                            <ViewCounter views={props.views} />
                        </Suspense>
                    </div>
                    <div className="font-semibold py-2 text-2xl">{post.title}</div>
                    <p className="font-sm">{post.summary}</p>
                </div>
            </Link>
        </motion.div>
    )
}
