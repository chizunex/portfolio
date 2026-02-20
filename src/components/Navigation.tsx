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
              href="/my-car"
              className="h-6 transition-transform hover:scale-105 active:scale-95"
              title="My Car - GR86"
            >
              <img
                src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-02-20%2FMiniMax-M2.5%2F2024276815224250858%2F665e63fe877073d3c86958ddba289748986a1864c771b44cc9bfaf07393be0e4..png?Expires=1771681668&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=%2BeChW2VnJr2%2FSr71AZjn%2FjfmhEA%3D"
                alt="My Car - GR86"
                className="h-full w-auto"
              />
            </Link>
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
