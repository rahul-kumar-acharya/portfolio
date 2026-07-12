import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    return ['home', 'about', 'skills', 'projects', 'certificates', 'contact'].includes(path) ? path : 'home';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hash transition cleaner (redirects legacy hash URLs to clean path URLs)
  useEffect(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const validPages = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
    if (validPages.includes(hash)) {
      const targetPath = hash === 'home' ? '/' : `/${hash}`;
      window.history.replaceState({}, '', targetPath);
      setActivePage(hash);
    }
  }, []);

  // Sync HTML5 History path routing changes (popstate triggers for browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      const validPages = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      setActivePage(validPages.includes(path) ? path : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(page);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-brand-bg text-zinc-300 min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-white relative grid-bg overflow-x-hidden">
      
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-indigo-500/3 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-cyan-500/4 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* Dynamic Header Component */}
        <Header activePage={activePage} navigateTo={navigateTo} />

        {/* Dynamic Page Routing */}
        {renderPage()}

        {/* Global Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-cyan-500 text-slate-950 w-11 h-11 rounded-full font-bold shadow-lg shadow-cyan-500/20 z-50 transition-all hover:scale-110 cursor-pointer flex items-center justify-center text-lg hover:bg-cyan-400"
            aria-label="Scroll back to top"
          >
            ↑
          </button>
        )}

        {/* Global Footer Component */}
        <Footer navigateTo={navigateTo} />
      </div>
    </div>
  );
}

export default App;
