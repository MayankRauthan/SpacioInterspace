import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const TestimonialCarousel = (props) => {
  const [testimonials, setTestimonials] = useState([]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  useEffect(() => {
    fetch("testimonial.json") // ✅ loads from public folder
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials" className="max-w-4xl mx-auto py-12 text-center" {...props}>
      <h2 className="text-4xl font-bold text-gray-800 tracking-tight mb-8">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, index) => (
            <div key={index} className="flex-[0_0_100%] px-6">
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="text-5xl font-bold text-green-600">{t.rating}</div>
                <div className="flex justify-center mt-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${
                        i < t.stars ? "text-blue-500 fill-blue-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-600 italic leading-relaxed">
                  "{t.review}"
                </p>
                <p className="mt-4 font-semibold text-red-600">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
