/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */

const siteUrl = process.env.WEBSITE_URL;

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", disallow: "/secret" },
			{ userAgent: "*", allow: "/" }, // rest of website
		],
		additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/sitemap-0.xml`]
	},
	exclude: ["/secret*"], // excluding pages we don't want google indexing, private, etc...
};
