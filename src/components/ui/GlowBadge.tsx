import type { ReactNode } from 'react'

type GlowBadgeProps = {
  children: ReactNode
}

export function GlowBadge({ children }: GlowBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/25 bg-violet-500/10 px-5 py-2.5 text-base font-semibold text-violet-100 backdrop-blur-md">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.95)]" />

      {children}
    </span>
  )
}