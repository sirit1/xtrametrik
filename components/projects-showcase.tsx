'use client'

import Image from 'next/image'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useI18n } from '@/components/i18n/language-provider'
import { builtWork } from '@/lib/projects'
import { WHATSAPP_URL } from '@/lib/site'

export default function ProjectsShowcase() {
  const { t, locale } = useI18n()
  const c = t.projects
  const services = [
    { title: c.serviceMiniTitle, body: c.serviceMiniBody },
    { title: c.serviceAppTitle, body: c.serviceAppBody },
    { title: c.serviceLandingTitle, body: c.serviceLandingBody },
  ]

  return (
    <>
      <section className="border-b border-border/30 px-4 pt-32 pb-14 sm:px-6 lg:px-8">
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

      <section
        id="lo-que-construimos"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="built-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="built-title"
            className="font-montserrat text-3xl font-black tracking-tight text-balance sm:text-4xl"
          >
            {c.builtTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">{c.builtSub}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {builtWork.map((item) => {
              const card = (
                <>
                  {item.image ? (
                    <div className="mb-5 overflow-hidden rounded-lg bg-[#0B1528]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt?.[locale] ?? item.name}
                        width={640}
                        height={360}
                        className={`mx-auto h-28 w-full p-4 ${
                          item.imageFit === 'contain' ? 'object-contain' : 'object-cover'
                        }`}
                      />
                    </div>
                  ) : null}
                  <h3 className="font-montserrat text-xl font-black leading-tight">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.problem[locale]}
                  </p>
                  {item.url ? (
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      {item.urlLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </p>
                  ) : (
                    <p className="mt-4 text-xs text-foreground/45">{c.noPublicUrl}</p>
                  )}
                </>
              )

              if (item.url) {
                return (
                  <a
                    key={item.slug}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-tap flex flex-col rounded-xl border border-border/60 bg-card p-6"
                  >
                    {card}
                  </a>
                )
              }

              return (
                <article
                  key={item.slug}
                  className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
                >
                  {card}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-24 border-t border-border/30 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="services-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="services-title"
            className="font-montserrat text-3xl font-black tracking-tight text-balance sm:text-4xl"
          >
            {c.servicesTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">{c.servicesSub}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
              >
                <h3 className="font-montserrat text-lg font-black leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {service.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {c.servicesCta}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
