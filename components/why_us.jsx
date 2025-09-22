import React from "react";

const whyUsData = [
  {
    icon: (
      // Door icon
      <svg width="32" height="32" fill="none" stroke="#414c58" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="16" cy="12" r="1.5"/></svg>
    ),
    title: "ONE DOOR SOLUTION",
    description:
      "We're a one door for all your residential and commercial interior design needs.",
  },
  {
    icon: (
      // Award/medal/star icon
      <svg width="32" height="32" fill="none" stroke="#414c58" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M12 13v7M9 20h6"/></svg>
    ),
    title: "INDUSTRY EXPERT",
    description:
      "8+ years of experience in commercial and residential spaces",
  },
  {
    icon: (
      // Clock/fast icon
      <svg width="32" height="32" fill="none" stroke="#414c58" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "ON TIME DELIVERY",
    description:
      "We swiftly execute all your projects without compromising on finishing, quality, or attention to detail.",
  },
  {
    icon: (
      // Diamond/quality icon
      <svg width="32" height="32" fill="none" stroke="#414c58" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 22 9 12 22 2 9 12 2"/></svg>
    ),
    title: "EXCEPTIONAL QUALITY",
    description:
      "Innovative designs, exceeding your design, quality, and finishing expectations.",
  },
  {
    icon: (
      // Eye/transparency icon
      <svg width="32" height="32" fill="none" stroke="#414c58" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    title: "TRANSPARENCY",
    description:
      "Expect detailed, transparent billing and absolute trust in our dealings.",
  },
];

const WhyUs = () => (
  <section className="py-20 bg-white" id="why-us">
    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-[var(--text-primary)]">Reason to work with Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {whyUsData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-secondary)] uppercase text-center">{item.title}</h3>
            <p className="flex item-center justify-center text-gray-500 text-base font-medium text-start">{item.description}</p>
          </div>
        ))}
       
      </div>
    </div>

  </section>
);

export default WhyUs;
