import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const items = [
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ]

  return (
    <div className={`flex items-center ${compact ? 'gap-2.5' : 'gap-3'}`}>
      {items.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <Icon size={17} strokeWidth={1.8} className="transition-transform duration-300 group-hover:scale-105" />
        </a>
      ))}
    </div>
  )
}
