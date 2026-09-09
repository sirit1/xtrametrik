'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import { articles } from '@/lib/articles'
import { useI18n } from '@/components/i18n/language-provider'
import { LINKEDIN_NEWSLETTER_URL } from '@/lib/site'
import ArticleCard from '@/components/blog/article-card'

export default function BlogSection() {
  const { t } = useI18n()
  const featured = articles.slice(0, 3)

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-3">
              {t.blog.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black font-montserrat mb-2 text-balance">
              {t.blog.title}
            </h2>
            <p className="text-brand font-bold mb-3">{t.blog.titleAccent}</p>
            <p className="text-foreground/70 leading-relaxed">{t.blog.sub}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-brand/40 text-brand hover:bg-brand/10 rounded-lg font-bold text-sm transition-colors"
            >
              {t.blog.viewAll}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={LINKEDIN_NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border text-foreground hover:border-brand hover:text-brand rounded-lg font-bold text-sm transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              {t.blog.newsletterCta}
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
