'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-mono text-white hover:text-gray-300 transition-colors">
            flytre
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-white transition-colors font-mono text-sm"
            >
              about
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-400 hover:text-white transition-colors font-mono text-sm"
            >
              blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
