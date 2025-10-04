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
import ProcessSteps from '../components/ProcessSteps';
import { Toaster } from "react-hot-toast";
import WhyUs from '../components/why_us';

import './index.css';

const App = () => {
  useEffect(() => {
    // Force scroll to top immediately on mount
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };
    
    scrollToTop();
    
    // Also ensure scroll to top after window loads
    window.addEventListener('load', scrollToTop);
    
    // Initialize AOS after ensuring we're at the top
    setTimeout(() => {
      AOS.init({
        duration: 1000, // animation duration (ms)
        once: true,     // whether animation should happen only once
        easing: "ease-in-out",
      });
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('load', scrollToTop);
    };
  }, []);

  return (
    <div className="md relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Header - Fixed/Sticky */}
      <Header data-aos="fade-down" />
      
      <main className="flex-grow">
        {/* Hero Section - Full width with custom background */}
        <section className="bg-[var(--section-bg)] py-16 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Hero data-aos="fade-up" />
          </div>
        </section>

        {/* Client Logos Section - White background for contrast */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ClientLogos data-aos="fade-up" />
          </div>
        </section>

        {/* Project Gallery Section - Light background */}
        <section className="bg-[var(--section-bg)] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ProjectGallery data-aos="fade-up" />
          </div>
        </section>

        {/* Why Us Section - White background for emphasis */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <WhyUs data-aos="fade-up" />
          </div>
        </section>

        {/* Services Section - Light background */}
        <section className="bg-[var(--section-bg)] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Services data-aos="fade-up" />
          </div>
        </section>

        {/* Process Steps Section - White background */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ProcessSteps data-aos="fade-up" />
          </div>
        </section>

        {/* Testimonial Section - Light background */}
        <section className="bg-[var(--section-bg)] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Testimonial data-aos="fade-up" />
          </div>
        </section>

        {/* Contact Section - Only visible on mobile */}
        <section className="bg-white py-20 block md:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            <Contact data-aos="fade-up" />
          </div>
        </section>
      </main>

      {/* Footer - Full width dark section */}
      <Footer data-aos="fade-in" />
    </div>
  );
};

export default App;
