'use client'

import { useEffect, useState } from 'react'

export default function LoadingSpinner() {
  const [canHide, setCanHide] = useState(false)

  useEffect(() => {
    // Minimum 1 second display time
    const timer = setTimeout(() => {
      setCanHide(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Always show until minimum time has elapsed
  // Next.js will handle unmounting when route is ready
  return (
    <div className="fixed inset-0 bg-zinc-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
}

