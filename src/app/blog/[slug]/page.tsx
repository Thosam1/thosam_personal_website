import getPostMetadata from "@/utils/getPostMetadata"
import React from 'react'
import fs from 'fs'
import matter from "gray-matter"
import { parseISO, format } from "date-fns";
import readingTime from "reading-time"; // to get reading time of the blog post based how many words there are

import { Wrapper } from "@/components/Wrapper"
import { FULL_NAME } from "@/constants"
import Markdown from "react-markdown"
import { Divider } from "@/components/Divider";
import Link from "next/link";

const blogFolderPath = "data/blog"

function getPostContent(slug: String) {
    const folder = blogFolderPath + '/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata(blogFolderPath)
    return posts.map((post) => ({ slug: post.slug }))
}

// todo
// metadata for the page
export async function generateMetadata({ params, searchParams }: any) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    return {
        title: `Blog ${id.replaceAll('-', ' ')}`
    }
}

export default function Blog(props: any) {

    const slug = props.params.slug

    const post = getPostContent(slug)
    console.log(post)

    return (
        <>
            <main>
                <article>
                    <Wrapper>

                        <div className="text-center">
                            <h1 className="font-md text-lg text-gray-700 py-4">
                                {format(parseISO(post.data.publishedAt), "MMMM dd, yyyy")}
                                {"   -   "}
                                {readingTime(post.content).text}
                            </h1>
                            <h1 className="text-4xl font-bold pb-14">
                                {post.data.title}
                            </h1>
                        </div>

                        <Divider />

                        <Markdown
                            className="prose max-w-none pt-4" // no need if appears in "Wrapper"
                            components={{
                                h1: ({ node, ...props }) => <h1 className="font-semibold pt-12" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="font-semibold pt-12" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="font-semibold pt-12" {...props} />,
                                a: ({ node, ...props }) => <CustomLink {...props} />
                            }}
                        >
                            {post.content}
                        </Markdown>

                    </Wrapper>
                </article>
            </main>
        </>
    )
}

const SubHeadingIdea = (post: any) =>
    <div className="flex row justify-between items-center pb-6">
        <div className="flex row items-center">
            <img className="w-10 h-10 rounded-full" src="/home/thosam_auth_image.webp"
                alt="Thösam in Fribourg" />
            <div className="pl-2">
                {FULL_NAME}
                {` / `}
                {format(parseISO(post.data.publishedAt), "MMMM dd, yyyy")}
            </div>

        </div>
        <div>
            {readingTime(post.content).text}
        </div>
    </div>

export function CustomLink(props : any){
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/'));

    if (isInternalLink) {
      return (
        <Link href={href}>
          {props.children}
        </Link>
      );
    }

    return <a target="_blank" {...props} />;
  };