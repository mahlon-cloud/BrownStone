'use client';

import React, { useState } from 'react';

export default function CTA() {
  return (
    <section className="py-20 bg-[#f7f7f7]"  style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="w-full max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-center" style={{ color: "#012e44" }}>
          Talk to Us
        </h2>

        {/* small orange line under heading */}
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-[#EF641C] rounded mt-2" />
        </div>

        {/* Subtitle */}
        <p className="text-lg text-#012e44  mt-6 max-w-2xl mx-auto leading-relaxed">
          Whether you are planning a new development, investing, or upgrading your community infrastructure, 
          our team is ready to support you.
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-block px-8 py-3 mt-6 rounded-lg text-white font-medium shadow-md transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: "#EF641C" }}
        >
          Contact Us
        </a>

      </div>
    </section>
  );
}
