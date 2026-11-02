import { readContentOverride } from './contentOverrides'

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  details: string
  image: string
  category: string
  date: string
  year: string
  technologies: string[]
  links: ProjectLink[]
  resources?: ProjectLink[]
  featured?: boolean
}

const defaultProjects: Project[] = [
  {
    id: 'vibe-decor-event-planning',
    slug: 'vibe-decor-event-planning',
    title: 'Vibe Decor – Event Planning Website',
    description: 'Real freelance client website with event galleries, decoration services, engagement packages and WhatsApp enquiries.',
    details: `Developed a responsive event planning and decoration website for Vibe Decor in Badulla, Sri Lanka, using React, TypeScript and Vite. The design features a premium dark-and-gold interface, event portfolio, service sections, engagement package details and WhatsApp enquiry actions.

The code includes a Supabase-oriented content management architecture. Administrative functions depend on the database configuration and are not assumed live. This was collaborative client-oriented work.`,
    image: '/vibe-decor.png',
    category: 'Freelance Client Project',
    date: 'Oct–Nov 2026',
    year: '2026',
    technologies: ['React.js', 'TypeScript', 'Vite', 'Supabase'],
    links: [
      { label: 'Live Demo', url: 'https://vibe-decor-event-planning.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Vibe-Decor-Event-Planning' },
    ],
    featured: true,
  },

  {
    id: 'wedding-invitation-website',
    slug: 'wedding-invitation-website',
    title: 'Digital Wedding Invitation Website',
    description: 'Floral-themed single-page wedding invitation design with ceremony details, photography, and event information.',
    details: `A wedding invitation website concept created using HTML, CSS and JavaScript. The interface contains an elegant emerald-and-ivory theme, couple introduction, photo sections, ceremony and reception times, and venue information.

Save-the-Date and music-control interface elements are included in the design, but their operation is not independently verified. The project has a GitHub repository but no current live deployment.`,
    image: '/wedding-invitation.png',
    category: 'Frontend Development',
    date: 'Nov 2026',
    year: '2026',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Wedding_Invitation_Website' },
    ],
  },

  {
    id: 'resumeforge',
    slug: 'resumeforge',
    title: 'ResumeForge',
    description:
      'An ATS-focused resume builder with step-by-step editing, multiple templates, live previews, resume analysis, PDF generation, and autosave.',
    details: `ResumeForge is a responsive, AI-assisted frontend project designed to make creating professional, ATS-friendly resumes easier. Its step-by-step editing experience helps users organise their resume information, while the live preview shows changes as they work.

The application includes multiple resume templates, ATS-oriented feedback, PDF generation and download, and client-side autosave. The interface is designed for desktop and mobile screens.

The project uses React, TypeScript, Vite, Tailwind CSS, Zustand, React Hook Form, Zod, and React PDF.`,
    image: '/resumeforge.png',
    category: 'Frontend Development',
    date: 'Sep 2026',
    year: '2026',
    technologies: [
      'React.js',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Zustand',
      'React Hook Form',
      'Zod',
      'React PDF',
    ],
    links: [
      { label: 'Live Demo', url: 'https://resumeforge-ten-peach.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/ResumeForge' },
    ],
    featured: true,
  },

  {
    id: 'devlink',
    slug: 'devlink',
    title: 'DevLink',
    description:
      'An AI-assisted full-stack learning project for a developer social platform with profiles, developer search, skills-based filtering, and dynamic profile pages.',
    details: `DevLink is an AI-assisted full-stack learning project where users can create developer profiles, browse other developers, search by name or username, filter by skills, and view dynamic profile pages.

The project explores full-stack development using the Next.js App Router, TypeScript, Tailwind CSS, Server Actions, Prisma ORM, and a Neon PostgreSQL database. It is deployed through Vercel.`,
    image: '/devlink.png',
    category: 'Full-Stack Development',
    date: 'May 2026',
    year: '2026',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Vercel',
    ],
    links: [
      { label: 'Live Demo', url: 'https://build-dev-link-platform.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Devlink-Developer-Network' },
    ],
    featured: true,
  },

  {
    id: 'modern-portfolio-website-ui-design',
    slug: 'modern-portfolio-website-ui-design',
    title: 'Modern Portfolio Website UI Design',
    description:
      'A premium dark portfolio concept designed in Figma, focusing on responsive layouts, typography, visual hierarchy, and polished project presentation.',
    details: `This project is a modern portfolio website concept manually designed in Figma. The design explores a dark, premium visual style, responsive layouts, typography, spacing, and clear visual hierarchy.

The concept covers the main stages of a portfolio experience, including the hero, about, skills and tools, featured projects, contact section, and calls to action. The focus is on presenting development work in an organised and visually consistent interface.`,
    image: '/modern-portfolio-website-ui-design.png',
    category: 'UI/UX Design',
    date: 'Oct 2026',
    year: '2026',
    technologies: ['Figma', 'UI/UX Design', 'Responsive Web Design'],
    links: [
      { label: 'Figma Design', url: 'https://www.figma.com/design/09BthdqbV6jHl34hmeoxJJ/modern-portfolio-ui-design?node-id=0-1' },
    ],
  },

  {
    id: 'universe',
    slug: 'universe',
    title: 'UniVerse – University Student Management System',
    description:
      'A responsive university management prototype bringing courses, assignments, grades, timetables, attendance, announcements, and student services together.',
    details: `UniVerse is a university student management system prototype designed with Figma Make. It brings common academic activities into one central experience for students and lecturers.

The prototype covers a student dashboard, course management, assignments, grades and academic progress, timetables, attendance, announcements, messaging, notifications, and profile settings. The design focuses on a premium SaaS-style interface, responsive layouts, clear information hierarchy, and consistent interface patterns.`,
    image: '/universe.png',
    category: 'UI/UX Design',
    date: 'Aug–Sep 2026',
    year: '2026',
    technologies: [
      'Figma',
      'UI/UX Design',
      'Responsive Web Design',
      'Web Development',
    ],
    links: [
      { label: 'Prototype', url: 'https://crave-byte-68004680.figma.site/' },
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/UniversityStudentManagementSystem' },
    ],
  },

  {
    id: 'bloom-and-petals',
    slug: 'bloom-and-petals',
    title: 'Bloom & Petals – Modern E-Commerce UI',
    description:
      'An AI-assisted responsive flower-shop UI with product categories, featured arrangements, a modern hero section, and an interactive contact form.',
    details: `Bloom & Petals is a responsive e-commerce frontend for a floral delivery service, created using React.js and Vite with AI-assisted development.

Its interface includes a dynamic hero section, product categories, a featured-items showcase, and an interactive contact form. The project focuses on component-based development, responsive layouts, and a smooth user experience across screen sizes. It is deployed using Vercel.`,
    image: '/bloom-and-petals.png',
    category: 'Frontend Development',
    date: 'Apr 2026',
    year: '2026',
    technologies: ['React.js', 'JavaScript', 'Vite', 'CSS3', 'Vercel'],
    links: [
      { label: 'Live Demo', url: 'https://bloom-and-petals-react-mf8m.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Bloom-and-Petals-REACT' },
    ],
    featured: true,
  },

  {
    id: 'cup-of-joy-cafe',
    slug: 'cup-of-joy-cafe',
    title: 'Cup of Joy Café – Interactive Web Interface',
    description:
      'A single-page café website with responsive layouts, UI animations, client-side validation, and frontend animations.',
    details: `Cup of Joy Café is a modern, single-page landing page designed for a café business. The development work focused on responsive presentation and UI animations across different screen sizes.

JavaScript provides client-side form validation, while asset-loading optimisation supports faster page loading. The project was built with HTML, CSS, and JavaScript.`,
    image: '/cup-of-joy-cafe.png',
    category: 'Frontend Development',
    date: 'Apr 2026',
    year: '2026',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Live Demo', url: 'https://udara-dilshan.github.io/Cup_of_Joy_Cafe---Coffee_Shop/' },
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Cup_of_Joy_Cafe---Coffee_Shop' },
    ],
  },

  {
    id: 'ai-powered-image-classifier-web-app',
    slug: 'ai-powered-image-classifier-web-app',
    title: 'AI-Powered Image Classifier Web App',
    description:
      'A computer-vision web application that classifies objects in uploaded images using a Vision Transformer model.',
    details: `This hands-on project brings a computer-vision model into a web application. Users upload an image and the application produces an object-classification result.

The project uses Google's Vision Transformer (ViT) model with Python, Hugging Face, and Gradio. It demonstrates the practical deployment of an image-classification model through a web interface.`,
    image: '/ai-powered-image-classifier-web-app.png',
    category: 'AI & Machine Learning',
    date: 'Oct 2025',
    year: '2025',
    technologies: ['Python', 'Hugging Face', 'Gradio', 'Computer Vision'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/AI-Image-Classifier-Vision-Transformer-Demo' },
    ],
  },

  {
    id: 'learnhub-learning-management-system',
    slug: 'learnhub-learning-management-system',
    title: 'LearnHub – Learning Management System',
    description:
      'A learning platform frontend concept with admin and student areas, course views, quizzes and progress interfaces.',
    details: `LearnHub is an online learning platform built with React.js, TypeScript, and Tailwind CSS. Its prototype presents an admin dashboard for course management and a student portal for accessing learning content.

Documented features include interactive video lessons and learning materials, quiz interfaces, progress tracking, and community discussion concepts. The interface is responsive across screen sizes.`,
    image: '/learnhub-learning-management-system.png',
    category: 'Frontend Development',
    date: 'Jun 2025',
    year: '2025',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/LearnHub-LMS-Platform' },
    ],
  },

  {
    id: 'socialconnect',
    slug: 'socialconnect',
    title: 'SocialConnect – Social Media Platform',
    description:
      'A frontend social networking UI concept with profile, post, messaging and notification interfaces.',
    details: `SocialConnect is a social networking application developed with React, TypeScript, and Tailwind CSS. The interface demonstrates profile layouts, image-enabled post creation, and messaging screens.

The project explores notification UI, responsive layouts, and a focus on smooth interface interactions. The documented implementation emphasises component-based development, type safety, and mobile-first design.`,
    image: '/socialconnect-a-beautiful-fully-featured-social-media-platform.png',
    category: 'Frontend Development',
    date: 'Jun 2025',
    year: '2025',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: [],
  },

  {
    id: 'gadget-lanka-wordpress-website',
    slug: 'gadget-lanka-wordpress-website',
    title: 'Gadget Lanka – WordPress Website',
    description:
      'A WordPress eCommerce practice website for the Sri Lankan technology market with electronics categories, cash on delivery, search, wishlist, and cart.',
    details: `Gadget Lanka is a WordPress e-commerce project tailored to the Sri Lankan technology market. Its sample product catalogue focuses on laptops, smartphones, and accessories.

The documented features include cash on delivery, product search and filtering, wishlist support, shopping carts, user accounts, profile customisation, order tracking, and address management. The project explores WordPress, WooCommerce, PHP and responsive storefront design in a practice environment.`,
    image: '/gadget-lanka-wordpress-website.png',
    category: 'WordPress Development',
    date: 'May 2025',
    year: '2025',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Gadget-Lanka-Ecommerce-Wordpress' },
    ],
  },

  {
    id: 'supermarket-wordpress-website',
    slug: 'supermarket-wordpress-website',
    title: 'Supermarket – WordPress Website',
    description:
      'A responsive supermarket e-commerce website with product search, product details, ratings, cart, checkout, accounts, and payment options.',
    details: `This WordPress e-commerce project provides a supermarket shopping experience with product search and detailed product pages. Its documented features include product ratings, add-to-cart, checkout, login and registration, and a contact form.

The sample checkout experience shows bank transfer and cash-on-delivery options; no real payments or order fulfilment are claimed. The website was built to work responsively across screen sizes.`,
    image: '/supermarket-wordpress-website.png',
    category: 'WordPress Development',
    date: 'Aug 2025',
    year: '2025',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Supermarket-eCommerce-Website-Project' },
    ],
  },

  {
    id: 'eth-yahana-hotel-website',
    slug: 'eth-yahana-hotel-website',
    title: 'Eth Yahana Hotel Website',
    description:
      'A responsive hotel website with booking forms, room listings, amenities, customer testimonials, and location information.',
    details: `Eth Yahana Hotel is a WordPress website designed to present the hotel's accommodation and hospitality services. The documented features include a booking form with check-in and check-out date selection, room listings, amenity highlights, customer testimonials, and location information using Google Maps.

The responsive design provides visitors with a way to explore room types, facilities, and contact details. The project uses WordPress and standard web technologies.`,
    image: '/eth-yahana-hotel-website.png',
    category: 'WordPress Development',
    date: 'Mar–Apr 2025',
    year: '2025',
    technologies: ['WordPress', 'PHP', 'CSS3', 'JavaScript'],
    links: [],
  },

  {
    id: 'dsb-bank',
    slug: 'dsb-bank',
    title: 'DSB Bank',
    description:
      'A WordPress banking website developed as a team project with a modern, secure, user-friendly design.',
    details: `The DSB Bank website was developed as a team project and forms part of the WordPress website work associated with GW Technologies.

The project focused on a modern, secure, user-friendly online presentation and clear information structure for visitors.`,
    image: '/dsb-bank.png',
    category: 'WordPress Development',
    date: 'Mar–Apr 2025',
    year: '2025',
    technologies: ['WordPress', 'Elementor', 'PHP', 'CSS3'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/DSB-Bank-Website' },
    ],
  },

  {
    id: 'sahas-engineering-website',
    slug: 'sahas-engineering-website',
    title: 'Sahas Engineering Website',
    description:
      'A professional WordPress website developed with a team to present Sahas Engineering services through a responsive interface.',
    details: `This website was developed with the GW Technologies team to present Sahas Engineering and its engineering services.

The project focuses on professional presentation, a responsive layout, and a user-friendly way for visitors to explore the company's service information.`,
    image: '/sahas-engineering-website.png',
    category: 'WordPress Development',
    date: 'Apr–May 2025',
    year: '2025',
    technologies: ['WordPress', 'Elementor', 'PHP', 'CSS3'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Sahas-Engineering-Website' },
    ],
  },

  {
    id: 'gw-technologies-company-website',
    slug: 'gw-technologies-company-website',
    title: 'GW Technologies Company Website',
    description:
      'The official company website developed with a team, using WordPress to provide a modern, responsive, and user-friendly online presence.',
    details: `This project contributed to the official GW Technologies company website. Developed with WordPress as part of the team, the site presents the company's online presence through a modern and responsive design.

The work focused on a user-friendly experience and accessible presentation of the company and its technology services.`,
    image: '/gw-technologies-company-website.png',
    category: 'WordPress Development',
    date: 'Apr–May 2025',
    year: '2025',
    technologies: ['WordPress', 'Elementor', 'PHP', 'CSS3'],
    links: [],
  },

  {
    id: 'viyana-cakes-shop',
    slug: 'viyana-cakes-shop',
    title: 'Viyana Cakes Shop',
    description:
      'A responsive cake-shop website with elegant presentation, smooth navigation, and content showcasing cake collections and services.',
    details: `The Viyana Cakes WordPress catalogue was developed to present cake collections, using WooCommerce for product listings and WhatsApp for direct order enquiries rather than a verified online payment process.

The work focused on smooth navigation, an organised presentation, and dynamic content management for showcasing the business offering. This project was associated with the GW Technologies development team.`,
    image: '/viyana-cakes-shop.png',
    category: 'WordPress Development',
    date: 'Jul 2025',
    year: '2025',
    technologies: ['WordPress', 'WooCommerce', 'CSS3', 'WhatsApp'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Viyana-Cakes-eCommerce-Website' },
    ],
  },

  {
    id: 'serandib-tours',
    slug: 'serandib-tours',
    title: 'Serandib Tours',
    description:
      'A responsive travel website with an elegant design, seamless navigation, and content presenting tour and travel services.',
    details: `Serandib Tours is a modern website developed to showcase travel and tour services. The presentation focuses on an elegant design, responsive layouts, and straightforward navigation.

The website gives visitors an online place to explore the company's travel offering and related information. This project was associated with the GW Technologies development team.`,
    image: '/serandib-tours.png',
    category: 'WordPress Development',
    date: 'Jul 2025',
    year: '2025',
    technologies: ['WordPress', 'Elementor', 'CSS3', 'JavaScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Serandip-Tours-Tourism-Website' },
    ],
  },

  {
    id: 'ediriweera-construction-website',
    slug: 'ediriweera-construction-website',
    title: 'Ediriweera Construction Website',
    description:
      'A responsive construction-company website featuring professional presentation, intuitive navigation, and a project portfolio.',
    details: `This WordPress website was developed for Ediriweera Construction. It presents the company's construction projects and engineering services through a professional design and responsive layout.

The site focuses on clear navigation and an organised portfolio for showcasing the company's work. The project was associated with the GW Technologies development team.`,
    image: '/ediriweera-construction-website.png',
    category: 'WordPress Development',
    date: 'Sep 2025',
    year: '2025',
    technologies: ['WordPress', 'Elementor', 'CSS3', 'JavaScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/p-g-udara-dilshan/Ediriweera-Construction-Website' },
    ],
  },
]

export const projects: Project[] = readContentOverride<Project[]>('projects', defaultProjects)
