"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = (props) => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("from_name")?.trim();
    const email = formData.get("reply_to")?.trim();

    // ✅ Validation
    if (!name || !email) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    setLoading(true);

    
      emailjs.sendForm(
        "service_rwg7ssc",   // replace with EmailJS service ID
        "template_rjjm5ki",  // replace with EmailJS template ID
        form.current,
        "J7k3fZHeprUzG80Qd"    // replace with EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully 🎉");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
          toast.error("Failed to send. Try again later.");
        }
      );
  };

  return (
    <section className="bg-gradient-to-br " id="contact" {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-4 mt-5">
          <h2 className="text-3xl font-extrabold text-[var(--text-primary)]">Let’s Connect</h2>
        </div>

        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12 border border-gray-100">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold" htmlFor="name">Name</label>
              <input
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-[var(--primary-color)]"
                id="name"
                name="from_name"
                type="text"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold" htmlFor="email">Email</label>
              <input
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-[var(--primary-color)]"
                id="email"
                name="reply_to"
                type="email"
              />
            </div>

            <div className="text-center">
              <button
                className="w-full sm:w-auto inline-flex justify-center py-3 px-10 rounded-lg text-white font-semibold text-lg bg-[var(--primary-color)] hover:opacity-90 focus:ring-4 focus:ring-[var(--primary-color)] transition-all duration-200"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Connect"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
