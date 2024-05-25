import { next } from 'sucrase/dist/types/parser/tokenizer';

export async function getBlogPostViews(slug: string) {
	let viewCount = 0;
	await fetch(`/api/views/${slug}`, {
		method: 'GET',
		next: { revalidate: 1 }
	})
		.then(r => r.json())
		.then(data => viewCount = data.total);
	console.log("after getting blog post view count : ", slug, viewCount)
	return viewCount;
}

export async function incrementBlogPostViews(slug: string) {
		let viewCount = 0;
		await fetch(`${process.env.WEBSITE_URL}/api/views/${slug}`, {
			method: 'POST',
			next: { revalidate: 1 }
		})
			.then(r => r.json())
			.then(data => viewCount = data.total);
	console.log("after incrementing blog post view count : ", slug, viewCount)
	return viewCount;
}