'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

/** Compact home pointer to the portfolio. The short home stays short. */
export default function LiveProjects() {
  const { t } = useI18n()
  const c = t.projects

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-border/40 px-4 py-6 sm:px-6"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
        <h2 id="projects-title" className="font-montserrat text-base font-bold text-balance sm:text-lg">
          {c.homeStrip}
        </h2>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
        >
          {c.homeStripLink}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
