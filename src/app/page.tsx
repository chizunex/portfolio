import Link from 'next/link'
import ResumeDownload from '@/components/ResumeDownload'
import MonkeyTypeTyping from '@/components/MonkeyTypeTyping'

export default function HomePage() {
  return (
    <div
      className="relative min-h-[calc(100vh-73px)] flex items-center justify-center px-6 overflow-hidden"
      data-hero-surface="true"
    >
      <div className="relative z-10 text-center max-w-3xl">
        <MonkeyTypeTyping
          h1Text="Hey! I'm Bradley"
          pTexts={[
            'Currently a masters student studying computer science',
            'Working on anything that piques my interest',
          ]}
        />
        <div className="relative z-20 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="button-hover-fill inline-flex items-center gap-2 px-8 py-3 border border-zinc-700 text-sm font-medium text-zinc-200"
          >
            <span className="relative z-10 flex items-center gap-2 text-inherit transition-colors duration-300">
              View Projects
            </span>
            <svg
              className="w-4 h-4 relative z-10 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <ResumeDownload />
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 text-center py-6 z-10">
        <p className="text-zinc-500 text-[0.67375rem] font-light">
          Bradley Mao 2025 ©
        </p>
      </footer>
    </div>
  )
}
