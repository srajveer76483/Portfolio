import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { TerminalLoader } from './components/TerminalLoader';

function App() {
  const [loading, setLoading] = useState(true);
  const [terminalMode, setTerminalMode] = useState(false);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className={`min-h-screen ${terminalMode ? 'bg-black text-green-400 font-mono' : 'bg-black'}`}>
      <AnimatePresence>
        {loading && <TerminalLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <CursorTrail />
          
          {/* Terminal Mode Toggle */}
          <div className="fixed top-4 right-4 z-40">
            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-[#33d1ff]/20 rounded-lg text-[#33d1ff] hover:border-[#33d1ff] transition-all duration-300 text-sm"
            >
              {terminalMode ? 'Exit Terminal' : 'Terminal Mode'}
            </button>
          </div>

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;