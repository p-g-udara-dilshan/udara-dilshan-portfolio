import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GlowBadge } from '../ui/GlowBadge'
import { readContentOverride } from '../../data/contentOverrides'

const defaultRoles = [
  'Web Developer',
  'WordPress Developer',
  'Responsive Web Designer',
  'Freelance Web Developer',
]
export const roles = readContentOverride<string[]>('heroRoles', defaultRoles).length ? readContentOverride<string[]>('heroRoles', defaultRoles) : defaultRoles

export const heroIntro = readContentOverride('heroIntro', 'Web Developer experienced in WordPress, WooCommerce, responsive websites and real client projects. Currently strengthening JavaScript fundamentals and learning modern frontend technologies through practical and AI-assisted development.')

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let transitionTimeout: number | undefined

    const interval = window.setInterval(() => {
      setIsVisible(false)

      transitionTimeout = window.setTimeout(() => {
        setRoleIndex((current) => (current + 1) % roles.length)
        setIsVisible(true)
      }, 250)
    }, 2800)

    return () => {
      window.clearInterval(interval)

      if (transitionTimeout !== undefined) {
        window.clearTimeout(transitionTimeout)
      }
    }
  }, [])

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050816]"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-[center_42%] bg-no-repeat lg:bg-center"
        style={{ backgroundImage: "url('/herobg.png')" }}
      />

      {/* Background overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-slate-950/20 lg:bg-slate-950/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050816]/90 via-[#050816]/70 to-[#05060d]/15 lg:from-slate-950/90 lg:via-slate-950/45 lg:to-transparent"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_40%_42%,rgba(99,102,241,.18),transparent_52%)] lg:bg-[radial-gradient(circle_at_78%_45%,rgba(129,140,248,.12),transparent_30%)]"
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#050816]/90 via-[#050816]/35 to-transparent lg:h-28 lg:from-slate-950/60 lg:via-transparent"
      />

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-[1512px] items-center px-5 py-28 sm:px-8 sm:py-32 lg:min-h-screen lg:max-w-7xl lg:px-8 lg:py-28">
        <div className="w-full max-w-[1050px] lg:max-w-5xl">

          {/* Availability badge */}
          <GlowBadge>
            Available for opportunities
          </GlowBadge>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="mt-7 font-display text-[clamp(3.25rem,6.1vw,7rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-white lg:mt-6 lg:text-[clamp(3rem,6vw,5.4rem)] lg:leading-[0.96] lg:tracking-[-0.055em]"
          >
            <span className="block">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-400 bg-clip-text text-transparent">
                Udara.
              </span>
            </span>

            {/* Animated professional roles */}
            <span className="mt-2 block min-h-[1em] max-w-full">
              <span
                aria-live="polite"
                className={`inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-300 bg-clip-text text-[clamp(2.45rem,5.3vw,6.25rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-transparent transition-all duration-300 lg:text-[clamp(3rem,6vw,5.4rem)] lg:leading-[0.96] lg:tracking-[-0.055em] ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-1 opacity-0'
                }`}
              >
                {roles[roleIndex]}
              </span>
            </span>
          </h1>

          {/* Profile description */}
          <p className="mt-7 max-w-[850px] text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8 lg:max-w-3xl lg:text-xl">
            {heroIntro}
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:min-h-0 lg:rounded-xl lg:px-6 lg:py-3.5"
            >
              View My Projects

              <ArrowRight
                size={19}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border-2 border-white/35 bg-slate-950/20 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/65 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:min-h-0 lg:rounded-xl lg:border-[3px] lg:px-6 lg:py-3.5"
            >
              Let&apos;s Connect

              <ArrowRight
                size={19}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
