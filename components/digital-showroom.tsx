'use client'

import { ExternalLink, Code2 } from 'lucide-react'

export default function DigitalShowroom() {
  const projects = [
    {
      name: 'Revelatio',
      description: 'Producto IA en vivo de XtraMetrik para estudio profundo de Escrituras. Asistente que interpreta el texto bíblico, estructura el camino evangelístico en tres etapas, y activa la comunidad con campañas automatizadas vía API de WhatsApp.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      url: 'https://revelatiobiblia.vercel.app',
      focus: 'Experiencia de usuario + Escalabilidad'
    },
    {
      name: 'Cielo Efatá - App Evaluación Emocional',
      description: 'App móvil de IA de Cielo Efatá: evaluación emocional científica. Producto aparte de Revelatio (biblia de estudio).',
      tech: ['Next.js 16', 'Supabase', 'Realtime', 'PostgreSQL'],
      url: 'https://cielo-efata-app.vercel.app/',
      focus: 'Backend escalable + Datos en tiempo real'
    },
    {
      name: 'Tachira Protein',
      description: 'Árbol de enlaces optimizado para conversión con landing personalizada, integración de pagos, analytics avanzado y optimización de tráfico.',
      tech: ['Linktree', 'Integraciones', 'Analytics', 'Conversión'],
      url: 'https://linktr.ee/tachiraproteiin',
      focus: 'Optimización de embudo de conversión'
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold font-montserrat mb-6 text-balance">
            Showroom Digital
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Proyectos desarrollados por nuestro equipo. Tecnología de punta aplicada a rentabilidad real.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-card border border-border/30 rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-accent/10 transition-all"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold font-montserrat mb-4 text-white group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 pb-6 border-b border-border/20">
                <p className="text-xs uppercase text-foreground/60 font-semibold mb-3">Stack Tecnológico</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Focus */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{project.focus}</span>
                <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-center">
          <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Tu proyecto necesita arquitectura similar?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Nuestro equipo desarrolla soluciones personalizadas de máxima complejidad técnica. Stack moderno, escalable y orientado a rentabilidad.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-bold transition-all"
          >
            Hablar con Equipo Técnico
          </a>
        </div>
      </div>
    </section>
  )
}
