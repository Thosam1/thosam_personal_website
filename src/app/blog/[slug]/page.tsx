import { getPostContent, getPostMetadata } from '@/utils/blog/utils'

import matter from 'gray-matter'
import { format, parseISO } from 'date-fns';
import readingTime from 'reading-time'; // to get reading time of the blog post based how many words there are
import { Divider } from '@/components/Divider';
import { MarkdownRenderer } from '@/components/markdown/MarkdownRenderer';
import { Metadata } from 'next'
import { IBlogPostMetadata } from '@/utils/interfaces';
import { FULL_NAME } from '@/constants';
import ViewCounter from '@/components/ViewCounter';
import { Suspense } from 'react';
import { getBlogPostViews, incrementBlogPostViews } from '@/app/db/utils';

// Generate metadata for SEO
//interface IProps {
//	params: { slug: string },
//	searchParams: { [key: string]: string | string[] | undefined }
//}
//
//export async function generateMetadata({ params }: IProps): Promise<Metadata | undefined> {
//	const currentPostMetaData: IBlogPostMetadata = getPostMetadata(params.slug)
//	let title = currentPostMetaData.title
//	let description = currentPostMetaData.summary
//	let url = `${process.env.WEBSITE_URL}/${currentPostMetaData.slug}`
//
//	return {
//		title,
//		description,
//		verification: { google: process.env.GOOGLE_SEO_CODE },
//		alternates: {
//			canonical: url,
//		},
//		openGraph: {
//			title,
//			description,
//			url,
//			type: 'article',
//			siteName: FULL_NAME,
//			images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`],
//		},
//		twitter: {
//			title,
//			description,
//			card: 'summary_large_image',
//			images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`],
//		},
//	}
//}

interface IBlogProps {
	params: {
		slug: string;
	};
}

const Blog: React.FC<IBlogProps> = (props: IBlogProps) => {

	const slug: string = props.params.slug

	getBlogPostViews(slug).then(views => console.log("fetched count : ", views))

	const post: matter.GrayMatterFile<string> = getPostContent(slug)

	return (
		<main>
			<article>
				<div className="container max-w-screen-md mx-auto pt-16 pb-8 px-8">
					<div className="items-center flex flex-wrap">
						<div className="w-full ml-auto mr-auto text-left no-underline">
							<div className="text-center">
								<h1 className="text-md text-gray-700 py-4">
								</h1>
								<h1 className="text-md text-gray-700 py-4">
									{format(parseISO(post.data.publishedAt), 'MMMM dd, yyyy')}
									{'   -   '}
									{readingTime(post.content).text}
									{'   -   '}
									{/*<Suspense>*/}
									{/*	{Views(slug)}*/}
									{/*</Suspense>*/}
								</h1>
								<h1 className="text-4xl font-semibold pb-14">
									{post.data.title}
								</h1>
							</div>
							<Divider/>
							<MarkdownRenderer content={post.content}/>
						</div>
					</div>
				</div>
			</article>
		</main>
	)
}

export default Blog;

//async function Views(slug: string) {
//	let views = await getBlogPostViews(slug);
//	await incrementBlogPostViews(slug);
//	return (
//		<ViewCounter views={views} />
//	);
//}