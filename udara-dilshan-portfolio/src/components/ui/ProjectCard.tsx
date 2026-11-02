import { useEffect, useState } from 'react'
import {
  Github,
  Linkedin,
  MonitorPlay,
  X,
  ExternalLink,
} from 'lucide-react'
import type { Project, ProjectLink } from '../../data/projects'

type ProjectCardProps = {
  project: Project
  enableDetails?: boolean
}

type ProjectSocialLinks = {
  demo: ProjectLink | null
  github: ProjectLink | null
  linkedin: ProjectLink | null
}

function getSocialLinks(project: Project): ProjectSocialLinks {
  const result: ProjectSocialLinks = {
    demo: null,
    github: null,
    linkedin: null,
  }

  for (const link of project.links ?? []) {
    const url = link.url?.trim()
    const label = link.label?.toLowerCase().trim() ?? ''

    if (!url || !/^https?:\/\//i.test(url)) continue

    if (
      label === 'linkedin' ||
      /linkedin\.com|lnkd\.in/i.test(url)
    ) {
      result.linkedin ??= link
    } else if (
      label === 'github' ||
      /github\.com/i.test(url) ||
      /source code|repository/i.test(label)
    ) {
      result.github ??= link
    } else if (
      /demo|live|preview|design|prototype/i.test(label)
    ) {
      result.demo ??= link
    }
  }

  return result
}

const iconButtonClass = `
  inline-flex h-11 w-11 shrink-0 items-center justify-center
  rounded-xl border border-white/30
  bg-white/[0.045] text-slate-200
  transition-all duration-300
  hover:border-white/75 hover:bg-white/10 hover:text-white
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-violet-400
`

function SocialIconLinks({
  links,
  title,
  centered = false,
}: {
  links: ProjectSocialLinks
  title: string
  centered?: boolean
}) {
  const items = [
    {
      key: 'demo',
      link: links.demo,
      icon: <MonitorPlay size={19} strokeWidth={1.8} />,
      fallback: 'Live demo or preview',
    },
    {
      key: 'github',
      link: links.github,
      icon: <Github size={19} strokeWidth={1.8} />,
      fallback: 'GitHub repository',
    },
    {
      key: 'linkedin',
      link: links.linkedin,
      icon: <Linkedin size={19} strokeWidth={1.8} />,
      fallback: 'LinkedIn project post',
    },
  ].filter((item) => item.link !== null)

  // Missing links are omitted completely; no disabled or placeholder icons.
  if (items.length === 0) return null

  return (
    <div
      role="group"
      aria-label={`${title} links`}
      className={`flex flex-wrap items-center gap-3 ${
        centered ? 'justify-center' : ''
      }`}
    >
      {items.map((item) => {
        const link = item.link!

        return (
          <a
            key={item.key}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label || item.fallback}
            aria-label={`${link.label || item.fallback} for ${title}`}
            className={iconButtonClass}
            onClick={(event) => event.stopPropagation()}
          >
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export function ProjectCard({
  project,
  enableDetails = false,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  const title = project.title?.trim() || 'Untitled Project'
  const description = project.description?.trim() || ''
  const details = project.details?.trim() || description
  const category = project.category?.trim() || 'Web Development'
  const image = project.image
  const technologies = Array.isArray(project.technologies)
    ? project.technologies.filter(
        (item): item is string =>
          typeof item === 'string' && item.trim().length > 0,
      )
    : []

  const links = getSocialLinks(project)
  const hasSocialLinks = Boolean(
    links.demo || links.github || links.linkedin,
  )

  const resourceLinks = (project.resources ?? []).filter(
    (link) =>
      typeof link.url === 'string' &&
      /^https?:\/\//i.test(link.url.trim()),
  )

  useEffect(() => {
    if (!isOpen || !enableDetails) return

    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, enableDetails])

  const openDetails = () => {
    if (enableDetails) setIsOpen(true)
  }

  const closeDetails = () => setIsOpen(false)

  const detailParagraphs = details
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <>
      <article
        role={enableDetails ? 'button' : undefined}
        tabIndex={enableDetails ? 0 : undefined}
        aria-label={
          enableDetails ? `View details for ${title}` : undefined
        }
        onClick={enableDetails ? openDetails : undefined}
        onKeyDown={
          enableDetails
            ? (event) => {
                if (
                  event.target !== event.currentTarget
                ) {
                  return
                }

                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault()
                  openDetails()
                }
              }
            : undefined
        }
        className={`
          group relative flex h-full min-h-[570px] w-full flex-col
          overflow-hidden rounded-2xl border border-white/30
          bg-[#0b1020]
          shadow-[0_12px_40px_rgba(0,0,0,0.2)]
          transition-all duration-300
          hover:-translate-y-1.5 hover:border-white/70
          hover:shadow-[0_22px_55px_rgba(76,29,149,0.2)]
          ${
            enableDetails
              ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400'
              : ''
          }
        `}
      >
        {/* Project image */}
        <div className="relative h-[230px] shrink-0 overflow-hidden bg-slate-900">
          {image && !imageFailed ? (
            <img
              src={image}
              alt={`${title} project preview`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="
                h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950">
              <span className="text-base text-slate-400">
                Project Preview
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/90 via-transparent to-black/10" />

          <span
            className="
              absolute left-4 top-4 rounded-full
              border border-white/40 bg-[#080c18]/85
              px-3.5 py-2 text-[11px] font-semibold
              text-white backdrop-blur-md
            "
          >
            {category}
          </span>
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3
            className="
              line-clamp-2 min-h-[58px] text-lg font-semibold
              leading-7 text-white transition-colors duration-300
              group-hover:text-violet-200
            "
          >
            {title}
          </h3>

          <p className="mt-2 line-clamp-4 min-h-[96px] text-sm leading-6 text-slate-300">
            {description}
          </p>

          {/* Technologies are names, not icons */}
          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Technologies
            </p>

            <div className="flex min-h-[58px] flex-wrap content-start gap-2">
              {technologies.slice(0, 8).map((technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="
                    rounded-lg border border-white/25
                    bg-white/[0.035] px-3 py-2
                    text-xs font-medium text-slate-200
                    transition-colors duration-200
                    hover:border-white/60 hover:bg-white/[0.08]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Only available icons are shown */}
          {hasSocialLinks && (
            <div className="mt-auto flex justify-center border-t border-white/20 pt-5">
              <SocialIconLinks
                links={links}
                title={title}
                centered
              />
            </div>
          )}

          {enableDetails && (
            <p className="mt-3 text-center text-xs text-slate-400 transition-colors group-hover:text-violet-200">
              Click to view project details
            </p>
          )}
        </div>
      </article>

      {/* Popup is enabled only when enableDetails is true */}
      {enableDetails && isOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/80 p-3 backdrop-blur-md sm:p-6
          "
          onClick={closeDetails}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`${title} details`}
            onClick={(event) => event.stopPropagation()}
            className="
              relative flex max-h-[92dvh] w-full max-w-5xl
              flex-col overflow-y-auto rounded-2xl
              border border-white/40 bg-[#0b1020]
              shadow-[0_25px_100px_rgba(0,0,0,0.65)]
              animate-in fade-in zoom-in-95 duration-200
            "
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeDetails}
              aria-label="Close project details"
              title="Close"
              className="
                sticky right-3 top-3 z-20 ml-auto -mb-11 mr-3 mt-3
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl border border-white/50
                bg-[#080c18]/90 text-white
                transition-colors hover:border-white hover:bg-white/15
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-violet-400
              "
            >
              <X size={20} />
            </button>

            {/* Full image on top. object-contain prevents cropping. */}
            <div className="w-full shrink-0 border-b border-white/20 bg-[#05070d]">
              {image && !imageFailed ? (
                <img
                  src={image}
                  alt={`${title} full project preview`}
                  onError={() => setImageFailed(true)}
                  className="
                    mx-auto block max-h-[42vh] w-full
                    object-contain sm:max-h-[48vh]
                  "
                />
              ) : (
                <div className="flex h-[220px] w-full items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950 sm:h-[280px]">
                  <span className="text-base text-slate-400">
                    Project Preview
                  </span>
                </div>
              )}
            </div>

            {/* All other details are below the full-width image */}
            <div className="p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/30 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-violet-200">
                  {category}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Project details
                </span>
              </div>

              <h2 className="mt-4 pr-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {title}
              </h2>

              <div className="mt-5 space-y-4">
                {detailParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-7 text-slate-300 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {technologies.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.13em] text-slate-300">
                    Technologies used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology, index) => (
                      <span
                        key={`${technology}-modal-${index}`}
                        className="
                          rounded-lg border border-white/30
                          bg-white/[0.04] px-3.5 py-2
                          text-sm font-medium text-slate-200
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {hasSocialLinks && (
                <div className="mt-8 border-t border-white/20 pt-6">
                  <p className="mb-4 text-sm font-medium text-slate-300">
                    Project links
                  </p>

                  <SocialIconLinks
                    links={links}
                    title={title}
                  />
                </div>
              )}

              {/* Additional real resources, such as an app download */}
              {resourceLinks.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {resourceLinks.map((resource) => (
                    <a
                      key={`${resource.label}-${resource.url}`}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-xl border border-white/30
                        bg-white/[0.04] px-4 py-3
                        text-sm font-medium text-slate-200
                        transition-colors hover:border-white/70
                        hover:bg-white/[0.08] hover:text-white
                      "
                    >
                      {resource.label}
                      <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-8 flex justify-end border-t border-white/15 pt-5">
                <button
                  type="button"
                  onClick={closeDetails}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl border border-white/40
                    bg-white/[0.05] px-6 py-3
                    text-sm font-semibold text-white
                    transition-colors hover:border-white/80
                    hover:bg-white/[0.1]
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-violet-400
                  "
                >
                  <X size={16} />
                  Close details
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default ProjectCard