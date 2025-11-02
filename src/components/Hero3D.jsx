import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Download, Mail } from 'lucide-react';

const Hero3D = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient lighting on top – doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Rocket size={14} className="text-white/80" />
          <span>Portfolio · Interactive · 3D</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Hi, I’m Your Name
          <span className="block bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent">
            Building delightful products with code & design
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Full‑stack engineer focused on performant web experiences, immersive interfaces, and clean, scalable architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow/20 shadow-black/20 transition hover:translate-y-[-1px] hover:shadow-lg"
          >
            <Rocket size={16} />
            Explore Work
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <Mail size={16} /> Contact Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-gradient-to-r from-teal-400 to-cyan-400 px-4 py-2 text-sm font-medium text-gray-900 shadow/20 shadow-cyan-500/30 transition hover:opacity-95"
          >
            <Download size={16} /> Download Résumé
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
