'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/components/i18n/language-provider'
import LanguageSwitcher from '@/components/i18n/language-switcher'
import BrandLogo from '@/components/brand/brand-logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  const navItems = [
    { label: t.homeAilock.title, href: '/#ailock' },
    { label: t.nav.projects, href: '/proyectos' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contact, href: '/#diagnostico' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center gap-4">
          <BrandLogo size="md" variant="horizontal" />

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-foreground/80 hover:text-brand transition-colors font-semibold text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/#diagnostico"
              className="px-5 py-2 bg-primary hover:opacity-90 text-primary-foreground rounded-lg transition-all font-bold text-sm"
            >
              {t.nav.cta}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t.nav.menuToggle}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brand" />
              ) : (
                <Menu className="w-6 h-6 text-brand" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-4 flex flex-col gap-3 border-t border-border/30 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-brand transition-colors font-medium text-sm py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#diagnostico"
              className="w-full text-center px-6 py-2 bg-primary hover:opacity-90 text-primary-foreground rounded-lg transition-all font-bold text-sm"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.cta}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
