'use client'

import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react'

export default function MetricsSection() {
  const metrics = [
    {
      icon: Award,
      label: 'Casos Implementados',
      value: '47',
      description: '(2022-2025)',
    },
    {
      icon: TrendingUp,
      label: 'Rentabilidad Generada',
      value: '+5B',
      description: 'en pesos',
    },
    {
      icon: Users,
      label: 'Retención de Clientes',
      value: '92%',
      description: 'Año 1',
    },
    {
      icon: CheckCircle2,
      label: 'ISO 42001 Certified',
      value: '100%',
      description: 'AILock · riesgo de IA',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-black font-montserrat text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-foreground mb-1">{metric.label}</div>
                <div className="text-xs text-foreground/60">{metric.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
