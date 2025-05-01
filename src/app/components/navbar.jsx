"use client";

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="dark:bg-black bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-30">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-40 h-10 rounded-full bg-purple-700 flex items-center justify-center mr-3 opacity-80">
                <img src="bsideslogo.png" alt="bsides swfl logo" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/schedule" className="text-black dark:text-white hover:text-purple-700">
              Schedule
            </Link>
            <Link href="/speakers" className="text-black dark:text-white hover:text-purple-700">
              Speakers
            </Link>
            <Link href="/events" className="text-black dark:text-white hover:text-purple-700">
              Events
            </Link>
            <Link href="/workshops" className="text-black dark:text-white hover:text-purple-700">
              Workshops
            </Link>
            <Link href="/volunteer" className="text-black dark:text-white hover:text-purple-700">
              Volunteer
            </Link>
            <Link href="/tickets" className="text-black dark:text-white hover:text-purple-700">
              Tickets
            </Link>
            <button aria-label="Search" className="text-black dark:text-white hover:text-purple-700">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button aria-label="Search" className="text-gray-700 mr-4">
              <Search size={20} />
            </button>
            <button onClick={toggleMenu} className="text-gray-700" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/schedule" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>
              Schedule
            </Link>
            <Link href="/speakers" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>
              Speakers
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>
              Events
            </Link>
            <Link href="/workshops" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>
              Workshops
            </Link>
            <Link href="/volunteer" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>
              Volunteer
            </Link>
            <Link href="/tickets" className="text-gray-700 hover:text-purple-700 py-2" onClick={toggleMenu}>
              Tickets
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar