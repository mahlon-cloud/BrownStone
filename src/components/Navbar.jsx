'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import '../styles/globals.css';

export default function Navbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Properties',
      children: [
        { label: 'Townhouses', href: '/townhouse' },
      ],
    },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'Team', href: '/teams' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
      setExpanded(isScrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getExpandedWidth = () => {
    if (windowWidth >= 1024 && windowWidth < 2000) return '46vw';
    return '38vw';
  };

  // Helper to check if a link is active
  const checkIsActive = (href) => {
    if (!href) return false;
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <>
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-50 pointer-events-auto"
      >
        <Link href="/" className="flex items-center">
          <img src="/brown.png" alt="logo" className="h-6 lg:h-8 w-auto" />
        </Link>
      </motion.div>

      {/* DESKTOP NAVBAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block fixed top-6 right-0 z-50 pointer-events-none"
      >
        <div className="relative pointer-events-auto" style={{ height: 64 }}>
          <div className="flex items-center gap-2 pr-3">
            <div className="flex items-center gap-2 z-10">
              {links.map((l) => {
                const isActive = checkIsActive(l.href);

                if (l.children) {
                  return (
                    <div
                      key={l.label}
                      className="relative"
                      onMouseEnter={() => setDesktopDropdownOpen(true)}
                      onMouseLeave={() => setDesktopDropdownOpen(false)}
                    >
                      {/* Parent without href, no border */}
                      <span
                        className={clsx(
                          'flex items-center gap-2 px-3 py-1 text-lg font-medium whitespace-nowrap rounded-full text-[#411600]'
                        )}
                      >
                        {l.label}
                      </span>
                      <AnimatePresence>
                        {desktopDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                            style={{ overflow: 'visible' }}
                          >
                            {l.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={clsx(
                                  'block px-4 py-2 text-gray-800 hover:text-[#EF641C]',
                                  checkIsActive(child.href) ? 'font-semibold text-[#d0622a]' : ''
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={clsx(
                      'flex items-center gap-2 px-3 py-1 text-lg font-medium whitespace-nowrap transition-all rounded-full',
                      isActive
                        ? 'border-2 rounded-full border-[#411600] text-[#d0622a] font-semibold'
                        : 'text-[#411600] hover:text-[#d0622a]'
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Slide Bar */}
          <motion.nav
            aria-hidden={!expanded}
            initial={false}
            animate={{
              width: expanded ? getExpandedWidth() : 0,
              borderTopLeftRadius: expanded ? 32 : 9999,
              borderBottomLeftRadius: expanded ? 32 : 9999,
              opacity: expanded ? 1 : 0.95,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="absolute top-0 right-0 h-16 overflow-visible shadow-lg z-20"
            style={{
              backgroundColor: '#c1c1c1',
              backdropFilter: 'saturate(120%) blur(6px)',
              pointerEvents: expanded ? 'auto' : 'none',
            }}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(scrolled)}
          >
            <div className="h-16 flex items-center px-4 gap-3">
              <div className="flex items-center gap-3 ml-2">
                {links.map((l) => {
                  const isActive = checkIsActive(l.href);

                  if (l.children) {
                    const [slideDropdownOpen, setSlideDropdownOpen] = useState(false);
                    return (
                      <div
                        key={l.label}
                        className="relative"
                        onMouseEnter={() => setSlideDropdownOpen(true)}
                        onMouseLeave={() => setSlideDropdownOpen(false)}
                      >
                        <span
                          className={clsx(
                            'flex items-center px-4 py-1 text-lg font-medium rounded-full text-[#411600]'
                          )}
                        >
                          {l.label}
                        </span>
                        <AnimatePresence>
                          {slideDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                              style={{ overflow: 'visible' }}
                            >
                              {l.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={clsx(
                                    'block px-4 py-2 text-gray-800 hover:text-[#EF641C]',
                                    checkIsActive(child.href) ? 'font-semibold text-[#d0622a]' : ''
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={clsx(
                        'flex items-center px-4 py-1 text-lg font-medium transition-all rounded-full',
                        isActive
                          ? 'border-2 border-[#411600] text-[#d0622a] font-semibold px-5 py-2 rounded-full shadow-md'
                          : 'text-[#411600] hover:text-[#d0622a]'
                      )}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        </div>
      </motion.div>

      {/* MOBILE NAVBAR AND SLIDE-IN MENU */}
      {/* (unchanged) */}
    </>
  );
}
