'use client';
import React, { useEffect, useState } from 'react';

const images = [
  '/fix2.png',
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
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 1000); // match transition duration
    }, 4000); // change image every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative h-170 overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-fixed bg-cover bg-right transition-opacity duration-1000 ${
            index === current ? (fade ? 'opacity-100' : 'opacity-0') : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
}
