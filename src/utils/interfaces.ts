export interface IBlogPostMetadata {
	title: string;
	publishedAt: string;
	summary: string;
	tags: string[];
	seo: any; // Adjust the type according to the structure of seo
	slug: string;
}