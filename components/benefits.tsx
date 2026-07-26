'use client'

import { CheckCircle2 } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    'Aumenta ingresos hasta un 35% con decisiones basadas en datos',
    'Reduce costos operativos con análisis de eficiencia',
    'Mejora el time-to-market en tus decisiones',
    'Detecta oportunidades de negocio antes que la competencia',
    'Automatiza reportes y libera recursos del equipo',
    'ROI comprobado en menos de 3 meses',
  ]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Beneficios que transforman tu negocio
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Miles de empresas confían en XtraMetrik para impulsar su crecimiento y mejorar su rentabilidad.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">+250%</div>
                <p className="text-lg text-foreground font-semibold">
                  Incremento promedio en productividad
                </p>
                <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                  <p>Usuarios activos diarios: 50K+</p>
                  <p>Dashboards creados: 100K+</p>
                  <p>Datos analizados: 500 TB+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
