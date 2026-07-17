import React from 'react';
import useSEO from '../hooks/useSEO';

const Home = ({ navigateTo }) => {
  useSEO({
    title: "Rahul Kumar Acharya | Full-Stack Web Developer & Software Engineer",
    description: "Portfolio of Rahul Kumar Acharya, a Full-Stack Web Developer specialized in React, Tailwind CSS, Python, and Django REST Framework (DRF) APIs.",
    keywords: "Rahul Kumar Acharya, Full-Stack Developer, React Developer, DRF, Django REST Framework, Python, Portfolio, Software Engineer"
  });
  return (
    <main className="pt-28 md:pt-40 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24">
        
        <div className="w-full md:w-3/5 text-center md:text-left">
          <p className="text-cyan-500 font-mono mb-4 tracking-[0.3em] uppercase text-xs font-semibold">
            // Code • Design • Deploy
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 font-serif">
            Hi, I'm <span className="text-cyan-500 italic font-medium">Rahul Acharya</span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 font-light mb-8 max-w-xl leading-relaxed">
            Building the future of the web with{" "}
            <span className="text-white border-b border-cyan-500 pb-0.5">React, DRF &amp; Tailwind</span>.
          </p>

          <p className="max-w-md text-zinc-500 leading-relaxed mx-auto md:mx-0 text-base mb-10">
            Passionate <span className="text-zinc-300 font-medium">Full-Stack Developer</span> specialized in 
            architecting end-to-end solutions, from robust <span className="text-cyan-400/80">Django REST Framework</span> APIs 
            to responsive <span className="text-cyan-400/80">React</span> interfaces.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <button
              onClick={() => navigateTo('projects')}
              className="px-8 py-3.5 bg-cyan-500 text-black font-bold text-sm tracking-wider uppercase rounded hover:bg-cyan-400 transition duration-300 cursor-pointer shadow-lg shadow-cyan-500/10 active:scale-98"
            >
              View Projects
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-3.5 bg-transparent border border-zinc-800 text-zinc-300 font-bold text-sm tracking-wider uppercase rounded hover:bg-zinc-900 hover:text-white transition duration-300 cursor-pointer active:scale-98"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links Outlined Squares */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://acharyaworks.in"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 border border-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-300"
              title="AcharyaWorks"
              aria-label="AcharyaWorks Portal"
            >
              <i className="fa-solid fa-briefcase text-lg"></i>
            </a>
            <a
              href="https://linkedin.com/in/rahulkumaracharya/"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 border border-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-300"
              title="LinkedIn"
              aria-label="Rahul's LinkedIn Profile"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href="https://github.com/rahul-kumar-acharya"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 border border-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition duration-300"
              title="GitHub"
              aria-label="Rahul's GitHub Profile"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/acharyarahul.in"
              target="_blank"
              rel="noopener"
              className="w-11 h-11 border border-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-pink-500 hover:border-pink-500/40 transition duration-300"
              title="Instagram"
              aria-label="Rahul's Instagram Profile"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center relative">
          <div className="relative">
            {/* Elegant asymmetrical layout offsets */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-zinc-800 rounded-[2.5rem] pointer-events-none z-0"></div>
            <div className="relative p-2 bg-zinc-950/80 border border-zinc-900 rounded-[2.5rem] shadow-2xl">
              <img
                src="/Images/Rahul.webp"
                alt="Rahul Kumar Acharya"
                className="w-64 md:w-80 lg:w-96 rounded-[2.2rem] opacity-90 hover:opacity-100 transition duration-500 object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;
