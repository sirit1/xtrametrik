'use client'

import Link from 'next/link'
import { Search, Lock, BadgeCheck, ArrowRight } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

const icons = [Search, Lock, BadgeCheck]

export default function MethodSteps() {
  const { t } = useI18n()

  return (
    <section
      id="pasos"
      className="border-t border-border/30 bg-card/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {t.containment.badge}
          </p>
          <h2 className="mb-4 font-montserrat text-3xl font-black text-balance sm:text-4xl">
            {t.containment.title}
          </h2>
          <p className="leading-relaxed text-foreground/70">{t.containment.sub}</p>
        </div>

        <ol className="mb-10 grid gap-6 md:grid-cols-3">
          {t.containment.steps.map((step, i) => {
            const Icon = icons[i] ?? Search
            return (
              <li
                key={step.title}
                className="card-tap relative flex flex-col gap-4 rounded-xl border border-border/40 bg-background p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-4xl font-black leading-none text-brand/25">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground/50">
                    {step.duration}
                  </span>
                </div>

                <div>
                  <Icon className="mb-3 h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="mb-1 font-montserrat text-lg font-black">{step.title}</h3>
                  <p className="text-sm font-semibold text-brand">{step.subtitle}</p>
                </div>

                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>

                <div className="mt-auto border-t border-border/40 pt-4">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-foreground/45">
                    {t.containment.labelDeliverable}
                  </p>
                  <p className="text-sm font-semibold leading-snug text-foreground/90">
                    {step.deliverable}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="flex-1 text-sm leading-relaxed text-foreground/60">{t.containment.note}</p>
          <Link
            href="#diagnostico"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.containment.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
