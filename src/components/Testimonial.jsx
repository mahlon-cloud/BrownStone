'use client';

import React, { useState } from 'react';

export default function Testimonial() {
    const testimonials = [
    {
      id: 1,
      name: 'Thomas Nyarko Ampem<br/>(MP) Deputy Minister<br/>Ministry of Finance',
      quote: 'BrownStone has consistently demonstrated excellence, professionalism, and reliability in the execution of major construction projects across the country. Their technical competence, adherence to quality standards, and commitment to timely delivery have earned it the confidence of public sector and private partners.',
    },
    {
      id: 2,
      name: 'Dr. Ishmael Nii Dodoo<br/>24 Hour Economy Secretariat<br/>Office of the President',
      quote: 'BrownStone has the capacity to engage foreign direct investment for the more than $10B investment needed in the building and construction sector in the next 5 years. We strongly recommend BrownStone in this regard.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
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
              <p className="text-gray-700 italic text-base sm:text-base md:text-lg leading-relaxed">"{t.quote}"</p>
              <footer 
                className="mt-4 text-sm md:text-base font-medium text-gray-900"
                dangerouslySetInnerHTML={{ __html: t.name }}
              />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}