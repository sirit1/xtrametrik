'use client'

import { useI18n } from '@/components/i18n/language-provider'

export default function HomeO2o() {
  const { t } = useI18n()

  return (
    <section id="o2o" className="px-4 py-4 sm:px-6">
      <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        {t.homeO2o.line}
      </p>
    </section>
  )
}
