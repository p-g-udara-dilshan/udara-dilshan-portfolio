import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { profile } from '../../data/profile'
import { readContentOverride } from '../../data/contentOverrides'
import { Link2 } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

type ContactItemProps = {
  type: 'email' | 'location' | 'linkedin' | 'github'
  label: string
  value: string
  href?: string
}

function ContactItem({
  type,
  label,
  value,
  href,
}: ContactItemProps) {
  const iconMap = {
    email: Mail,
    location: MapPin,
    linkedin: Linkedin,
    github: Github,
  }

  const Icon = iconMap[type]

  const colorMap = {
    email: {
      icon: 'text-red-300',
      background: 'bg-red-400/[0.10]',
      border: 'hover:border-red-400/25',
      glow: 'group-hover:bg-red-400/[0.04]',
    },
    location: {
      icon: 'text-violet-300',
      background: 'bg-violet-400/[0.10]',
      border: 'hover:border-violet-400/25',
      glow: 'group-hover:bg-violet-400/[0.04]',
    },
    linkedin: {
      icon: 'text-blue-300',
      background: 'bg-blue-400/[0.10]',
      border: 'hover:border-blue-400/25',
      glow: 'group-hover:bg-blue-400/[0.04]',
    },
    github: {
      icon: 'text-slate-200',
      background: 'bg-white/[0.07]',
      border: 'hover:border-white/20',
      glow: 'group-hover:bg-white/[0.025]',
    },
  }

  const colors = colorMap[type]
  const isExternal = Boolean(href?.startsWith('http'))

  const content = (
    <>
      {/* Icon + arrow */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${colors.background}`}
        >
          <Icon
            size={21}
            strokeWidth={1.8}
            className={colors.icon}
          />
        </div>

        {href && (
          <ArrowUpRight
            size={18}
            className="mt-1 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
          />
        )}
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>

        <p
          className={`mt-2 font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-violet-100 ${
            type === 'email'
              ? 'break-all text-sm sm:text-[15px]'
              : 'text-base'
          }`}
        >
          {value}
        </p>
      </div>

      {/* Bottom indicator */}
      {href ? (
        <div className="mt-auto pt-5">
          <div className="h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent transition-all duration-300 group-hover:from-violet-400/30" />

          <p className="mt-3 text-[11px] font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
            Open link
          </p>
        </div>
      ) : (
        <div className="mt-auto pt-5">
          <p className="text-[11px] font-medium text-slate-600">
            Based in Sri Lanka
          </p>
        </div>
      )}
    </>
  )

  const className = `
    group relative flex min-h-[205px] min-w-0 flex-col overflow-hidden
    rounded-2xl border border-white/[0.07]
    bg-gradient-to-br from-white/[0.035] to-white/[0.012]
    p-5
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-white/[0.045]
    ${colors.border}
    sm:p-6
    ${
      href
        ? 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400'
        : ''
    }
  `

  return href ? (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={`${label}: ${value}`}
      className={className}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${colors.glow}`}
      />

      <div className="relative flex h-full flex-col">
        {content}
      </div>
    </a>
  ) : (
    <div className={className}>
      <div className="relative flex h-full flex-col">
        {content}
      </div>
    </div>
  )
}

type ExtraContact = {label:string;value:string;url:string}
const extraContacts = readContentOverride<ExtraContact[]>('contactExtras', [])
const contactContent = readContentOverride('contactContent', {
  heading: "Let's create something great together.",
  description: "Looking for a website developer for your next project, a frontend development opportunity, or a collaboration? I'd love to hear from you.",
  cardHeading: 'Have a project in mind?',
  cardDescription: "I'm interested in creating responsive websites, building responsive interfaces, WordPress websites, and turning ideas into practical digital experiences.",
  bottomNote: "Have a question or an idea? Let's start a conversation.",
})
function validContactLink(url:string) { return /^(https:\/\/|mailto:|tel:)/i.test(url) }
export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-white/[0.012] pt-0 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[110px]" />

        <div className="absolute -bottom-24 left-[-8rem] h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <SectionHeading
            label="Get in touch"
            title={contactContent.heading}
            description={contactContent.description}
          />
        </div>

        {/* Main contact area */}
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* Primary contact card */}
          <div className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.75rem] border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.11] via-slate-900/80 to-slate-950/90 p-6 shadow-2xl shadow-black/10 sm:p-8 lg:p-9">
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-violet-300/[0.07]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-violet-300/[0.07]"
            />

            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-violet-500/[0.07] blur-[80px]"
            />

            <div className="relative">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium text-emerald-300">
                  Open to opportunities
                </span>
              </div>

              {/* Icon */}
              <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-400/[0.09] shadow-lg shadow-violet-950/10">
                <Sparkles
                  size={26}
                  strokeWidth={1.6}
                  className="text-violet-200"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-6 max-w-sm text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                {contactContent.cardHeading}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px]">
                {contactContent.cardDescription}
              </p>

              {/* Email button */}
              <a
                href={`mailto:${profile.email}`}
                className="group/email mt-7 inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <Mail size={17} />

                Send me an email

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5"
                />
              </a>
            </div>

            {/* Location */}
            <div className="relative mt-auto pt-8">
              <div className="h-px bg-gradient-to-r from-white/10 via-white/[0.05] to-transparent" />

              <div className="mt-5 flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-violet-300"
                />

                <div>
                  <p className="text-sm font-medium text-white">
                    Based in Sri Lanka
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Open to suitable web development opportunities and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ContactItem
              type="email"
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />

            <ContactItem
              type="location"
              label="Location"
              value={profile.location}
            />

            <ContactItem
              type="linkedin"
              label="LinkedIn"
              value="Connect with me"
              href={profile.linkedin}
            />

            <ContactItem
              type="github"
              label="GitHub"
              value="Explore my projects"
              href={profile.github}
            />
            {extraContacts.filter(c => c.label?.trim() && c.value?.trim()).map((item,index) => {
              const url = item.url?.trim() || ''
              const valid = validContactLink(url)
              return <div key={`${item.label}-${index}`} className="group flex min-h-[205px] flex-col rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.035] to-white/[0.012] p-5 sm:p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300"><Link2 size={21}/></div>
                <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-slate-500">{item.label}</p>
                {valid ? <a href={url} target={url.startsWith('https://')?'_blank':undefined} rel={url.startsWith('https://')?'noopener noreferrer':undefined} className="mt-2 break-words font-semibold text-white hover:text-violet-200">{item.value}</a> : <p className="mt-2 break-words font-semibold text-white">{item.value}</p>}
              </div>
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            {contactContent.bottomNote}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-violet-300 transition-colors duration-300 hover:text-white"
          >
            Get in touch

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