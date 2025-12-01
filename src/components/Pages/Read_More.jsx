'use client';
import React, { useEffect } from 'react';

export default function ReadMore() {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal();

        sr.reveal('.about-wrapper', {
          distance: '80px',
          duration: 1200,
          easing: 'ease-out',
          origin: 'bottom',
          reset: false,
          opacity: 0,
        });
      }
    })();
  }, []);

  return (
    <section
      id="about"
      className="w-full py-12 md:py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="w-full about-wrapper max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        
        {/* Text content */}
        <div
          className="space-y-6"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: '#012e44' }}
          >
            Our Story
          </h2>

          {/* small orange line under heading - centered */}
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-[#EF641C] rounded" />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Brownstone Construction Firm is a Ghana-based property development
            and construction company committed to delivering high-quality,
            sustainable, and community-focused housing solutions. Founded in
            2024, Brownstone was established in response to the growing demand
            for modern, thoughtfully designed living spaces in Ghana's expanding
            urban and peri-urban areas.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="/about"
              className="inline-block bg-[#EF641C] hover:bg-[#c44f12] text-[#f6f5f5] font-semibold px-6 py-3 rounded-md transition-all duration-300 text-sm md:text-base"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
