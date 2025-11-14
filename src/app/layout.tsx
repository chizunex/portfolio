import type { Metadata } from 'next'
import './globals.css'
import { LoadingProvider } from '@/components/LoadingProvider'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <LoadingProvider>
          <CustomCursor />
          <Navigation />
          <main>{children}</main>
        </LoadingProvider>
      </body>
    </html>
  )
}

