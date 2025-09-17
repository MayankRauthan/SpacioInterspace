import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[500px] flex items-end justify-start p-10 rounded-xl overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFTwwLBmzj-kgZ05WZslDbP6dqPNe8eseOlEj7ExD98djCFojnz1H8B1esX1kJJKbnfVncdfCTyq8m6ssWxBb6w1h2KLTaY_ZURoJQNHh30xqCz9QFLOYpC4NRZ0-_1UNAzuG483KaA43-mj3m05IyBG4Usc8eA_1GF9xyYPhni85FjQ-1mfRQNJn31Nsu557bdbtUNmQXyWx9Ck9yz27jkHlt4xTB4R7tdGOaV0vX1s1V5tqBmvju1GlDGd1J8fCyEHHNKQQas1sG")'
      }}
    >
      <div className="max-w-2xl text-left text-white">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">Interior Design</h1>
        <p className="text-lg text-gray-200 leading-relaxed mt-4">
          Transforming spaces into captivating environments that reflect your unique style and needs.
        </p>
        <button className="mt-8 bg-[var(--primary-color)] text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 font-bold">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;