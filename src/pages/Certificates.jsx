import React, { useState, useEffect } from 'react';
import useSEO from '../hooks/useSEO';

const Certificates = () => {
  useSEO({
    title: "Certifications & Achievements | Rahul Kumar Acharya",
    description: "Professional certifications and job simulation credentials earned by Rahul Kumar Acharya from leading tech companies like JP Morgan, AWS, and Walmart.",
    keywords: "Rahul Kumar Acharya Certificates, JP Morgan Simulation, AWS Solutions Architecture, Walmart Software Engineering"
  });
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { src: "/Images/Certificates/1.webp", title: "Python Developer Intern", desc: "Codec Technologies - Python & database", date: "Dec 2025 - Jan 2026", issuer: "Codec Tech" },
    { src: "/Images/Certificates/2.webp", title: "Web Development Internship", desc: "Comestro Techlabs - HTML, CSS, JavaScript", date: "Dec 2025 - Jan 2026", issuer: "Comestro" },
    { src: "/Images/Certificates/3.webp", title: "Software Engineering Job Simulation", desc: "JP Morgan - REST APIs, Kafka integration", date: "Jan 2026", issuer: "JP Morgan" },
    { src: "/Images/Certificates/4.webp", title: "Frontend Software Engineering", desc: "Skyscanner - React, UI components, state handling", date: "Jan 2026", issuer: "Skyscanner" },
    { src: "/Images/Certificates/5.webp", title: "Quantium Software Engineering Simulation", desc: "Completed job simulation involving data processing, dashboard creation, testing, and automation.", date: "4 Jan 2026", issuer: "Quantium" },
    { src: "/Images/Certificates/6.webp", title: "Advanced Software Engineering", desc: "Walmart Global Tech - DSA & system design", date: "Jan 2026", issuer: "Walmart" },
    { src: "/Images/Certificates/7.webp", title: "Solutions Architecture", desc: "AWS - Scalable cloud architecture", date: "Jan 2026", issuer: "AWS" },
    { src: "/Images/Certificates/8.webp", title: "GenAI Data Analytics", desc: "TATA - AI-powered analytics", date: "Jan 2026", issuer: "TATA" },
    { src: "/Images/Certificates/9.webp", title: "Cybersecurity Analyst", desc: "TATA - IAM fundamentals & security assessment", date: "Jan 2026", issuer: "TATA" },
    { src: "/Images/Certificates/10.webp", title: "Data Analytics Job Simulation", desc: "Deloitte - Data analysis & forensic technology", date: "Dec 2025", issuer: "Deloitte" },
    { src: "/Images/Certificates/11.webp", title: "AI in Action", desc: "Forage - Prompt engineering & automation", date: "Jan 2026", issuer: "Forage" },
    { src: "/Images/Certificates/12.webp", title: "Software Engineering Job Simulation", desc: "CommonWealth Bank - Completed job simulation involving backend modification, React/Redux frontend.", date: "Jan 2026", issuer: "CBA" },
    { src: "/Images/Certificates/13.webp", title: "Robotics and Controls Job Simulation", desc: "Johnson & Johnson MedTech - Diagnosed surgical robot arm delays and optimized system responsiveness.", date: "May 2026", issuer: "Johnson & Johnson MedTech" },
  ];

  const openCert = (src) => {
    setSelectedCert(src);
    document.body.style.overflow = "hidden";
  };

  const closeCert = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCert();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
          My <span className="text-cyan-500 italic font-medium">Achievements</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-base">
          Professional certifications and job simulations from leading tech organizations.
        </p>
      </div>

      <div id="certificates-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => openCert(cert.src)}
            className="group bg-zinc-950/20 border border-zinc-900 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/40 transition duration-300 p-4 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-zinc-950 border border-zinc-900/60">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-52 md:h-56 object-cover transition-transform duration-500 group-hover:scale-103 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Preview';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-cyan-500 text-black px-2 py-0.5 rounded shadow">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-bold text-base group-hover:text-cyan-400 transition-colors line-clamp-2 font-serif">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 h-9">
                  {cert.desc}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between">
              <span className="text-[10px] text-zinc-600 font-mono">
                <i className="fa-regular fa-calendar text-cyan-500 mr-1.5"></i> {cert.date}
              </span>
              <span className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest font-bold flex items-center gap-1">
                View <i className="fa-solid fa-expand text-[9px]"></i>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Image Modal */}
      {selectedCert && (
        <div
          onClick={closeCert}
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <button
              onClick={closeCert}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-cyan-400 transition cursor-pointer"
              aria-label="Close image popup"
            >
              ✕
            </button>
            <img
              src={selectedCert}
              alt="Expanded Certificate"
              className="max-w-full max-h-[80vh] rounded border border-zinc-800 object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Certificates;
