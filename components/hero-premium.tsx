'use client'

import Link from 'next/link'
import { ArrowRight, FileDown, MessageCircle, ShieldAlert } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { WHATSAPP_URL } from '@/lib/site'

export default function HeroPremium() {
  const { t } = useI18n()

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
        className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
        <p className="max-w-2xl text-xs font-bold uppercase tracking-[0.18em] text-brand">
          {t.hero.kicker}
        </p>

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

        <Link
          href="#diagnostico"
          className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          <FileDown className="h-4 w-4" aria-hidden="true" />
          {t.hero.cta1}
        </Link>

        <p className="text-xs font-bold text-primary">{t.hero.ctaNote}</p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-foreground/55">
          <a href="#blindaje" className="transition-colors hover:text-brand">
            {t.hero.anchorShield}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-foreground/30 sm:block" aria-hidden="true" />
          <a href="#conversion-o2o" className="transition-colors hover:text-brand">
            {t.hero.anchorO2o}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-foreground/30 sm:block" aria-hidden="true" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {t.hero.whatsapp}
          </a>
        </div>
      </div>
    </section>
  )
}
