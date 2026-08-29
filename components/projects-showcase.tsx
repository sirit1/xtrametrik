'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { projects } from '@/lib/projects'
import XtraMetrikCredit from '@/components/xtrametrik-credit'

export default function ProjectsShowcase() {
  const { t, locale } = useI18n()
  const c = t.projects

  return (
    <>
      <section className="border-b border-border/30 px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            {c.badge}
          </span>
          <h1 className="mt-6 font-montserrat text-4xl font-black tracking-tight text-balance sm:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {c.sub}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Screenshot: real proof, captured from the live site. */}
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block overflow-hidden rounded-2xl border border-border/60 bg-card ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                } ${p.orientation === 'portrait' ? 'mx-auto max-w-xs' : ''}`}
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt[locale]}
                  width={1280}
                  height={800}
                  className={`w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                    p.imageFit === 'contain'
                      ? 'max-h-[420px] bg-[#0B1528] object-contain p-6'
                      : `object-cover object-top ${p.orientation === 'portrait' ? 'max-h-[520px]' : 'h-auto'}`
                  }`}
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur">
                  {c.liveLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-brand/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
                    {c.engines[p.engine]}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.sector[locale]}</span>
                </div>

                <h2 className="mt-4 font-montserrat text-3xl font-black tracking-tight">
                  {p.name}
                </h2>
                {p.subtitle && (
                  <p className="mt-1 text-sm font-semibold text-foreground/55">{p.subtitle[locale]}</p>
                )}
                {p.creditXtraMetrik && <XtraMetrikCredit className="mt-3" />}

                <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                  {p.summary[locale]}
                </p>

                <h3 className="mt-7 text-xs font-bold uppercase tracking-wider text-foreground/70">
                  {c.featuresLabel}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {p.features[locale].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-7 text-xs font-bold uppercase tracking-wider text-foreground/70">
                  {c.stackLabel}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                >
                  {p.urlLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* O2O Method explanation - show if there are O2O projects */}
      {projects.some((p) => p.engine === 'o2o') && (
        <section className="border-t border-border/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-montserrat text-3xl font-black tracking-tight text-balance sm:text-4xl">
                {c.methodTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">{c.methodDesc}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { label: c.o2oStep1Label, desc: c.o2oStep1Desc },
                { label: c.o2oStep2Label, desc: c.o2oStep2Desc },
                { label: c.o2oStep3Label, desc: c.o2oStep3Desc },
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-brand/20 bg-gradient-to-b from-brand/5 to-transparent p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-bold text-brand-foreground">
                      {i + 1}
                    </span>
                    <span className="font-montserrat text-sm font-black uppercase tracking-wider">
                      {step.label}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm font-bold text-brand">{c.o2oProof}</p>
          </div>
        </section>
      )}

      {/* Turning the absence of metrics into a trust argument. */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand/25 bg-brand/5 p-7">
          <h2 className="flex items-center gap-2.5 font-montserrat text-lg font-black">
            <ShieldCheck className="h-5 w-5 flex-shrink-0 text-brand" aria-hidden="true" />
            {c.honestyTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            {c.honestyBody}
          </p>
        </div>
      </section>

      <section className="border-t border-border/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-montserrat text-3xl font-black tracking-tight text-balance sm:text-4xl">
            {c.ctaTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{c.ctaSub}</p>
          <Link
            href="/#diagnostico"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {c.ctaButton}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
