'use client';

import React from 'react';

const services = [
  { title: 'Residential Construction', desc: 'Design and build high-quality homes and developments.' },
  { title: 'Master-Planned Communities', desc: 'Holistic neighbourhoods with schools, clinics, retail and parks.' },
  { title: 'Sustainable & Smart Infrastructure', desc: 'Solar, EV charging, water management and agri-tech zones.' },
  { title: 'Real Estate Investment Development', desc: 'Build-to-sell or build-to-rent projects with investor support.' },
  { title: 'Project Management & Consultancy', desc: 'End-to-end planning, budgeting and delivery services.' },
];

export default function ServicesPage() {
  const COLORS = {
    primary: '#EF641C',
    deep: '#411600',
    teal: '#00486B',
    muted: '#838385',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.teal, fontFamily: 'Montserrat, sans-serif' }}>
      {/* Full-width banner */}
      <header
        className="bg-fixed w-full relative overflow-hidden"
        style={{
          height: '320px',
          backgroundImage: "url('/wa1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            OUR SERVICES
          </h1>

          <div className="mt-3 w-24 h-1 rounded bg-[#EF641C]" />
          <p className="mt-4 max-w-3xl text-sm md:text-base text-white/90">
            Brownstone Construction Firm — Building Africa’s Future, Brick by Brick.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 lg:px-20 py-16">
        {/* Services grid */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-lg shadow-sm"
              style={{ borderLeft: `4px solid ${COLORS.primary}`, background: '#fff' }}
            >
              <h3 className="font-semibold text-xl mb-2" style={{ color: COLORS.deep }}>
                {s.title}
              </h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
