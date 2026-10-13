import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectsShowcase from '@/components/projects-showcase'

export const metadata: Metadata = {
  title: 'Lo que construimos: miniapps, apps y landings',
  description:
    'Portafolio de Xtrametrik: Vecino de la Cuadra, Signatio, Café Central, RevelatiO y Cielo Efatá. Miniapps para negocios locales, apps a la medida y landings que convierten.',
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
