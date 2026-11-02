import {
  Code2,
  Globe,
  Palette,
  Wrench,
  ArrowUpRight,
  Bot,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { readContentOverride } from '../../data/contentOverrides'

type Skill = {
  name: string
  icon: string
  color: string
  logoUrl?: string
}

type SkillCategory = {
  title: string
  description: string
  icon: typeof Code2
  skills: Skill[]
}

const defaultSkillCategories: SkillCategory[] = [
  {
    title: 'WordPress Development',
    description:
      'Developing and customizing WordPress and WooCommerce websites for practical business needs.',
    icon: Globe,
    skills: [
      { name: 'WordPress', icon: 'wordpress', color: '21759B' },
      { name: 'Elementor', icon: 'elementor', color: '92003B' },
      { name: 'WooCommerce', icon: 'woocommerce', color: '96588A' },
      { name: 'Website Maintenance', icon: 'wordpress', color: '21759B' },
      { name: 'cPanel', icon: 'cpanel', color: 'FF6C2C' },
      { name: 'MySQL', icon: 'mysql', color: '4479A1' },
      { name: 'SEO Basics', icon: 'google', color: '4285F4' },
      { name: 'Website Deployment', icon: 'vercel', color: 'FFFFFF' },
    ],
  },

  {
    title: 'Web Development',
    description:
      'Working with core web technologies while learning modern React-based tooling through guided projects.',
    icon: Code2,
    skills: [
      { name: 'HTML5', icon: 'html5', color: 'E34F26' },
      { name: 'CSS3', icon: 'css3', color: '1572B6' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { name: 'React.js (learning)', icon: 'react', color: '61DAFB' },
      { name: 'TypeScript (learning)', icon: 'typescript', color: '3178C6' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
      { name: 'Vite', icon: 'vite', color: '646CFF' },
      { name: 'PHP', icon: 'php', color: '777BB4' },
    ],
  },

  {
    title: 'UI/UX & Web Design',
    description:
      'Designing responsive interfaces and visual layouts with a focus on usability and presentation.',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: 'figma', color: 'F24E1E' },
      { name: 'Responsive Design', icon: 'css3', color: '1572B6' },
      { name: 'UI Design', icon: 'figma', color: 'A259FF' },
      { name: 'Website Layouts', icon: 'html5', color: 'E34F26' },
      { name: 'Landing Pages', icon: 'html5', color: 'E34F26' },
      { name: 'Canva', icon: 'canva', color: '00C4CC' },
    ],
  },

  {
    title: 'Tools & AI',
    description:
      'Using practical development and AI-assisted tools while continuing to learn modern technologies.',
    icon: Bot,
    skills: [
      { name: 'Git', icon: 'git', color: 'F05032' },
      { name: 'GitHub', icon: 'github', color: 'FFFFFF' },
      { name: 'VS Code', icon: 'visualstudiocode', color: '007ACC' },
      { name: 'Vercel', icon: 'vercel', color: 'FFFFFF' },
      { name: 'ChatGPT', icon: 'openai', color: 'FFFFFF' },
      { name: 'Gemini', icon: 'googlegemini', color: '8E75FF' },
      { name: 'CapCut', icon: 'capcut', color: 'FFFFFF' },
      { name: 'AI Image & Video', icon: 'openai', color: 'FFFFFF' },
    ],
  },
]

function SkillLogo({
  icon,
  color,
  logoUrl,
}: {
  icon: string
  color: string
  logoUrl?: string
}) {
  return (
    <>
      <img
        src={logoUrl && /^https:\/\//i.test(logoUrl) ? logoUrl : `https://cdn.simpleicons.org/${icon}/${color}`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
        onError={(event) => {
          const image = event.currentTarget
          image.style.display = 'none'

          const fallback = image.nextElementSibling as HTMLElement | null

          if (fallback) {
            fallback.style.display = 'flex'
          }
        }}
      />

      <span
        aria-hidden="true"
        className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold"
        style={{ color: `#${color}` }}
      >
        {icon.slice(0, 2).toUpperCase()}
      </span>
    </>
  )
}

const savedSkillGroups = readContentOverride<SkillCategory[]>('skillCategories', defaultSkillCategories)
const iconByTitle: Record<string, typeof Code2> = {
  'Web Development': Code2,
  'WordPress Development': Globe,
  'UI/UX & Web Design': Palette,
  'Tools & AI': Bot,
}
export const skillCategories: SkillCategory[] = savedSkillGroups.map((group) => ({
  ...group,
  icon: iconByTitle[group.title] ?? Wrench,
}))

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white/[0.012] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-5 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <SectionHeading
          label="Skills & Technologies"
          title="My digital toolkit."
          description="A practical mix of WordPress, responsive web design, frontend learning and development tools."
        />

        {/* Skill categories */}
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-8 lg:gap-6">
          {skillCategories.map(
            ({ title, description, icon: CategoryIcon, skills }, index) => (
              <div
                key={title}
                className="group/category relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-5 shadow-xl shadow-black/10 transition-all duration-300 hover:border-violet-400/20 sm:p-6 lg:p-7"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-500/0 blur-3xl transition duration-500 group-hover/category:bg-indigo-500/[0.09]"
                />

                {/* Category header */}
                <div className="relative mb-5 flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <CategoryIcon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      {description}
                    </p>
                  </div>

                  <span className="hidden rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-500 sm:inline-flex">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Skills grid */}
                <div className="relative grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex min-h-[66px] min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-[#070b16]/70 px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.045] sm:px-3.5"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                        <SkillLogo
                          icon={skill.icon}
                          color={skill.color}
                          logoUrl={skill.logoUrl}
                        />
                      </div>

                      <span className="min-w-0 text-xs font-semibold leading-5 text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
                        {skill.name}
                      </span>

                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                        className="ml-auto shrink-0 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
