"use client";

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, ScrollIcon, Calendar, User2, Computer, Handshake, Ribbon, RibbonIcon } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="bg-black light:bg-white shadow-sm w-[auto]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-30 mx-auto">
          <Link href="/" className="flex items-center">
            <div className="w-40 h-10 rounded-full bg-purple-700 flex items-center hover:scale-102 justify-center mr-3 opacity-80">
              <img src="bsideslogo.png" alt="bsides swfl logo" />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/aboutus" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex"><ScrollIcon size={20} className="mr-2 blur-[0.75px]" />About Us</p>
            </Link>

            <Link href="/events" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex"><Computer size={20} className="mr-2 blur-[0.75px]" />Events</p>
            </Link>

            <Link href="/schedule" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex"><Calendar size={20} className="mr-2 blur-[0.75px]" />Schedule</p>
            </Link>

            <Link href="/speakers" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex"><User2 size={20} className="mr-2 blur-[0.75px]" />Speakers</p>
            </Link>

            <Link href="/workshops" className="light:text-black hidden text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex">Workshops</p>
            </Link>

            <Link href="/sponsors" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex"><Ribbon size={20} className="mr-2 blur-[0.75px]" />Sponsors</p>
            </Link>

            <Link href="/volunteer" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex"><Handshake size={20} className="mr-2 blur-[0.75px]" />Volunteer</p>
            </Link>

            <Link href="/tickets" className="light:text-black text-orange-200 hidden hover:text-orange-300 hover:scale-105 italic">
              <p className="my-4 inline-flex">Tickets</p>
            </Link>

            <button aria-label="Search" className="light:text-black text-orange-200 hover:text-orange-300 hover:scale-105 italic">
              <Search size={20} />
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button aria-label="Search" className="text-gray-700 mr-4">
              <Search size={20} />
            </button>

            <button
              onClick={toggleMobileMenu}
              className="text-gray-700"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black shadow-md">
          <div className="flex flex-col space-y-4 bg-black">
            <Link href="/aboutus" className="text-orange-200 hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 my-4 inline-flex"><ScrollIcon size={20} className="mr-3 blur-[0.75px]" /> About Us</p>
            </Link>

            <Link href="/events" className="text-orange-200 hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"><Computer size={20} className="mr-3 blur-[0.75px]" /> Events</p>
            </Link>

            <Link href="/schedule" className="text-orange-200 hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"><Calendar size={20} className="mr-3 blur-[0.75px]" /> Schedule</p>
            </Link>

            <Link href="/speakers" className="text-orange-200 hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"><User2 size={20} className="mr-3 blur-[0.75px]" /> Speakers</p>
            </Link>

            <Link href="/workshops" className="text-orange-200 hidden hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"> Workshops</p>
            </Link>

            <Link href="/sponsors" className="text-orange-200 hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"><Ribbon size={20} className="mr-3 blur-[0.75px]" /> Sponsors</p>
            </Link>

            <Link href="/volunteer" className="text-orange-200 hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"><Handshake size={20} className="mr-3 blur-[0.75px]" /> Volunteer</p>
            </Link>

            <Link href="/tickets" className="text-orange-200  hidden hover:text-orange-300 hover:scale-99 bg-black italic" onClick={toggleMobileMenu}>
              <p className="ml-5 mb-4 inline-flex"> Tickets</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar
