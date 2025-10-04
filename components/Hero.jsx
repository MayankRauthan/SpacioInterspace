
import React, { useState } from "react";
import useTypewriter from "./useTypewriter";
import Contact from "./Contact";

export default function Hero(props) {
  const [showStats, setShowStats] = useState(false);

  const typewriter = useTypewriter(["Design", "Architect", "Planning"], 120, 1200);
  return (
    <section className=" w-full flex flex-col items-center justify-center px-6 md:px-18 lg:px-0 py-8" {...props}>
      
      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Left Side */}
        <div className="flex flex-col space-y-6 ">
          <h2 className="text-4xl md:text-8xl font-bold leading-tight flex flex-row flex-wrap items-center gap-2">
            <span>Interior</span>
            <span
              className="text-[var(--primary-color)] inline-block"
              style={{ minWidth: '8ch', transition: 'min-width 0.2s' }} 
            >
              {typewriter}
              <span className="border-r-2 border-[var(--primary-color)] animate-pulse ml-1" style={{fontSize: '0.8em'}}></span> 
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg text-lg text-justify">
            Step into a world where the art of Interior Design is meticulously crafted
            to bring together timeless elegance and cutting-edge modern innovation,
            allowing you to transform your living spaces into the epitome of luxury
            and sophistication.
          </p>
          <div className="flex w-full justify-center md:justify-start">
          
          </div>
          {/* Stats */}
        </div>

        {/* Right Side Images */}
        <div className="relative flex flex-col items-center lg:items-end space-y-6 lg:hidden ">
          <img
            src="image1.png"
            alt="Interior Chair"
            className="rounded-lg shadow-md h-60 w-60 md:w-104 md:h-60"
          />
          <div className="flex justify-center md:justify-start md:pr-25">
            <img
              src="rectangle.png"
              className="absolute hidden h-30 w-30 top-60 left-0 z-0 md:block"
            />
            <img
              src="image2.png"
              alt="Interior Sofa"
              className="rounded-lg shadow-md h-60 w-60 md:w-104 md:h-60 z-1"
            />
            
          </div>
        </div>
        <div className=" lg:block hidden ">
            <Contact/>
        </div>
        
      </div>
    </section>
  );
}