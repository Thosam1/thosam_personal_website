import fs from 'fs'
import matter from 'gray-matter'
import { IBlogPostMetadata } from '@/utils/interfaces';

const blogFolderPath = "data/blog"

export function getPostMetadata(filename: string): IBlogPostMetadata {
    // if filename is only the slug
    if(!filename.endsWith('.md')) {
        filename = filename + '.md'
    }
    const fileContents = fs.readFileSync(`${blogFolderPath}/${filename}`, 'utf8')
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
}

export function getAllPostsMetadata(blogFolderPath: string): IBlogPostMetadata[] {
    const folder: string = blogFolderPath + '/'
    const files: string[] = fs.readdirSync(folder)

    // only keeping posts as those with .md ending
    const markdownPosts: string[] = files.filter(file => file.endsWith('.md'))

    // get the file data
    return markdownPosts.map((filename: string): IBlogPostMetadata => getPostMetadata(filename));
}

export function getPostContent(filename: string): matter.GrayMatterFile<string> {
    // if filename is only the slug
    if(!filename.endsWith('.md')) {
        filename = filename + '.md'
    }

    const folder = blogFolderPath + '/'
    const file = folder + filename
    const content = fs.readFileSync(file, 'utf8')
    return matter(content)
}