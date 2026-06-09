const certificates = [
    {
        src: "Images/Certificates/1.jpg",
        title: "Python Developer Intern",
        desc: "Codec Technologies - Python & database",
        date: "Dec 2025 - Jan 2026",
        issuer: "Codec Tech"
    },
    {
        src: "Images/Certificates/2.jpg",
        title: "Web Development Internship",
        desc: "Comestro Techlabs - HTML, CSS, JavaScript",
        date: "Dec 2025 - Jan 2026",
        issuer: "Comestro"
    },
    {
        src: "Images/Certificates/3.jpg",
        title: "Software Engineering Job Simulation",
        desc: "JP Morgan - REST APIs, Kafka integration",
        date: "Jan 2026",
        issuer: "JP Morgan"
    },
    {
        src: "Images/Certificates/4.jpg",
        title: "Frontend Software Engineering",
        desc: "Skyscanner - React, UI components, state handling",
        date: "Jan 2026",
        issuer: "Skyscanner"
    },
    {
        src: "Images/Certificates/5.jpg",
        title: "Quantium Software Engineering Simulation",
        desc: "Completed job simulation involving data processing, dashboard creation, testing, and automation.",
        date: "4 Jan 2026",
        issuer: "Quantium"
    },
    {
        src: "Images/Certificates/6.jpg",
        title: "Advanced Software Engineering",
        desc: "Walmart Global Tech - DSA & system design",
        date: "Jan 2026",
        issuer: "Walmart"
    },
    {
        src: "Images/Certificates/7.jpg",
        title: "Solutions Architecture",
        desc: "AWS - Scalable cloud architecture",
        date: "Jan 2026",
        issuer: "AWS"
    },
    {
        src: "Images/Certificates/8.jpg",
        title: "GenAI Data Analytics",
        desc: "TATA - AI-powered analytics",
        date: "Jan 2026",
        issuer: "TATA"
    },
    {
        src: "Images/Certificates/9.jpg",
        title: "Cybersecurity Analyst",
        desc: "TATA - IAM fundamentals & security assessment",
        date: "Jan 2026",
        issuer: "TATA"
    },
    {
        src: "Images/Certificates/10.jpg",
        title: "Data Analytics Job Simulation",
        desc: "Deloitte - Data analysis & forensic technology",
        date: "Dec 2025",
        issuer: "Deloitte"
    },
    {
        src: "Images/Certificates/11.jpg",
        title: "AI in Action",
        desc: "Forage - Prompt engineering & automation",
        date: "Jan 2026",
        issuer: "Forage"
    },
    {
        src: "Images/Certificates/12.jpg",
        title: "Software Engineering Job Simulation",
        desc: "CommonWealth Bank - Completed job simulation involving backend modification, React/Redux frontend.",
        date: "Jan 2026",
        issuer: "CBA"
    },
    {
        src: "Images/Certificates/13.png",
        title: "Robotics and Controls Job Simulation",
        desc: "Johnson & Johnson MedTech - Diagnosed surgical robot arm delays and optimized system responsiveness.",
        date: "May 2026",
        issuer: "Johnson & Johnson MedTech"
    },
];

const container = document.getElementById("certificates-container");

certificates.forEach(cert => {
    container.innerHTML += `
        <div onclick="openImg('${cert.src}')"
            class="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer 
                   hover:border-sky-500/50 transition-all duration-300 p-4 shadow-xl">

            <div class="relative overflow-hidden rounded-lg bg-slate-800">
                <img src="${cert.src}" alt="${cert.title}"
                    class="w-full h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100">
                
                <div class="absolute top-3 left-3">
                    <span class="text-[10px] font-bold uppercase tracking-wider bg-sky-500 text-slate-950 px-2 py-1 rounded shadow-lg">
                        ${cert.issuer}
                    </span>
                </div>
            </div>

            <div class="mt-4">
                <h3 class="text-white font-bold text-base group-hover:text-sky-400 transition-colors line-clamp-3">
                    ${cert.title}
                </h3>

                <p class="text-slate-400 text-xs mt-2 line-clamp-2 h-10 leading-relaxed">
                    ${cert.desc}
                </p>

                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span class="text-[11px] text-slate-500 font-medium">
                        <i class="fa-regular fa-calendar text-sky-500 mr-1"></i> ${cert.date}
                    </span>
                    <span class="text-sky-400 text-[11px] font-bold uppercase">
                        View <i class="fa-solid fa-expand ml-1"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
});

/* Popup Logic */
function openImg(src) {
    const popup = document.getElementById("popup");
    document.getElementById("popup-img").src = src;
    popup.classList.remove("hidden");
    popup.classList.add("flex");
    document.body.style.overflow = "hidden"; // Prevent scrolling when open
}

function closeImg() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close popup on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeImg();
});

/* Mobile Menu Logic */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    if(menuIcon) {
        menuIcon.classList.replace(isHidden ? "fa-xmark" : "fa-bars-staggered", isHidden ? "fa-bars-staggered" : "fa-xmark");
    }
});

// Simple Back to Top logic
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "fixed bottom-8 right-8 bg-sky-500 text-slate-950 w-12 h-12 rounded-full font-bold shadow-lg hidden z-50 transition-all hover:scale-110";
document.body.appendChild(topBtn);

window.onscroll = () => {
    if (window.scrollY > 500) topBtn.classList.remove("hidden");
    else topBtn.classList.add("hidden");
};

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

