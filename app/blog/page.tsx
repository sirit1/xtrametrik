import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogLibrary from '@/components/blog/blog-library'

export const metadata: Metadata = {
  title: 'Blog · Governance de IA, compliance y rentabilidad B2B',
  description:
    '20 análisis sobre governance de IA, ISO 42001, EU AI Act, shadow AI y rentabilidad B2B verificable. Publicados también en la newsletter Transformación Digital + IA.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogLibrary />
      </main>
      <Footer />
    </div>
  )
}
