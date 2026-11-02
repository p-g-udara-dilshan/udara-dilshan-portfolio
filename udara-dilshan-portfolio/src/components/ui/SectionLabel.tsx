type SectionLabelProps = { children: string }

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300/90 sm:text-xs">
      <span className="h-px w-7 bg-gradient-to-r from-violet-400 to-transparent" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
