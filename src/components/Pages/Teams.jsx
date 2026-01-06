import React from "react";

export default function TeamPages() {
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
          backgroundPosition: 'center top',
        }}
      ></header>
    <section className="min-h-screen bg-[#f5f5f5] text-[#012e44] py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#012e44] leading-tight">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-[#2a4a59]">
            At the core of Brownstone is a multi-disciplinary management team with extensive backgrounds in construction, infrastructure development, and real estate investment.
          </p>
        </div>

        
        {/* Main Content Section – Organisational Chart */}
<div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
  {/* CEO */}
  <div className="flex flex-col items-center">
    <div className="w-full sm:w-80 text-center border border-[#e5e7eb] rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#012e44]">
        Francis Yeboah Awuah
      </h3>
      <p className="text-sm mt-1 text-[#EF641C] font-semibold">
        Managing Director / CEO
      </p>
    </div>

    {/* Connector */}
    <div className="hidden md:block w-px h-10 bg-gray-300"></div>

    {/* Executive Support */}
    <div className="w-full flex justify-center">
      <div className="w-full sm:w-72 text-center border border-[#e5e7eb] rounded-xl p-5">
        <h4 className="text-lg font-semibold text-[#012e44]">
          Dr. Candace Baker
        </h4>
        <p className="text-sm text-[#2a4a59] mt-1">
          Personal Assistant to CEO
        </p>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="my-12 border-t border-gray-200"></div>

  {/* Core Team */}
  <div className="text-center mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-[#012e44]">
      Management & Operations Team
    </h2>
    <p className="mt-3 text-[#2a4a59] max-w-2xl mx-auto">
      Our team engineers strategy, operations, creativity, and business growth across all projects.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Business Development */}
  <div className="border border-[#e5e7eb] rounded-lg p-4 text-center">
    <h4 className="text-xl font-semibold text-[#012e44] leading-tight">
      Danielle Kyei-Duah
    </h4>
    <p className="text-sm text-[#2a4a59] mt-1">
      Business Development Analyst
    </p>
  </div>

  {/* Creative Developer */}
  <div className="border border-[#e5e7eb] rounded-lg p-4 text-center">
    <h4 className="text-xl font-semibold text-[#012e44] leading-tight">
      Mahlon Clottey
    </h4>
    <p className="text-sm text-[#2a4a59] mt-1">
      Creative Developer
    </p>
  </div>

  {/* Creative Designer */}
  <div className="border border-[#e5e7eb] rounded-lg p-4 text-center">
    <h4 className="text-xl font-semibold text-[#012e44] leading-tight">
      Yao Loh
    </h4>
    <p className="text-sm text-[#2a4a59] mt-1">
      Creative Designer
    </p>
  </div>

  {/* Office Manager */}
  <div className="border border-[#e5e7eb] rounded-lg p-4 text-center">
    <h4 className="text-xl font-semibold text-[#012e44] leading-tight">
      Stacey Sodokeh
    </h4>
    <p className="text-sm text-[#2a4a59] mt-1">
      Office Manager
    </p>
  </div>
</div>
</div>

      </div>
    </section>
    </div>
  );
}
