'use client';
import React, { useEffect, useState } from 'react';

const images = [
  '/fix2.webp',
  '/za.jpg',
  '/za2.jpg',
  '/za5.jpg',
  '/za3i.jpg',
  '/za4.jpg',
];

export default function FixedImage() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out current image
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // fade in next image
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative h-[22.5rem] md:h-[30rem] lg:h-[40rem] overflow-hidden">
      {/* Fixed background slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? (fade ? 'opacity-100' : 'opacity-0') : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
}
