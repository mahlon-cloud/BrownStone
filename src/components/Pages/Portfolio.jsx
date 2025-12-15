'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    videos: [
      { src: 'chalet1.mp4', title: 'CHALETS' },
      { src: 'lake1.mp4', title: 'LAKEHOUSE' },
      { src: 'town1.mp4', title: 'TOWNHOME' },
    ],
    id: 'celestia',
    title: 'Celestia — Akosombo',
    description: 'A modern lakeside community combining luxury, wellness, and nature in a private enclave',
    images: [
      { src: '/za4.jpg', alt: 'Celestia view 1' },
      { src: '/71.webp', alt: 'Celestia view 2' },
      { src: '/51.webp', alt: 'Celestia view 3' },
      { src: '/151.webp', alt: 'Celestia view 4' },
      { src: '/221.webp', alt: 'Celestia view 5' },
      { src: '/231.webp', alt: 'Celestia view 6' },
      { src: '/241.webp', alt: 'Celestia view 7' },
      { src: '/291.webp', alt: 'Celestia view 8' },
      { src: '/311.webp', alt: 'Celestia view 9' },
      { src: '/351.webp', alt: 'Celestia view 10' },
      { src: '/361.webp', alt: 'Celestia view 11' },
      { src: '/391.webp', alt: 'Celestia view 12' },
      { src: '/431.webp', alt: 'Celestia view 13' },
      { src: '/421.webp', alt: 'Celestia view 14' },
      { src: '/271.webp', alt: 'Celestia view 15' },
      { src: '/333.webp', alt: 'Celestia view 16' },
      { src: '/461.webp', alt: 'Celestia view 17' },
    ],
  },
  {
    id: 'eastlegon',
    title: 'East Legon Trio',
    description: 'A trio of high-end townhomes built for legacy living and comfort',
    images: [
      { src: '/wa1.jpg', alt: 'East Legon view 1' },
      { src: '/ea11.jpg', alt: 'East Legon view 2' },
      { src: '/ea12.jpg', alt: 'East Legon view 3' },
      { src: '/ea21.jpg', alt: 'East Legon view 4' },
      { src: '/leg1.jpeg', alt: 'East Legon view 5' },
      { src: '/leg2.jpeg', alt: 'East Legon view 6' },
      { src: '/leg3.jpeg', alt: 'East Legon view 7' },
      { src: '/leg4.jpeg', alt: 'East Legon view 8' },
    ],
    videos: [],
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState(null);
  const [videoModal, setVideoModal] = useState(null);
  const [imageModal, setImageModal] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({}); // track which videos are playing

  const toggle = (id) => setActive(active === id ? null : id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-16 lg:px-32 py-20 font-sans">

      {/* HEADER */}
      <header
        className="bg-fixed w-full relative h-56 md:h-72 lg:h-80 flex items-center justify-center mb-16"
        style={{
          backgroundImage: "url('/bkg1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Our Projects
        </h1>
      </header>

      {/* CONTENT WRAPPER */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">

        {projects.map((project) => (
          <div key={project.id} className="flex-1">

            {/* BUTTON */}
            <button
              onClick={() => toggle(project.id)}
              className="w-full bg-white px-6 py-5 rounded-xl shadow-lg hover:shadow-2xl transition text-left cursor-pointer"
            >
              <h2 className="text-2xl md:text-2xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <span className="float-right text-gray-500 mt-2 text-xl">{active === project.id ? '▲' : '▼'}</span>
            </button>

            {/* EXPANDED SECTION */}
            <AnimatePresence initial={false}>
              {active === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

                   
                    {/* VIDEOS */}
{project.videos.map((vid, idx) => (
  <div
    key={`${project.id}-${idx}`}
    className="relative rounded-lg overflow-hidden cursor-pointer group"
    onClick={() => setVideoModal(vid.src)}
  >
    {/* Thumbnail image */}
    <Image
      src={`/thumbnails/${vid.src.replace('.mp4', '.webp')}`}
      alt={vid.title}
      width={800}
      height={600}
      loading="lazy"
      className="w-full h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <span className="text-white font-semibold">▶ {vid.title}</span>
    </div>
  </div>
))}

{/* VIDEO MODAL */}
{videoModal && (
  <div
    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    onClick={() => setVideoModal(null)}
  >
    <video
      src={videoModal}
      controls
      autoPlay
      className="max-w-[95vw] max-h-[75vh] w-auto h-auto rounded-lg shadow-xl"
    />
  </div>
)}

                    {/* IMAGES */}
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setImageModal(img.src)}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={800}
                          height={600}
                          loading="lazy"
                          className="w-full h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span className="text-white md:ml-7 font-semibold">{project.title}</span>
                        </div>
                      </div>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>

      {/* VIDEO MODAL */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setVideoModal(null)}
        >
          <video
            src={videoModal}
            controls
            autoPlay
            className="max-w-[95vw] max-h-[75vh] w-auto h-auto rounded-lg shadow-xl"
          />
        </div>
      )}

      {/* IMAGE MODAL */}
      {imageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setImageModal(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={imageModal}
              alt="Full View"
              width={1600}
              height={1200}
              loading="lazy"
              className="max-w-[95vw] max-h-[75vh] w-auto h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}
