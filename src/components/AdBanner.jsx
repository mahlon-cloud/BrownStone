'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && !hasScrolled) {
        // Show ad banner after user scrolls 800px down the page
        if (window.scrollY > 800) {
          setIsVisible(true);
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:right-6 md:w-96 z-40"
        >
          <div
            className="rounded-lg shadow-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/townhouse-thumb.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="bg-black/60 backdrop-blur-sm p-5 md:p-6">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-white hover:text-gray-300 transition cursor-pointer"
                aria-label="Close ad"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Premium Townhouses For Rent
              </h3>

              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                2 bedroom modern, sustainable townhouses designed for contemporary lakeside living in Akosombo. Off-plan purchases are customizable pre-construction.
              </p>

              <a
                href="/townhouse"
                className="inline-block w-full text-center px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#EF641C' }}
              >
                Explore Townhouses
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}