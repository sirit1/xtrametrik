'use client'

import { useI18n } from '@/components/i18n/language-provider'

export default function HomeAilock() {
  const { t } = useI18n()

  return (
    <section id="ailock" className="scroll-mt-20 border-t border-border/40 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-brand/25 bg-card px-5 py-6 sm:px-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          {t.homeAilock.kicker}
        </p>
        <h2 className="font-montserrat text-2xl font-black">{t.homeAilock.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t.homeAilock.body}
        </p>
      </div>
    </section>
  )
}
