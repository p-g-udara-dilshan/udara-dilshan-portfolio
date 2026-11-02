import { useState } from 'react'
import { readContentOverride } from '../data/contentOverrides'
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
} from 'lucide-react'

import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  const categories = readContentOverride<string[]>('projectCategories', ['Frontend Development', 'WordPress Development', 'Full-Stack Development', 'Freelance Client Project', 'UI/UX Design', 'AI & Machine Learning', 'Other'])
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Page header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            aria-label="Udara Dilshan home"
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          >
            <img
              src="/logo.png"
              alt="Udara Dilshan"
              className="h-11 w-auto object-contain"
            />
          </a>

          <a
            href="/"
            className="
              inline-flex items-center gap-2 rounded-xl
              border border-violet-400/30
              bg-violet-500/10 px-4 py-2.5
              text-sm font-semibold text-violet-100
              transition-all duration-300
              hover:border-violet-300/60
              hover:bg-violet-500/20
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-violet-400
            "
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        {/* Page introduction */}
        <section className="mb-10 sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-violet-400" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-300">
              All Projects
            </p>
          </div>

          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A closer look at my work.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore web applications, responsive interfaces, UI concepts,
            WordPress projects, and practical digital experiences built
            throughout my development journey.
          </p>
        </section>

        {/* Collection heading */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]">
                <Github size={17} />
              </span>

              <div>
                <h2 className="text-sm font-semibold text-white sm:text-base">
                  Project Collection
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Browse each project to view its details
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              {visibleProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Category filter: edit categories in src/data/siteContent.json. */}
          <div className="mb-7 flex max-w-full flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {['All', ...categories].map(category => <button type="button" key={category} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${activeCategory === category ? 'border-violet-400/60 bg-violet-500/20 text-violet-100' : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08]'}`}>{category}</button>)}
          </div>
          {visibleProjects.length === 0 && <p className="mb-6 rounded-xl border border-white/10 p-5 text-slate-400">No projects in this category yet.</p>}
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                enableDetails
              />
            ))}
          </div>
        </section>

        {/* Bottom call to action */}
        <section className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-violet-950/40 via-[#0b1020] to-[#0b1020] p-6 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.10] blur-3xl" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                  Let's Connect
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Want to build something together?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  I'm interested in web development opportunities,
                  collaborations, and creating useful digital experiences.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl bg-white px-5 py-3
                    text-sm font-semibold text-slate-950
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-violet-100
                  "
                >
                  Contact Me
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://github.com/p-g-udara-dilshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl border border-white/20
                    bg-white/[0.04] px-5 py-3
                    text-sm font-semibold text-slate-200
                    transition-all duration-300
                    hover:border-white/40 hover:bg-white/[0.08]
                    hover:text-white
                  "
                >
                  <Github size={16} />
                  GitHub Profile
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Udara Dilshan. All rights reserved.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white"
          >
            Back to Portfolio
            <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  )
}