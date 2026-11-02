import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateNavbar = () => {
      setScrolled(window.scrollY > 24)

      const scrollPosition = window.scrollY + 160
      let currentSection = 'home'

      navItems.forEach((item) => {
        const section = document.querySelector<HTMLElement>(item.href)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.href.slice(1)
        }
      })

      setActiveSection(currentSection)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar)
        ticking = true
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    updateNavbar()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateNavbar)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateNavbar)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setActiveSection(href.slice(1))
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-slate-950/85 shadow-lg shadow-black/10 backdrop-blur-2xl'
          : 'border-b border-transparent bg-slate-950/10'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="group relative z-10 flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Udara Dilshan - Home"
        >
          <img
            src="/logo.png"
            alt="Udara Dilshan"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-14 lg:h-16"
          />
        </a>

        {/* Desktop navigation */}
        <div className="ml-auto hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => {
            const active = activeSection === item.href.slice(1)

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={active ? 'location' : undefined}
                className={`group relative rounded-lg px-3.5 py-2.5 text-[15px] font-semibold transition-colors duration-200 xl:px-4 xl:text-base ${
                  active
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 ${
                    active
                      ? 'w-6 opacity-100'
                      : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-100'
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-violet-400/40 hover:bg-violet-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 lg:hidden"
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.8} />
          ) : (
            <Menu size={21} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/[0.08] bg-slate-950/95 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto max-h-[calc(100dvh-76px)] max-w-7xl overflow-y-auto px-4 pb-5 pt-3 sm:px-6">
          {/* Mobile heading */}
          <div className="mb-3 flex items-center justify-between px-3 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-indigo-400/60 to-violet-400/10" />
          </div>

          {/* Mobile menu items */}
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const active = activeSection === item.href.slice(1)

              return (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={active ? 'location' : undefined}
                  className={`group flex items-center justify-center rounded-xl border px-4 py-3.5 text-center transition-all duration-200 ${
                    active
                      ? 'border-violet-400/20 bg-violet-400/[0.08] text-white'
                      : 'border-transparent text-slate-400 hover:border-white/[0.06] hover:bg-white/[0.035] hover:text-white'
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 25}ms` : '0ms',
                  }}
                >
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>

                  {active && (
                    <ArrowUpRight
                      size={16}
                      className="absolute right-6 text-violet-300"
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile description */}
          <div className="mt-5 border-t border-white/[0.07] pt-4">
            <p className="px-3 text-center text-xs leading-6 text-slate-500">
              Building responsive websites and meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}