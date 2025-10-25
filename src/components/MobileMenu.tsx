'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger button - only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 text-gray-900 dark:text-gray-100"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-950 shadow-lg transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="self-end p-2 text-gray-900 dark:text-gray-100"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col space-y-4">
            <Link
              href="/blog"
              className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/publications"
              className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              Publications
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
