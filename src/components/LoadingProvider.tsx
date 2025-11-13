'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface LoadingContextType {
  setLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider')
  }
  return context
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show loading on every pathname change
    setLoading(true)
    
    // Minimum 0.5 second display time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {children}
      {loading && (
        <div className="fixed inset-0 bg-zinc-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  )
}

