import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-zinc-100 hover:text-white transition-colors"
          >
            Bradley.
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/albums"
              className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
            >
              Albums
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
