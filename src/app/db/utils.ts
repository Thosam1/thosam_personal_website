export async function getBlogPostViews(slug: string) {
	let viewCount = 0;
	await fetch(`${process.env.WEBSITE_URL}/api/views/${slug}`, {
		method: 'GET',
	}).then(r => r.json().then(data => {
		viewCount = data.total
	}));
	console.log("after getting blog post view count : ", slug, viewCount)
	return viewCount;
}

export async function incrementBlogPostViews(slug: string) {
		let viewCount = 0;
		await fetch(`${process.env.WEBSITE_URL}/api/views/${slug}`, {
			method: 'POST',
		}).then(r => r.json().then(data => {
			viewCount = data.total
		}));
	console.log("after incrementing blog post view count : ", slug, viewCount)
	return viewCount;
}