import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white rounded-xl" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you. Fill out the form below to start the conversation.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="name">Name</label>
            <input autocomplete="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm" id="name" name="name" type="text" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="email">Email</label>
            <input autocomplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm" id="email" name="email" type="email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="subject">Subject</label>
            <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm" id="subject" name="subject" type="text" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)]" htmlFor="message">Message</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm" id="message" name="message" rows="4"></textarea>
          </div>
          <div className="text-center">
            <button className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[var(--primary-color)] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] transition-colors duration-200 ease-in-out" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;