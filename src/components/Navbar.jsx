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
  const [slideDropdownOpen, setSlideDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Properties',
      children: [
        { label: 'Celestia', href: '/celestia' },
      ]
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
    if (windowWidth >= 1024 && windowWidth < 2000) return '56vw';
    return '38vw';
  };

  const checkIsActive = (href) => {
    if (!href) return false;
    return href === '/'
      ? pathname === '/'
      : pathname.startsWith(href);
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

      {/* DESKTOP NAV */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block fixed top-6 right-0 z-50 pointer-events-none"
      >
        <div className="relative pointer-events-auto" style={{ height: 64 }}>
          <div className="flex items-center gap-2 pr-3">

            {/* Desktop Links */}
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
                      <span className="flex items-center gap-2 px-3 py-1 text-lg font-medium text-[#411600] whitespace-nowrap cursor-pointer">
                        {l.label}
                      </span>

                      <AnimatePresence>
                        {desktopDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                          >
                            {l.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={clsx(
                                  'block px-4 py-2 text-gray-800 hover:text-[#EF641C]',
                                  checkIsActive(child.href) && 'font-semibold text-[#d0622a]'
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
                        ? 'border-2 border-[#411600] text-[#d0622a] font-semibold'
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
                    return (
                      <div
                        key={l.label}
                        className="relative"
                        onMouseEnter={() => setSlideDropdownOpen(true)}
                        onMouseLeave={() => setSlideDropdownOpen(false)}
                      >
                        <span className="flex items-center px-4 py-1 text-lg font-medium text-[#411600] cursor-pointer">
                          {l.label}
                        </span>

                        <AnimatePresence>
                          {slideDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                            >
                              {l.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={clsx(
                                    'block px-4 py-2 text-gray-800 hover:text-[#EF641C]',
                                    checkIsActive(child.href) && 'font-semibold text-[#d0622a]'
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
                          ? 'border-2 border-[#411600] text-[#d0622a] font-semibold'
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

      {/* MOBILE NAV */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#b8b8b8] py-4 px-6 flex items-center justify-between shadow-md">
        <img src="/brown.png" alt="logo" className="h-6 w-auto" />

        {/* Hamburger */}
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer w-8 h-6 flex flex-col justify-center mr-6"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block w-7 h-1 bg-white rounded mb-1"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-7 h-1 bg-white rounded mb-1"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block w-7 h-1 bg-white rounded"
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-3/4 bg-[#00486B] shadow-2xl z-40 py-24 px-6 flex flex-col gap-4"
          >
            {/* Mobile Links */}
            {links.map((l) => {
              const isActive = checkIsActive(l.href);

              if (l.children) {
                return (
                  <div key={l.label} className="flex flex-col">
                    <div
                      className="flex justify-between items-center text-xl py-3 px-4 rounded-l-full text-white cursor-pointer"
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    >
                      <span>{l.label}</span>
                      <span>{mobileDropdownOpen ? '−' : '+'}</span>
                    </div>

                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 mt-2 flex flex-col gap-2"
                        >
                          {l.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={clsx(
                                'text-lg text-white/90 py-2',
                                checkIsActive(child.href) && 'text-[#EF641C] font-semibold'
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
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    'text-xl py-3 px-4 rounded-l-full text-white font-medium transition-all',
                    isActive ? 'bg-[#EF641C]' : 'hover:bg-white/10'
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
