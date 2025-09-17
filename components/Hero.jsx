import React, { useState } from "react";

export default function Hero() {
  const [showStats, setShowStats] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center px-6 md:px-18 lg:px-0 py-8">
      
      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Left Side */}
        <div className="flex flex-col space-y-6 ">
          <h2 className="text-4xl md:text-8xl font-bold leading-tight">Interior Design</h2>
          <p className="text-gray-600 max-w-lg text-lg text-justify">
            Step into a world where the art of Interior Design is meticulously crafted
            to bring together timeless elegance and cutting-edge modern innovation,
            allowing you to transform your living spaces into the epitome of luxury
            and sophistication.
          </p>
          <button
            onClick={() => setShowStats(true)}
            className="bg-black text-white px-6 py-3 rounded-md w-fit"
          >
            Start Project
          </button>

          {/* Stats */}
          {showStats && (
            <div className="flex space-x-8 mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold">400+</h3>
                <p className="text-gray-500">Project Complete</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">600+</h3>
                <p className="text-gray-500">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-gray-500">Unique Styles</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side Images */}
        <div className="relative flex flex-col items-center lg:items-end space-y-6 ">
          <img
            src="image1.png"
            alt="Interior Chair"
            className="rounded-lg shadow-md w-80 md:w-104 md:h-60"
          />
          <div className="flex justify-center md:justify-start md:pr-25">
            <img
              src="rectangle.png"
              className="absolute hidden h-30 w-30 top-60 left-0 z-0 md:block"
            />
            <img
              src="image2.png"
              alt="Interior Sofa"
              className="rounded-lg shadow-md md:w-104 md:h-60 z-1"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}