import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogLibrary from '@/components/blog/blog-library'

export const metadata: Metadata = {
  title: 'Blog · Riesgo de IA, fugas y rentabilidad B2B',
  description:
    '20 análisis sobre manejo de riesgo de IA, fugas a ChatGPT/Claude, EU AI Act y rentabilidad B2B verificable. Publicados también en la newsletter Transformación Digital + IA.',
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
