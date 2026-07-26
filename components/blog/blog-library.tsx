'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import { articles, categories, getContent } from '@/lib/articles'
import { useI18n } from '@/components/i18n/language-provider'
import { LINKEDIN_NEWSLETTER_URL } from '@/lib/site'
import ArticleCard from '@/components/blog/article-card'

export default function BlogLibrary() {
  const { locale, t } = useI18n()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((article) => {
      const content = getContent(article, locale)
      const matchesCategory = category === 'all' || article.category === category
      const matchesQuery =
        !q ||
        content.title.toLowerCase().includes(q) ||
        content.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category, locale])

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            {t.blog.badge}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black font-montserrat mb-4 text-balance">
            {t.blog.indexTitle}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">{t.blog.indexSub}</p>

          <a
            href={LINKEDIN_NEWSLETTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-bold text-sm transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            {t.blog.newsletterCta}
          </a>
        </header>

        <div className="flex flex-col gap-4 mb-8">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.blog.searchPlaceholder}
              aria-label={t.blog.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border/50 rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                category === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground/70 border border-border/50 hover:border-primary/60'
              }`}
            >
              {t.blog.all}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  category === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground/70 border border-border/50 hover:border-primary/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-xs text-foreground/50">
            {t.blog.showing} {filtered.length} {t.blog.of} {articles.length} {t.blog.articles}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-foreground/60">{t.blog.empty}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
