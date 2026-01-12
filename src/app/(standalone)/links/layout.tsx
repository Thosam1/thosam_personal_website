import type { Metadata } from 'next'
import { FULL_NAME } from '@/constants'

const title = 'Links | Thösam Norlha-Tsang'
const description = 'All my important links in one place'
const url = `${process.env.WEBSITE_URL}/links`

export const metadata: Metadata = {
  title,
  description,
  verification: { google: process.env.GOOGLE_SEO_CODE },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
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

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
