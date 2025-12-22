'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState('/bkgx.jpg');

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setHeroImage('/phx.jpg'); // Mobile
      } else if (width < 1024) {
        setHeroImage('/ip1.jpg'); // Tablet
      } else {
        setHeroImage('/bkgx.jpg'); // Desktop
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <header className="w-full min-h-screen relative overflow-hidden">

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden relative min-h-[100svh]">
        <Image
        src={heroImage}
        alt="Brownstone Construction - Mobile Hero"
        fill
        className="object-cover"
        priority
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-end px-14 pb-16 sm:pb-12
        [@media(max-width:390px)_and_(max-height:700px)]:pb-0 mb-2">
        
         <p className="text-3xl sm:text-4xl font-semibold pb-11 leading-tight text-[#411600]
          ">
          Reinventing Africa’s Future,<br />
          Brick by Brick
          </p>
          <div className="bg-white/10 p-4 rounded-lg border mt-10
          [@media(max-width:390px)_and_(max-height:800px)]:mt-1"
        style={{ borderColor: '#838385' }}
        >
      <h3 className="text-xl font-semibold mb-2 text-[#EF641C]">
        Why Brownstone?
      </h3>
      <ul className="text-base text-[#515151] space-y-1">
        <li>Full-spectrum development</li>
        <li>Sustainable systems</li>
        <li>Global standards, local expertise</li>
        </ul>
        </div>
        </div>
        </div>

      {/* ================= DESKTOP (UNCHANGED VISUALLY) ================= */}
      <div className="hidden lg:flex h-screen relative overflow-hidden">
        <Image
          src={heroImage}
          alt="Brownstone Construction - Desktop Hero"
          fill
          className="object-cover"
          priority
          quality={85}
        />

        <div className="relative z-20 w-full flex items-center mb-12">
          <div className="container mx-auto ">
            <div className="w-1/2 text-left">

              {/* Tagline */}
              <p className="mt-12 text-6xl font-semibold leading-tight text-[#411600]">
                Reinventing Africa’s Future, 
                <br/> Brick by Brick                
              </p>

              {/* Why Brownstone */}
              <div
                className="bg-white/10 p-6 rounded-lg border mt-12"
                style={{ borderColor: '#838385' }}
              >
                <h3
                  className="text-3xl font-semibold mb-3"
                  style={{ color: '#EF641C' }}
                >
                  Why Brownstone?
                </h3>

                <ul className="text-xl text-[#515151] space-y-2">
                  <li>
                    Full-spectrum development: Design & build community infrastructure
                  </li>
                  <li>
                    Sustainable systems: Solar, EV charging, water management
                  </li>
                  <li>
                    Local expertise with global standards
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
