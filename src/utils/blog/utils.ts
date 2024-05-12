import fs from 'fs'
import matter from 'gray-matter'
import { IBlogPostMetadata } from '@/utils/interfaces';
import path from 'path';

const BLOG_FOLDER_PATH = "data/blog"

export function getPostMetadata(filename: string): IBlogPostMetadata {
    const matterResult = getPostContent(filename);

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

export function getAllPostsMetadata(blogFolderPath: string = BLOG_FOLDER_PATH): IBlogPostMetadata[] {
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

    // using process.cwd() is needed to make it work locally AND in production !!!
    const content = fs.readFileSync(path.join(process.cwd(), BLOG_FOLDER_PATH, filename), 'utf8');

    return matter(content)
}
