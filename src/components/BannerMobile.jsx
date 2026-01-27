'use client';

import React from 'react';

function BannerMobile() {
  return (
    <div className="w-full px-4 py-7 flex justify-center">
      <a
        href="/townhouse"
        className="text-center px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90 text-sm"
        style={{ backgroundColor: '#EF641C' }}
      >
        Explore Townhouses
      </a>
    </div>
  );
}

export default BannerMobile;
