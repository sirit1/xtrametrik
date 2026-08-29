import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectsShowcase from '@/components/projects-showcase'

export const metadata: Metadata = {
  title: 'Proyectos entregados: producto real en producción',
  description:
    'Trabajo vivo de la casa matriz, con enlace para comprobarlo: Revelatio, Café Central, Cobra, Cielo Efatá App Evaluación Emocional y Táchira Protein.',
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
