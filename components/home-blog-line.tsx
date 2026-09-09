'use client'

import Link from 'next/link'
import { useI18n } from '@/components/i18n/language-provider'

export default function HomeBlogLine() {
  const { t } = useI18n()

  return (
    <section className="border-t border-border/40 px-4 py-6 sm:px-6">
      <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
        {t.blog.homeLine}{' '}
        <Link href="/blog" className="font-bold text-brand hover:underline">
          {t.blog.homeLink}
        </Link>
      </p>
    </section>
  )
}
