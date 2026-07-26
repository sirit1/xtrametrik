'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Startup',
    price: '99',
    description: 'Para equipos pequeños que comienzan',
    features: [
      '5 usuarios',
      'Hasta 100K registros/mes',
      '3 dashboards personalizados',
      'Integraciones básicas',
      'Soporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Profesional',
    price: '499',
    description: 'Para empresas en crecimiento',
    features: [
      '25 usuarios',
      'Hasta 1M registros/mes',
      'Dashboards ilimitados',
      '50+ integraciones',
      'Soporte prioritario',
      'API completa',
      'Análisis predictivo',
    ],
    highlighted: true,
  },
  {
    name: 'Empresa',
    price: 'Personalizado',
    description: 'Para grandes organizaciones',
    features: [
      'Usuarios ilimitados',
      'Datos sin límite',
      'Infraestructura dedicada',
      'Integraciones personalizadas',
      'Soporte 24/7',
      'Machine Learning avanzado',
      'Consultoría estratégica',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Planes Transparentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para tu negocio. Todas las opciones incluyen 14 días gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 bg-primary text-white shadow-2xl'
                  : 'bg-card text-foreground border border-border hover:border-primary'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? 'text-white/80' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  {plan.price !== 'Personalizado' && (
                    <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                      /mes
                    </span>
                  )}
                </div>

                <a
                  href="#contact"
                  className={`w-full inline-block text-center px-6 py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-primary text-primary hover:bg-opacity-90'
                      : 'bg-primary text-white hover:bg-opacity-90'
                  }`}
                >
                  Comenzar Ahora
                </a>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-primary' : 'text-primary'
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
