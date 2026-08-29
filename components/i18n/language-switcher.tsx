'use client'

import { Globe } from 'lucide-react'
import { useI18n } from './language-provider'
import { locales } from '@/lib/i18n/dictionary'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      className={`flex items-center gap-1 rounded-lg border border-border/50 bg-card/60 p-1 ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      <Globe className="mx-1 h-3.5 w-3.5 text-foreground/50" aria-hidden="true" />
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded px-2 py-1 text-xs font-bold uppercase transition-colors ${
            locale === code
              ? 'bg-brand text-brand-foreground'
              : 'text-foreground/60 hover:text-foreground'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
