import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ArticleView from '@/components/blog/article-view'
import { articles, getArticle } from '@/lib/articles'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Artículo no encontrado' }

  return {
    title: article.es.title,
    description: article.es.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.es.title,
      description: article.es.excerpt,
      type: 'article',
      url: `/blog/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getArticle(slug)) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ArticleView slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
