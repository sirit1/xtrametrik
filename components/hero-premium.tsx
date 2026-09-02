'use client'

import Link from 'next/link'
import { FileDown } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

export default function HeroPremium() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden border-b border-border px-4 pt-28 pb-10 sm:px-6 sm:pt-32 sm:pb-12">
      <div
        className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{t.hero.kicker}</p>

        <h1 className="font-montserrat text-3xl font-black leading-[1.1] text-balance sm:text-5xl">
          {t.hero.titleTop}{' '}
          <span className="text-risk underline decoration-risk/40 decoration-4 underline-offset-[6px]">
            {t.hero.titleAccent}
          </span>{' '}
          {t.hero.titleEnd}
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t.hero.sub}
        </p>

        <Link
          href="#diagnostico"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <FileDown className="h-4 w-4" aria-hidden="true" />
          {t.hero.cta1}
        </Link>
        <p className="text-xs text-muted-foreground">{t.hero.ctaNote}</p>
      </div>
    </section>
  )
}
