'use client'

import { Shield, Lock, AlertCircle, CheckCircle2, Database, Users, Zap, BarChart3 } from 'lucide-react'

export default function AIGovernanceHub() {
  const riskMatrix = [
    { level: 'CRÍTICO', risk: 'Datos compartidos sin autorización', example: 'ChatGPT con info de clientes', color: 'bg-red-500' },
    { level: 'ALTO', risk: 'IA en producción sin auditoría', example: 'Copilot en ventas sin logs', color: 'bg-orange-500' },
    { level: 'MEDIO', risk: 'Procesos sin documentación', example: 'IA usada pero no tracked', color: 'bg-yellow-500' },
  ]

  const xtraMetrikSolution = [
    { icon: Shield, title: 'Central de Control', desc: 'Dashboard único donde ver TODAS las IAs en uso en la empresa' },
    { icon: Lock, title: 'Data Isolation', desc: 'APIs custom que filtran datos sensibles antes de llegar a IA pública' },
    { icon: Database, title: 'Audit Trail Completo', desc: 'Cada consulta logeada, auditada, verificable ante reguladores' },
    { icon: CheckCircle2, title: 'ISO 42001 Certificado', desc: 'Governance de IA que cumple normas internacionales' },
    { icon: Users, title: 'Políticas por Rol', desc: 'Empleados usan IA pero con restricciones por departamento' },
    { icon: Zap, title: 'Alertas en Tiempo Real', desc: 'Detección automática cuando alguien intenta compartir datos críticos' },
  ]

  const beforeAfter = [
    {
      title: 'SIN XtraMetrik (Caos)',
      items: [
        '❌ CFO pide a ChatGPT análisis con datos de clientes',
        '❌ Vendedor usa Copilot con emails confidenciales',
        '❌ Nadie sabe qué IA se está usando',
        '❌ Cero auditoría: regulador = multa segura',
        '❌ Riesgo: IP leak, reputación destruida',
      ],
      color: 'bg-red-50'
    },
    {
      title: 'CON XtraMetrik (Control)',
      items: [
        '✅ CFO solo ve datos públicos filtrados por IA segura',
        '✅ Vendedor: Copilot solo con templates pre-aprobados',
        '✅ Control central: qué, quién, cuándo, dónde',
        '✅ Auditoría lista para reguladores: 0 multas',
        '✅ Rentabilidad: IA rápida + segura + verificable',
      ],
      color: 'bg-green-50'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Hero */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full border border-primary mb-6">
            <AlertCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">EL PROBLEMA MÁS CRÍTICO: IA SIN GOVERNANCE</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black font-montserrat mb-6 text-balance leading-tight">
            Tus empleados están vendiendo tus datos
            <span className="text-primary block mt-2">sin que lo sepas</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-2 leading-relaxed">
            Cada empleado con acceso a ChatGPT, Claude o Copilot es un vector de filtración de datos críticos.
          </p>
          <p className="text-primary font-bold">Reguladores ya están multando: €20M-€50M por data breach via IA.</p>
        </div>

        {/* Risk Matrix */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {riskMatrix.map((item, idx) => (
            <div key={idx} className="p-6 bg-background border border-border/30 rounded-lg">
              <div className={`${item.color} w-3 h-3 rounded-full mb-4`}></div>
              <h3 className="font-black text-lg mb-2">{item.level}</h3>
              <p className="text-foreground/70 text-sm mb-3"><strong>{item.risk}</strong></p>
              <p className="text-xs text-foreground/60 italic">Ej: {item.example}</p>
            </div>
          ))}
        </div>

        {/* XtraMetrik Solution: Before/After */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beforeAfter.map((section, idx) => (
            <div key={idx} className={`${section.color} p-8 rounded-xl border-2 ${idx === 0 ? 'border-red-200' : 'border-green-200'}`}>
              <h3 className={`text-2xl font-black mb-6 ${idx === 0 ? 'text-red-600' : 'text-green-600'}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm flex gap-3 items-start">
                    <span className="flex-shrink-0 mt-0.5">{item.split(' ')[0]}</span>
                    <span className="text-foreground">{item.substring(3)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solution Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-black font-montserrat mb-8 text-center">
            Cómo XtraMetrik Resuelve Esto
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {xtraMetrikSolution.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-black mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-accent/15 via-accent/10 to-primary/15 border-2 border-primary/40 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-black mb-3">Auditoría IA Certificada: GRATIS</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Escaneamos tu empresa. Te mostramos EXACTAMENTE dónde está el riesgo. 1 hora. 0 obligación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-black rounded-lg hover:bg-primary/90 transition-all">
              Reservar Auditoría Gratis
            </button>
            <button className="px-8 py-3 bg-background border-2 border-primary text-foreground font-black rounded-lg hover:bg-background/80 transition-all">
              Ver Casos de Governance
            </button>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/20">
          <div className="text-center">
            <p className="text-3xl font-black text-primary mb-1">850+</p>
            <p className="text-xs text-foreground/60">Empleados auditados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-primary mb-1">100%</p>
            <p className="text-xs text-foreground/60">Compliance ISO 42001</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-primary mb-1">0</p>
            <p className="text-xs text-foreground/60">Multas a clientes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-primary mb-1">4.8/5</p>
            <p className="text-xs text-foreground/60">Calificación regulatoria</p>
          </div>
        </div>
      </div>
    </section>
  )
}
