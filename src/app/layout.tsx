import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { LoadingProvider } from '@/components/LoadingProvider'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
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
          <Navigation />
          <main>{children}</main>
        </LoadingProvider>
      </body>
    </html>
  )
}

