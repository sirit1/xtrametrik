import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SampleReport from '@/components/sample-report'

export const metadata: Metadata = {
  title: 'Diagnóstico de muestra: fuga de datos por IA sin control',
  description:
    'El problema es real: empleados pegando datos de empresa en ChatGPT. Hoy el entregable es un cuestionario de 5 preguntas. AILock está en construcción. No hay demo de un producto instalado.',
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
