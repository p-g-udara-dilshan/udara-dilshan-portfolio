import { ArrowUpRight, Sparkles } from 'lucide-react'
import { projects } from '../../data/projects'
import { readAllOverrides } from '../../data/contentOverrides'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ui/ProjectCard'

const featuredSlugs = [
  'resumeforge',
  'devlink',
  'vibe-decor-event-planning',
] as const

export function Projects() {
  const hasProjectOverrides = Array.isArray(readAllOverrides().projects)
  const marked = hasProjectOverrides ? projects.filter(project => project.featured) : []
  const featuredProjects = (marked.length ? marked : featuredSlugs
    .map(slug => projects.find(project => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project)))
    .slice(0, 3)

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-white/[0.012] pt-0 pb-14 sm:pb-16 lg:pb-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-[-8rem] h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 left-[-8rem] h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              label="Featured projects"
              title="Selected work, built with purpose."
              description="A closer look at three projects that showcase my approach to web development, responsive interfaces, and building useful digital experiences."
            />
          </div>

          {/* View all projects */}
          <a
            href="/projects/"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/[0.10] px-4 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-violet-500/[0.18] hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            View all projects
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Featured projects */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="group/project relative flex min-w-0 h-full flex-col"
            >
              {/* Project number */}
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="font-mono text-xs tracking-[0.2em] text-slate-500">
                  PROJECT 0{index + 1}
                </span>

                {index === 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-200">
                    <Sparkles size={11} />
                    Featured
                  </span>
                )}
              </div>

              {/* Equal-height project card */}
              <div className="flex h-full min-h-[520px] flex-1 transition-all duration-300 group-hover/project:-translate-y-1">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-400">
            From polished user interfaces to practical web applications.
          </p>

          {/* Explore full portfolio */}
          <a
            href="/projects/"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-violet-400/25 bg-violet-500/[0.08] px-4 py-2.5 text-sm font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/45 hover:bg-violet-500/[0.16] hover:text-white"
          >
            Explore the full portfolio
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}