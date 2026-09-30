import type { MetadataRoute } from 'next'
import { HOME_CANONICAL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${HOME_CANONICAL}/sitemap.xml`,
  }
}
