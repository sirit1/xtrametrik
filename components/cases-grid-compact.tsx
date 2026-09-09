'use client'

import Link from 'next/link'
import { Landmark, Building2, TrendingUp, ArrowRight } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

const icons = [Landmark, Building2, TrendingUp]

export default function CasesGridCompact() {
  const { t } = useI18n()

  return (
    <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-3">
            {t.cases.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat mb-4 text-balance">
            {t.cases.title}
          </h2>
          <p className="text-foreground/70 leading-relaxed">{t.cases.sub}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {t.cases.items.map((item, i) => {
            const Icon = icons[i] ?? Landmark
            return (
              <article
                key={item.title}
                className="card-tap flex flex-col gap-4 p-6 bg-background border border-border/40 rounded-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className="h-5 w-5 flex-shrink-0 text-brand" aria-hidden="true" />
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold leading-snug">{item.title}</h3>

                <div className="pb-4 border-b border-border/40">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-foreground/45 mb-1">
                    {t.cases.labelChallenge}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.challenge}</p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-foreground/45 mb-1">
                    {t.cases.labelResult}
                  </p>
                  <p className="text-sm font-semibold leading-snug">{item.result}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-border/40">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-foreground/45 mb-1">
                    {t.cases.labelRoi}
                  </p>
                  <p className="text-sm font-bold text-brand leading-snug">{item.roi}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-lg border border-brand/40 px-5 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand/10"
          >
            {t.projects.badge}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-brand text-foreground hover:text-brand rounded-lg font-bold text-sm transition-colors"
          >
            {t.cases.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
