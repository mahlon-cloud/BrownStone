'use client';

import React from 'react';

function Banner1() {
  return (
    <div
      className="absolute rounded-lg shadow-2xl overflow-hidden w-72 md:w-80 ml-30 mt-20"
      style={{
        backgroundImage: "url('/townhouse-thumb.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="bg-black/60 backdrop-blur-sm p-4 md:p-5">
        <h3 className="text-base md:text-lg font-bold text-white mb-2">
          Premium Townhouses For Rent
        </h3>

        <p className="text-xs md:text-sm text-gray-200 mb-3 leading-relaxed">
          2 bedroom modern, sustainable townhouses designed for contemporary lakeside living in Akosombo. Off-plan purchases are customizable pre-construction.
        </p>

        <a
          href="/townhouse"
          className="inline-block w-full text-center px-3 py-1.5 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90 text-sm"
          style={{ backgroundColor: '#EF641C' }}
        >
          Explore Townhouses
        </a>
      </div>
    </div>
  );
}

export default Banner1;