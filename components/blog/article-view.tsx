'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import { getArticle, getContent, getRelated } from '@/lib/articles'
import { useI18n } from '@/components/i18n/language-provider'
import { LINKEDIN_NEWSLETTER_URL, SITE_URL, linkedinShareUrl } from '@/lib/site'
import ArticleCard from '@/components/blog/article-card'

export default function ArticleView({ slug }: { slug: string }) {
  const { locale, t } = useI18n()
  const article = getArticle(slug)

  if (!article) return null

  const content = getContent(article, locale)
  const related = getRelated(slug)
  const shareUrl = linkedinShareUrl(`${SITE_URL}/blog/${slug}`)

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          {t.article.back}
        </Link>

        <header className="mb-10 pb-8 border-b border-border/40">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] font-bold uppercase tracking-wide">
            <span className="text-primary">{article.category}</span>
            <span className="flex items-center gap-1 text-foreground/50">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {article.readTime} {t.blog.minRead}
            </span>
            <span className="text-foreground/50">{article.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat leading-tight mb-5 text-balance">
            {content.title}
          </h1>

          <p className="text-lg text-foreground/70 leading-relaxed mb-6">{content.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-foreground/60">{t.article.author}</span>
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-bold transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              {t.article.share}
            </a>
          </div>
        </header>

        <section className="mb-10 p-6 bg-card border border-primary/30 rounded-xl">
          <h2 className="text-sm font-black uppercase tracking-wide text-primary mb-4">
            {t.article.keyTakeaways}
          </h2>
          <ul className="flex flex-col gap-3">
            {content.takeaways.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-6">
          {content.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold font-montserrat mt-6 text-balance leading-snug"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={i}
                  className="pl-5 border-l-2 border-primary italic text-foreground/85 leading-relaxed"
                >
                  {block.text}
                </blockquote>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="flex flex-col gap-2.5 pl-1">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-foreground/80 leading-relaxed">
                      <span className="text-primary font-bold flex-shrink-0" aria-hidden="true">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-foreground/80 leading-relaxed">
                {block.text}
              </p>
            )
          })}
        </div>

        <section className="mt-14 p-7 bg-card border border-border/40 rounded-xl flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold font-montserrat mb-2 text-balance">
              {t.article.ctaTitle}
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed">{t.article.ctaSub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#diagnostico"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-bold text-sm transition-colors"
            >
              {t.article.ctaButton}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={LINKEDIN_NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground hover:border-primary hover:text-primary rounded-lg font-bold text-sm transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              {t.article.newsletterButton}
            </a>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold font-montserrat mb-6">{t.article.related}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
