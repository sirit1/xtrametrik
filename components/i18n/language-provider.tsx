'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { dictionaries, type Dict, type Locale } from '@/lib/i18n/dictionary'

type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dict
}

const I18nContext = createContext<I18nValue | null>(null)

const STORAGE_KEY = 'xtrametrik-locale'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    // Spanish is the default. EN only after an explicit toggle (stored),
    // never from the browser locale — that leaked mixed ES/EN on the live site.
    if (stored === 'en' || stored === 'es') {
      setLocaleState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider')
  return ctx
}
