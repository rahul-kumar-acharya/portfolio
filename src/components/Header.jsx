import React from 'react';

const Header = ({ activePage, navigateTo }) => {
  const navLinks = [
    { label: "Home", page: "home", icon: "fa-solid fa-house" },
    { label: "About", page: "about", icon: "fa-solid fa-user" },
    { label: "Skills", page: "skills", icon: "fa-solid fa-code" },
    { label: "Projects", page: "projects", icon: "fa-solid fa-laptop-code" },
    { label: "Certificates", page: "certificates", icon: "fa-solid fa-award", shortLabel: "Certs" },
    { label: "Contact", page: "contact", icon: "fa-solid fa-envelope" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-zinc-900" id="site-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            <button onClick={() => navigateTo('home')} className="focus:outline-none cursor-pointer font-serif">
              <span className="text-cyan-500 italic font-semibold">Rahul.</span>
              <span className="text-white font-light font-sans ml-0.5 text-lg tracking-widest">ACHARYA</span>
            </button>
          </h1>

          <nav className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => navigateTo(link.page)}
                  className={`text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer pb-1 ${
                    isActive ? "text-cyan-500 border-b border-cyan-500" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-500 hover:text-black transition duration-300 text-xs font-bold tracking-widest"
            >
              RESUME
            </a>
          </nav>

          {/* Mobile Direct Resume CTA */}
          <a
            href="assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden px-3 py-1.5 border border-cyan-500/40 text-cyan-400 rounded bg-cyan-500/5 text-xs font-bold hover:bg-cyan-500 hover:text-black transition tracking-wider"
          >
            RESUME
          </a>
        </div>
      </header>

      {/* Floating Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/80 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.8)] px-2 py-2 flex items-center justify-around" id="mobile-bottom-nav">
        {navLinks.filter(link => link.page !== 'home').map((link) => {
          const isActive = activePage === link.page;
          const displayLabel = link.shortLabel || link.label;

          return (
            <button
              key={link.page}
              onClick={() => navigateTo(link.page)}
              className={`flex flex-col items-center justify-center flex-1 py-1.5 relative transition-all duration-300 cursor-pointer ${
                isActive ? "text-cyan-500 scale-105" : "text-zinc-500 hover:text-zinc-200 active:scale-95"
              }`}
            >
              <i className={`${link.icon} text-lg transition-all duration-300 ${
                isActive ? "text-cyan-500 -translate-y-0.5 active-icon-bounce" : "text-zinc-500 hover:-translate-y-0.5"
              }`}></i>
              <span className={`text-[9px] min-[375px]:text-[10px] mt-0.5 transition-colors duration-300 ${
                isActive ? "font-bold tracking-wider text-cyan-500" : "font-medium tracking-wide text-zinc-600"
              }`}>
                {displayLabel}
              </span>
              {isActive && (
                <span className="absolute -bottom-1.5 w-1 h-1 bg-cyan-500 rounded-full active-dot-glow"></span>
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
