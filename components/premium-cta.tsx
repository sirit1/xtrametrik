'use client'

import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

export default function PremiumCTA() {
  const { t } = useI18n()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-black font-montserrat text-balance leading-tight">
          {t.finalCta.title}
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">{t.finalCta.sub}</p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="#diagnostico"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-bold transition-colors group"
          >
            {t.finalCta.button}
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border hover:border-primary text-foreground hover:text-primary rounded-lg font-bold transition-colors"
          >
            {t.finalCta.secondary}
          </Link>
        </div>

        <div className="flex gap-3 mt-4 p-6 bg-card border border-primary/25 rounded-xl text-left">
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-foreground/80 leading-relaxed">
            <span className="font-bold text-primary">{t.finalCta.guaranteeLabel}</span>{' '}
            {t.finalCta.guarantee}
          </p>
        </div>
      </div>
    </section>
  )
}
