import React from 'react';
import Impact from './Impact';
const clients = [
  { name: 'United Airlines', src: 'client/United_Airlines.png' },
  { name: 'Jaguar', src: 'client/item_2.png' },
  { name: 'Client Name 3', src: 'client/item_3.jpg' },
  { name: 'Client Name 4', src: 'client/item_4.png' },
  { name: 'Client Name 5', src: 'client/item_5.jpg' },
  { name: 'Client Name 6', src: 'client/item_1.png' },
  { name: 'Client Name 7', src: 'client/item_7.png' },
    { name: 'Client Name 8', src: 'client/item_8.png' },
        { name: 'Client Name 9', src: 'client/item_9.jpeg' },

            { name: 'Client Name 10', src: 'client/item_10.png' },



  // Duplicate for a seamless loop
   { name: 'United Airlines', src: 'client/United_Airlines.png' },
  { name: 'Jaguar', src: 'client/item_2.png' },
  { name: 'Client Name 3', src: 'client/item_3.jpg' },
  { name: 'Client Name 4', src: 'client/item_4.png' },
  { name: 'Client Name 5', src: 'client/item_5.jpg' },
  { name: 'Client Name 6', src: 'client/item_6.jpg' },
  { name: 'Client Name 7', src: 'client/item_1.png' },
    { name: 'Client Name 8', src: 'client/item_8.png' },
    { name: 'Client Name 9', src: 'client/item_9.jpeg' },

            { name: 'Client Name 10', src: 'client/item_10.png' },

];

const ClientLogos = (props) => {
  return (
    <section id="customers" className="py-12" {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">Our Reputed Clients</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">We take pride in our partnerships and the trust our clients place in us.</p>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex animate-scroll gap-6 group-hover:[animation-play-state:play]">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-shrink-0 mx-5">
                <div className="p-4 rounded-lg  w-40 h-40 flex items-center justify-center">
                  <img alt={client.name} className="max-w-32 max-h-32"  src={client.src} />
                </div>
              </div>
            ))}
          </div>
        </div>
          <Impact className="mt-20"/>

      </div>
    </section>
  );
};

export default ClientLogos;