'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Trophy } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/tournament-format', label: 'Tournament' },
    { href: '/eligibility', label: 'Rules' },
    { href: '/prizes', label: 'Prizes' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/news', label: 'News' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600/20 backdrop-blur-sm p-2 rounded-full">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">SPL</div>
              <div className="text-xs text-gray-600">Under-19</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-full transition-all duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/register" className="bg-blue-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700/90 transition-all">
              Register
            </Link>
            <Link href="/admin/login" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden bg-white/30 backdrop-blur-sm p-2 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-full transition-all text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Link
                  href="/register"
                  className="bg-blue-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
                <Link
                  href="/admin/login"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}