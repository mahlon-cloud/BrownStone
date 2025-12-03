'use client';
import React, { useState, useRef, useEffect } from 'react';

const projects = [
  {
    videos: [
      { src: '/chalet.mp4', title: 'CHALETS' },
      { src: '/lake.mp4', title: 'LAKEHOUSE' },
      { src: '/town.mp4', title: 'TOWNHOME' },
    ],
    id: 'celestia',
    title: 'Celestia — Akosombo',
    description: 'A modern lakeside community combining luxury, wellness, and nature in a private enclave.',
    images: [
      { src: '/za4.jpg', alt: 'Celestia view 1' },
      { src: '/7.png', alt: 'Celestia view 2' },
      { src: '/5.png', alt: 'Celestia view 3' },
      { src: '/15.png', alt: 'Celestia view 4' },
      { src: '/22.png', alt: 'Celestia view 5' },
      { src: '/23.png', alt: 'Celestia view 6' },
      { src: '/24.png', alt: 'Celestia view 7' },
      { src: '/29.png', alt: 'Celestia view 8' },
      { src: '/31.png', alt: 'Celestia view 9' },
      { src: '/35.png', alt: 'Celestia view 10' },
      { src: '/36.png', alt: 'Celestia view 11' },
      { src: '/39.png', alt: 'Celestia view 12' },
      { src: '/43.png', alt: 'Celestia view 13' },
      { src: '/42.png', alt: 'Celestia view 14' },
      { src: '/27.png', alt: 'Celestia view 15' },
      { src: '/46.png', alt: 'Celestia view 16' },
    ],
  },
  {
    id: 'eastlegon',
    title: 'East Legon Residence',
    description: 'High-end urban apartments designed for comfort, modern living, and sustainable infrastructure.',
    images: [
      { src: '/wa1.jpg', alt: 'East Legon view 1' },
      { src: '/ea.jpg', alt: 'East Legon view 2' },
      { src: '/ea1.jpg', alt: 'East Legon view 3' },
      { src: '/ea2.jpg', alt: 'East Legon view 4' },
    ],
    videos: [], // Removed video as requested
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState(null);
  const [videoModal, setVideoModal] = useState(null);
  const [imageModal, setImageModal] = useState(null);
  const contentRefs = useRef({});

  // --------------------------
  // Smooth SLIDE DOWN logic
  // --------------------------
  useEffect(() => {
    Object.keys(contentRefs.current).forEach((key) => {
      const el = contentRefs.current[key];
      if (!el) return;
      if (active === key) {
        el.style.maxHeight = el.scrollHeight + 'px';
      } else {
        el.style.maxHeight = '0px';
      }
    });
  }, [active]);

  // Do NOT collapse list when modal opens/closes
  const toggle = (id) => setActive(active === id ? null : id);

  return (
    <div className="min-h-screen bg-gray-50 px-8 lg:px-32 py-20 font-sans">
      {/* Header */}
      <header
        className="bg-fixed w-full relative h-96 flex items-center justify-center mb-20"
        style={{
          backgroundImage: "url('/bkg1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Our Projects
        </h1>
      </header>

      {/* Project Buttons */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-16">
        {projects.map((project) => (
          <div key={project.id} className="flex-1">
            {/* Button */}
            <button
              onClick={() => toggle(project.id)}
              className="w-full bg-white px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-3 text-lg md:text-xl">{project.description}</p>
              <span className="float-right text-gray-500 mt-2 text-xl">
                {active === project.id ? '▲' : '▼'}
              </span>
            </button>

            {/* EXPANDED CONTENT */}
            <div
              ref={(el) => (contentRefs.current[project.id] = el)}
              className="overflow-hidden transition-max-height duration-500 ease-in-out"
              style={{ maxHeight: '0px' }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

                {/* Videos */}
                {project.videos.length > 0 &&
                  project.videos.map((vid, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setVideoModal(vid.src)}
                    >
                      <video
                        src={vid.src}
                        muted
                        loop
                        preload="metadata"
                        className="w-full object-cover opacity-70 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">▶ {vid.title}</span>
                      </div>
                    </div>
                  ))}

                {/* IMAGES */}
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setImageModal(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                      <span className="text-white text-lg font-semibold">{project.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------------
          VIDEO MODAL
      -------------------------- */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center backdrop-blur-sm animate-zoompan"
          onClick={() => setVideoModal(null)}
        >
          <video
            src={videoModal}
            controls
            autoPlay
            className="max-w-4xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* -------------------------
          IMAGE MODAL
      -------------------------- */}
      {imageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center backdrop-blur-sm animate-zoompan"
          onClick={() => setImageModal(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageModal}
              alt="Full View"
              className="max-w-5xl max-h-[85vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setImageModal(null)}
              className="absolute top-3 right-3 text-white bg-black/50 px-3 py-1 rounded-full cursor-pointer hover:bg-black/70 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes zoompan {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.02) translate(0, -1%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
        .animate-zoompan {
          animation: zoompan 15s ease-in-out infinite;
        }
        .transition-max-height {
          transition-property: max-height;
        }
      `}</style>
    </div>
  );
}
