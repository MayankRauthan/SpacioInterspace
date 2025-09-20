
import React, { useState } from 'react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Customers', href: '#customers' },

];

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky shadow on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md');
        } else {
          header.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className="sticky top-0 z-30 bg-white transition-all duration-300 border-b border-gray-100"
      data-aos="fade-down"
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            data-aos="zoom-in"
            tabIndex={0}
            aria-label="Spacio Interspace Home"
          >
            <div className="size-8 text-[var(--primary-color)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight transition-all duration-300 group-hover:text-[var(--primary-color)] group-hover:scale-105">
              Spacio Interspace
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" data-aos="fade-left">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[var(--text-secondary)] hover:text-[var(--primary-color)] px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 transform hover:scale-110 active:scale-95 group"
                tabIndex={0}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[var(--primary-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-[var(--primary-color)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 font-semibold animate-bounce"
              data-aos="zoom-in"
              href="#contact"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Pop-up */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 flex justify-end"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-64 bg-white h-full shadow-2xl p-8 flex flex-col gap-6 animate-slideInRight relative"
            style={{ animation: 'slideInRight 0.3s cubic-bezier(.4,0,.2,1) both' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[var(--primary-color)] text-lg font-semibold py-2 px-3 rounded-md hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 group"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[var(--primary-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            ))}
            <button
              className="mt-8 bg-[var(--primary-color)] text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 font-semibold"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Slide-in animation keyframes */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default Header;