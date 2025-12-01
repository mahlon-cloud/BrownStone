'use client';
import React from 'react';

export default function FixedImage() {
  return (
    <section
      className="w-full relative h-170 w-full bg-fixed bg-right bg-cover"
      style={{ backgroundImage: "url('/fix2.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative flex h-full items-center justify-start lg:ml-27 px-8">
        <div className="bg-black/60 backdrop-blur-md p-6 md:p-10 max-w-sm rounded-xl shadow-xl">
          <p className="text-white text-lg leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Celestia is a modern lakeside sanctuary featuring eight terraced
            townhomes and five private chalets. Each residence offers comfort,
            privacy, and serene views of surrounding greenery.
          </p>
        </div>
      </div>
    </section>
  );
}
