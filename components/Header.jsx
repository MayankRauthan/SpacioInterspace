import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="size-6 text-[var(--primary-color)]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Spacio Interspace</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#">Home</a>
            <a className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#">Services</a>
            <a className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#contact">Contact</a>
            <a className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 ease-in-out px-3 py-2 rounded-md" href="#">Support</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;