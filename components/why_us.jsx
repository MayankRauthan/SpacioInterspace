import React from "react";

const whyUsData = [
  {
    icon: (
      // Door icon
      <svg width="32" height="32" fill="none" stroke="#4caf50" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="16" cy="12" r="1.5"/></svg>
    ),
    title: "ONE DOOR SOLUTION",
    description:
      "We're a one door for all your residential and commercial interior design needs.",
  },
  {
    icon: (
      // Award/medal/star icon
      <svg width="32" height="32" fill="none" stroke="#4caf50" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M12 13v7M9 20h6"/></svg>
    ),
    title: "INDUSTRY EXPERT",
    description:
      "8+ years of experience in commercial and residential spaces",
  },
  {
    icon: (
      // Clock/fast icon
      <svg width="32" height="32" fill="none" stroke="#4caf50" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "ON TIME DELIVERY",
    description:
      "We swiftly execute all your projects without compromising on finishing, quality, or attention to detail.",
  },
  {
    icon: (
      // Diamond/quality icon
      <svg width="32" height="32" fill="none" stroke="#4caf50" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 22 9 12 22 2 9 12 2"/></svg>
    ),
    title: "EXCEPTIONAL QUALITY",
    description:
      "Innovative designs, exceeding your design, quality, and finishing expectations.",
  },
  {
    icon: (
      // Eye/transparency icon
      <svg width="32" height="32" fill="none" stroke="#4caf50" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    title: "TRANSPARENCY",
    description:
      "Expect detailed, transparent billing and absolute trust in our dealings.",
  },
];

const WhyUs = (props) => (
  <section id="why-us" {...props}>
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
        Reason to work with Us
      </h2>
      <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
        Discover what sets us apart in the interior design industry and why clients choose us for their most important projects.
      </p>
    </div>

    {/* Why Us Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {whyUsData.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="mb-6 p-4 rounded-full bg-white/90 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)] uppercase leading-tight min-h-[3rem] flex items-center justify-center">
            {item.title}
          </h3>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-xs">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyUs;
