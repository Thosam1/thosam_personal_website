import getPostMetadata from "@/utils/getPostMetadata"
import React from 'react'
import fs from 'fs'
import matter from "gray-matter"
import {format, parseISO} from "date-fns";
import readingTime from "reading-time"; // to get reading time of the blog post based how many words there are
import {Wrapper} from "@/components/Wrapper"
import {Divider} from "@/components/Divider";
import {MarkdownRenderer} from "@/components/markdown/MarkdownRenderer";

const blogFolderPath = "data/blog"

function getPostContent(slug: String) {
    const folder = blogFolderPath + '/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')

    return matter(content)
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata(blogFolderPath)
    return posts.map((post) => ({slug: post.slug}))
}

// todo
// metadata for the page
export async function generateMetadata({params, searchParams}: any) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    return {
        title: `Blog ${id.replaceAll('-', ' ')}`
    }
}

interface IBlogProps {
    params: {
        slug: string;
    };
}

const Blog: React.FC<IBlogProps> = (props: IBlogProps) => {

    const slug: string = props.params.slug

    const post: matter.GrayMatterFile<string> = getPostContent(slug)

    return (
        <main>
            <article>
                <Wrapper>
                    <div className="text-center">
                        <h1 className="text-md text-gray-700 py-4">
                            {format(parseISO(post.data.publishedAt), "MMMM dd, yyyy")}
                            {"   -   "}
                            {readingTime(post.content).text}
                        </h1>
                        <h1 className="text-4xl font-semibold pb-14">
                            {post.data.title}
                        </h1>
                    </div>
                    <Divider/>
                    <MarkdownRenderer>
                        {post.content}
                    </MarkdownRenderer>
                </Wrapper>
            </article>
        </main>
    )
}

export default Blog;
