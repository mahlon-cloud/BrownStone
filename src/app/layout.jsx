import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "BrownStone",
  description: "Brownstone Construction Firm is a Ghana-based property development and construction company committed to delivering high-quality, sustainable, and community-focused housing solutions. Founded in 2024, Brownstone was established in response to the growing demand for modern, thoughtfully designed living spaces in Ghana's expanding urban and peri-urban areas.",
  icons: {
    icon: "/favco.ico?v=4", // Forces browser to refresh
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
