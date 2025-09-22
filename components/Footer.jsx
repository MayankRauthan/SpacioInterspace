import React from 'react';

const locations = [
  {
    city: 'Gurugram',
    address: 'Plot no.477, Sector - 27, Golf Course Road, Gurugram, Haryana - 122001',
    gstin: '07DFSPS3732B2Z8',
    email: 'spaciointersace@gmail.com',
    phone: '+91-9911415522',
  },
];

const Footer = (props) => {
  return (
    <footer className="bg-[#414c58] text-gray-200 pt-14 pb-8" {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left: Contact Info */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-3xl font-extrabold mb-6">Get in Touch</h2>
            {locations.map((loc, idx) => (
              <div key={idx} className="mb-6 flex items-start gap-3">
                <span className="mt-1 text-primary-500">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z"/><circle cx="12" cy="13" r="3"/></svg>
                </span>
                <div>
                  <div className="font-bold text-xl mb-1">{loc.city}</div>
                  <div className="text-base mb-1">{loc.address}</div>
                  <div className="text-sm text-gray-400 mb-1">GSTIN: {loc.gstin}</div>
                  <div className="text-sm text-gray-400">Email: <a href={`mailto:${loc.email}`} className="underline text-primary-400">{loc.email}</a></div>
                  <div className="text-sm text-gray-400">Phone: <a href={`tel:${loc.phone}`} className="underline text-primary-400">{loc.phone}</a></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact Card */}
          <div className="flex-1 min-w-[250px] flex flex-col gap-6 md:items-end">
            <div className="flex items-center gap-3">
              <span className="text-primary-500">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              </span>
              <div>
                <div className="font-bold text-lg">Contact</div>
                <div className="text-base text-primary-400">spaciointersace@gmail.com</div>
                <div className="text-base text-primary-400">+91-9911415522</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary-500">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.08"/><path d="M16 2v4"/><path d="M8 2v4"/></svg>
              </span>
              <div>
                <div className="font-bold text-lg">Address</div>
                <div className="text-base text-primary-400">Plot no.477, Sector - 27, Golf Course Road, Gurugram, Haryana - 122001</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Spacio Interspace. All rights reserved.<br />
          GSTIN: 07DFSPS3732B2Z8
        </div>
      </div>
    </footer>
  );
};

export default Footer;