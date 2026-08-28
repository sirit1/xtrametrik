'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { projects } from '@/lib/projects'
import XtraMetrikCredit from '@/components/xtrametrik-credit'

/**
 * Home social-proof strip. Matches the live xtrametrik.com section:
 * Revelatio (Bible product) + Café Central. Café Central copy/URL stay as on production.
 */
const CAFE_CENTRAL = {
  slug: 'cafe-central-chile',
  name: 'Café Central - Chile',
  badge: { es: 'Conversión', en: 'Conversion' },
  url: 'https://instagram.com/cafecentralspecialty?igsh=ZG84MWNjeTI3NHJ5',
  summary: {
    es: 'Café Central: Automatización completa de redes sociales (Instagram, Facebook) + WhatsApp Business para captar pedidos 24/7. Gestión de contenido con IA, respuestas automáticas, y seguimiento de conversión de seguidores a clientes.',
    en: 'Café Central: Full social automation (Instagram, Facebook) + WhatsApp Business to capture orders 24/7. AI content, automatic replies, and follower-to-customer conversion tracking.',
  },
} as const

export default function LiveProjects() {
  const { t, locale } = useI18n()
  const c = t.projects
  const revelatio = projects.find((p) => p.slug === 'revelatio')

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-border/40 bg-background px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{c.liveBadge}</p>
          <h2 id="projects-title" className="font-montserrat text-3xl font-black text-balance sm:text-4xl">
            {c.liveTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">{c.liveSub}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {revelatio && (
            <a
              href={revelatio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/60"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-brand/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                  {c.iaBadge}
                </span>
                <ExternalLink
                  className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>

              <div className="mb-4 overflow-hidden rounded-lg bg-[#0B1528]">
                <Image
                  src={revelatio.image}
                  alt={revelatio.imageAlt[locale]}
                  width={1024}
                  height={1004}
                  className="mx-auto h-44 w-full object-contain"
                />
              </div>

              <h3 className="font-montserrat text-lg font-black leading-tight group-hover:text-primary">
                {revelatio.name}
              </h3>
              {revelatio.subtitle && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-foreground/45">
                  {revelatio.subtitle[locale]}
                </p>
              )}
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/60">
                {revelatio.summary[locale]}
              </p>
              <XtraMetrikCredit className="mt-4" />
              <p className="mt-4 text-xs font-semibold text-foreground/45">{c.openProject}</p>
            </a>
          )}

          <a
            href={CAFE_CENTRAL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/60"
          >
            <div className="mb-6 flex items-start justify-between gap-3">
              <span className="rounded-full border border-brand/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                {CAFE_CENTRAL.badge[locale]}
              </span>
              <ExternalLink
                className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-montserrat text-lg font-black leading-tight group-hover:text-primary">
              {CAFE_CENTRAL.name}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/60">
              {CAFE_CENTRAL.summary[locale]}
            </p>
            <p className="mt-5 text-xs font-semibold text-foreground/45">{c.openProject}</p>
          </a>
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
