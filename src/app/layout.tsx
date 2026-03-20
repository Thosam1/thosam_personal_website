import type { Metadata } from 'next';
import './globals.css';
import { FULL_NAME } from '@/constants';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from '@/components/ThemeProvider'
import SmoothScroll from '@/components/SmoothScroll'
import PageTransitionProvider from '@/components/PageTransition'
import InitialLoader from '@/components/InitialLoader'
import { Noto_Serif_Tibetan } from 'next/font/google'

const tibetanFont = Noto_Serif_Tibetan({
	subsets: ['tibetan'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-tibetan',
})

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
		card: 'summary_large_image',
		images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={tibetanFont.variable} suppressHydrationWarning>
		<body>
			<ThemeProvider>
				<PageTransitionProvider>
					<SmoothScroll>
						<InitialLoader/>
						{children}
					</SmoothScroll>
				</PageTransitionProvider>
			</ThemeProvider>
			<SpeedInsights/>
		</body>
		</html>
	);
}
