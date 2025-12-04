'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState('/bkgnew.jpg');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateWindowWidth = () => setWindowWidth(window.innerWidth);

    const updateImage = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let chosen = '/bkgnew.jpg';

      if (width < 768) {
        chosen = '/ph.jpg'; // Mobile
      } else if (width >= 768 && width <= 1024) {
        chosen = '/ip1.jpg'; // iPad / tablets
      } else {
        chosen = '/bkgnew.jpg'; // Normal desktop / Mac / large screens
      }

      setHeroImage(chosen);
      updateWindowWidth();
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  // Helper to adjust title sizes for different screens
  const getTitleClass = () => {
    if (windowWidth < 768) return 'text-3xl';
    if (windowWidth >= 768 && windowWidth < 1024) return 'text-4xl';
    if (windowWidth >= 1024 && windowWidth < 1440) return 'text-6xl'; // Normal desktop
    return 'text-8xl'; // Mac / large screens
  };

  // Helper to adjust paragraph sizes
  const getParagraphClass = () => {
    if (windowWidth < 768) return 'text-base';
    if (windowWidth >= 768 && windowWidth < 1024) return 'text-lg';
    if (windowWidth >= 1024 && windowWidth < 1440) return 'text-2xl'; // Normal desktop
    return 'text-4xl'; // Mac / large screens
  };

  // Adjust container spacing for normal desktop
  const getContainerClass = () => {
    if (windowWidth >= 1024 && windowWidth < 1440) return 'mt-16 ml-10'; // Normal desktop
    if (windowWidth >= 1440) return 'mt-30 ml-20'; // Large / Mac
    return 'mt-10 ml-6'; // Tablets & mobile
  };

  return (
    <header className="w-full min-h-screen bg-black">

      {/* ---------- MOBILE & TABLET ---------- */}
      <div className="w-full lg:hidden relative h-screen overflow-hidden">
        <Image
          src={heroImage}
          alt="Brownstone Construction - Hero Background"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />

        <div className="absolute inset-0 z-20 flex items-end pb-15 px-6 ml-4 md:ml-9">
          <div className="w-full max-w-4xl">
            <h1 className={`font-extrabold leading-tight text-white ${getTitleClass()}`} style={{ color: '#411600' }}>
              Brownstone Construction Firm
            </h1>

            <p className={`mt-3 font-semibold text-[#6b6b6b] ${getParagraphClass()}`}>
              Redesigning Africa's Future, <br/>Brick by Brick.
            </p>

            <div className="bg-white/10 p-3 rounded-lg border mt-12 md:mt-20" style={{ borderColor: '#838385' }}>
              <h3 className="text-base md:text-lg font-semibold text-white" style={{ color: '#EF641C' }}>Why Brownstone?</h3>
              <ul className="mt-2 text-sm md:text-base text-[#515151]">
                <li className="mt-1">Full-spectrum development</li>
                <li className="mt-1">Sustainable systems</li>
                <li className="mt-1">Local expertise with global standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden lg:flex h-screen items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Brownstone Construction - Hero Background"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        <div className={`container mx-auto px-8 lg:px-7 relative z-20 flex flex-col lg:flex-row items-center gap-12 ${getContainerClass()}`}>
          <div className="lg:w-1/2 text-white">
            <h1 className={`font-extrabold leading-tight ${getTitleClass()}`} style={{ color: '#411600' }}>
              Brownstone Construction Firm
            </h1>

            <p className={`mt-4 font-semibold text-[#6b6b6b] ${getParagraphClass()}`}>
              Redesigning Africa's Future, Brick by Brick.
            </p>

            <div className="bg-white/10 p-6 rounded-lg border mt-6 md:mt-8" style={{ borderColor: '#838385' }}>
              <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: '#EF641C' }}>
                Why Brownstone?
              </h3>
              <ul className="mt-3 text-lg md:text-xl text-[#515151]">
                <li className="mt-2">
                  Full-spectrum development: Design & build community infrastructure
                </li>
                <li className="mt-1">Sustainable systems: Solar, EV charging, water management</li>
                <li className="mt-1">Local expertise with global standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
