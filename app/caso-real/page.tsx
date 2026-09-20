import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SampleReport from '@/components/sample-report'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Caso real: cómo blindamos una fintech de 500 empleados en 7 días',
  description:
    'Diagnóstico real anonimizado: problema, diagnóstico y solución. €2.1M de exposición a sanción evitada y control centralizado de IA operativo en 5 días.',
  alternates: { canonical: '/caso-real' },
}

export default function CasoRealPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <SampleReport />
      </main>
      <Footer />
    </div>
  )
}
