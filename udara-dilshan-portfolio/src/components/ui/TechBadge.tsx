export function TechBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-slate-300 transition group-hover:border-white/15 group-hover:bg-white/[0.06] sm:text-[11px]">
      {children}
    </span>
  )
}
