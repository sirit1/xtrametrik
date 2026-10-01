import type { Metadata } from 'next'
import DiagnosticoRiesgoIaPage from '@/components/diagnostico-riesgo-ia-page'
import {
  DIAGNOSTICO_CANONICAL,
  DIAGNOSTICO_DESCRIPTION,
  DIAGNOSTICO_TITLE,
  HOME_OG_IMAGE,
  diagnosticoFaqJsonLd,
  homeOgImages,
} from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: DIAGNOSTICO_TITLE },
  description: DIAGNOSTICO_DESCRIPTION,
  alternates: { canonical: DIAGNOSTICO_CANONICAL },
  openGraph: {
    title: DIAGNOSTICO_TITLE,
    description: DIAGNOSTICO_DESCRIPTION,
    url: DIAGNOSTICO_CANONICAL,
    siteName: 'XtraMetrik',
    locale: 'es_ES',
    type: 'website',
    images: homeOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: DIAGNOSTICO_TITLE,
    description: DIAGNOSTICO_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
}

export default function DiagnosticoRiesgoIa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticoFaqJsonLd) }}
      />
      <DiagnosticoRiesgoIaPage />
    </>
  )
}
