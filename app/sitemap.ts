import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { HOME_CANONICAL } from '@/lib/seo'

const STATIC_PATHS = [
  '',
  '/blog',
  '/proyectos',
  '/legal',
  '/caso-real',
  '/diagnostico-riesgo-ia',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = STATIC_PATHS.map((path) => ({
    url: `${HOME_CANONICAL}${path}`,
  }))

  const posts = articles.map((article) => ({
    url: `${HOME_CANONICAL}/blog/${article.slug}`,
    lastModified: article.date,
  }))

  return [...pages, ...posts]
}
