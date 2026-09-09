'use client'

import { ArrowRight, Zap, MessageCircle, TrendingUp, Percent, Shield } from 'lucide-react'

interface CaseStudy {
  name: string
  type: string
  challenge: string
  solution: string
  results: string[]
  icon: React.ReactNode
}

const cases: CaseStudy[] = [
  {
    name: 'Comercial La Isla',
    type: 'B2B Mayorista',
    challenge: 'Catálogo pasivo en redes sin conexión con WhatsApp Business para pedidos de volumen',
    solution: 'Motor O2O con embudo directo a WhatsApp + Boletín B2B operativo + Combos de impulso',
    results: ['+320% en pedidos', 'ROI 7 días', 'WhatsApp como canal prioritario'],
    icon: <MessageCircle className="w-6 h-6 text-primary" />
  },
  {
    name: 'Las Sisters + Café Central',
    type: 'Retail Impulso',
    challenge: 'Vitrinas digitales frías, sin captura de compra por impulso en punto de venta',
    solution: 'Contenido To-Go + Interceptación mall + Combos de horario peak',
    results: ['+180% en compra impulsiva', 'Tráfico mall +45%', 'Conversión +2.3x'],
    icon: <TrendingUp className="w-6 h-6 text-primary" />
  },
  {
    name: 'Yasman',
    type: 'Distribución Hiperlocal',
    challenge: 'Dispersión geográfica, falta de coordinación entre vendedores, sin optimización de rutas',
    solution: 'Dashboard operativo + Modelo de distribución inteligente + AILock',
    results: ['Eficiencia logística +78%', 'Cobertura +200km', 'Rentabilidad sostenible'],
    icon: <Percent className="w-6 h-6 text-primary" />
  }
]

export default function PortfolioO2O() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Casos Reales</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Negocios Locales con Identidad Global
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No son casos de estudio. Son transformaciones reales donde el engagement se convirtió en rentabilidad medible.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.name}
              className="group bg-white border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon & Type */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {caseStudy.icon}
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {caseStudy.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{caseStudy.name}</h3>

              {/* Challenge */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  El Problema
                </p>
                <p className="text-foreground/80">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  La Estrategia
                </p>
                <p className="text-foreground">{caseStudy.solution}</p>
              </div>

              {/* Results */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Resultados
                </p>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="w-full mt-6 pt-6 border-t border-border text-primary font-bold hover:text-primary/80 transition-colors group/btn flex items-center justify-center gap-2">
                Ver Caso Completo
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Philosophy Row */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-3">EDUCA</h4>
              <p className="text-foreground/80">Al Cliente sobre su oportunidad real en el mercado local</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">FACILITA</h4>
              <p className="text-foreground/80">La Vida Operativa con automatización de procesos B2B</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">EMPUJA</h4>
              <p className="text-foreground/80">A la Caja Registradora con motores de conversión medibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
