import React from 'react';
import useSEO from '../hooks/useSEO';

const Skills = () => {
  useSEO({
    title: "Technical Skills | Rahul Kumar Acharya",
    description: "Explore the technical stack of Rahul Kumar Acharya. Backend engineering (Python, DRF), client interfaces (React, Tailwind), and deployment workflows (Git, Vercel, Render).",
    keywords: "Rahul Kumar Acharya Skills, Python Developer, React Developer, Django REST Framework, Developer Toolkit"
  });
  const skillCategories = [
    {
      category: "Core Engineering & APIs",
      icon: "fa-solid fa-server",
      items: [
        { title: "Python", desc: "Core backend logic, scripting, and data manipulation.", img: "/Images/Skills/python.svg" },
        { title: "Django", desc: "Developing secure backend architectures and ORM systems.", img: "/Images/Skills/django.svg" },
        { title: "Django REST Framework", desc: "Building robust, scalable REST APIs.", img: "/Images/Skills/drf.svg" },
        { title: "Firebase", desc: "Real-time databases, auth integration, and cloud functions.", img: "/Images/Skills/firebase.svg" }
      ]
    },
    {
      category: "Interfaces & Client Logic",
      icon: "fa-solid fa-laptop-code",
      items: [
        { title: "JavaScript", desc: "ES6+ dynamic scripting and DOM optimization.", img: "/Images/Skills/javascript.svg" },
        { title: "React", desc: "Component architecture, dynamic hooks, and state management.", img: "/Images/Skills/react.svg" },
        { title: "HTML5 & CSS3", desc: "Semantic page structures and responsive layouts.", img: "/Images/Skills/htmlcss.svg" },
        { title: "Tailwind CSS", desc: "Rapid UI structures with design tokens.", img: "/Images/Skills/tailwind.svg" }
      ]
    },
    {
      category: "Workflows & Hosting",
      icon: "fa-solid fa-cloud-arrow-up",
      items: [
        { title: "Git & GitHub", desc: "Version control, code collaboration, and pull requests.", img: "/Images/Skills/gitgithub.svg" },
        { title: "Vercel", desc: "Continuous deployment for React and serverless operations.", img: "/Images/Skills/vercel.svg" },
        { title: "Netlify", desc: "Deploying production-ready client sites.", img: "/Images/Skills/netlify.svg" },
        { title: "Render", desc: "Deploying full-stack apps and web services.", img: "/Images/Skills/render.svg" }
      ]
    }
  ];

  return (
    <main className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
          Technical <span className="text-cyan-500 italic font-medium">Arsenal</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-base">
          A structured layout of tools, frameworks, and deployment workflows used to build web systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {skillCategories.map((cat, catIndex) => (
          <div
            key={catIndex}
            className="bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition duration-300 flex flex-col shadow-xl"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-6 mb-8 border-b border-zinc-900">
              <i className={`${cat.icon} text-cyan-400 text-lg`}></i>
              <h3 className="text-lg font-bold text-white font-serif">{cat.category}</h3>
            </div>

            {/* List of Skills */}
            <div className="space-y-6 flex-1">
              {cat.items.map((skill, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  {/* Local SVG logo wrapper */}
                  <div className="w-12 h-12 shrink-0 bg-white rounded-xl p-2.5 flex items-center justify-center border border-zinc-800 shadow-md group-hover:scale-105 transition duration-300">
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/80?text=" + skill.title;
                      }}
                    />
                  </div>
                  
                  {/* Skill Details */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
