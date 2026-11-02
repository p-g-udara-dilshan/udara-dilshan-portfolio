import { useEffect, useState } from 'react'
import {
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Mail,
} from 'lucide-react'
import { profile } from '../../data/profile'

const currentYear = new Date().getFullYear()


export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/[0.07] bg-slate-950/70">
        {/* Top accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
        />

        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500/[0.04] blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-[-5rem] h-64 w-64 rounded-full bg-indigo-500/[0.04] blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main footer */}
          <div className="flex flex-col gap-7 py-8 sm:py-9 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <a
                href="#home"
                className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                aria-label="Udara Dilshan, back to home"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.08] text-sm font-extrabold text-violet-200 shadow-lg shadow-violet-950/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-violet-400/35 group-hover:bg-violet-400/[0.13]">
                  UD
                </span>

                <span className="text-lg font-bold tracking-tight text-white">
                  Udara Dilshan
                  <span className="text-violet-300">.</span>
                </span>
              </a>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 lg:mx-0">
                Web developer creating responsive websites and meaningful
                digital experiences.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-2.5">
              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Linkedin
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Github
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                title="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Mail
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] py-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-5 text-slate-500 sm:text-sm">
              © {currentYear} Udara Dilshan. All rights reserved.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
              <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 sm:text-sm">
                Designed & built with
                <Heart
                  size={13}
                  className="fill-violet-400 text-violet-400"
                  aria-label="love"
                />
                <span className="font-medium text-slate-400">by Udara</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className={`group fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/25 bg-slate-900/85 text-violet-200 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/45 hover:bg-violet-500/15 hover:text-white hover:shadow-violet-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 sm:bottom-7 sm:right-7 ${
          showBackToTop
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-90 opacity-0'
        }`}
      >
        <ArrowUp
          size={19}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />

        {/* Small glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-violet-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        />
      </button>
    </>
  )
}