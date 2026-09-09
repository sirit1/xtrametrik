'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FileDown } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

/**
 * Repeating questionnaire CTA after the hero. Hidden while #diagnostico is in view
 * so it never becomes a second competing primary in the hero.
 */
export default function StickyDiagnostico() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const form = document.getElementById('diagnostico')

    const update = () => {
      const pastHero = window.scrollY > 480
      let formInView = false
      if (form) {
        const rect = form.getBoundingClientRect()
        formInView = rect.top < window.innerHeight && rect.bottom > 96
      }
      setVisible(pastHero && !formInView)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:justify-end sm:px-6">
      <Link
        href="#diagnostico"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-black/40 transition-opacity hover:opacity-90"
      >
        <FileDown className="h-4 w-4" aria-hidden="true" />
        {t.nav.cta}
      </Link>
    </div>
  )
}
