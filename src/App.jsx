import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from '../components/Header';
import ProjectGallery from '../components/ProjectGallery';
import Services from '../components/Services';
import Impact from '../components/Impact';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import { Toaster } from "react-hot-toast";
import WhyUs from '../components/why_us';

import './index.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex-grow">
        <Header data-aos="fade-down" />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <Hero data-aos="fade-up" />
          <div className="border-t border-gray-200 my-16"></div>

          <ClientLogos data-aos="fade-up" />
          <div className="border-t border-gray-200 my-16"></div>

          <ProjectGallery data-aos="fade-up" />
          <div className="border-t border-gray-200 my-16"></div>

          <WhyUs data-aos="fade-up" />
          <div className="border-t border-gray-200 my-16"></div>

          <Services data-aos="fade-up" />
          <div className="border-t border-gray-200 my-16"></div>


          <Testimonial data-aos="fade-up" />
          <div className="border-t border-gray-200 my-16"></div>


          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[var(--text-primary)]">Let’s Connect</h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Have an idea or project in mind? Drop a message below and I’ll get back to you soon.
            </p>
            <div className=" py-20">
              <Contact data-aos="fade-up" />
            </div>
          </div>

          <Footer data-aos="fade-in" />

        </main>
      </div>
    </div>
  );
};

export default App;
