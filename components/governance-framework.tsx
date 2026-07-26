'use client'

import { Brain, Lightbulb, Target, BarChart3, Shield, Zap } from 'lucide-react'

interface Framework {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  pillars: string[]
}

const frameworks: Framework[] = [
  {
    title: 'Dopamina vs Oxitocina',
    subtitle: 'Equilibrio de Impacto Estratégico',
    description: 'Captura atención rápida a nivel local con contenido de dopamina, diseñado para generar confianza y arraigo con oxitocina.',
    icon: <Brain className="w-8 h-8 text-primary" />,
    pillars: ['Captación Rápida', 'Confianza Local', 'Engagement Sostenible', 'Conversión Medida']
  },
  {
    title: 'Motor Matemático',
    subtitle: 'Nuestra Promesa Operativa',
    description: 'Algoritmo propietario que convierte métricas en decisiones en tiempo real. Cada interacción alimenta el motor.',
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    pillars: ['Predicción Precisa', 'Optimización Dinámica', 'ROI Real', 'Escalabilidad Comprobada']
  },
  {
    title: 'Governance IA Aplicada',
    subtitle: 'Auditoría y Validación Continua',
    description: 'Framework de control que asegura que la IA sirve a tus objetivos, no al revés. Transparencia total en cada decisión.',
    icon: <Shield className="w-8 h-8 text-primary" />,
    pillars: ['Auditoría IA', 'Validación Ética', 'Cumplimiento Normativo', 'Trazabilidad Total']
  }
]

const modules = [
  {
    number: '1',
    title: 'Diagnóstico O2O',
    description: 'Analizamos tu vitrinas digitales y canales offline. Identificamos fricción cognitiva y oportunidades de conversión.'
  },
  {
    number: '2',
    title: 'Arquitectura de Embudo',
    description: 'Diseñamos flujos específicos: B2B (WhatsApp), Retail (Impulso), Distribución (Logística Inteligente).'
  },
  {
    number: '3',
    title: 'Implementación D1',
    description: 'Instalamos motores en 7 días. Combos de contenido, templates de campaña y dashboards operativos listos.'
  },
  {
    number: '4',
    title: 'Monitoreo IA',
    description: 'Sistema de governance que valida cada decisión. Reportes diarios. Optimización continua sin intervención manual.'
  }
]

export default function GovernanceFramework() {
  return (
    <section id="frameworks" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Metodología Patentada</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Frameworks que Transforman Datos en Rentabilidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres pilares operativos + cuatro módulos de implementación = Motor de Conversión comprobado.
          </p>
        </div>

        {/* Frameworks Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {frameworks.map((framework) => (
            <div
              key={framework.title}
              className="bg-gradient-to-br from-white to-secondary/5 border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6">
                {framework.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{framework.title}</h3>
              <p className="text-primary font-semibold text-sm mb-4">{framework.subtitle}</p>

              {/* Description */}
              <p className="text-foreground/80 mb-6">{framework.description}</p>

              {/* Pillars */}
              <div className="space-y-2">
                {framework.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-sm">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Modules */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            4 Módulos de Implementación
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div key={module.number} className="relative">
                {/* Connector Line */}
                {module.number !== '4' && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                )}

                {/* Card */}
                <div className="bg-white border border-border rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold mb-4 mx-auto">
                    {module.number}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{module.title}</h4>
                  <p className="text-sm text-foreground/80">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-12 border-2 border-primary/20 text-center">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Nuestro Diferencial Operativo
          </h3>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
            <span className="font-bold text-primary">Ustedes tienen la identidad local y el flujo físico.</span> Nosotros tenemos el plano estratégico exacto para conectar ambos mundos. No es teoría. Es el playbook que hemos ejecutado 47 veces.
          </p>
          <p className="text-sm text-muted-foreground">
            Chiloé no espera, y su rentabilidad tampoco. Ejecutamos hoy.
          </p>
        </div>
      </div>
    </section>
  )
}
