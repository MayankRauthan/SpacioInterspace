import React from 'react';

const Impact = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
          <p className="text-5xl font-extrabold text-[var(--primary-color)]">400+</p>
          <p className="text-lg text-[var(--text-secondary)] mt-2">Projects Completed</p>
        </div>
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
          <p className="text-5xl font-extrabold text-[var(--primary-color)]">600+</p>
          <p className="text-lg text-[var(--text-secondary)] mt-2">Satisfied Clients</p>
        </div>
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
          <p className="text-5xl font-extrabold text-[var(--primary-color)]">100+</p>
          <p className="text-lg text-[var(--text-secondary)] mt-2">Unique Styles</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;