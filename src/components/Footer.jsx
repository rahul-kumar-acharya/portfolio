import React from 'react';

const Footer = ({ navigateTo }) => {
  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Skills", page: "skills" },
    { label: "Projects", page: "projects" },
    { label: "Certificates", page: "certificates" },
    { label: "Contact", page: "contact" }
  ];

  return (
    <footer className="w-full bg-zinc-950/60 border-t border-zinc-900 mt-20 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-zinc-900/60">
        
        {/* Left Column: Brand & Tagline */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold tracking-tight font-serif">
            <span className="text-cyan-500 italic font-semibold">Rahul.</span>
            <span className="text-white font-light font-sans ml-0.5 text-base tracking-widest">ACHARYA</span>
          </h4>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            Full-Stack Web Developer specialized in Python, Django, and React engineering. Designing modular solutions.
          </p>
        </div>

        {/* Middle Column: Quick Links Grid */}
        <div className="space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400">// Sitemap</h5>
          <div className="grid grid-cols-2 gap-2 max-w-50">
            {quickLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className="text-left text-zinc-500 hover:text-cyan-400 transition-colors text-sm font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Details */}
        <div className="space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400">// Connect</h5>
          <div className="space-y-3 text-sm text-zinc-500 font-semibold">
            <p>
              <a href="mailto:rahulkumaracharya199@gmail.com" className="hover:text-cyan-400 transition-colors">
                rahulkumaracharya199@gmail.com
              </a>
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://acharyaworks.in"
                target="_blank"
                rel="noopener"
                className="text-zinc-500 hover:text-cyan-400 transition-colors text-lg"
                title="AcharyaWorks"
                aria-label="AcharyaWorks"
              >
                <i className="fa-solid fa-briefcase"></i>
              </a>
              <a
                href="https://linkedin.com/in/rahulkumaracharya/"
                target="_blank"
                rel="noopener"
                className="text-zinc-500 hover:text-cyan-400 transition-colors text-lg"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/rahul-kumar-acharya"
                target="_blank"
                rel="noopener"
                className="text-zinc-500 hover:text-white transition-colors text-lg"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/acharyarahul.in"
                target="_blank"
                rel="noopener"
                className="text-zinc-500 hover:text-pink-500 transition-colors text-lg"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-600 font-mono">
        <p>© 2026 Rahul Kumar Acharya. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS v4</p>
      </div>

    </footer>
  );
};

export default Footer;
