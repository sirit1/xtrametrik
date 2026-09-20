import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LegalContent from '@/components/legal/legal-content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Información legal · Privacidad, términos y compliance',
  description:
    'Política de privacidad, términos de servicio, uso de cookies y alcance del marco ISO 42001 de XtraMetrik.',
  alternates: { canonical: '/legal' },
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LegalContent />
      </main>
      <Footer />
    </div>
  )
}
