'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { CONTACT_EMAIL } from '@/lib/site'

export default function AilockOffer() {
  const { t } = useI18n()
  const a = t.ailock
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('AILock · información o demo')}`

  const prices = [
    { label: a.priceDiagLabel, value: a.priceDiag, note: a.priceDiagNote },
    { label: a.pricePilotLabel, value: a.pricePilot, note: a.pricePilotNote },
    { label: a.priceSeatLabel, value: a.priceSeat, note: a.priceSeatNote },
  ]

  return (
    <section id="ailock" className="border-t border-border/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{a.badge}</p>
        <h2 className="mb-4 font-montserrat text-3xl font-black sm:text-4xl">{a.name}</h2>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-foreground/70">{a.synopsis}</p>

        <div className="grid gap-6 md:grid-cols-3">
          {prices.map((p) => (
            <article
              key={p.label}
              className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-foreground/45">{p.label}</p>
              <p className="font-montserrat text-3xl font-black text-primary">{p.value}</p>
              <p className="text-sm leading-relaxed text-foreground/70">{p.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#diagnostico"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {a.ctaDemo}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={mail}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            {a.ctaMail}
          </a>
        </div>
      </div>
    </section>
  )
}
