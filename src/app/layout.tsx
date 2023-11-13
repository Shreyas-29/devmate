import { Header, Providers } from '@/components'
import { Toaster } from '@/components/ui/Toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope, Plus_Jakarta_Sans } from 'next/font/google'

const fontBase = Inter({ subsets: ['latin'], variable: "--font-base" })

export const metadata: Metadata = {
  title: 'DevMate | AI-Powered Coding Platform for Developers',
  description: 'DevMate is an AI-powered platform for developers to learn and grow their skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen antialiased font-base bg-background",
        fontBase.variable
      )}>
        <Providers attribute='class' defaultTheme='dark' enableSystem>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  )
}
