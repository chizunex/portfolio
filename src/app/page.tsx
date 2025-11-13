import Link from 'next/link'
import ResumeDownload from '@/components/ResumeDownload'

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-light text-zinc-100 mb-6 tracking-tight">
          Hey! I'm Bradley.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-4 font-light leading-relaxed">
          Currently a masters student studying computer science.
        </p>
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-light leading-relaxed">
          Working on anything that piques my interest.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-200 text-sm font-medium"
          >
            View Projects
            <svg
              className="w-4 h-4"
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
    </div>
  )
}
