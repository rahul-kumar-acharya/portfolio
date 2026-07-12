import React from 'react';
import useSEO from '../hooks/useSEO';

const Projects = () => {
  useSEO({
    title: "Projects Portfolio | Rahul Kumar Acharya",
    description: "Case studies of full-stack engineering and utility projects built by Rahul Kumar Acharya, including PrepWise (AI Interview platform) and TechLancePrep.",
    keywords: "Rahul Kumar Acharya Projects, PrepWise, TechLancePrep, EduMarks, Python Django Projects, React Portfolio"
  });
  const featuredProjects = [
    {
      title: "PrepWise",
      subtitle: "Interview Preparation",
      description: "An interview preparation platform for full-stack developers. Features dynamic domain-based routing, a specialized 'STAR Method' behavioral engine, and a low-latency coding laboratory with integrated syntax-themed solution modeling.",
      image: "/Images/Projects/3.webp", 
      github: "https://github.com/rahul-kumar-acharya/prepwise",
      live: "https://prepwise.acharyaworks.in/",
      tech: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "TechlancePrep",
      subtitle: "DSA Command Center",
      description: "High-performance Engineering Command Center for mastering DSA and System Design. Features granular user telemetry, secure 'Identity Vault' profiles, and a robust administrative CRUD engine.",
      image: "/Images/Projects/2.webp",
      github: "https://github.com/rahul-kumar-acharya/techlanceprep",
      live: "",
      tech: ["Python", "Django", "Tailwind CSS", "PostgreSQL"]
    },
    {
      title: "EduMarks",
      subtitle: "Academic Management System",
      description: "Professional Academic Management System with dynamic marksheet generation, secure result verification, and institutional portals.",
      image: "/Images/Projects/1.webp",
      github: "https://github.com/rahul-kumar-acharya/MarksheetGenerator",
      live: "",
      tech: ["Python", "Django", "Tailwind CSS", "ReportLab"]
    }
  ];

  const utilityProjects = [
    {
      title: "Personal Portfolio Website",
      description: "A fully responsive personal portfolio built with React and Tailwind CSS.",
      github: "https://github.com/rahul-kumar-acharya/portfolio",
      live: "https://acharyarahul.in/",
      tech: ["React", "Vite", "Tailwind v4"]
    },
    {
      title: "Foodie House POS System",
      description: "Modern Restaurant POS system with transaction handlers and receipt formatting.",
      github: "https://github.com/rahul-kumar-acharya/foodie-house-pos",
      live: "",
      tech: ["HTML", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Password Strength Checker",
      description: "Responsive Password strength evaluator with regex telemetry rules.",
      github: "https://github.com/rahul-kumar-acharya/password-strength-checker",
      live: "",
      tech: ["JavaScript", "Tailwind CSS"]
    },
    {
      title: "Tic Tac Toe Game",
      description: "Interactive local game with game state saving and win streak tracking.",
      github: "https://github.com/rahul-kumar-acharya/tic-tac-toe",
      live: "",
      tech: ["HTML", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Calculator",
      description: "Sleek utility web calculator with mathematical operation engines.",
      github: "https://github.com/rahul-kumar-acharya/calculator-web-project",
      live: "",
      tech: ["HTML", "Tailwind CSS", "JavaScript"]
    }
  ];

  return (
    <main className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
          Featured <span className="text-cyan-500 italic font-medium">Projects</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-base">
          A showcase of full-stack engineering, interactive applications, and client systems.
        </p>
      </div>

      {/* Featured Projects: Alternating Editorial Layout */}
      <div className="space-y-24 md:space-y-36 mb-36">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Outlined Offset behind the card */}
                <div className={`absolute inset-0 translate-y-3 ${isEven ? 'translate-x-3' : '-translate-x-3'} border border-zinc-800 rounded-2xl pointer-events-none z-0`}></div>
                
                {/* Main Image container */}
                <div className="relative p-2 bg-zinc-950 border border-zinc-900 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=' + project.title;
                    }}
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    // {project.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-serif group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-400 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-zinc-900/60 max-w-xs mx-auto lg:mx-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 font-semibold hover:text-white transition-all text-sm"
                  >
                    <i className="fa-brands fa-github text-lg"></i> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-cyan-500 text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/10 active:scale-98"
                    >
                      <i className="fa-solid fa-rocket"></i> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Utilities Section Divider */}
      <div className="border-t border-zinc-900 pt-24 mb-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center font-serif">
          Other utilities &amp; <span className="text-cyan-500 italic font-medium">Experiments</span>
        </h3>
      </div>

      {/* Utilities Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {utilityProjects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-950/20 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 hover:translate-y-[-4px] transition duration-300 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <i className="fa-solid fa-folder text-cyan-500/80 text-xl"></i>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={`${project.title} github link`}
                  >
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 hover:text-cyan-400 transition-colors"
                      aria-label={`${project.title} live link`}
                    >
                      <i className="fa-solid fa-rocket text-sm"></i>
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-lg font-bold text-white font-serif group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h4>

              <p className="text-zinc-500 text-xs leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech stack lists */}
            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-zinc-900/60 mt-6">
              {project.tech.map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono text-zinc-600">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Projects;
