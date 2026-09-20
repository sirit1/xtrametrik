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
    default: 'XtraMetrik · Governance de IA y rentabilidad B2B verificable',
    template: '%s · XtraMetrik',
  },
  description:
    'De caos de IA a control verificable en 7 días: diagnóstico, governance ISO 42001 y auditoría independiente para empresas B2B.',
  keywords:
    'governance IA, ISO 42001, EU AI Act, compliance IA, business intelligence, rentabilidad B2B, transformación digital',
  openGraph: {
    title: 'XtraMetrik · Governance de IA y rentabilidad B2B verificable',
    description:
      'Diagnóstico, governance ISO 42001 y auditoría independiente en 7 días. Compliance demostrable.',
    type: 'website',
    url: SITE_URL,
    siteName: 'XtraMetrik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XtraMetrik · Governance de IA y rentabilidad B2B',
    description: 'De caos de IA a control verificable en 7 días.',
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
      </body>
    </html>
  )
}
