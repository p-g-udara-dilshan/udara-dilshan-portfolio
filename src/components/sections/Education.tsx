import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
  CheckCircle2,
  BrainCircuit,
  Database,
  Code2,
  Cloud,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { readContentOverride } from '../../data/contentOverrides'

const educationDefaults = {
  degree:
    'Bachelor of Information and Communication Technology (BICT)',
  specialization: 'Software Technology',
  university: 'Uva Wellassa University of Sri Lanka',
  period: 'Sep 2022 – Sep 2026',
  location: 'Badulla, Sri Lanka',
  status: 'Academic requirements completed',
  result: 'Awaiting official graduation (fourth-year results pending)',
  description:
    'Completed the academic requirements in Software Technology, including programming, software engineering, web technologies, databases, cloud computing and software quality assurance. Official graduation is pending.',
  coreSubjects: 'Programming Techniques, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Software Engineering, Web Technologies, Human-Computer Interaction.',
  advancedSubjects: 'Software Quality Assurance, Cloud Computing, Web Service Technologies, Software Requirements Engineering, Object-Oriented Design Patterns, Computer Systems Security, Parallel & Distributed Computing, IoT and Embedded Systems.',
  practicalWork: 'Academic capstone project, independent study projects and industrial training; applied coursework through system design, implementation and testing activities.',
  logo: '/uwu.png',
}
export const education = { ...educationDefaults, ...readContentOverride('education', {}) }

const advancedStudies = [
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
  },
  {
    title: 'Data Mining',
    icon: Database,
  },
  {
    title: 'Distributed Systems',
    icon: Code2,
  },
  {
    title: 'Cloud & Emerging ICT',
    icon: Cloud,
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white/[0.012] pt-0 pb-14 sm:pb-16 lg:pb-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-500/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <SectionHeading
            label="Education"
            title="Academic background."
            description="My academic foundation in software technology, computing, and modern application development."
          />
        </div>

        {/* Main education card */}
        <article className="group relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] shadow-2xl shadow-black/10 transition-colors duration-300 hover:border-violet-400/20 sm:mt-10">
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
          />

          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/0 blur-[100px] transition duration-500 group-hover:bg-indigo-500/[0.08]"
          />

          <div className="relative p-5 sm:p-7 lg:p-9">
            {/* University information */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4 sm:gap-5">
                {/* University logo */}
                <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 shadow-lg shadow-black/10 sm:h-24 sm:w-24">
                  <img
                    src={education.logo}
                    alt={`${education.university} logo`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                    <GraduationCap size={15} />
                    Undergraduate Education
                  </span>

                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
                    {education.degree}
                  </h3>

                  <p className="mt-2 text-base font-semibold text-violet-300 sm:text-lg">
                    {education.specialization}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                    {education.university}
                  </p>
                </div>
              </div>

              {/* Academic status */}
              <div className="shrink-0 sm:max-w-[220px] sm:text-right">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2 text-xs font-medium text-emerald-300">
                  <CheckCircle2 size={15} />
                  {education.status}
                </span>

                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-right">
                  {education.result}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/[0.06] to-transparent sm:my-8" />

            {/* Education details */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-slate-950/40 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300">
                  <CalendarDays size={18} strokeWidth={1.7} />
                </span>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Study period
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-slate-950/40 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300">
                  <MapPin size={18} strokeWidth={1.7} />
                </span>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    University location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {education.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic overview */}
            <div className="mt-8">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                <BookOpen size={17} className="text-violet-300" />
                Academic overview
              </h4>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {education.description}
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  { label: 'Core studies', content: education.coreSubjects },
                  { label: 'Advanced Software Technology', content: education.advancedSubjects },
                  { label: 'Practical learning', content: education.practicalWork },
                ].filter(item => item.content?.trim()).map(item => <div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <h5 className="text-sm font-semibold text-violet-200">{item.label}</h5>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.content}</p>
                </div>)}
              </div>
            </div>

            
          </div>
        </article>
      </div>
    </section>
  )
}