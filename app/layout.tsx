import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'flytre',
  description: 'creative technologist & digital storyteller',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <Navigation />
          <main>{children}</main>
          <footer className="border-t-2 border-gray-200 mt-16">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <p className="text-center text-gray-500 text-sm">
                © 2024 flytre • crafted with curiosity
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
