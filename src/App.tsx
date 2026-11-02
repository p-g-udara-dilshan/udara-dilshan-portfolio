import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import ProjectsPage from './pages/ProjectsPage'

function MainPortfolio() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#050816] text-slate-100">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_90%)]" />

      {/* Ambient glows */}
      <div className="pointer-events-none fixed left-[-160px] top-[35%] -z-10 h-[330px] w-[330px] rounded-full bg-violet-600/8 blur-3xl" />
      <div className="pointer-events-none fixed right-[-160px] top-[52%] -z-10 h-[330px] w-[330px] rounded-full bg-indigo-600/8 blur-3xl" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

// Static portfolio. Both / and /projects/ have real HTML entrypoints in the build.
// This check determines which React screen mounts for the current URL.
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/projects') {
    return <ProjectsPage />
  }
  return <MainPortfolio />
}
