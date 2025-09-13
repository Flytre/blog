import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'flytre',
  description: 'software engineer & writer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-900">
          <Navigation />
          <main>{children}</main>
          <footer className="border-t border-gray-800 mt-16">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <p className="text-center text-gray-500 text-sm">
                © 2024 flytre
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
