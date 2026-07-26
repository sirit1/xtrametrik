'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, TrendingUp, Clock, Award } from 'lucide-react'
import casesData from '@/data/cases.json'

export default function CaseStudyViewer() {
  const [activeCase, setActiveCase] = useState(0)
  const [sliderPos, setSliderPos] = useState(50)
  const { cases } = casesData

  const currentCase = cases[activeCase]

  const handleSlider = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPos = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(0, Math.min(100, newPos)))
  }

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length)
    setSliderPos(50)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length)
    setSliderPos(50)
  }

  return (
    <section id="casos" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">6 Casos Verificados</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-foreground mb-4">
            Casos de Estudio O2O
          </h2>
          <p className="text-lg text-foreground/70">
            Transformaciones reales. Números verificables. Implementaciones completadas.
          </p>
        </div>

        {/* Main Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Case Thumbnails */}
          <div className="space-y-2">
            {cases.map((caseItem, idx) => (
              <button
                key={caseItem.id}
                onClick={() => {
                  setActiveCase(idx)
                  setSliderPos(50)
                }}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeCase === idx
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-card/80 text-foreground'
                }`}
              >
                <div className="font-bold text-sm">{caseItem.company}</div>
                <div className={`text-xs ${activeCase === idx ? 'text-primary-foreground/80' : 'text-foreground/60'}`}>
                  {caseItem.category}
                </div>
              </button>
            ))}
          </div>

          {/* Main Display */}
          <div className="lg:col-span-2">
            {/* Before/After Slider */}
            <div
              className="relative h-80 rounded-xl overflow-hidden mb-6 cursor-col-resize group"
              onClick={handleSlider}
            >
              {/* Before Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-card">
                <img
                  src={currentCase.images.hero}
                  alt="Before"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-black text-foreground/40">ANTES</div>
                    <div className="text-2xl font-bold text-primary/40">
                      ${(currentCase.beforeAfter.before / 1000).toFixed(0)}K
                    </div>
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 pointer-events-none">
                <img
                  src={currentCase.images.dashboard}
                  alt="After"
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary hover:w-2 transition-all"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full">
                  <ChevronLeft className="w-4 h-4 inline mr-1" />
                  <ChevronRight className="w-4 h-4 inline" />
                </div>
              </div>

              {/* After Label */}
              <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full">
                <div className="text-xs font-bold text-primary-foreground">DESPUÉS</div>
              </div>
            </div>

            {/* Case Details */}
            <div className="bg-card rounded-xl p-6 border border-border/30">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-xs text-foreground/60 mb-1">ROI</div>
                  <div className="text-2xl font-black text-primary">{currentCase.roi}</div>
                </div>
                <div>
                  <div className="text-xs text-foreground/60 mb-1">Timeframe</div>
                  <div className="text-lg font-bold text-foreground">{currentCase.timeframe}</div>
                </div>
                <div>
                  <div className="text-xs text-foreground/60 mb-1">Generado</div>
                  <div className="text-lg font-bold text-foreground">
                    ${((currentCase.beforeAfter.after - currentCase.beforeAfter.before) / 1000).toFixed(0)}K
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3">Métricas Clave:</h3>
                <div className="space-y-2">
                  {currentCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-border/20">
                      <span className="text-sm text-foreground/80">{metric.label}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-primary">{metric.after}</div>
                        <div className="text-xs text-foreground/60">{metric.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-6">
                "{currentCase.testimonial}"
                <div className="mt-2 text-xs font-semibold text-foreground/60">— {currentCase.author}</div>
              </blockquote>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 font-bold rounded-lg transition-all"
              >
                Ver Implementación
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevCase}
            className="p-2 hover:bg-primary/10 rounded-full transition-all"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <div className="flex gap-2">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCase(idx)
                  setSliderPos(50)
                }}
                className={`h-2 rounded-full transition-all ${
                  activeCase === idx ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to case ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextCase}
            className="p-2 hover:bg-primary/10 rounded-full transition-all"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20">
          <div className="text-center">
            <div className="text-3xl font-black text-primary">47</div>
            <div className="text-sm text-foreground/70">Casos implementados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary">+5B</div>
            <div className="text-sm text-foreground/70">En rentabilidad generada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-primary">92%</div>
            <div className="text-sm text-foreground/70">Retención de clientes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
