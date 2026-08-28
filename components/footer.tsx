'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import { useI18n } from '@/components/i18n/language-provider'
import { CONTACT_EMAIL, LINKEDIN_NEWSLETTER_URL, LINKEDIN_PROFILE_URL } from '@/lib/site'
import BrandLogo from '@/components/brand/brand-logo'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  const navLinks = [
    { label: t.nav.engines, href: '/#motores' },
    { label: t.nav.method, href: '/#pasos' },
    { label: t.nav.cases, href: '/#casos' },
    { label: t.nav.contact, href: '/#diagnostico' },
  ]

  const contentLinks = [
    { label: t.nav.projects, href: '/proyectos' },
    { label: t.nav.sample, href: '/caso-real' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.footer.newsletter, href: LINKEDIN_NEWSLETTER_URL, external: true },
    { label: t.footer.profile, href: LINKEDIN_PROFILE_URL, external: true },
  ]

  const legalLinks = [
    { label: t.footer.privacy, href: '/legal#privacidad' },
    { label: t.footer.terms, href: '/legal#terminos' },
    { label: t.footer.cookies, href: '/legal#cookies' },
    { label: t.footer.compliance, href: '/legal#compliance' },
  ]

  return (
    <footer className="bg-card border-t border-border/40 px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          <div className="flex flex-col gap-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-foreground/60 leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-4">
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground/50 hover:text-primary transition-colors"
                aria-label={CONTACT_EMAIL}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav aria-label={t.footer.colNav}>
            <h2 className="font-bold text-sm mb-4">{t.footer.colNav}</h2>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.colContent}>
            <h2 className="font-bold text-sm mb-4">{t.footer.colContent}</h2>
            <ul className="flex flex-col gap-2.5">
              {contentLinks.map((item) =>
                item.external ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <nav aria-label={t.footer.colLegal}>
            <h2 className="font-bold text-sm mb-4">{t.footer.colLegal}</h2>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-border/40 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-foreground/50">
            © {year} XtraMetrik. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/leads"
              className="text-[11px] text-foreground/35 transition-colors hover:text-foreground/60"
            >
              {t.footer.admin}
            </Link>
            <a
              href="https://www.xtrametrik.com"
              className="text-xs text-foreground/50 hover:text-primary transition-colors font-semibold"
            >
              xtrametrik.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
