import React from 'react';

const Footer = (props) => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200" {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center text-gray-500">
        <p>&copy; 2025 Design Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;