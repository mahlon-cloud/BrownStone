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
          backgroundImage: "url('/wa.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      ></header>
    <section className="min-h-screen bg-[#f5f5f5] text-[#012e44] py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#012e44] leading-tight">
            Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-[#2a4a59]">
            At the core of Brownstone is a multi-disciplinary management team with extensive backgrounds in construction, infrastructure development, and real estate investment.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            With experience spanning several markets and sectors, our leaders bring strategic vision, operational excellence, and strict quality oversight to every project. Their collective expertise enables us to execute complex projects with confidence and precision.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            Through deep industry insight and strong collaborative management, our team ensures that each development aligns with global standards while delivering efficient, modern, and sustainable infrastructure.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            From planning and engineering to construction execution and investment management, our leadership is committed to delivering results that stand the test of time—enhancing value for clients, partners, and communities.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            At Brownstone, we believe that great projects are built on great expertise. Our team remains dedicated to excellence, innovation, and responsible development at every stage.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
