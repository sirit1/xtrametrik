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
    default: 'XtraMetrik · AILock y webapps: manejo de riesgo de IA',
    template: '%s · XtraMetrik',
  },
  description:
    'Casa matriz: construye webapps y AILock, manejo de riesgo de IA. Control de fugas: lo que pegas en ChatGPT o Claude no se va a la competencia. Diagnóstico de 5 preguntas. AILock está en construcción.',
  keywords:
    'XtraMetrik, AILock, manejo de riesgo de IA, fuga de datos, ChatGPT, Claude, diagnóstico IA, conversión O2O',
  openGraph: {
    title: 'XtraMetrik · AILock y webapps: manejo de riesgo de IA',
    description:
      'Diagnóstico de 5 preguntas. AILock es el producto que detiene la fuga. Menos riesgo de multa y de que datos vitales se fuguen a la competencia.',
    type: 'website',
    url: SITE_URL,
    siteName: 'XtraMetrik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XtraMetrik · AILock y webapps',
    description: 'Diagnóstico de 5 preguntas. AILock: manejo de riesgo de IA. En construcción.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1220',
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
