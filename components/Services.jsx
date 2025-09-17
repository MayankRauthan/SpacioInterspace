import React from 'react';

const services = [
  { title: 'Lighting Design', description: 'Expert lighting solutions to enhance ambiance and functionality.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNTG63Fj69jXGM9g_zI15Dh5WOy8mA3Ox0aJqsrDKi-a1qesH14DlAWvearj_u6G3jl4l-Ds2MfGr84l5KnqEzG7uzQt43jevLaso6BLUlfHxvnmatfhBaoDDLpHe6Qc8onNN5CfhlBcZZsfVNnu6_9oyllxQGi1uILvZ-qT9mi8vsO4ADtf-D0v60bATQMPuMw4f1-NXh6aseLADIhifTR4pS5X4Mq_qDpKIruUmj39OabeP2I22UI_QTGdaKBpzWJb1a7KWwEp3a' },
  { title: 'Interior Design', description: 'Comprehensive interior design services tailored to your vision.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf7xNsoilfa_NjxTw30pK3Ya4Q0ebeA8XVGCVEeAA0glda6SFE6gFIVMvU4hGLJbJ0Q8CgudArF2_zgxvCSZc_qlQxZDnBQitqM2pbkC0heZ8fZUkATLBNmXla7KvDybXvNmJ93blZn2QjP5m7vVx6jma82wz_oP3n4HbpwSqef-UU8hurF8zGjo2S4-zc6-8-_0cfIJNCOGQMEZPAr5Jau0rd8G4olN6Uj34PDhqdPhk1CocerA3qXdgXi5_VuPsURVFnFF1Jc94o' },
  { title: 'Outdoor Design', description: 'Creating stunning outdoor spaces that complement your lifestyle.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqCUfyDpZhzMztF8xcGLqriRYwm95xZfBwKqAIdlG31dwzaLwHXh-OmGQZcrE1cG29ZrpkDgbRHq37cIMi3VwiKQdcephX1IhDHlfRd_VZ8wb5UtkHO8uIDrU3vW7OLqVg2hB1x5cdJVSHMtxniV5QtYY0h4B7O-CxfAorIqP8_ADBYiE2e95zDNe_fNOugiYYqSDrlS4OTYBP6QQI2O7SbrY9wCvTBkr8aokLFDip0tK-RBnU081P23xvNTuFqGMvijmf1fFqdCZw' },
  { title: 'Space Planning', description: 'Optimizing space utilization for maximum efficiency and aesthetic appeal.', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6YAPH7pdcJ14BQtbaFPlAGdeNlQJOk4qIqNQD6jVzMBrK_4W6yllJpbcJvnPZFhtstjEbL_KwqtaunauK8t3fgp6cFaXG0U4ANDTomEtGJvITDxDWS6X0yYx0o1b2OnyCb3pP8VwTtNvNpsnvxZXLhwhevdUASWgN7KMWm1qexTgRGsd0-Go0J6qyNPszDIptTpxa5cc8xj4spy21SbTGTyA94nI6bXwsEKeexRlK_wOU-R6J7lva1iJGUGIMeQVtDDjdajQFRipA' },
];

const Services = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-sm border border-gray-100 text-center">
            <div 
              className="w-full aspect-square bg-cover bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url("${service.src}")` }}
            ></div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">{service.title}</h3>
            <p className="text-base text-[var(--text-secondary)] mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;