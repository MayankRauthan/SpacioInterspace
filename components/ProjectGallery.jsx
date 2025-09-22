import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const projects = [
  {
    title: 'Modern Meeting Room',
    category: 'Residential',
    images: [
      '../public/MeetingRoom/Meeting1.jpg',
      '../public/MeetingRoom/Meeting2.jpg',
      '../public/MeetingRoom/Meeting3.jpg',
      '../public/MeetingRoom/Meeting4.jpg',
      '../public/MeetingRoom/Meeting5.jpg'

    ],
  },
  {
    title: 'Elegant Dining Area',
    category: 'Residential',
    images: [
     '../public/DinningRoom/Dinning4.jpg',
     '../public/DinningRoom/Dinning2.jpg',
     '../public/DinningRoom/Dinning3.jpg',
     '../public/DinningRoom/Dinning1.jpg',
     '../public/DinningRoom/Dinning5.jpg'
    ],
  },
  {
    title: 'Minimalist Bedroom',
    category: 'Residential',
    images: [
      '../public/Bedroom/Bed4.jpg',
      '../public/Bedroom/Bed1.jpg',
      '../public/Bedroom/Bed3.jpg',
      '../public/Bedroom/Bed2.jpg',
      '../public/Bedroom/Bed5.jpg'
    ],
  },
  {
    title: 'Drawing Room',
    category: 'Commercial',
    images: [
      '../public/DrawingRoom/Drawing5.jpg',
      '../public/DrawingRoom/Drawing3.jpg',
      '../public/DrawingRoom/Drawing2.jpg',
      '../public/DrawingRoom/Drawing4.jpg',
      '../public/DrawingRoom/Drawing1.jpg',
    ],
  },
  {
    title: 'Luxury Bathroom',
    category: 'Residential',
    images: [
      '../public/Bathroom/Bathroom1.jpg',
      '../public/Bathroom/Bathroom2.jpg',
      '../public/Bathroom/Bathroom3.jpg',
      '../public/Bathroom/Bathroom4.jpg',
      '../public/Bathroom/Bathroom5.jpg'
    ],
  },
  {
    title: 'Workspace',
    category: 'Residential',
    images: [
      '../public/Workspace/Workspace1.jpg',
      '../public/Workspace/Workspace2.jpg',
      '../public/Workspace/Workspace3.jpg',
      '../public/Workspace/Workspace4.jpg',
      '../public/Workspace/Workspace5.jpg'
    ],
  },
];

const ProjectGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight text-center">
        Our Project Gallery
      </h2>
      <p className="mt-4 text-lg text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
        Explore a curated selection of our finest interior design projects. Each space is a testament to our commitment to elegance, functionality, and timeless style.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group hover:scale-105 transition-transform duration-300 ease-in-out relative overflow-hidden rounded-lg shadow-sm border border-gray-100"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-200"
              src={project.images[0]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-200 mt-1">{project.category}</p>
            </div>

            {/* Hover popup with Swiper */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 z-20 bg-black bg-opacity-90 flex items-center justify-center">
                <div className="w-full h-full">
                  <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      freeMode
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1000 , disableOnInteraction: true }}
       className="w-full h-full">
                    {project.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`Slide ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
