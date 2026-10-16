import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LegalContent from '@/components/legal/legal-content'

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
        <section id="titular" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-xl font-bold mb-3">Titular del sitio</h2>
          <p className="text-sm text-foreground/70">
            XtraMetrik es un nombre comercial de Alejandro José Sirit Acosta · San Cristóbal, Táchira, Venezuela
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
