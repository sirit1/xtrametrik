'use client'

import { ArrowRight, TrendingUp, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-white">Revolución O2O: De Creadores a Motores de Conversión</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-balance">
          Del Like a la Puerta.<br />
          <span className="text-primary">Del Scroll al Pedido B2B.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl text-balance">
          XtraMetrik no construye catálogos. Construimos <span className="font-bold">Motores de Conversión Online-to-Offline</span> que transforman engagement en rentabilidad inmediata. Mientras compiten en redes, tú estás cerrando pedidos.
        </p>

        {/* Core Philosophy */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12 py-8 border-y border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">+250%</div>
            <div className="text-sm text-white/80">Productividad Operativa</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Día 1</div>
            <div className="text-sm text-white/80">Implementación Lista</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-white/80">Conexiones Integradas</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:opacity-90 text-primary rounded-lg transition-all font-bold text-lg group"
          >
            Ver Portafolio O2O
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#frameworks"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-bold text-lg"
          >
            Auditoría de Governance IA
          </a>
        </div>

        {/* Real Cases */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <p className="text-sm text-white/70 mb-3">Transformando negocios locales en motores de conversión:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white font-semibold">
            <div>Comercial La Isla</div>
            <div>Las Sisters</div>
            <div>Café Central</div>
            <div>Yasman</div>
          </div>
        </div>
      </div>
    </section>
  )
}
