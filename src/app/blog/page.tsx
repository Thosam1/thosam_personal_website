import { Wrapper } from '@/components/Wrapper'
import { getAllPostsMetadata } from '@/utils/blog/utils'
import PostCard from '@/components/PostCard'
import { Divider } from '@/components/Divider'
import type { Metadata } from 'next';
import { FULL_NAME } from '@/constants';
import Newsletter from "@/components/Newsletter";

const title = 'Blog | Thösam Norlha-Tsang'
const description = 'Hello there 👋, this is my blog where I write articles 😄'
const url = `${process.env.WEBSITE_URL}/blog`;
export const metadata: Metadata = {
	title,
	description,
	verification: { google: process.env.GOOGLE_SEO_CODE },
	alternates: {
		canonical: url,
	},
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url,
		siteName: FULL_NAME,
		title,
		description,
		images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
	},
	twitter: {
		title,
		description,
		card: 'summary_large_image', // summary_large_image
		images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
	},
}

export default function Blog() {

	const postMetadata = getAllPostsMetadata()

	return (
		<>
			<Heading/>
			<Divider/>
			<div className="container max-w-screen-md mx-auto pt-16 pb-8 px-8">
				<div className="items-center flex flex-wrap">
					<div className="w-full ml-auto mr-auto text-left no-underline">

						{/*<Wrapper>*/}
						{/*<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-0 gap-x-4">*/}
						{postMetadata
							.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
							.map((post) => {
							return (
								<PostCard key={post.slug} post={post}/>
							)
						})}
						{/*</div>*/}
						{/*</Wrapper>*/}
					</div>
				</div>
			</div>

			<Newsletter />
		</>
	)
}

const Heading = () => (
	<div className="py-6 flex items-center">
		<Wrapper>
			<div className="text-center">
				<h1 className="font-semibold text-4xl">
					My Blog 📝
				</h1>
				<p className="mt-4 text-2xl py-4">
					Here you can read my articles, enjoy ! 🙂
				</p>
			</div>
		</Wrapper>
	</div>
)

// const Heading = () => (
//     <div className="py-6 h-[calc(100vh-76px)] lg:h-[calc(100vh-120px)] flex items-center">
//         <Wrapper>
//             {/* <div className="text-center">
//                 <h1 className="font-semibold text-6xl">
//                     My Blog  📝
//                 </h1>
//                 <p className="mt-4 text-4xl py-4">
//                     Here you can read any of my 4 articles, you can search keywords below. Enjoy ! 🙂
//                 </p>
//             </div> */}
//
//             <div className="text-left">
//                 <p className="text-4xl font-light">
//                     &quot;Write the kind of story you would like to read. People will give you all sorts of advice about
//                     writing, but if you are not writing something you like, no one else will like it either.&quot;
//                 </p>
//                 <p className="text-right text-2xl">
//                     Meg Cabot
//                 </p>
//             </div>
//         </Wrapper>
//     </div>
// )
