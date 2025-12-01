'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleToTop = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
    }
  };

  return (
    <footer className="w-full bg-[#00334b] text-gray-200 relative">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-20 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center text-white font-bold mb-4">
            <img src="/invert.png" alt="Brownstone Logo" className="h-8" />
          </Link>
          <p className="text-sm text-gray-300">
            Redesigning Africa’s Future, Brick by Brick
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/projects" className="hover:underline">Teams</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">info@brownstoneltd.com</p>
          <p className="text-sm mt-1">+233 244 028 773</p>
          <div className="mt-4 flex gap-3">

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/brownstone-construction-firm/" className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center" aria-label="LinkedIn">
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.07 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8H12v2h.07c.62-1.17 2.14-2.4 4.43-2.4 4.74 0 5.61 3.12 5.61 7.18V24h-5v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.98V24h-5V8z"/>
    </svg>
  </a>

  {/* Instagram */}
<a
  href="https://instagram.com/brownstone.ltd"
  className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center"
  aria-label="Instagram"
>
  <svg
    className="w-4 h-4 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
  </svg>
</a>

  {/* WhatsApp */}
  <a href="https://api.whatsapp.com/send?phone=233244028485" className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center" aria-label="WhatsApp">
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .06 5.32 0 11.88c0 2.1.54 4.15 1.57 5.97L0 24l6.3-1.64a12 12 0 0 0 5.73 1.46h.01c6.58 0 11.97-5.32 11.96-11.88a11.8 11.8 0 0 0-3.48-8.46zM12.04 21.5c-1.87 0-3.7-.5-5.3-1.45l-.38-.23-3.74.97 1-3.64-.25-.39A9.77 9.77 0 0 1 2.3 11.9c.05-5.28 4.4-9.56 9.74-9.56 2.6 0 5.04 1 6.87 2.82a9.44 9.44 0 0 1 2.83 6.77c0 5.28-4.36 9.57-9.7 9.57zm5.47-7.15c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.61.13-.15.3-.38.45-.58.15-.2.2-.35.3-.58.1-.23.05-.43-.03-.61-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.17 3.02c.15.2 2 3.15 4.82 4.42.67.3 1.2.48 1.62.62.68.22 1.3.2 1.8.12.55-.08 1.77-.72 2.02-1.43.25-.71.25-1.32.18-1.43-.08-.13-.28-.2-.58-.35z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com/brownstonelimited" className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center" aria-label="Facebook">
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.494v-9.294H9.847v-3.622h2.973V8.413c0-2.944 1.796-4.552 4.416-4.552 1.255 0 2.333.093 2.646.135v3.07l-1.818.001c-1.427 0-1.703.679-1.703 1.674v2.193h3.406l-.444 3.622h-2.962V24h5.807C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.676 0z"/>
    </svg>
  </a>

  {/* X (Twitter) */}
  <a href="https://x.com/brownstoneltdgh" className="w-8 h-8 rounded-full bg-[#0a4c6c] flex items-center justify-center" aria-label="Twitter / X">
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.487 11.24H16.63l-5.303-6.937-6.08 6.937H1.938l7.73-8.82L1.5 2.25h6.524l4.77 6.28z"/>
    </svg>
  </a>

</div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#1375a4]">
        <div className="container mx-auto px-6 lg:px-20 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <span>Brownstone Construction | © {new Date().getFullYear()} All rights reserved.</span>
          <span className="mt-2 md:mt-0">
            <Link href="/privacy" className="hover:underline">Privacy</Link> · 
            <Link href="/terms" className="hover:underline">Terms</Link> · 
            <Link href="/sitemap" className="hover:underline">Site map</Link>
          </span>
        </div>
      </div>

      {/* To Top Button */}
      <a
        href="/"
        onClick={handleToTop}
        className="absolute right-6 bottom-2 md:bottom-8 p-1 flex items-center gap-3 bg-[#EF641C] text-white md:px-3 md:py-2 rounded-full shadow-lg hover:opacity-95"
        aria-label="To Top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm font-medium">To Top</span>
      </a>
    </footer>
  );
}
