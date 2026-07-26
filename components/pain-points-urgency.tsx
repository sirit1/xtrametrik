'use client'

import Link from 'next/link'
import { Lock, BarChart3, Scale, ArrowRight } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

const icons = [Lock, BarChart3, Scale]

export default function PainPointsUrgency() {
  const { t } = useI18n()

  return (
    <section id="riesgo" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            {t.pain.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat mb-4 text-balance">
            {t.pain.title}
          </h2>
          <p className="text-foreground/70 leading-relaxed">{t.pain.sub}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {t.pain.items.map((item, i) => {
            const Icon = icons[i] ?? Lock
            const featured = i === 0
            return (
              <article
                key={item.title}
                className={`flex flex-col gap-4 p-6 rounded-xl border bg-card ${
                  featured ? 'border-primary/60' : 'border-border/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold font-montserrat leading-snug text-balance">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">{item.problem}</p>

                <div className="flex flex-col gap-3 pt-4 mt-auto border-t border-border/40 text-sm">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-foreground/45 mb-1">
                      {t.pain.labelImpact}
                    </p>
                    <p className="text-foreground/80 leading-snug">{item.impact}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-foreground/45 mb-1">
                      {t.pain.labelSolution}
                    </p>
                    <p className="text-foreground/80 leading-snug">{item.solution}</p>
                  </div>
                  <p className="font-bold text-primary">{item.metric}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-card border-l-2 border-primary rounded-lg">
          <p className="text-sm text-foreground/80 leading-relaxed flex-1">{t.pain.ctaText}</p>
          <Link
            href="#diagnostico"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-bold text-sm transition-colors flex-shrink-0"
          >
            {t.pain.ctaButton}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
