import React from 'react';

const Testimonial = () => {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">What Our Clients Say</h2>
      <div className="mt-8">
        <p className="text-xl text-[var(--text-secondary)] leading-relaxed italic">
          "Working with Design Co. was a game-changer. Their attention to detail and creative vision transformed my home into a masterpiece. I couldn't be happier with the results!"
        </p>
        <p className="mt-4 font-semibold text-[var(--text-primary)]">- Sarah Thompson</p>
      </div>
    </section>
  );
};

export default Testimonial;