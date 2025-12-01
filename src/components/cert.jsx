'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cert() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const ScrollReveal = (await import('scrollreveal')).default;
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          easing: 'ease-in-out',
        });

        sr.reveal('.about-text', { origin: 'left', interval: 100 });
        sr.reveal('.about-heading', { origin: 'right', interval: 100 });
      }
    })();
  }, []);

  const panels = [
    {
      title: 'Our Signature',
      content:
        'To redefine the future by building a legacy of prosperity — where innovation, sustainability, and human potential shape thriving communities and enduring value.',
    },
    {
      title: 'Our Legacy',
      content:
        'To design and deliver premium, transformative projects across residential, commercial, and mixed-use spaces— creating integrated, future-ready ecosystems that advance infrastructure, empower people, generate lasting economic value, and protect the planet.',
    },
    {
      title: 'Our Delivery',
      content:
        'Integrity: We keep our word. Excellence: Every project reflects precision and pride. Sustainability: Building with the planet and people in mind. Innovation: Leveraging new technologies. Empowerment: Uplifting communities and creating opportunity.',
    },
  ];

  return (
    <section className="w-full py-12 bg-[#dedede]">
      <div className="w-full container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left: big heading (replaces image) */}
          {/* Left: big heading */}
<div className="about-heading flex items-start md:justify-start justify-center md:items-start md:mr-100">
  <h2
    className="leading-tight"
    style={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
      color: '#012e44',
      lineHeight: 1.05,
    }}
  >
    <span className="block text-3xl md:text-2xl lg:text-5xl">What We</span>
    <span className="block text-3xl md:text-2xl lg:text-5xl">Stand For</span>
  </h2>
</div>


          {/* Right: collapsible accordion (revealed by ScrollReveal) */}
          <div className="about-text">
            <div className="text-base mb-6" style={{ color: '#012e44' }}>
              <div className="space-y-4">
                {panels.map((p, idx) => {
                  const opened = openIndex === idx;
                  return (
                    <div key={p.title} className="border border-transparent">
                      <button
                        type="button"
                        aria-expanded={opened}
                        onClick={() => setOpenIndex(opened ? null : idx)}
                        className="w-full flex items-center justify-between py-4 px-4 rounded-md cursor-pointer"
                        style={{
                          background: opened ? '#EF641C' : 'transparent',
                          color: opened ? '#fff' : '#012e44',
                        }}
                      >
                        {/* Larger title */}
                        <span className="text-lg md:text-xl lg:text-xl font-semibold leading-tight">
                          {p.title}
                        </span>

                        <span className="ml-4 text-sm flex items-center" aria-hidden>
                          {!opened ? (
                            /* plus icon */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: opened ? '#fff' : '#012e44' }}>
                              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            /* minus icon */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#fff' }}>
                              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {opened && (
                          <motion.div
                            key={`content-${idx}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden px-4"
                          >
                            {/* Increased content size */}
                            <div className="py-4 text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#411600' }}>
                              {p.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}