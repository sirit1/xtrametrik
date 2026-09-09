'use client'

import Link from 'next/link'
import { ShieldCheck, Route, TrendingUp, ArrowRight, Check, MessageCircle } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { WHATSAPP_URL } from '@/lib/site'

const icons = [ShieldCheck, Route, TrendingUp]

export default function EnginesSection() {
  const { t } = useI18n()

  return (
    <section id="motores" className="border-t border-border/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {t.engines.badge}
          </p>
          <h2 className="mb-4 font-montserrat text-3xl font-black text-balance sm:text-4xl">
            {t.engines.title}
          </h2>
          <p className="leading-relaxed text-foreground/70">{t.engines.sub}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.engines.items.map((engine, i) => {
            const Icon = icons[i] ?? ShieldCheck
            const sectionId = i === 0 ? 'blindaje' : i === 1 ? 'conversion-o2o' : undefined
            return (
              <article
                key={engine.name}
                id={sectionId}
                className="card-tap flex scroll-mt-24 flex-col gap-5 rounded-xl border border-border/50 bg-card p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/40">
                    {engine.tag}
                  </span>
                </div>

                <div>
                  <h3 className="mb-2 font-montserrat text-xl font-black">{engine.name}</h3>
                  <p className="text-sm font-semibold leading-snug text-brand">
                    {engine.promise}
                  </p>
                </div>

                <p className="border-l-2 border-destructive/50 pl-3 text-sm leading-relaxed text-foreground/60">
                  {engine.problem}
                </p>

                <div>
                  <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-foreground/45">
                    {engine.coming ? t.engines.todayLabel : t.engines.labelIncludes}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {engine.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-snug text-foreground/80">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {engine.coming ? (
                  <div className="rounded-lg border border-dashed border-brand/40 bg-brand/5 p-4">
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-foreground/45">
                      {t.engines.comingLabel}
                    </p>
                    <p className="mb-2 font-montserrat text-xs font-black uppercase tracking-wider text-brand">
                      {t.engines.comingStatus}
                    </p>
                    <p className="text-sm leading-snug text-foreground/75">{engine.coming}</p>
                  </div>
                ) : null}

                <p className="mt-auto border-t border-border/40 pt-4 font-montserrat text-sm font-black text-brand">
                  {engine.metric}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <Link
            href="#diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.engines.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/55 transition-colors hover:text-brand"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {t.hero.whatsapp}
          </a>
        </div>
      </div>
    </section>
  )
}
