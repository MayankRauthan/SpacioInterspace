import React from 'react';

const processSteps = [
  {
    id: 1,
    title: "Understand the requirement in detail",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
    ),
    description: "We thoroughly analyze your needs, preferences, and vision to create the perfect design solution."
  },
  {
    id: 2,
    title: "Provide designs at lightning fast speed",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    description: "Our expert team delivers innovative design concepts quickly without compromising on quality."
  },
  {
    id: 3,
    title: "Estimate cost suitable to your budget",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 1v6m0 6v6"/>
        <path d="M9 9h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9"/>
      </svg>
    ),
    description: "We provide transparent, detailed estimates that align with your budget and expectations."
  },
  {
    id: 4,
    title: "Close 3D designs",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    description: "Finalize stunning 3D visualizations that bring your space to life before execution."
  },
  {
    id: 5,
    title: "Manage seamless execution of project",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    description: "Our project management ensures smooth execution with attention to every detail."
  },
  {
    id: 6,
    title: "On-Time delivery",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    description: "We guarantee timely completion of your project without compromising on quality or finishing."
  }
];

const ProcessSteps = (props) => {
  return (
    <div id="process" {...props}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Our 6 Steps Process
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
          From concept to completion, our streamlined process ensures exceptional results 
          with transparency, efficiency, and attention to detail at every step.
        </p>
      </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <ProcessStepCard step={step} />
              
              {/* Connection Line for Desktop */}
              {index < processSteps.length - 1 && (
                <>
                  {/* Horizontal line for desktop (every 3rd item doesn't get a line) */}
                  <div className={`hidden lg:block absolute top-12 -right-6 w-12 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] ${(index + 1) % 3 === 0 ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                      <svg width="16" height="16" fill="var(--accent-color)" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Vertical line for mobile/tablet */}
                  <div className="flex justify-center mt-6 mb-2 lg:hidden">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--primary-color)] to-[var(--accent-color)] relative">
                      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1">
                        <svg width="16" height="16" fill="var(--accent-color)" viewBox="0 0 24 24" className="rotate-90">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

const ProcessStepCard = ({ step }) => {
  return (
    <div className="group text-center max-w-sm mx-auto">
      {/* Icon Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            {step.icon}
          </div>
          {/* Step Number */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[var(--accent-color)] rounded-full flex items-center justify-center text-sm font-bold text-[var(--accent-color)] shadow-md">
            {step.id}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-2">
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 leading-tight min-h-[3rem] flex items-center justify-center">
          {step.title}
        </h3>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default ProcessSteps;