import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectsShowcase from '@/components/projects-showcase'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Proyectos entregados: producto real en producción',
  description:
    'Plataformas y canales digitales construidos por XtraMetrik, con enlace en vivo para comprobarlos. Cielo Efatá y Táchira Protein.',
  alternates: { canonical: '/proyectos' },
}

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  )
}
