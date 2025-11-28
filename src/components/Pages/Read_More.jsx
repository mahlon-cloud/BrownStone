'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ReadMore() {
  useEffect(() => {
    // Run ScrollReveal only on client side
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          easing: 'ease-in-out',
        });

        sr.reveal('.about-text', { origin: 'left', interval: 100 });
        sr.reveal('.about-images', { origin: 'right', interval: 100 });
      }
    })();
  }, []);

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:ml-28">
        {/* Text content */}
        <div className="about-text space-y-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: "#012e44" }}>
          Our Story
        </h2>

        {/* small orange line under heading */}
        <div className="flex justify-left">
          <div className="w-20 h-1 bg-[#EF641C] rounded " />
        </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Brownstone Construction Firm is a Ghana-based property development and construction company committed to delivering high-quality, sustainable, 
            and community-focused housing solutions. Founded in 2024, 
            Brownstone was established in response to the growing demand for modern, 
            thoughtfully designed living spaces in Ghana’s expanding urban and peri-urban areas.
          </p>
          <a
            href="/about"
            className="inline-block bg-[#EF641C] hover:bg-[#c44f12] text-[#f6f5f5] font-semibold px-5 py-2.5 rounded-md transition-all duration-300 text-sm md:text-base"
          >
            Read More
          </a>
        </div>

        {/* Image side */}
        <div className="about-images flex justify-center items-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
            <Image
              src="/helmet.jpg"
              alt="helmet"
              width={900}
              height={600}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 block md:ml-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
