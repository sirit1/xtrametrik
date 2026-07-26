'use client'

import { AlertTriangle, CheckCircle2, X, Check } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

export default function RiskMatrixCompact() {
  const { t } = useI18n()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat mb-4 text-balance">
            {t.risk.title}
          </h2>
          <p className="text-foreground/70 leading-relaxed">{t.risk.sub}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col p-7 bg-card border border-destructive/40 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" aria-hidden="true" />
              <h3 className="text-lg font-black font-montserrat">{t.risk.beforeTitle}</h3>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
              {t.risk.before.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/75 leading-relaxed">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-border/40">
              <p className="text-xs font-bold text-destructive mb-2">{t.risk.riskCritical}</p>
              <div className="w-full bg-destructive/15 rounded-full h-1.5" role="presentation">
                <div className="bg-destructive h-1.5 rounded-full" style={{ width: '95%' }} />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-7 bg-card border border-primary/50 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
              <h3 className="text-lg font-black font-montserrat">{t.risk.afterTitle}</h3>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
              {t.risk.after.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/75 leading-relaxed">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-border/40">
              <p className="text-xs font-bold text-primary mb-2">{t.risk.riskControlled}</p>
              <div className="w-full bg-primary/15 rounded-full h-1.5" role="presentation">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '8%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 p-5 bg-primary/5 border border-primary/25 rounded-lg text-center">
          <p className="text-sm text-foreground/60">{t.risk.statLabel}:</p>
          <p className="text-2xl font-black font-montserrat text-primary">{t.risk.statValue}</p>
          <p className="text-sm text-foreground/60">{t.risk.statNote}</p>
        </div>
      </div>
    </section>
  )
}
