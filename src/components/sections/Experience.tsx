import { useEffect, useState } from 'react'
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
  Globe2,
  X,
  ArrowUpRight,
  Code2,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { readContentOverride } from '../../data/contentOverrides'

type Experience = {
  company: string
  role: string
  employmentType: string
  period: string
  duration: string
  location: string
  workMode: string
  logo?: string
  icon: typeof BriefcaseBusiness
  description: string
  responsibilities: string[]
}

const defaultExperiences: Experience[] = [
  {
    company: 'Freelance / Self-Employed',
    role: 'Web Developer & Digital Solutions',
    employmentType: 'Freelance',
    period: 'Jan 2023 – Present',
    duration: 'Ongoing',
    location: 'Sri Lanka',
    workMode: 'Remote / Flexible',
    logo: '/freelance.png',
    icon: Code2,
    description: '',
    responsibilities: [
      'Build and customize WordPress and responsive business websites.',
      'Discuss requirements with clients and adapt layouts to business needs.',
      'Work on websites, digital product catalogues, QR menu concepts and business profiles.',
      'Assist with social media page setup, content creation, and Meta advertising services where needed.',
      'Explore AI-assisted workflows for practical digital solutions.',
    ],
  },
  {
    company: 'GW Technologies',
    role: 'Full-Stack Developer (WordPress) Intern',
    employmentType: 'Internship',
    period: 'Mar 2025 – Aug 2025',
    duration: '6 months',
    location: 'Maharagama, Sri Lanka',
    workMode: 'Remote',
    logo: '/gw.png',
    icon: BriefcaseBusiness,
    description: '',
    responsibilities: [
      'Created and customized WordPress pages and responsive interfaces.',
      'Worked with HTML, CSS, JavaScript and PHP in site customization.',
      'Supported hosting, cPanel, domains, deployments and maintenance.',
      'Participated in client discussions and collaborated with team members.',
      'Helped test and improve WordPress business websites.',
    ],
  },
]
const savedExperiences = readContentOverride<Array<Omit<Experience, 'icon'>>>('experiences', defaultExperiences)
export const experiences: Experience[] = savedExperiences.map((item) => ({
  ...item,
  icon: item.company === 'GW Technologies' ? BriefcaseBusiness : Code2,
}))

export function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null)

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedExperience])

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedExperience(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white/[0.012] pt-0 pb-14 sm:pb-16 lg:pb-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-violet-500/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <SectionHeading
            label="Experience"
            title="Where I've worked."
            description="My professional experience across web development, IT education, and digital services."
          />
        </div>

        {/* Experience cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-10">
          {experiences.map((experience) => {
            const Icon = experience.icon

            return (
              <article
                key={`${experience.company}-${experience.role}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] shadow-2xl shadow-black/10 transition-all duration-300 hover:border-violet-400/20"
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
                />

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/0 blur-[100px] transition duration-500 group-hover:bg-indigo-500/[0.08]"
                />

                <div className="relative p-5 sm:p-7 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Logo */}
                      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 shadow-lg shadow-black/10 sm:h-[84px] sm:w-[84px]">
                        {experience.logo ? (
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                            onError={(event) => {
                              const image = event.currentTarget
                              image.style.display = 'none'

                              const fallback =
                                image.nextElementSibling as HTMLElement | null

                              if (fallback) {
                                fallback.style.display = 'grid'
                              }
                            }}
                          />
                        ) : null}

                        <span
                          className={`${
                            experience.logo ? 'hidden' : 'grid'
                          } h-full w-full place-items-center text-violet-300`}
                        >
                          <Icon size={26} strokeWidth={1.6} />
                        </span>
                      </div>

                      {/* Role information */}
                      <div className="min-w-0 pt-1">
                        <h3 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-base font-semibold text-violet-300 sm:text-lg">
                          {experience.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                            {experience.employmentType}
                          </span>

                          <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-300">
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Professional experience label */}
                    <div className="hidden shrink-0 items-center gap-2 text-xs font-medium text-slate-500 sm:flex">
                      Professional Experience
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/[0.06] to-transparent" />

                  {/* Meta information */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                    {/* Duration */}
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-300">
                        <CalendarDays size={18} strokeWidth={1.7} />
                      </span>

                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          Duration
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-200">
                          {experience.period}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-300">
                        <MapPin size={18} strokeWidth={1.7} />
                      </span>

                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          Location
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-200">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    {/* Work arrangement */}
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-300">
                        <Globe2 size={18} strokeWidth={1.7} />
                      </span>

                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          Work arrangement
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-200">
                          {experience.workMode}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Short overview */}
                  {experience.description?.trim() && <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {experience.description}
                  </p>}

                  {/* View details button */}
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedExperience(experience)}
                      className="group/button inline-flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-violet-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    >
                      View Details
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Experience Details Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedExperience(null)
            }
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#0a0d18] shadow-2xl shadow-black/50">
            {/* Modal top glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.10] blur-[100px]"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              aria-label="Close experience details"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <X size={20} />
            </button>

            {/* Scrollable modal content */}
            <div className="relative max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Modal header */}
                <div className="flex items-start gap-4 pr-12 sm:gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 sm:h-20 sm:w-20">
                    {selectedExperience.logo ? (
                      <img
                        src={selectedExperience.logo}
                        alt={`${selectedExperience.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <selectedExperience.icon
                        size={26}
                        className="text-violet-300"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-violet-300">
                      {selectedExperience.company}
                    </p>

                    <h2
                      id="experience-modal-title"
                      className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    >
                      {selectedExperience.role}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                        {selectedExperience.employmentType}
                      </span>

                      <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-300">
                        {selectedExperience.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={15} />
                      Duration
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-200">
                      {selectedExperience.period}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={15} />
                      Location
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-200">
                      {selectedExperience.location}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Globe2 size={15} />
                      Work arrangement
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-200">
                      {selectedExperience.workMode}
                    </p>
                  </div>
                </div>

                {/* Only show an overview when a description has been supplied. */}
                {selectedExperience.description?.trim() && <div className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">Overview</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{selectedExperience.description}</p>
                </div>}

                {/* Responsibilities */}
                <div className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
                    Responsibilities &amp; Contributions
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {selectedExperience.responsibilities.map(
                      (item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                        >
                          <CheckCircle2
                            size={18}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-violet-400"
                            strokeWidth={1.7}
                          />

                          <span className="text-sm leading-6 text-slate-300">
                            {item}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Close */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedExperience(null)}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    Close
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
