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
  const [fadeIn, setFadeIn] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Team', href: '/teams' },
  ];

  // Scroll Effects
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
      setExpanded(isScrolled);
      setFadeIn(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const expandedWidth = '35vw';

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

      {/* DESKTOP NAVBAR (lg and up) */}
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
                const isActive =
                  pathname === l.href ||
                  (l.href !== '/' &&
                    pathname?.startsWith(l.href.replace('#', '')));
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={clsx(
                      'flex items-center gap-2 px-3 py-1 text-lg font-medium whitespace-nowrap transition-all rounded-full',
                      isActive
                        ? 'bg-[#EF641C] text-white font-semibold shadow-md rounded-full px-5 py-2'
                        : 'text-[#461b05] hover:text-[#EF641C]'
                    )}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop Slide Bar */}
          <motion.nav
            aria-hidden={!expanded}
            initial={false}
            animate={{
              width: expanded ? expandedWidth : 0,
              borderTopLeftRadius: expanded ? 32 : 9999,
              borderBottomLeftRadius: expanded ? 32 : 9999,
              opacity: expanded ? 1 : 0.95,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="absolute top-0 right-0 h-16 overflow-hidden shadow-lg z-20"
            style={{
              backgroundColor: '#9e9e9e',
              backdropFilter: 'saturate(120%) blur(6px)',
              pointerEvents: expanded ? 'auto' : 'none',
            }}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(scrolled)}
          >
            <div className="h-16 flex items-center px-4 gap-3">
              <div className="flex items-center gap-3 ml-2">
                {links.map((l) => {
                  const isActive =
                    pathname === l.href ||
                    (l.href !== '/' &&
                      pathname?.startsWith(l.href.replace('#', '')));
                  return (
                    <AnimatePresence key={l.href}>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.16 }}
                        >
                          <Link
                            href={l.href}
                            className={clsx(
                              'flex items-center px-4 py-1 text-lg font-medium transition-all rounded-full',
                              isActive
                                ? 'bg-[#EF641C] text-white font-semibold px-5 py-2 rounded-full shadow-md'
                                : 'text-[#461b05] hover:text-white/95'
                            )}
                          >
                            {l.label}
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        </div>
      </motion.div>

      {/* MOBILE NAVBAR */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#b8b8b8] py-4 px-6 flex items-center justify-between shadow-md">
        <img src="/brown.png" alt="logo" className="h-6 lg:h-8 w-auto" />

        {/* Animated Hamburger / X Icon */}
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white cursor-pointer w-8 h-6 flex flex-col justify-center mr-10"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          role="button"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ transformOrigin: 'center' }}
            className="block w-7 h-1 bg-white mb-1 rounded"
          />

          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            transition={{ duration: 0.18 }}
            className="block w-7 h-1 bg-white mb-1 rounded"
          />

          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ transformOrigin: 'center' }}
            className="block w-7 h-1 bg-white rounded"
          />
        </div>
      </div>

      {/* MOBILE SLIDE-IN MENU (from RIGHT) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-3/4 bg-[#00486B] shadow-2xl z-40 py-24 px-6 flex flex-col gap-6"
          >
            {links.map((l) => {
              const isActive =
                pathname === l.href ||
                (l.href !== '/' &&
                  pathname?.startsWith(l.href.replace('#', '')));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    'text-xl py-3 px-4 rounded-l-full text-white font-medium transition-all w-50',
                    isActive
                      ? 'bg-[#EF641C] shadow-md'
                      : 'hover:bg-white/10'
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
