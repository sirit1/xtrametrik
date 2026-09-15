import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AilockPiloto from '@/components/ailock-piloto'

export const metadata: Metadata = {
  title: 'Cargar AILock · paquete del piloto',
  description:
    'Descargue el paquete de AILock y cárguelo en Chrome o Edge, en modo de desarrollador, con quien administra el navegador. Aún no está en la tienda.',
  alternates: { canonical: '/piloto' },
}

export default function PilotoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AilockPiloto />
      </main>
      <Footer />
    </div>
  )
}
