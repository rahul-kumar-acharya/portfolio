/**
 * Shared Header Component
 * Auto-detects the current page and highlights the active nav link.
 * Injects the header, mobile bottom navbar, and layout adjustments for mobile.
 */

(function () {
    const navLinks = [
        { label: "Home", href: "home.html", icon: "fa-solid fa-house" },
        { label: "About", href: "about.html", icon: "fa-solid fa-user" },
        { label: "Skills", href: "skills.html", icon: "fa-solid fa-code" },
        { label: "Projects", href: "projects.html", icon: "fa-solid fa-laptop-code" },
        { label: "Certificates", href: "certificates.html", icon: "fa-solid fa-award", shortLabel: "Certs" },
        { label: "Contact", href: "contact.html", icon: "fa-solid fa-envelope" },
    ];

    // Detect the current page filename from the URL
    let currentPage = window.location.pathname.split("/").pop() || "home.html";
    if (currentPage === "index.html") {
        currentPage = "home.html";
    }

    // --- Build Desktop Nav Links ---
    const desktopLinksHTML = navLinks.map(link => {
        const isActive = currentPage === link.href;
        const cls = isActive ? "text-sky-400 transition" : "hover:text-sky-400 transition";
        return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
    }).join("\n                ");

    // --- Build Mobile Bottom Nav Links ---
    const bottomLinksHTML = navLinks.map(link => {
        const isActive = currentPage === link.href;
        const displayLabel = link.shortLabel || link.label;
        
        const itemCls = isActive 
            ? "text-sky-400 font-extrabold scale-105" 
            : "text-slate-400 hover:text-slate-200 active:scale-95";
            
        const iconCls = isActive
            ? "text-sky-400 text-lg -translate-y-0.5 active-icon-bounce"
            : "text-slate-400 text-lg hover:-translate-y-0.5";

        const textCls = isActive
            ? "text-[9px] min-[375px]:text-[10px] font-bold tracking-wider"
            : "text-[9px] min-[375px]:text-[10px] font-medium tracking-wide text-slate-500";
            
        const indicator = isActive
            ? `<span class="absolute -bottom-1.5 w-1 h-1 bg-sky-400 rounded-full active-dot-glow"></span>`
            : "";

        return `
            <a href="${link.href}" class="flex flex-col items-center justify-center flex-1 py-1.5 relative transition-all duration-300 ${itemCls}">
                <i class="${link.icon} ${iconCls} transition-all duration-300"></i>
                <span class="${textCls} mt-0.5 transition-colors duration-300">${displayLabel}</span>
                ${indicator}
            </a>
        `;
    }).join("");

    // --- Embedded CSS Styles ---
    const stylesHTML = `
    <style>
        /* Mobile Bottom Nav styles and micro-animations */
        @keyframes activeDotGlow {
            0%, 100% { box-shadow: 0 0 6px #38bdf8, 0 0 2px #38bdf8; opacity: 0.8; }
            50% { box-shadow: 0 0 12px #38bdf8, 0 0 4px #38bdf8; opacity: 1; }
        }
        
        .active-dot-glow {
            animation: activeDotGlow 2s infinite ease-in-out;
        }

        @keyframes iconBounce {
            0%, 100% { transform: translateY(-2px); }
            50% { transform: translateY(-4px); }
        }

        .active-icon-bounce {
            animation: iconBounce 2.5s infinite ease-in-out;
        }

        #mobile-bottom-nav a {
            -webkit-tap-highlight-color: transparent;
        }

        /* Prevent content from being hidden behind the floating mobile bottom nav */
        @media (max-w: 767px) {
            body {
                padding-bottom: 6.5rem !important;
            }
        }
    </style>
    `;

    // --- Header and Nav HTML ---
    const headerHTML = `
    ${stylesHTML}
    <header class="fixed top-0 w-full z-50 glass border-b border-slate-800" id="site-header">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 class="text-2xl font-bold tracking-tighter">
                <a href="home.html"><span class="text-sky-400">RAHUL</span><span class="text-white">.ACHARYA</span></a>
            </h1>

            <nav class="hidden md:flex items-center space-x-8 font-medium">
                ${desktopLinksHTML}
                <a href="assets/resume.pdf" target="_blank" class="px-4 py-2 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-slate-900 transition text-sm font-bold">
                    RESUME
                </a>
            </nav>

            <!-- Mobile Direct Resume CTA -->
            <a href="assets/resume.pdf" target="_blank" class="md:hidden px-3 py-1.5 border border-sky-400/50 text-sky-400 rounded-lg bg-sky-400/5 text-xs font-bold hover:bg-sky-400 hover:text-slate-900 transition tracking-wider">
                RESUME
            </a>
        </div>
    </header>

    <!-- Floating Mobile Bottom Navigation -->
    <nav class="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 bg-slate-900/85 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6),0_0_15px_rgba(56,189,248,0.05)] px-2 py-2 flex items-center justify-around" id="mobile-bottom-nav">
        ${bottomLinksHTML}
    </nav>
    `;

    // --- Inject into the page ---
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
})();
