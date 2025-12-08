'use client';

import React from 'react';
import { motion } from 'framer-motion';

const accent = {
  primary: '#EF641C',
  deep: '#411600',
  teal: '#00486B',
  muted: '#838385',
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Body() {
  return (
    <main className="font-sans">
      {/* Fixed background image section */}
      <section
        aria-label="fixed-visual"
        className="relative w-full h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(10,10,10,0.45), rgba(10,10,10,0.45)), url(/fixed-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // keeps image fixed on scroll
          color: '#fff',
        }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold" style={{ color: accent.primary }}>
              Brownstone Construction Firm
            </h1>
            <p className="mt-4 text-xl lg:text-2xl font-semibold" style={{ color: accent.muted }}>
              Redesigning Africa’s Future, <span style={{ color: accent.teal }}>Brick by Brick.</span>
            </p>

            <p className="mt-6 text-sm lg:text-base" style={{ color: '#f7f7f7' }}>
              Ghana-based developer delivering sustainable, community-focused housing and master-planned neighbourhoods.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-block px-5 py-3 rounded-full font-semibold"
                style={{ backgroundColor: accent.primary, color: '#fff' }}
              >
                About Us
              </a>
              <a
                href="#services"
                className="inline-block px-5 py-3 rounded-full font-semibold border"
                style={{ borderColor: accent.teal, color: accent.teal, background: 'transparent' }}
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body content with scroll animations */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            className="max-w-4xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={item} className="text-3xl font-bold" style={{ color: accent.deep }}>
              About Us
            </motion.h2>

            <motion.p variants={item} className="mt-4 text-gray-700">
              Brownstone Construction Firm is a Ghana-based property development and construction company committed to delivering high-quality,
              sustainable, and community-focused housing solutions. Founded in 2024, Brownstone was established in response to the growing demand
              for modern, thoughtfully designed living spaces in Ghana’s urban and peri-urban areas.
            </motion.p>

            <motion.p variants={item} className="mt-4 text-gray-700">
              We blend innovation with practicality—planning and delivering homes and master-planned neighbourhoods with schools, clinics, green spaces,
              EV charging, and agri-tech amenities to create long-term community value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-16" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={item} className="text-3xl font-bold" style={{ color: accent.teal }}>
              Our Services
            </motion.h2>

            <motion.div variants={item} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white shadow-sm border-l-4" style={{ borderLeftColor: accent.primary }}>
                <h3 className="font-semibold text-xl" style={{ color: accent.deep }}>Residential Construction</h3>
                <p className="mt-2 text-gray-700">Design and build high-quality homes and housing developments with modern finishes and sustainability at core.</p>
              </div>

              <div className="p-6 rounded-lg bg-white shadow-sm border-l-4" style={{ borderLeftColor: accent.primary }}>
                <h3 className="font-semibold text-xl" style={{ color: accent.deep }}>Master-Planned Communities</h3>
                <p className="mt-2 text-gray-700">Holistic neighbourhoods integrating schools, clinics, retail zones and green parks.</p>
              </div>

              <div className="p-6 rounded-lg bg-white shadow-sm border-l-4" style={{ borderLeftColor: accent.primary }}>
                <h3 className="font-semibold text-xl" style={{ color: accent.deep }}>Sustainable & Smart Infrastructure</h3>
                <p className="mt-2 text-gray-700">Solar power, EV charging, water systems and agri-tech zones to promote resilience.</p>
              </div>

              <div className="p-6 rounded-lg bg-white shadow-sm border-l-4" style={{ borderLeftColor: accent.primary }}>
                <h3 className="font-semibold text-xl" style={{ color: accent.deep }}>Investment & Consultancy</h3>
                <p className="mt-2 text-gray-700">Build-to-sell or build-to-rent projects plus end-to-end project management and consultancy.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky image container (alternative fixed effect) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold" style={{ color: accent.deep }}>Vision & Values</h3>
            <p className="text-gray-700">
              To redefine the future by building a legacy of prosperity — innovation, sustainability, and human potential shaping thriving communities.
            </p>

            <ul className="list-disc pl-5 text-gray-700">
              <li><strong>Integrity:</strong> We keep our word in quality and relationships.</li>
              <li><strong>Excellence:</strong> Precision and pride in every build.</li>
              <li><strong>Sustainability:</strong> Building with people and planet in mind.</li>
              <li><strong>Innovation:</strong> Leveraging new tech for smarter outcomes.</li>
            </ul>
          </motion.div>

          {/* sticky image: remains visible while this column scrolls */}
          <div className="relative">
            <div
              className="w-full h-96 bg-center bg-cover rounded-lg shadow-lg"
              style={{
                backgroundImage: 'url(/gallery-1.jpg)',
                position: 'sticky',
                top: '5rem',
              }}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16" style={{ backgroundColor: accent.teal, color: '#fff' }}>
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4">
              Brownstone Construction Firm
              <br /> Office: 1 Airport Square, Accra - Ghana
              <br /> Phone: <a href="tel:+233244028773" style={{ color: accent.primary }}>+233 244 028 773</a>
              <br /> Email: <a href="mailto:info@brownstoneltd.com" style={{ color: accent.primary }}>info@brownstoneltd.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}