import Header from '../components/Header';
import ProjectGallery from '../components/ProjectGallery';
import Services from '../components/Services';
import Impact from '../components/Impact';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import './index.css';

const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <div className="flex-grow">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <Hero />
          <div className="border-t border-gray-200 my-16"></div>
          <ClientLogos />
          <div className="border-t border-gray-200 my-16"></div>
           <ProjectGallery />
          
          <div className="border-t border-gray-200 my-16"></div>
          <Services />
          <div className="border-t border-gray-200 my-16"></div>
          <Impact />
          <div className="border-t border-gray-200 my-16"></div>
          <Testimonial />
          <div className="border-t border-gray-200 my-16"></div>
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;