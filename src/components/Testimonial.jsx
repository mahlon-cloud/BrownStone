'use client';

import React, { useState } from 'react';

export default function Testimonial() {
    const testimonials = [
    {
      id: 1,
      name: 'Daspora Investor',
      quote: 'Working with Brownstone was seamless from start to finish. The team delivered on time and beyond expectations.',
    },
    {
      id: 2,
      name: 'Local Homebuyer',
      quote: 'Their attention to detail and commitment to building real communities—not just houses—sets them apart.',
    },
  ];

  return (
<section className="bg-gray-50 py-12 sm:py-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="mb-8 sm:mb-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">What Clients Say</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Feedback from our loyal clients.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="bg-white rounded-lg p-5 sm:p-6 md:p-7 shadow max-w-3xl sm:mx-auto md:mx-0"
                aria-label={`Testimonial from ${t.name}`}
              >
                <p className="text-gray-700 italic text-base sm:text-base md:text-lg leading-relaxed">“{t.quote}”</p>
                <footer className="mt-4 text-sm md:text-base font-medium text-gray-900">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
  );
}