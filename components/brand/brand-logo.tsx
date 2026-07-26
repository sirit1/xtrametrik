'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/components/i18n/language-provider'

type Size = 'sm' | 'md' | 'lg'

const MARK_SIZE: Record<Size, number> = { sm: 36, md: 48, lg: 64 }
const WORD_SIZE: Record<Size, string> = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
}
const TAGLINE_SIZE: Record<Size, string> = {
  sm: 'text-[9px]',
  md: 'text-[10px]',
  lg: 'text-[11px]',
}

/**
 * The single source of truth for the XtraMetrik brand mark.
 *
 * The logo art is cyan on black, so it needs a cyan-tinted ring to separate it
 * from the near-black page background — otherwise it disappears, which is the
 * exact problem this component was created to fix.
 */
export function BrandLogo({
  size = 'md',
  showWordmark = true,
  showTagline = true,
  href = '/',
  className = '',
}: {
  size?: Size
  showWordmark?: boolean
  showTagline?: boolean
  href?: string | null
  className?: string
}) {
  const { t } = useI18n()
  const px = MARK_SIZE[size]

  const content = (
    <span className={`flex flex-shrink-0 items-center gap-3 ${className}`}>
      <span
        className="flex items-center justify-center overflow-hidden rounded-xl ring-1 ring-brand/30"
        style={{ width: px, height: px }}
      >
        <Image
          src="/brand/xtrametrik-logo.jpg"
          alt="XtraMetrik"
          width={px}
          height={px}
          priority
          className="h-full w-full object-cover"
        />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-montserrat font-black tracking-tight text-foreground ${WORD_SIZE[size]}`}
          >
            XTRA<span className="text-brand">METRIK</span>
          </span>
          {showTagline && (
            <span
              className={`mt-1 whitespace-nowrap font-bold uppercase tracking-[0.14em] text-brand/70 ${TAGLINE_SIZE[size]}`}
            >
              {t.nav.brandSlogan}
            </span>
          )}
        </span>
      )}
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} className="transition-opacity hover:opacity-80">
      {content}
    </Link>
  )
}

export default BrandLogo
