import type { Metadata } from 'next'
import HomePage from '@/components/home-page'
import {
  HOME_CANONICAL,
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_OG_IMAGE,
  HOME_TITLE,
  homeFaqJsonLd,
  homeOgImages,
} from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  alternates: { canonical: HOME_CANONICAL },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: HOME_CANONICAL,
    siteName: 'XtraMetrik',
    locale: 'es_ES',
    type: 'website',
    images: homeOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <HomePage />
    </>
  )
}
