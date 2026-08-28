import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { LanguageProvider } from '@/components/i18n/language-provider'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800', '900'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'XtraMetrik · Casa matriz: IA, datos y conversión O2O',
    template: '%s · XtraMetrik',
  },
  description:
    'Casa matriz de gobernanza de IA, blindaje de datos y conversión O2O. Diagnóstico de 5 preguntas. Los productos son prueba, no la marca.',
  keywords:
    'XtraMetrik, casa matriz, fuga de datos, ChatGPT, diagnóstico IA, conversión O2O, blindaje de datos',
  openGraph: {
    title: 'XtraMetrik · Casa matriz: IA, datos y conversión O2O',
    description:
      'Diagnóstico de 5 preguntas. Menos riesgo de multa y de que datos vitales se fuguen a la competencia.',
    type: 'website',
    url: SITE_URL,
    siteName: 'XtraMetrik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XtraMetrik · Casa matriz',
    description: 'Diagnóstico de 5 preguntas. Productos como prueba, no como marca.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#121212',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable} bg-background scroll-smooth`}>
      <body className="font-inter antialiased text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
