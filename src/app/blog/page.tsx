import { Wrapper } from "@/components/Wrapper"
import getPostMetadata from "@/utils/getPostMetadata"
import PostCard from "@/components/PostCard"

export default function Blog() {

    const postMetadata = getPostMetadata('data/blog')
    
    return (
        <>
            <Heading />
            {postMetadata.map((post, postIndex) => {
                return (
                    <PostCard key={postIndex} post={post} />
                )
            })}
        </>
    )
}

const Heading = () => (
    <Wrapper>
        <div className="text-center">
            <h1 className="font-semibold text-4xl">
                My Blog  📝
            </h1>
            <p className="mt-4 text-lg text-gray-400 py-4">
                Here you can read any of my 4 articles, you can search keywords below. Enjoy ! 🙂
            </p>
        </div>
    </Wrapper>
)

// const Posts = () => (
   
// )