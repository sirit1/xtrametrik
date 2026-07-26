'use client'

import { CheckCircle2, Award, FileCheck } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'

export default function AuthorityHero() {
  const { t } = useI18n()

  const credentials = [
    { icon: Award, title: t.differentiator.c1t, desc: t.differentiator.c1d },
    { icon: CheckCircle2, title: t.differentiator.c2t, desc: t.differentiator.c2d },
    { icon: FileCheck, title: t.differentiator.c3t, desc: t.differentiator.c3d },
  ]

  return (
    <section className="border-t border-border/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl border border-border/40">
          <img
            src="/images/methodology-discussion.png"
            alt={t.differentiator.title}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {t.differentiator.eyebrow}
            </p>
            <h2 className="mb-4 font-montserrat text-3xl font-black text-balance sm:text-4xl">
              {t.differentiator.title}
            </h2>
            <p className="leading-relaxed text-foreground/70">{t.differentiator.sub}</p>
          </div>

          <ul className="flex flex-col gap-4 border-y border-border/40 py-6">
            {credentials.map((item) => (
              <li key={item.title} className="flex gap-3">
                <item.icon
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <p className="mb-0.5 text-sm font-bold">{item.title}</p>
                  <p className="text-sm leading-relaxed text-foreground/60">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <blockquote className="font-semibold italic leading-relaxed text-primary">
            {t.differentiator.quote}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
