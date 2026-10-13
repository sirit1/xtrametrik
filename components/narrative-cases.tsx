'use client'

import { ArrowUpRight } from 'lucide-react'
import casesData from '@/data/cases.json'

export default function NarrativeCases() {
  const items = casesData.cases

  if (items.length === 0) return null

  return (
    <section id="casos" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-montserrat text-3xl font-black text-balance sm:text-4xl">
            Lo que construimos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trabajo de la casa. Si hay enlace, ábrelo. Sin testimonios ni cifras que no podamos demostrar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const body = (
              <>
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand">{item.kind}</p>
                <h3 className="mt-2 font-montserrat text-xl font-black">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.problem}</p>
                {'url' in item && item.url ? (
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                    {item.url.replace(/^https?:\/\//, '')}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </p>
                ) : (
                  <p className="mt-4 text-xs text-foreground/45">Sin enlace público todavía</p>
                )}
              </>
            )

            if ('url' in item && item.url) {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-tap flex flex-col rounded-xl border border-border/60 bg-card p-6"
                >
                  {body}
                </a>
              )
            }

            return (
              <article
                key={item.id}
                className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
              >
                {body}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
