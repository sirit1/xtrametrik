'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Article } from '@/lib/articles'
import { getContent } from '@/lib/articles'
import { useI18n } from '@/components/i18n/language-provider'

export default function ArticleCard({ article }: { article: Article }) {
  const { locale, t } = useI18n()
  const content = getContent(article, locale)

  return (
    <article className="card-tap flex flex-col h-full p-6 bg-card border border-border/40 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wide text-brand">
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-foreground/50">
          <Clock className="w-3 h-3" aria-hidden="true" />
          {article.readTime} {t.blog.minRead}
        </span>
      </div>

      <h3 className="text-lg font-bold font-montserrat mb-3 leading-snug text-pretty">
        <Link href={`/blog/${article.slug}`} className="hover:text-brand transition-colors">
          {content.title}
        </Link>
      </h3>

      <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-1">{content.excerpt}</p>

      <Link
        href={`/blog/${article.slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
      >
        {t.blog.readMore}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </article>
  )
}
