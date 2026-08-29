'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { projects } from '@/lib/projects'
import XtraMetrikCredit from '@/components/xtrametrik-credit'

/** Home proof strip: live work you can open. Instagram is never the primary href. */
const HOME_PROOF_SLUGS = ['revelatio', 'cafe-central', 'cobra'] as const

export default function LiveProjects() {
  const { t, locale } = useI18n()
  const c = t.projects
  const cards = HOME_PROOF_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is (typeof projects)[number] => Boolean(p),
  )

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-border/40 bg-background px-4 py-8 sm:px-6 lg:px-8"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">{c.liveBadge}</p>
          <h2 id="projects-title" className="font-montserrat text-3xl font-black text-balance sm:text-4xl">
            {c.liveTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.liveSub}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((project) => (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-tap group flex flex-col rounded-xl border border-border/60 bg-card p-5"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-brand/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                  {c.engines[project.engine]}
                </span>
                <ExternalLink
                  className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              </div>

              <div className="mb-4 overflow-hidden rounded-lg bg-[#0B1320]">
                <Image
                  src={project.image}
                  alt={project.imageAlt[locale]}
                  width={1024}
                  height={1004}
                  className="mx-auto h-32 w-full object-contain p-3"
                />
              </div>

              <h3 className="font-montserrat text-lg font-black leading-tight transition-colors group-hover:text-brand">
                {project.name}
              </h3>
              {project.subtitle && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-foreground/55">
                  {project.subtitle[locale]}
                </p>
              )}
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {project.summary[locale]}
              </p>
              {project.creditXtraMetrik && <XtraMetrikCredit className="mt-4" />}
              <p className="mt-4 text-sm font-bold text-brand">{c.openProject}</p>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/proyectos" className="text-sm font-bold text-brand hover:underline">
            {c.viewPortfolio}
          </Link>
        </div>
      </div>
    </section>
  )
}
