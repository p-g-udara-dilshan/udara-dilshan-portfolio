
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Back to top"
      title="Back to top"
      className="
        fixed bottom-6 right-5 z-[80]
        flex h-12 w-12 items-center justify-center
        rounded-xl border border-white/50
        bg-slate-900/95 text-white
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white
        hover:bg-violet-600
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-violet-400
        sm:bottom-8 sm:right-8
      "
    >
      <ArrowUp size={21} strokeWidth={2} />
    </button>
  )
}
