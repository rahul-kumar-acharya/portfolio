import React from 'react';
import useSEO from '../hooks/useSEO';

const About = ({ navigateTo }) => {
  useSEO({
    title: "About Me | Rahul Kumar Acharya",
    description: "Learn more about Rahul Kumar Acharya, a Computer Science Engineering student and Full-Stack Developer based in Bihar, India. Specialized in React & DRF.",
    keywords: "About Rahul Kumar Acharya, CSE Engineer, Vidya Vihar Institute of Technology, Full-Stack Developer, Python, Django, React"
  });
  return (
    <main className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
          About <span className="text-cyan-500 italic font-medium">Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-1 gap-12 bg-zinc-950/20 p-8 md:p-12 rounded-3xl border border-zinc-900 shadow-2xl">
        
        <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
            I build bridges between <span className="text-cyan-500 italic font-medium">logic</span> &amp; <span className="text-cyan-500 italic font-medium">design</span>
          </h3>

          <p className="text-base md:text-lg">
            Hello! I'm <span className="text-white font-semibold font-serif">Rahul Kumar Acharya</span>, 
            currently pursuing my Computer Science Engineering degree in Bihar, India. I specialize in bridging the gap between complex backend architectures and intuitive, designer-grade frontend interfaces.
          </p>

          <p className="text-base md:text-lg">
            With a solid foundation in <span className="text-zinc-200">React and Tailwind CSS</span>, I build highly responsive interfaces. On the server side, I leverage <span className="text-zinc-200">Python and Django REST Framework (DRF)</span> to engineer robust, scalable APIs, clean database models, and secure endpoints.
          </p>

          <p className="text-base md:text-lg">
            I focus on architecting applications that solve tangible problems—whether that's building high-performance engineering study hubs like <span className="text-cyan-400 font-serif italic">TechLancePrep</span> or designing automated marksheet verification engines like <span className="text-cyan-400 font-serif italic">EduMarks</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-zinc-900">
          <div className="flex items-start gap-4 p-5 bg-zinc-950/40 rounded-xl border border-zinc-900/60">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg shrink-0 mt-0.5">
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">// Name</p>
              <p className="font-semibold text-white text-base">Rahul Kumar Acharya</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-5 bg-zinc-950/40 rounded-xl border border-zinc-900/60">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg shrink-0 mt-0.5">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">// Email</p>
              <a href="mailto:rahulkumaracharya199@gmail.com" className="font-semibold text-white text-xs sm:text-sm md:text-base hover:text-cyan-400 transition-colors break-all block">
                rahulkumaracharya199@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-zinc-950/40 rounded-xl border border-zinc-900/60">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg shrink-0 mt-0.5">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">// Location</p>
              <p className="font-semibold text-white text-base">Purnea, Bihar, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-zinc-950/40 rounded-xl border border-zinc-900/60">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg shrink-0 mt-0.5">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">// Role</p>
              <p className="font-semibold text-white text-base">Full-Stack Web Developer</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <button
            onClick={() => navigateTo('contact')}
            className="px-8 py-3.5 bg-cyan-500 text-black font-bold text-sm tracking-wider uppercase rounded hover:bg-cyan-400 transition duration-300 cursor-pointer shadow-lg shadow-cyan-500/10 active:scale-98"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
