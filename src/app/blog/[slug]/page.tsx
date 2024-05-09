import { getPostContent, getPostMetadata } from '@/utils/blog/utils'

import React from 'react'
import matter from 'gray-matter'
import {format, parseISO} from 'date-fns';
import readingTime from 'reading-time'; // to get reading time of the blog post based how many words there are
import {Divider} from '@/components/Divider';
import {MarkdownRenderer} from '@/components/markdown/MarkdownRenderer';
import type {Metadata} from 'next'
import {IBlogPostMetadata} from '@/utils/interfaces';
import {WEBSITE_URL} from '@/constants';

// Generate metadata for SEO
interface IProps {
    params: { slug: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({params}: IProps): Promise<Metadata | undefined> {
    const currentPostMetaData: IBlogPostMetadata = getPostMetadata(params.slug)
    let title = currentPostMetaData.title
    let description = currentPostMetaData.summary
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${WEBSITE_URL}${currentPostMetaData.slug}`,
            images: [`${WEBSITE_URL}/website_thumbnail.png`],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${WEBSITE_URL}/website_thumbnail.png`],
        },
    }
}

interface IBlogProps {
    params: {
        slug: string;
    };
}

const Blog: React.FC<IBlogProps> = (props: IBlogProps) => {

    const slug: string = props.params.slug

    //const post: matter.GrayMatterFile<string> = getPostContent(slug)

    return (
        <main>
            <article>
                <div className="container max-w-screen-md mx-auto pt-16 pb-8 px-8">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full ml-auto mr-auto text-left no-underline">
                            YOLOOOOOOOOOO
                            {/*<div className="text-center">*/}
                            {/*    <h1 className="text-md text-gray-700 py-4">*/}
                            {/*        {format(parseISO(post.data.publishedAt), 'MMMM dd, yyyy')}*/}
                            {/*        {'   -   '}*/}
                            {/*        {readingTime(post.content).text}*/}
                            {/*    </h1>*/}
                            {/*    <h1 className="text-4xl font-semibold pb-14">*/}
                            {/*        {post.data.title}*/}
                            {/*    </h1>*/}
                            {/*</div>*/}
                            {/*<Divider/>*/}
                            {/*<MarkdownRenderer content={post.content}/>*/}

                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Blog;
