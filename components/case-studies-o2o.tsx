'use client'

import { TrendingUp, CheckCircle2 } from 'lucide-react'

export default function CaseStudiesO2O() {
  const cases = [
    {
      id: 1,
      company: 'Comercial La Isla',
      sector: 'B2B Mayorista',
      problem: 'Bodega saturada y falta de autoridad visual para negociar con transnacionales.',
      solution: 'Análisis de inventario ABC y diseño de Dossier B2B Corporativo con embudo automatizado.',
      results: [
        { metric: '+320%', label: 'Rentabilidad B2B' },
        { metric: 'ROI 7 días', label: 'Retorno de inversión' },
        { metric: '500+ pedidos', label: 'Nuevos pedidos mensuales' }
      ],
      focus: 'Transformación de catálogo pasivo a motor de conversión'
    },
    {
      id: 2,
      company: 'Supermercado Yasman',
      sector: 'Distribución Hiperlocal',
      problem: 'Necesidad de captar un convenio de 1.170 empleados sin tráfico previo.',
      solution: 'Embudo automatizado vía WhatsApp Business + Rebranding corporativo.',
      results: [
        { metric: '+78%', label: 'Eficiencia Logística' },
        { metric: '+200km', label: 'Cobertura Geográfica' },
        { metric: 'Rentable', label: 'Desde el mes 1' }
      ],
      focus: 'Sistematización de ventas corporativas'
    },
    {
      id: 3,
      company: 'Cafetería Las Sisters',
      sector: 'Retail Impulso',
      problem: 'Clientes de paso en centro comercial sin motivación de compra rápida.',
      solution: 'Menú dinámico con gatillos visuales de impulso y atención estratégica "To-Go".',
      results: [
        { metric: '+180%', label: 'Compra Impulsiva' },
        { metric: '+45%', label: 'Tráfico del Mall' },
        { metric: '2.3x', label: 'Conversión Media' }
      ],
      focus: 'Interceptación y conversión de tráfico'
    },
    {
      id: 4,
      company: 'Café Central',
      sector: 'Cross-Selling Estratégico',
      problem: 'Falta de aprovechamiento de negocios contiguos (sinergia con Yasman).',
      solution: 'Estrategia de tráfico cruzado integrada y experiencia compartida.',
      results: [
        { metric: '+156%', label: 'Tráfico Cruzado' },
        { metric: '3x', label: 'Ticket Promedio' },
        { metric: '+200 clientes', label: 'Nuevos diarios' }
      ],
      focus: 'Ecosistema integrado de compra'
    }
  ]

  return (
    <section id="casos" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-y border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold font-montserrat mb-6 text-balance">
            Casos de Éxito <span className="text-primary">O2O Verificados</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Transformaciones reales con empresas del grupo empresarial. Problema → Solución → Rentabilidad medible.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="group p-8 bg-card border border-border/30 rounded-lg hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Company Badge */}
              <div className="mb-6 inline-flex flex-col">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{caseStudy.sector}</span>
                <h3 className="text-2xl font-bold font-montserrat text-white">{caseStudy.company}</h3>
              </div>

              {/* Problem - Solution Flow */}
              <div className="space-y-4 mb-8 pb-8 border-b border-border/20">
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2">Problema</p>
                  <p className="text-foreground/80">{caseStudy.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Solución XtraMetrik</p>
                  <p className="text-foreground text-sm leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-4">Resultados Verificados</p>
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-xs text-foreground/70 leading-tight">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Area */}
              <div className="p-4 bg-primary/5 rounded border border-primary/20 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{caseStudy.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Patrón verificado en todos los casos</h4>
              <p className="text-foreground/80">
                EDUCA al cliente sobre su verdadera oportunidad → FACILITA la operación con automatización → EMPUJA hacia la caja registradora. No es magia, es estrategia O2O comprobada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
