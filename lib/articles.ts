import type { Locale } from '@/lib/i18n/dictionary'
import { articlesCore } from '@/data/articles-core'
import { articlesExtra } from '@/data/articles-extra'

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] }

export type ArticleContent = {
  title: string
  excerpt: string
  takeaways: string[]
  body: Block[]
}

export type Article = {
  slug: string
  category: string
  readTime: number
  date: string
  es: ArticleContent
  en: ArticleContent
}

export const articles: Article[] = [...articlesCore, ...articlesExtra]

export const categories = Array.from(new Set(articles.map((a) => a.category))).sort()

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getContent(article: Article, locale: Locale): ArticleContent {
  return locale === 'en' ? article.en : article.es
}

export function getRelated(slug: string, limit = 3) {
  const current = getArticle(slug)
  if (!current) return []
  const sameCategory = articles.filter((a) => a.slug !== slug && a.category === current.category)
  const rest = articles.filter((a) => a.slug !== slug && a.category !== current.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
