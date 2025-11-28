'use client';

import React from 'react';
import Form from '../Form.jsx';

export default function ContactPage() {
  const COLORS = {
    primary: '#EF641C',
    deep: '#411600',
    teal: '#00486B',
    muted: '#838385',
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Full-width banner */}
      <header
        className="bg-fixed w-full relative overflow-hidden"
        style={{
          height: '320px',
          backgroundImage: "url('/jv1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            CONTACT US
          </h1>

          <div className="mt-3 w-24 h-1 rounded bg-[#EF641C]" />

          <p className="mt-4 max-w-3xl text-sm md:text-base text-white/90">
            Get in touch with Brownstone Construction Firm — Redesigning Africa’s Future, Brick by Brick.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-20 py-16">
        {/* Contact Information */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-white/90">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Reach Out to Us</h2>

            <p className="leading-relaxed mb-3">
              Brownstone Construction Firm
            </p>
            <p className="leading-relaxed mb-3">
              📍 Office Location: 1 Airport Square, Accra - Ghana
            </p>
            <p className="leading-relaxed mb-3">
              📞 Phone: +233 244 028 773
            </p>
            <p className="leading-relaxed mb-3">
              📧 Email: info@brownstoneltd.com
            </p>
            <p className="leading-relaxed mb-3">
              🌐 Website: www.brownstoneltd.com
            </p>
            <p className="leading-relaxed mb-3">
              📱 Instagram: @Brownstone.ltd
            </p>
            <p className="leading-relaxed mb-3">
              💼 LinkedIn: Brownstone Ltd
            </p>
          </div>

          {/* Map Embed for 1 Airport Square */}
          <aside className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Brownstone Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8306788262405!2d-0.1740047!3d5.614217499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11!3m3!1m2!1s0xfdf9b2cddf2f0d9%3A0xd2cb8f179f1dc93!2sStanbic%20Heights!5e0!3m2!1sen!2sgh!4v1732647777777"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>
        </section>
        <Form />
      </main>
    </div>
  );
}
