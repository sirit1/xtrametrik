'use client'

import { Shield, AlertCircle, CheckCircle2, Lock } from 'lucide-react'

export default function GovernanceAIAction() {
  const cases = [
    {
      sector: 'Sector Financiero / Fintech',
      problem: 'Sesgo algorítmico en la concesión de créditos y falta de explicabilidad (Caja Negra)',
      solution: 'Auditoría de algoritmos bajo el marco de Gestión de Riesgos AI RMF del NIST',
      implementation: [
        'Identificación de sesgos en datos de entrenamiento',
        'Establecimiento de comité de ética empresarial',
        'Métricas de transparencia y explicabilidad',
        'Cumplimiento regulatorio GDPR y LGPD'
      ]
    },
    {
      sector: 'Sector Salud / Clínicas',
      problem: 'Fuga de datos de pacientes (PHI) al utilizar modelos de lenguaje generativos de terceros',
      solution: 'Implementación de framework de IA Local/Privada con protocolos de enmascaramiento',
      implementation: [
        'Modelos de IA desplegados on-premise',
        'Enmascaramiento de datos sensibles (PII/PHI)',
        'Políticas de uso aceptable corporativo',
        'Auditoría de conformidad HIPAA y LGPD'
      ]
    }
  ]

  return (
    <section id="riesgo-ia" className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">ISO 42001 • NIST AI RMF • IAPP Framework</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold font-montserrat mb-6 text-balance">
            Manejo de riesgo de IA<br />
            <span className="text-primary">en Acción</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl">
            No es conformidad por conformidad. Es garantizar que la IA genera rentabilidad sin exponerte a multas regulatorias o riesgos reputacionales.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="p-8 bg-card border border-border/30 rounded-lg hover:border-primary/50 transition-all"
            >
              {/* Sector Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  {caseItem.sector}
                </span>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-foreground/60 font-semibold mb-2">Problema Original</p>
                    <p className="text-foreground/90 font-semibold">{caseItem.problem}</p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-6 pb-6 border-b border-border/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-primary font-semibold mb-2">Solución XtraMetrik</p>
                    <p className="text-foreground">{caseItem.solution}</p>
                  </div>
                </div>
              </div>

              {/* Implementation Steps */}
              <div>
                <p className="text-xs uppercase text-primary font-semibold mb-4">Implementación</p>
                <ul className="space-y-3">
                  {caseItem.implementation.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Overview */}
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-primary/30 rounded-lg p-12">
          <h3 className="text-3xl font-bold font-montserrat mb-8 text-white">
            Marco de riesgo de IA de XtraMetrik
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Diagnóstico',
                desc: 'Auditoría completa de riesgos AI y conformidad normativa (ISO 42001)'
              },
              {
                title: 'Diseño',
                desc: 'Arquitectura ética de sistemas con métricas de transparencia'
              },
              {
                title: 'Implementación',
                desc: 'Despliegue seguro con protocolos de privacidad y enmascaramiento'
              },
              {
                title: 'Monitoreo',
                desc: 'Vigilancia continua de sesgos, explicabilidad y compliance'
              }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-white mb-3">{phase.title}</h4>
                <p className="text-sm text-foreground/80">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Awareness */}
        <div className="mt-16 p-8 bg-primary/5 border-l-4 border-primary rounded">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-primary mb-2">¿Qué sucede sin manejo de riesgo de IA?</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>✗ Multas regulatorias por uso no auditable de IA (GDPR: hasta €20M)</li>
                <li>✗ Responsabilidad legal por decisiones sesgadas (créditos, empleabilidad)</li>
                <li>✗ Pérdida de confianza cliente y daño reputacional</li>
                <li>✗ Incapacidad de explicar decisiones críticas (caja negra)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
