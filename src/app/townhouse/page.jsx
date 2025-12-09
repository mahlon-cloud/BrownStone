'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const COLORS = {
  primary: '#EF641C',
  deep: '#411600',
  neutral: 'bg-gray-50',
};

// ICON COMPONENT
function Icon({ children }) {
  return (
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm">
      <span className="text-xl">{children}</span>
    </div>
  );
}

// *************************************************
// ScrollReveal Hook
// *************************************************
function useScrollReveal() {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal();

        // Animate gallery items
        sr.reveal('.gallery-item', {
          distance: '80px',
          duration: 1200,
          easing: 'ease-out',
          origin: 'bottom',
          reset: false,
          opacity: 0,
          interval: 120,
        });
      }
    })();
  }, []);
}

// *************************************************
// HERO SECTION
// *************************************************
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid gap-8 lg:grid-cols-2 items-center">
        
        {/* LEFT SIDE TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ color: COLORS.deep }}>
            Celestia Townhouses
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            <span className='font-semibold'>
              Modern, elegant townhouses designed for lakeside living in Akosombo
            </span>
            <br /><br />
            Nestled in Ghana’s emerging luxury destination, each townhome provides a private retreat,
            a high-yield vacation rental opportunity, or a peaceful home base for seasonal escapes.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold shadow"
              style={{ background: COLORS.primary, color: 'white' }}
            >
              Book Now
            </a>

            <a
            href="/brochure.pdf"
            download="Celestia-Townhouse-Brochure.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border"
            >
              Download Brochure
            </a>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <strong className="text-gray-800">Pre-construction advantage:</strong> Off-plan purchases are customizable pre-construction
          </div>
        </div>

        {/* RIGHT SIDE HERO IMAGE */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/br.webp"
              alt="Townhouse hero"
              width={800}
              height={600}
              className="w-full h-80 sm:h-96 object-cover"
              priority
            />

            {/* TEXT ON IMAGE */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 text-white text-center z-20">
              <div className="text-2xl font-semibold drop-shadow-xl">2 Bedroom Townhouses</div>
              <div className="text-sm text-gray-200 drop-shadow-lg mt-1">
                Rent at your earliest convenience <br /> Master Suite • Open Terrace • Lobby
              </div>
            </div>

            {/* FLOORPLAN IMAGES */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2 bottom-4
                bg-white/80 backdrop-blur-sm 
                rounded-xl p-3 shadow-md 
                flex items-center justify-center gap-2
                w-[92%] max-w-sm md:max-w-lg
              "
            >
              <Image src="/Floorplan1.jpg" alt="Floorplan 1" width={80} height={80} className="object-contain" />
              <Image src="/Floorplan2.jpg" alt="Floorplan 2" width={80} height={80} className="object-contain" />
              <Image src="/Floorplan3.jpg" alt="Floorplan 3" width={80} height={80} className="object-contain" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// *************************************************
// GALLERY SECTION (with ScrollReveal)
// *************************************************
function GalleryGrid() {
  useScrollReveal();

  const gallery = [
    '/3.webp','/5.webp','/6.webp',
    '/ab (8).webp','/ab (2).webp','/ab (7).webp','/ab (1).webp',
    '/7.webp','/8.webp','/9.webp','/10.webp','/11.webp','/12.webp','/13.webp',
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <p className="text-gray-600 mt-2">Explore our townhouse designs and surroundings.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {gallery.map((img, idx) => (
            <div key={idx} className="gallery-item rounded-lg overflow-hidden shadow-sm">
              <Image
                src={img}
                alt={`Gallery ${idx}`}
                width={300}
                height={200}
                className="w-full h-32 sm:h-40 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// *************************************************
// FEATURES GRID
// *************************************************
function FeaturesGrid() {
  const items = [
    { title: 'Multi-Level Living', desc: 'Multi-level, open-plan living designed for privacy and flexibility.' },
    { title: 'Premium Finishes', desc: 'Premium finishes for effortless elegance and lasting quality.' },
    { title: 'Bright Interiors', desc: 'Bright, airy interiors that invite natural light and scenic views.' },
    { title: 'Private Parking', desc: 'Off-street parking, visitor bays and secure access.' },
    { title: 'Tranquil Spaces', desc: 'Access to lush green corridors and tranquil communal spaces.' },
    { title: 'Balconies & Views', desc: 'Private terraces with lake or landscape views.' },
  ];

  const icons = ['🏡','✨','🌞','🚗','🌿','🌅'];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <p className="text-gray-600 mt-2">Everything designed for comfort, aesthetics and lasting value.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 rounded-xl border hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-3">
                <Icon>{icons[idx]}</Icon>
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
              <p className="text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// *************************************************
// OFF PLAN SECTION
// *************************************************
function OffPlanNotice() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl border p-6 lg:p-8 bg-gradient-to-r from-white to-orange-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">

            <div className="lg:flex-1">
              <h3 className="text-xl font-bold">Off-Plan Customization — Build Your Vision</h3>
              <p className="mt-2 text-gray-700">
                Reserve early and personalize your townhouse before construction starts.
                Choose interior themes, kitchen packages, floor finishes and smart-home options.
              </p>

              <ul className="mt-3 text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>• Interior color themes</li>
                <li>• Kitchen/cabinet upgrades</li>
                <li>• Flooring & tiles</li>
                <li>• Wardrobe layouts</li>
                <li>• Smart-home integrations</li>
                <li>• and more.......</li>
              </ul>
            </div>

            <div className="mt-4 lg:mt-0 lg:w-1/3">
              <a
                href="/book"
                className="block text-center px-5 py-3 rounded-lg font-semibold"
                style={{ background: COLORS.primary, color: 'white' }}
              >
                Contact Sales to Customize
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// *************************************************
// CTA SECTION
// *************************************************
function CTA() {
  return (
    <section className="flex justify-center py-12 bg-gradient-to-r from-white to-orange-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">
            Reserve a Unit Today & Lock In Pre-Construction Pricing
          </h3>
          <p className="text-gray-600 mt-1">
            Limited units available — early buyers enjoy flexible payment plans.
          </p>
        </div>
      </div>
    </section>
  );
}

// *************************************************
// MAIN PAGE EXPORT
// *************************************************
export default function TownhousesPage() {
  return (
    <>
      <Hero />
      <GalleryGrid />
      <FeaturesGrid />
      <OffPlanNotice />
      <CTA />
    </>
  );
}
