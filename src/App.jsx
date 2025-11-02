import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Minimal top nav */}
      <div className="fixed left-0 right-0 top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8">
          <button onClick={() => scrollTo('home')} className="text-sm font-semibold tracking-tight">
            Your Name
          </button>
          <nav className="flex items-center gap-2 text-xs sm:gap-4 sm:text-sm">
            <button onClick={() => scrollTo('experience')} className="rounded-md px-3 py-1 text-white/80 hover:bg-white/5 hover:text-white">Experience</button>
            <button onClick={() => scrollTo('projects')} className="rounded-md px-3 py-1 text-white/80 hover:bg-white/5 hover:text-white">Work</button>
            <button onClick={() => scrollTo('contact')} className="rounded-md px-3 py-1 text-white/80 hover:bg-white/5 hover:text-white">Contact</button>
          </nav>
        </div>
      </div>

      {/* Sections */}
      <main className="pt-14">
        <Hero3D />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Ambient background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/20 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
        />
      </div>
    </div>
  );
};

export default App;
