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

      <div className="relative flex h-full items-center justify-start lg:ml-27 px-8">
        <div className="bg-black/60 backdrop-blur-md p-6 md:p-10 max-w-sm rounded-xl shadow-xl">
          <p
            className="text-white text-lg leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Celestia is a modern lakeside sanctuary featuring townhomes, private
            chalets and lakehouse. Each residence offers comfort, privacy, and serene
            views of surrounding greenery.
            <br />
            <br />
            Situated just 90 minutes from Accra, Celestia stands in Akosombo as a
            refined enclave blending contemporary living with the tranquility of
            nature and the promise of true wellness.
          </p>
        </div>
      </div>
    </section>
  );
}
