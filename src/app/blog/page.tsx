import { Wrapper } from "@/components/Wrapper"
import getPostMetadata from "@/utils/getPostMetadata"
import PostCard from "@/components/PostCard"
import { Divider } from "@/components/Divider"

export default function Blog() {

    const postMetadata = getPostMetadata('data/blog')

    return (
        <>
            <Heading />
            <Divider />
            <Wrapper>
                {postMetadata.map((post, postIndex) => {
                    return (
                        <PostCard key={postIndex} post={post} />
                    )
                })}
            </Wrapper>
        </>
    )
}

const Heading = () => (
    <div className="py-6 h-[calc(100vh-76px)] lg:h-[calc(100vh-120px)] flex items-center">
        <Wrapper>
            {/* <div className="text-center">
                <h1 className="font-semibold text-6xl">
                    My Blog  📝
                </h1>
                <p className="mt-4 text-4xl py-4">
                    Here you can read any of my 4 articles, you can search keywords below. Enjoy ! 🙂
                </p>
            </div> */}
            <div className="text-left">
                <p className="text-4xl font-light">
                    &quot;Write the kind of story you would like to read. People will give you all sorts of advice about writing, but if you are not writing something you like, no one else will like it either.&quot;
                </p>
                <p className="text-right text-2xl">
                    Meg Cabot
                </p>
            </div>
        </Wrapper>
    </div>
)
