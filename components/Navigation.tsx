'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-b-2 border-yellow-600 bg-yellow-50/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
            flytre
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gradient transition-colors font-medium text-lg relative group"
            >
              about
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-800 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gradient transition-colors font-medium text-lg relative group"
            >
              blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-800 transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
