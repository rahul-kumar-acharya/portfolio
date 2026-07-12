import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useSEO from '../hooks/useSEO';

const Contact = () => {
  useSEO({
    title: "Contact Rahul Kumar Acharya | Hire Full-Stack Developer",
    description: "Get in touch with Rahul Kumar Acharya for freelance projects, collaboration inquiries, or internship opportunities. Responsive responses within 24 hours.",
    keywords: "Contact Rahul Kumar Acharya, Hire Full-Stack Developer, Freelance Web Developer, Hire React Developer"
  });
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(() => {
        alert("Message Sent! I'll get back to you soon. 🚀");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Something went wrong. Please check your connection and try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <main className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
      
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
          Get In <span className="text-cyan-500 italic font-medium">Touch</span>
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto text-base">
          Have a project in mind, a question, or just want to chat? Drop a message.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-zinc-950/20 p-5 md:p-12 rounded-3xl border border-zinc-900 shadow-2xl">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-8 pr-0 md:pr-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-serif">Let's build something <span className="text-cyan-500 italic font-medium">epic</span></h3>
            <p className="text-zinc-400 leading-relaxed text-base">
              I am open to freelance projects, collaboration inquiries, or internship opportunities. 
              Fill out the form and I'll respond within 24 hours.
            </p>
          </div>

          <div className="space-y-6 pt-6 md:pt-0">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center justify-center text-cyan-400 text-lg">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-600">// Email</p>
                <a href="mailto:rahulkumaracharya199@gmail.com" className="text-white hover:text-cyan-400 transition-colors text-sm font-semibold">
                  rahulkumaracharya199@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center justify-center text-cyan-400 text-lg">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-600">// Location</p>
                <p className="text-white text-sm font-semibold">Purnea, Bihar, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-zinc-950/40 p-5 md:p-8 rounded-2xl border border-zinc-900">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Rahul"
                  required
                  className="w-full p-4 rounded-lg bg-zinc-950 border border-zinc-900 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="w-full p-4 rounded-lg bg-zinc-950 border border-zinc-900 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="How can I help you?"
                required
                className="w-full p-4 rounded-lg bg-zinc-950 border border-zinc-900 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-4 bg-cyan-500 text-black rounded font-bold text-sm tracking-wider uppercase hover:bg-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/10 active:scale-98 cursor-pointer flex items-center justify-center gap-2 ${
                sending ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {sending ? (
                <>
                  Sending... <i className="fa-solid fa-spinner animate-spin"></i>
                </>
              ) : (
                <>
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;
