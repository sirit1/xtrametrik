'use client'

import { useState } from 'react'
import { ChevronRight, TrendingUp, Calendar, Target } from 'lucide-react'
import cases from '@/data/cases.json'

export default function NarrativeCases() {
  const [selectedCase, setSelectedCase] = useState(0)
  const caseData = cases.cases[selectedCase]

  return (
    <section id="casos" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Metodología Probada</p>
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat mb-3">
            Transformaciones Reales,
            <span className="text-transparent bg-clip-text gradient-shift" style={{
              backgroundImage: 'linear-gradient(90deg, #00F0FF, #FF00FF, #00F0FF)'
            }}>
              {' '}Verificables
            </span>
          </h2>
          <p className="text-foreground/80 text-base max-w-2xl mx-auto">
            Cada caso: Diagnóstico → Implementación → ROI comprobado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Case selector - Vertical list */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-20">
              {cases.cases.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCase(idx)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    selectedCase === idx
                      ? 'bg-primary/20 border-primary shadow-lg shadow-accent/20'
                      : 'border-border hover:border-primary/50 bg-card'
                  }`}
                >
                  <p className="font-bold text-foreground text-xs">{c.company}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{c.category}</p>
                  <p className="text-primary font-black text-xs mt-1.5">{c.roi}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Case detail - Timeline narrative */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-black font-montserrat text-foreground mb-1">
                  {caseData.company}
                </h3>
                <p className="text-muted-foreground text-sm">{caseData.category}</p>
              </div>

              {/* Timeline - Personalized by case */}
              <div className="space-y-4">
                {/* Phase 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute left-0.5 top-3 w-1 h-20 bg-gradient-to-b from-primary to-transparent" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      <p className="font-bold text-primary text-sm">Fase 1: Diagnóstico (Día 0-2)</p>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      {caseData.id === 'isla' && 'Mapeo de embudo de mayoristas, identificación de fricción en WhatsApp/CRM, análisis de datos de ventas'}
                      {caseData.id === 'yasman' && 'Consolidación de datos de 50 sucursales, análisis de rutas, historial de entregas de 6 meses'}
                      {caseData.id === 'sisters' && 'Análisis de tráfico actual, mapeo de customer journey digital-a-local, definición de interceptación'}
                      {caseData.id === 'cafe' && 'Estudio de comunidad local, análisis de tráfico cruzado, mapeo de oportunidades de retención'}
                      {caseData.id === 'fintech' && 'Auditoría de modelos IA en uso, risk assessment, mapeo de datos sensibles, documentación'}
                      {caseData.id === 'salud' && 'Evaluación de privacidad actual, análisis de compliance, revisión de flujos de datos de pacientes'}
                    </p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute left-0.5 top-3 w-1 h-20 bg-gradient-to-b from-primary to-transparent" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-primary" />
                      <p className="font-bold text-primary text-sm">Fase 2: Implementación (Día {caseData.timeframe === '5 días' ? '1-5' : caseData.timeframe === '7 días' ? '1-7' : caseData.timeframe === '10 días' ? '1-10' : caseData.timeframe === '14 días' ? '1-14' : '1-21'})</p>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      {caseData.id === 'isla' && 'Deployment de chatbot de pedidos, integración con ERP, automatización de confirmaciones'}
                      {caseData.id === 'yasman' && 'Modelo IA de predicción de demanda, optimización de rutas, integración con TMS'}
                      {caseData.id === 'sisters' && 'Activación en redes sociales, setup de landing pages, integración de booking online'}
                      {caseData.id === 'cafe' && 'Setup de programa de retención, integración CRM local, activación de WhatsApp Business'}
                      {caseData.id === 'fintech' && 'Implementación de controles IA, setup de monitoring, documentación regulatoria, training'}
                      {caseData.id === 'salud' && 'Implementación de IA local, configuración de HIPAA, setup de control de fugas'}
                    </p>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute left-0.5 top-3 w-1 h-20 bg-gradient-to-b from-accent to-transparent" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <p className="font-bold text-primary text-sm">Fase 3: Optimización (Semana 2+)</p>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      {caseData.id === 'isla' && 'A/B testing de mensajes, optimización de tiempos de respuesta, escalado a nuevos productos'}
                      {caseData.id === 'yasman' && 'Mejora continua del modelo IA, integración con sistemas legacy, entrenamiento de operadores'}
                      {caseData.id === 'sisters' && 'Análisis de atribución, ajuste de creativos, testing de incentivos y promociones'}
                      {caseData.id === 'cafe' && 'Optimización de programa de retención, análisis de LTV, expansion a eventos/actividades'}
                      {caseData.id === 'fintech' && 'Auditoría externa, certificación ISO 42001, comité mensual de riesgo de IA'}
                      {caseData.id === 'salud' && 'Mejora de precisión diagnóstica, análisis de resultados, ampliación a nuevas especialidades'}
                    </p>
                  </div>
                </div>

                {/* Phase 4 - Results */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 bg-primary rounded-full" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      <p className="font-bold text-primary text-sm">Mes 2+: Motor Operativo</p>
                    </div>
                    <p className="text-foreground/80 text-sm font-semibold">
                      {caseData.id === 'isla' && 'Sistema autónomo generando 100+ pedidos/semana, ticket promedio +45%, ROI de campañas 4.8x'}
                      {caseData.id === 'yasman' && 'Eficiencia operativa +78%, costos de entrega -51%, cobertura geográfica +211%'}
                      {caseData.id === 'sisters' && 'Tráfico a locales +86%, compra impulsiva +144%, conversión digital-a-local +133%'}
                      {caseData.id === 'cafe' && 'Tráfico cruzado +300%, ticket promedio +158%, retención semanal +123%'}
                      {caseData.id === 'fintech' && '100% Compliance ISO 42001, usuarios activos +180%, retención M1 +81%'}
                      {caseData.id === 'salud' && 'Pacientes activos +113%, precisión diagnóstica +8%, 100% HIPAA compliant'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-border">
                {caseData.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground uppercase font-bold mb-2">{metric.label}</p>
                    <div className="space-y-1">
                      <div>
                        <p className="text-xs text-muted-foreground">Antes</p>
                        <p className="font-bold text-foreground text-sm">{metric.before}</p>
                      </div>
                      <div className="h-px bg-border" />
                      <div>
                        <p className="text-xs text-muted-foreground">Después</p>
                        <p className="font-bold text-primary text-sm">{metric.after}</p>
                      </div>
                      <p className="text-primary font-black text-xs pt-1">{metric.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4">
                <p className="text-foreground italic text-sm mb-2">"{caseData.testimonial}"</p>
                <p className="text-xs text-muted-foreground font-bold">{caseData.author}</p>
              </div>

              {/* Solution tags */}
              <div className="flex flex-wrap gap-1.5">
                {caseData.solution.map((sol, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold"
                  >
                    {sol}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
