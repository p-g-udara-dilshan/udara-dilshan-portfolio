import {
  Code2,
  Lightbulb,
  MonitorSmartphone,
  Palette,
  Globe,
  GraduationCap,
  Megaphone,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { readContentOverride } from '../../data/contentOverrides'

const defaultFeatures = [
  {
    title: 'WordPress & WooCommerce',
    description:
      'Building and maintaining responsive business websites, landing pages, and practical web solutions.',
    icon: Globe,
  },
  {
    title: 'Responsive Web Design',
    description:
      'Creating clean, responsive layouts that work across desktop, tablet, and mobile devices.',
    icon: MonitorSmartphone,
  },
  {
    title: 'UI/UX & Visual Design',
    description:
      'Creating interface concepts with Figma and focusing on clear layouts, usability, and visual presentation.',
    icon: Palette,
  },
  {
    title: 'Learning & Development',
    description:
      'Exploring practical web tools, AI-assisted development, and digital solutions for everyday needs.',
    icon: GraduationCap,
  },
  {
    title: 'Business Digital Solutions',
    description:
      'Supporting small businesses with web presence, social media pages, and digital content.',
    icon: Megaphone,
  },
  {
    title: 'Problem Solving',
    description:
      'Troubleshooting websites, improving functionality, and finding practical solutions to technical challenges.',
    icon: Code2,
  },
]

type AboutFeature = {title:string; description:string; icon:string}
const featureIcons = { Globe, MonitorSmartphone, Palette, GraduationCap, Megaphone, Code2, Lightbulb }
const savedFeatures = readContentOverride<AboutFeature[]>('aboutFeatures', defaultFeatures.map(({title,description}, index)=>({title,description,icon: ['Globe','MonitorSmartphone','Palette','GraduationCap','Megaphone','Code2'][index]})))
const features = savedFeatures.map(({title,description,icon})=>({title,description,icon:featureIcons[icon as keyof typeof featureIcons] || Code2}))

const defaultAboutParagraphs = [
  "I am a Web Developer with an academic background in Software Technology at Uva Wellassa University of Sri Lanka. I have completed the academic requirements of my BICT degree programme and am awaiting official graduation.",
  "My practical experience focuses on WordPress, WooCommerce, responsive website design, client-focused customization, hosting, cPanel and deployment. During my March–August 2025 internship at GW Technologies, I contributed to real client websites and collaborated with a development team.",
  "I also work on freelance websites and digital solutions for businesses, including client-focused projects such as Vibe Decor Event Planning. I enjoy using HTML, CSS and JavaScript, and I have explored Figma and modern frontend tools.",
  "I am currently strengthening my programming fundamentals and learning React, Next.js and TypeScript through hands-on and AI-assisted projects. I value honest technical communication, continuous learning and building reliable web experiences."
]
export const aboutParagraphs = readContentOverride<string[]>('aboutParagraphs', defaultAboutParagraphs)
export const aboutImage = readContentOverride<string>('aboutImage', '/about.png')

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white/[0.012] pt-7 pb-14 sm:pt-9 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-indigo-500/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {/* Section heading */}
          <SectionHeading
            label="About me"
            title="Building useful digital experiences through technology, design, and practical skills."
          />

          {/* Original typography retained, with an editable portrait on the left. */}
          <div className="mt-6 grid items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(210px,300px)_minmax(0,1fr)] lg:gap-10">
            <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[1.75rem] border border-violet-400/15 bg-violet-500/[0.06] shadow-2xl shadow-black/20 lg:mx-0">
              <img src={aboutImage} alt="Udara Dilshan – About portrait" loading="lazy" decoding="async" className="aspect-[9/16] w-full object-cover object-center" />
            </div>
            <div className="space-y-4 text-left text-[15px] leading-7 text-slate-300 sm:space-y-5 sm:text-base sm:leading-8">
              {aboutParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>

          {/* Skills and strengths */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {features.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/25 hover:bg-white/[0.045] sm:p-5"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/0 blur-3xl transition duration-500 group-hover:bg-indigo-500/15"
                />

                <div className="relative flex items-start gap-3.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-400/15 bg-indigo-500/10 text-indigo-300 transition-colors duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/15">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white sm:text-[15px]">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-left text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal principle */}
          <div className="mt-6 flex items-start gap-3 border-l-2 border-indigo-400/60 pl-4 sm:mt-7">
            <Lightbulb
              size={20}
              className="mt-1 shrink-0 text-indigo-300"
              aria-hidden="true"
            />

            <p className="text-justify text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              I believe the best digital work combines thoughtful design,
              reliable functionality, practical technology, and a clear
              understanding of what people and businesses actually need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
