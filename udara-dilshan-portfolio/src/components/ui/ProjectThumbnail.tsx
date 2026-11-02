import { FolderKanban, LayoutDashboard, Sparkles } from 'lucide-react'

const iconMap = {
  resumeforge: FolderKanban,
  universe: LayoutDashboard,
  devlink: Sparkles,
  learnhub: LayoutDashboard,
  'bloom-and-petals': Sparkles,
  techgear: LayoutDashboard,
} as const

export function ProjectThumbnail({ slug, title, accent }: { slug: string; title: string; accent: string }) {
  const Icon = iconMap[slug as keyof typeof iconMap] ?? Sparkles

  return (
    <div className={`relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,.22),transparent_25%),linear-gradient(135deg,rgba(5,8,22,.1),rgba(5,8,22,.72))]" />
      <div className="absolute inset-[10%] rounded-2xl border border-white/20 bg-slate-950/55 p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="h-2 w-12 rounded-full bg-white/10" />
        </div>
        <div className="grid h-full grid-cols-[.9fr_1.6fr] gap-3 pt-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3">
            <div className="mb-3 h-5 w-5 rounded-md bg-white/15" />
            <div className="space-y-2">
              {[48, 62, 42, 56].map((width, index) => (
                <div key={index} className="h-1.5 rounded-full bg-white/10" style={{ width: `${width}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/10 p-3">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-2 w-16 rounded-full bg-white/25" />
                <div className="mt-2 h-1.5 w-24 rounded-full bg-white/10" />
              </div>
              <Icon size={22} className="text-white/70" />
            </div>
            <div className="space-y-3">
              <div className="h-8 rounded-md bg-white/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 rounded-md bg-white/[0.07]" />
                <div className="h-10 rounded-md bg-white/[0.07]" />
              </div>
              <div className="h-2 w-3/5 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/50 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-md">
        {title}
      </div>
    </div>
  )
}
