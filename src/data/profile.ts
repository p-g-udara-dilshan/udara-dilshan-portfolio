import { readContentOverride } from './contentOverrides'

const baseProfile = {
  name: 'P. G. Udara Dilshan',
  shortName: 'Udara',
  role: 'Web Developer',
  secondaryRoles: ['WordPress Development', 'Responsive Web Design'],
  headline: 'Building useful and responsive websites for real-world needs.',
  description:
    'I develop WordPress websites and responsive web experiences, and I explore React, Next.js and TypeScript through AI-assisted learning projects.',
  email: 'udara.profile@gmail.com',
  phone: '+94 70 253 6103',
  location: 'Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/p-g-udara-dilshan',
  github: 'https://github.com/p-g-udara-dilshan',
  portfolio: '',
  primaryStack: ['WordPress', 'WooCommerce', 'HTML & CSS'],
  education: 'Bachelor of Information and Communication Technology (Software Technology) — awaiting graduation',
}
export const profile = { ...baseProfile, ...readContentOverride('profile', {}) }

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
