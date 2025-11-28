'use client';

import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", link: "/", isActive: pathname === "/" },
    { label: "Services", link: "/Features", isActive: pathname.startsWith("/Features") },
    { label: "About US", link: "/Pricing", isActive: pathname.startsWith("/Pricing") },
    { label: "Docs", link: "/Docs", isActive: pathname.startsWith("/Docs") },
    { label: "Contact", link: "/Contact", isActive: pathname.startsWith("/Contact") },
  ];

  return (
    <nav className="z-50 fixed top-0 left-0 w-full bg-black/40 flex justify-between items-center px-8 py-7 pr-20">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/logo5.png"
          alt="Logo"
          className="h-7 w-auto md:h-8"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4">
        {links.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            className={clsx(
              "font-medium px-3 py-1 transition duration-300 rounded-full",
              link.isActive ? "bg-yellow-300 text-black" : "text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Hamburger Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-1/2 bg-black/90 p-6 md:hidden z-40 animate-slide-in-right">
          <ul className="flex flex-col gap-4 mt-20">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className={clsx(
                  "font-medium px-3 py-1 transition duration-300 rounded-full",
                  link.isActive ? "bg-yellow-300 text-black" : "text-white hover:border hover:border-white"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}