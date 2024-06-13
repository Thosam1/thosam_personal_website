import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import { FULL_NAME } from '@/constants';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { SpeedInsights } from "@vercel/speed-insights/next"

/* Default SEO */
const title = 'Home | Thösam Norlha-Tsang'
const description = 'Hello there 👋, this is my personal website where I showcase my work 😄'
export const metadata: Metadata = {
	title,
	description,
	verification: { google: process.env.GOOGLE_SEO_CODE },
	alternates: {
		canonical: `${process.env.WEBSITE_URL}/`,
	},
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: process.env.WEBSITE_URL,
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body>
		<Navbar/>
		<main>
			{children}
		</main>
		<ScrollToTopButton />
		<Footer />
		<SpeedInsights />
		</body>
		</html>
	);
}
