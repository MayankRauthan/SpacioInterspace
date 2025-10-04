import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Make sure line-clamp plugin is enabled in tailwind.config.js
// import 'tailwindcss/line-clamp';

const services = [
  { title: 'Civil and Plumbing', description: 'Foundational civil works and reliable plumbing for quality, on-time project delivery.', src: 'ourservice/CivilPlumbing.jpg' },
  { title: 'Carpentry-Wood Work', description: 'Custom woodworking and expert carpentry for beautiful, durable, and functional interior finishes.', src: 'ourservice/CarpentartWoodWork.jpg' },
  { title: 'HVAC', description: 'Efficient heating, ventilation, and cooling system installation and complete comfort solutions.', src: 'ourservice/HVAC.jpg' },
  { title: 'Customized Furniture', description: 'Bespoke furniture solutions tailored to your style, needs, and exact specifications.', src: 'ourservice/CustomizedFurniture.jpg' },
  { title: 'UPVC Window/Door Sanitary', description: 'Durable UPVC windows/doors plus precise sanitary fittings for a modern, hygienic finish.', src: 'ourservice/UpvcWindow.jpg' },
  { title: 'SS Work', description: 'Precision fabrication and installation of high-grade stainless steel for strength and finish.', src: 'ourservice/SSWork.jpg' },
  { title: 'Painting & Polishing Electrical', description: 'Safe, efficient electrical system design, installation, and maintenance by certified experts.', src: 'ourservice/PolishingElectrical.jpg' },
  { title: 'Steel Fabrication', description: 'Heavy-duty steel fabrication, welding, and erection for industrial and structural projects.', src: 'ourservice/SteelFabrication.jpg' },
  { title: 'Tiling', description: 'Flawless installation of all tile types for durable, beautiful, and water-resistant surfaces.', src: 'ourservice/Tiling.jpg' },
  { title: 'Data & Networking', description: 'Seamless data cabling and network installation for reliable, high-speed connectivity solutions.', src: 'ourservice/DataNetworking.jpg' },
  { title: 'Electrical POP/Gypsum', description: 'Integrated electrical wiring and lighting solutions seamlessly finished with POP/Gypsum work.', src: 'ourservice/POP.jpg' },
  { title: 'Project Managements', description: 'End-to-end project oversight for efficient planning, budgeting, and on-time completion.', src: 'ourservice/ProjectManagement.jpg' },
];

const Services = (props) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section {...props}>
      <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight text-center mb-10">
        Our Services
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="h-full">
            <div
              className="bg-white m-2 p-6 rounded-md shadow-sm border border-gray-100 text-center h-full flex flex-col justify-start
              transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary-color)]"
            >
              <div
                className="w-full aspect-square bg-cover bg-center rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url("${service.src}")` }}
              ></div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{service.title}</h3>

                <p
                  className={`text-base text-[var(--text-secondary)] ${
                    expanded[index] ? '' : 'line-clamp-2'
                  } transition-all duration-300`}
                >
                  {service.description}
                </p>

                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-sm text-[var(--accent-color)] hover:text-[var(--accent-teal)] hover:underline focus:outline-none transition-colors duration-200"
                >
                  {expanded[index] ? 'Show less' : 'Read more'}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
