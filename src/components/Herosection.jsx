'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState('/bkg23.jpg');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateImage = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let chosen = '/bkg23.jpg';

      if (width < 768) {
        chosen = '/Mobile-version3.jpg'; // Mobile
      } else if (width >= 768 && width <= 1024) {
        chosen = '/ipad-version3.jpg'; // iPad / tablets
      } else if (width >= 1920 && height >= 1080) {
        // Desktop 
        chosen = '/bkg23.jpg'; // Ultra-wide Desktop (1920px+)
      } else if (width >= 1920) {
        // Mac
        chosen = '/bkg23.jpg';
      }

      // Debug log to help verify which branch runs (remove later)
      // eslint-disable-next-line no-console
      console.log('[HeroSection] width=', width, 'height=', height, '-> image=', chosen);
      setHeroImage(chosen);
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <header className="w-full min-h-screen bg-black">

      {/* ---------- MOBILE & TABLET (overlay on background like desktop) ---------- */}
      <div className="lg:hidden relative h-screen overflow-hidden">
        {/* Background image filling the section */}
        <Image
          src={heroImage}
          alt="Brownstone Construction - Hero Background"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        
        

        {/* Content sits on top of image (no background color) */}
        <div className="absolute inset-0 z-20 flex items-end pb-15 px-6 ml-9">
          <div className="w-full max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white" style={{ color: '#EF641C' }}>
              Brownstone Construction Firm
            </h1>

            <p className="mt-3 text-xl text-[#6b6b6b] font-semibold">
              Redesigning Africa's Future, <br/>Brick by Brick.
            </p>

            <div
              className="bg-white/10 p-3 rounded-lg border mt-20"
              style={{ borderColor: '#838385' }}
            >
              <h3 className="text-base font-semibold text-white text-lg" style={{ color: '#EF641C' }}>Why Brownstone?</h3>
              <ul className="mt-2 text-sm text-[#515151]">
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
        
        {/* Background image */}
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

        <div className="container mx-auto mt-30 ml-20 px-8 lg:px-20 relative z-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <h1
              className="text-4xl lg:text-8xl font-extrabold leading-tight"
              style={{ color: '#EF641C' }}
            >
              Brownstone Construction Firm
            </h1>

            <p className="mt-4 text-xl lg:text-4xl text-[#6b6b6b] font-semibold">
              Redesigning Africa's Future, Brick by Brick.
            </p>

            <div
              className="bg-white/10 p-6 rounded-lg border mt-8"
              style={{ borderColor: '#838385' }}
            >
              <h3 className="text-2xl font-semibold" style={{ color: '#EF641C' }}>
                Why Brownstone?
              </h3>
              <ul className="mt-3 text-lg text-[#515151]">
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
