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
      'meetingroom/meeting1.JPG',
      ' meetingroom/meeting2.JPG',
      ' meetingroom/meeting3.JPG',
      ' meetingroom/meeting4.JPG',
      ' meetingroom/meeting5.JPG'

    ],
  },
  {
    title: 'Elegant Dining Area',
    category: 'Residential',
    images: [
     ' dinningroom/dinning4.JPG',
     ' dinningroom/dinning2.JPG',
     ' dinningroom/dinning3.JPG',
     ' dinningroom/dinning1.JPG',
     ' dinningroom/dinning5.JPG'
    ],
  },
  {
    title: 'Minimalist Bedroom',
    category: 'Residential',
    images: [
      ' bedroom/bed4.JPG',
      ' bedroom/bed1.JPG',
      ' bedroom/bed3.JPG',
      ' bedroom/bed2.JPG',
      ' bedroom/bed5.JPG'
    ],
  },
  {
    title: 'Drawing Room',
    category: 'Commercial',
    images: [
      ' drawingroom/drawing5.JPG',
      ' drawingroom/drawing3.JPG',
      ' drawingroom/drawing2.JPG',
      ' drawingroom/drawing4.JPG',
      ' drawingroom/drawing1.JPG',
    ],
  },
  {
    title: 'Luxury Bathroom',
    category: 'Residential',
    images: [
      ' bathroom/bathroom1.JPG',
      ' bathroom/bathroom2.JPG',
      ' bathroom/bathroom3.JPG',
      ' bathroom/bathroom4.JPG',
      ' bathroom/bathroom5.JPG'
    ],
  },
  {
    title: 'Workspace',
    category: 'Residential',
    images: [
      ' workspace/workspace1.JPG',
      ' workspace/workspace2.JPG',
      ' workspace/workspace3.JPG',
      ' workspace/workspace4.JPG',
      'workspace/workspace5.JPG'
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
