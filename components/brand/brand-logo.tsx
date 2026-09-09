'use client'

import Image from 'next/image'
import Link from 'next/link'

type Size = 'sm' | 'md' | 'lg'

const LOCKUP: Record<Size, { w: number; h: number; className: string }> = {
  sm: { w: 88, h: 88, className: 'h-12 w-12' },
  md: { w: 128, h: 128, className: 'h-16 w-16' },
  lg: { w: 160, h: 160, className: 'h-[5.5rem] w-[5.5rem]' },
}

const MARK: Record<Size, { px: number; word: string }> = {
  sm: { px: 32, word: 'text-base' },
  md: { px: 40, word: 'text-xl' },
  lg: { px: 52, word: 'text-2xl' },
}

/**
 * Official lockup on the dark site. Header uses the cyan mark + dark-safe
 * wordmark (Metri stays white). Footer uses the navy lockup. The light
 * wordmark (Metri navy) is not used here — it disappears on this background.
 */
export function BrandLogo({
  size = 'md',
  variant = 'horizontal',
  href = '/',
  className = '',
}: {
  size?: Size
  variant?: 'horizontal' | 'lockup'
  href?: string | null
  className?: string
}) {
  const lockup = LOCKUP[size]
  const mark = MARK[size]

  const content =
    variant === 'lockup' ? (
      <span className={`flex flex-shrink-0 ${className}`}>
        <Image
          src="/brand/xtrametrik-lockup-dark.svg"
          alt="XtraMetrik"
          width={lockup.w}
          height={lockup.h}
          priority
          className={`${lockup.className} rounded-xl object-contain`}
        />
      </span>
    ) : (
      <span className={`flex flex-shrink-0 items-center gap-3 ${className}`}>
        <Image
          src="/brand/xtrametrik-mark.svg"
          alt=""
          width={mark.px}
          height={mark.px}
          priority
          className="h-auto w-auto"
          style={{ width: mark.px, height: mark.px }}
        />
        <span
          className={`font-montserrat font-black tracking-tight leading-none ${mark.word}`}
          aria-label="XtraMetrik"
        >
          <span className="text-brand">Xt</span>
          <span className="text-primary">ra</span>
          <span className="text-foreground">Metri</span>
          <span className="text-primary">k</span>
        </span>
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
