import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const Testimonial = (props) => {
  const [testimonials, setTestimonials] = useState([]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  useEffect(() => {
    fetch("testimonial.json") // ✅ loads from public folder
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials" className="max-w-4xl h-full mx-auto pt-10 px-6 text-center" {...props}>
      <h2 className="text-4xl font-bold text-gray-800 tracking-tight mb-12">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden py-10" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, index) => (
            <div key={index} className="flex-[0_0_100%] h-full px-6">
              <div className="bg-white shadow-xl rounded-3xl p-5 relative flex flex-col items-center" >
                
                {/* Rating Badge */}
                <span className="text-black/500 px-4 py-0 text-8xl ">
                  ”
                </span>

                

                {/* Review with decorative quote */}
                <p className="text-xl text-gray-700 italic leading-relaxed relative">
                  {t.review}
                </p>
                
                {/* Author */}
                <p className="mt-6 font-semibold text-lg text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.position || ""}</p>

                {/* Stars */}
                <div className="flex justify-center mt-2 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className={`${
                        i < t.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
