'use client'

import { BarChart3, Zap, Shield, TrendingUp, Database, Users } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboards Inteligentes',
    description: 'Visualizaciones en tiempo real que se adaptan a tus necesidades de negocio.',
  },
  {
    icon: Zap,
    title: 'Análisis Instantáneo',
    description: 'Procesa millones de datos en segundos con nuestro motor de analytics.',
  },
  {
    icon: Shield,
    title: 'Seguridad Empresarial',
    description: 'Encriptación de nivel militar y cumplimiento de todas las normas internacionales.',
  },
  {
    icon: TrendingUp,
    title: 'Predicciones Precisas',
    description: 'Machine Learning integrado para forecasting y análisis predictivo.',
  },
  {
    icon: Database,
    title: 'Conectividad Total',
    description: 'Integración con más de 500 fuentes de datos y aplicaciones empresariales.',
  },
  {
    icon: Users,
    title: 'Colaboración en Equipo',
    description: 'Comparte insights con tu equipo en tiempo real y toma decisiones juntos.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Características Poderosas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para dominar tu información y tomar decisiones basadas en datos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
