'use client'

import Image from 'next/image'
import { useI18n } from '@/components/i18n/language-provider'

/** Compact credit mark. Must stay smaller than the product logo it sits under. */
export default function XtraMetrikCredit({ className = '' }: { className?: string }) {
  const { t } = useI18n()

  return (
    <p className={`flex items-center gap-2 text-[11px] font-medium text-foreground/50 ${className}`}>
      <Image
        src="/brand/xtrametrik-dark.jpg"
        alt="XtraMetrik"
        width={28}
        height={28}
        className="h-5 w-5 rounded-sm object-contain"
      />
      <span>{t.projects.madeBy}</span>
    </p>
  )
}
