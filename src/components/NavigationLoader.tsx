'use client'

import { useEffect, useState, useTransition } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function NavigationLoader() {
  const [loading, setLoading] = useState(false)
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Show loading when pathname or search params change
    setLoading(true)
    
    // Minimum 1 second display time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  // Also show loading during pending transitions
  const showLoader = loading || isPending

  if (!showLoader) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-zinc-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
}

