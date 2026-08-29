import type { Metadata } from 'next'
import HomePage from '@/components/home-page'
import {
  HOME_CANONICAL,
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_TITLE,
  homeFaqJsonLd,
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
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
