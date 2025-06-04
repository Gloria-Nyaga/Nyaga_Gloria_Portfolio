
"use client";

import { useState } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden flex flex-col justify-center items-center space-y-1 z-50"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {isOpen ? (
        <FaTimes className="w-6 h-6 md:h-8 md:w-8 text-gray-800" />
      ) : (
        <FaBars className="w-6 h-6 md:h-8 md:w-8 text-gray-800" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId && targetId !== '') {
      event.preventDefault();
      setMenuOpen(false);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMenuOpen(false);
    }
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 mx-auto max-w-7xl bg-white relative">
      <div className="flex items-center justify-between w-full">
        <div className="ml-4 md:ml-12 mr-10">
          <Link href="/">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic font-[cursive] bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
              Gloria.
            </h1>
          </Link>
        </div>
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Navbar for larger screens */}
      <nav className="hidden lg:flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-8 text-purple-800 mr-16">
        {[
          { href: '/', label: 'Home', sectionId: '' },
          { href: '#about', label: 'About', sectionId: 'about' },
          { href: '#skills', label: 'Skills', sectionId: 'skills' },
          { href: '#projects', label: 'Projects', sectionId: 'projects' },
          { href: '#contact', label: 'Contact', sectionId: 'contact' }
        ].map(({ href, label, sectionId }, index) => (
          <Link
            key={index}
            href={href}
            className={`flex items-center gap-2 text-lg sm:text-[20px] md:text-[18px] lg:text-[22px] xl:text-[25px] transition-colors duration-200 ${
              isActive(href) ? 'font-bold text-fuchsia-600' : 'hover:text-purple-600'
            }`}
            onClick={(e) => handleLinkClick(e, sectionId)}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            id="overlay"
            className="fixed inset-0 bg-gray-900 opacity-70 z-40"
            onClick={handleOverlayClick}
          />
          <nav id="mobile-menu" className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white bg-opacity-95 z-50 p-4 space-y-4 text-purple-800">
            {[
              { href: '/', label: 'Home', sectionId: '' },
              { href: '#about', label: 'About', sectionId: 'about' },
              { href: '#skills', label: 'Skills', sectionId: 'skills' },
              { href: '#projects', label: 'Projects', sectionId: 'projects' },
              { href: '#contact', label: 'Contact', sectionId: 'contact' }
            ].map(({ href, label, sectionId }, index) => (
              <Link
                key={index}
                href={href}
                className={`flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-[26px] py-2 transition-colors duration-200 ${
                  isActive(href) ? 'font-bold text-fuchsia-600' : 'hover:text-purple-600'
                }`}
                onClick={(e) => handleLinkClick(e, sectionId)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="fixed top-4 right-8 mt-5 z-50">
            <HamburgerMenu isOpen={true} toggleMenu={toggleMenu} />
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;