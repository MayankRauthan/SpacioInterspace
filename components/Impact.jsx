import React from 'react';
import AnimatedNumber from './AnimatedNumber';
const Impact = (props) => {
  return (
    <section {...props}>
      <div className="flex flex-row overflow-auto justify-center items-center p-4 md:grid md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-extrabold text-[var(--primary-color)]"><AnimatedNumber endValue={400} duration={2.5} separator="," />+</p>
          <p className="text-lg text-[var(--text-secondary)] mt-2">Projects Completed</p>
        </div>
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-extrabold text-[var(--primary-color)]"><AnimatedNumber endValue={600} duration={2.5} separator="," />+</p>
          <p className="text-lg text-[var(--text-secondary)] mt-2">Satisfied Clients</p>
        </div>
        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 text-center">
          <p className="text-4xl font-extrabold text-[var(--primary-color)]"><AnimatedNumber endValue={100} duration={2.5} separator="," />+</p>
          <p className="text-lg text-[var(--text-secondary)] mt-2">Unique Styles</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;