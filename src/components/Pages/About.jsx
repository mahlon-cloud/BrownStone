'use client';

import React from 'react';

export default function AboutPage() {
  const COLORS = {
    primary: '#EF641C',
    deep: '#411600',
    teal: '#00486B', opacity: 70,
    muted: '#838385',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.teal, fontFamily: 'Montserrat, sans-serif' }}>
      {/* Full-width banner (LinkedIn/Facebook style) */}
      <header
        className="bg-fixed w-full relative overflow-hidden"
        style={{
          height: '320px',
          backgroundImage: "url('/jv1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            ABOUT US
          </h1>

          <div className="mt-3 w-24 h-1 rounded bg-[#EF641C]" />

          <p className="mt-4 max-w-3xl text-sm md:text-base text-white/90">
            Brownstone Construction Firm — Redesigning Africa’s Future, Brick by Brick.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-20 py-16">
        {/* About section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Brownstone Construction Firm
            </h2>

            <p className="text-white/90 leading-relaxed mb-4">
              Brownstone Construction Firm is a Ghana-based property development and construction company committed to delivering
              high-quality, sustainable, and community-focused housing solutions. Founded in 2024, Brownstone was established in
              response to the growing demand for modern, thoughtfully designed living spaces in Ghana’s expanding urban and
              peri-urban areas.
            </p>

            <p className="text-white/90 leading-relaxed mb-4">
              With a foundation built on experience and a deep understanding of the local market, Brownstone is driven by a passion
              for transforming land into vibrant, livable communities. Our approach blends innovation with practicality—delivering
              homes and developments that meet today’s lifestyle needs while anticipating tomorrow’s demands.
            </p>

            <p className="text-white/90 leading-relaxed">
              What sets Brownstone apart is our full-spectrum development model. We not only build, but also plan for long-term
              community value—integrating essential infrastructure such as schools, clinics, fitness centres, green spaces, and
              technology-forward amenities like EV charging points and agri-tech facilities.
            </p>
          </div>

          {/* Features / quick highlights card */}
          <aside>
            <div className="bg-white/95 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.deep }}>
                What We Deliver
              </h3>

              <ul className="space-y-3 text-sm text-gray-700">
                <li>Residential & mixed-use developments</li>
                <li>Master-planned communities with integrated services</li>
                <li>Sustainable infrastructure: solar, EV charging, water systems</li>
                <li>Agri-tech zones and community amenities</li>
                <li>End-to-end project management & investor support</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block px-4 py-2 rounded-full font-semibold text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* Certifications & Team */}
        <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* ---- Certifications Block with Icons ---- */}
          <div className="bg-white/95 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.deep }}>
              Certifications
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Brownstone adheres to all Ghanaian building regulations and is fully registered with the appropriate construction and real
              estate development authorities.
            </p>

            {/* Icons Row */}
            <div className="flex items-center justify-start gap-6 mt-4">
              <img
                src="/gt.png"
                alt="Certification 1"
                className="w-40 h-40 object-contain ml-[-25]"
              />
            </div>
          </div>

          {/* ---- Team Block ---- */}
          <div className="bg-white/95 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.deep }}>
              Our Team
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Led by a seasoned management team with combined experience in development, construction, and real estate investment,
              our projects are guided by experts who understand both the local market and global standards.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li><strong>CEO:</strong> Experienced property developer & strategic leader</li>
              <li><strong>Head of Construction:</strong> Licensed engineer with large-scale delivery experience</li>
              <li><strong>Head of Development:</strong> Planner & urban designer focused on liveable communities</li>
            </ul>
          </div>
        </section>

        {/* Closing message */}
        <section className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-white/90 leading-relaxed">
            Brownstone is committed to building sustainable, future-ready neighbourhoods that create lasting value for residents and
            investors alike. If you share our vision, let’s build together.
          </p>
        </section>
      </main>
    </div>
  );
}
