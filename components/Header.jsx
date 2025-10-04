
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
      className="sticky top-0 z-30 bg-[var(--section-bg)] transition-all duration-300 border-b border-gray-100"
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
            <div className=" text-[var(--primary-color)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
             <img src="/logo.png" alt="Spacio Interspace Logo" className="h-10 w-20 object-center" />
            </div>
            
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 mr-10" data-aos="fade-left">
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