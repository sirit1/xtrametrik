'use client'

import Link from 'next/link'
import { ArrowRight, FileDown, ShieldAlert } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

export default function HeroPremium() {
  const { t } = useI18n()

  const metrics = [
    { value: '7', label: t.hero.metric1 },
    { value: '100%', label: t.hero.metric2 },
    { value: '47', label: t.hero.metric3 },
    { value: '+320%', label: t.hero.metric4 },
  ]

  return (
    <section className="relative overflow-hidden border-b border-border px-4 pt-32 pb-16 sm:px-6 sm:pt-36">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, var(--foreground) 1px, transparent 1px), linear-gradient(var(--foreground) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>
      <div
        className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5">
          <ShieldAlert className="h-3.5 w-3.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <span className="text-xs font-bold text-primary">{t.hero.badge}</span>
        </span>

        <h1 className="font-montserrat text-4xl font-black leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
          {t.hero.titleTop}{' '}
          <span className="text-primary decoration-primary/40 underline decoration-4 underline-offset-[6px]">
            {t.hero.titleAccent}
          </span>{' '}
          {t.hero.titleEnd}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
          {t.hero.sub}
        </p>

        <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
          <span className="font-bold text-foreground">{t.hero.subStrong}</span>{' '}
          <span className="text-foreground/70">{t.hero.subEnd}</span>
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="#diagnostico"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            {t.hero.cta1}
          </Link>
          <Link
            href="/caso-real"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary sm:w-auto"
          >
            {t.hero.cta2}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <p className="text-xs font-bold text-primary">{t.hero.ctaNote}</p>

        <p className="max-w-xl text-xs leading-relaxed text-foreground/50">{t.hero.proof}</p>

        <dl className="mt-2 grid w-full grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1 bg-card px-4 py-5">
              <dt className="order-2 text-xs leading-snug text-foreground/60">{metric.label}</dt>
              <dd className="order-1 font-montserrat text-2xl font-black text-primary sm:text-3xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
