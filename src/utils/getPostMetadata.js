import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath) {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)

        // object that is passed on
        return {
            title: matterResult.data.title,
            publishedAt: matterResult.data.publishedAt,
            summary: matterResult.data.summary,
            tags: matterResult.data.tags,
            seo: matterResult.data.seo,
            slug: filename.replace('.md', '')
        }
    })
    return posts
}