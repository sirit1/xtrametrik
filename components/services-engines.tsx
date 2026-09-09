'use client'

import { BarChart3, Brain, Shield, Zap } from 'lucide-react'

export default function ServicesEngines() {
  const services = [
    {
      icon: Zap,
      title: 'Gestión de Redes Sociales (Estrategia O2O)',
      description: 'Embudos de conversión Online-to-Offline que transforman engagement en facturación. No buscamos likes, buscamos pedidos B2B.',
      metrics: ['+320% rentabilidad', 'WhatsApp Business integrado', 'Automatización completa']
    },
    {
      icon: BarChart3,
      title: 'Análisis de Datos (Business Intelligence)',
      description: 'Dashboards dinámicos, limpieza de bases de datos y toma de decisiones basada en métricas reales y verificables.',
      metrics: ['Reportes en tiempo real', 'Predicción de demanda', 'Optimización de inventario']
    },
    {
      icon: Brain,
      title: 'Integración de la IA',
      description: 'Automatización de procesos, embudos en WhatsApp Business y agentes conversacionales que cierran pedidos.',
      metrics: ['Chatbots 24/7', 'Automatización de CRM', 'Generación de leads automática']
    },
    {
      icon: Shield,
      title: 'AILock · manejo de riesgo de IA',
      description: 'Marcos normativos para el uso ético, seguro y auditable de la IA en entornos corporativos. Cumplimiento regulatorio garantizado.',
      metrics: ['ISO 42001 certified', 'Auditoría completa', 'Políticas de privacidad']
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold font-montserrat mb-6 text-balance">
            Nuestros 4 Motores de <span className="text-primary">Rentabilidad</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Arquitectura integral que convierte datos en decisiones y decisiones en ingresos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group p-8 bg-card border border-border/30 rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-montserrat mb-4 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="space-y-3 pt-6 border-t border-border/20">
                  {service.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/70 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-primary/10 border border-primary/20 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Quieres ver cómo estos motores generan rentabilidad real?
          </h3>
          <p className="text-foreground/80 mb-6">
            Mira nuestros 4 casos de transformación O2O verificados
          </p>
          <a
            href="#casos"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-bold transition-all"
          >
            Revisar Casos de Éxito
          </a>
        </div>
      </div>
    </section>
  )
}
