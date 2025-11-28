"use client";

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
    return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.ibb.co/Rp630MQT/scanqr-fav.jpg" sizes="any" />
        <title>RealEstate</title>
        <meta name="description" content="A modern webapp containing profile social links and contacts" />
      </head>
      <body>
      <Navbar />
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}

