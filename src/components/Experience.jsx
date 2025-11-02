import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechNova Labs',
    period: '2022 — Present',
    location: 'Remote',
    bullets: [
      'Led development of high‑traffic web apps with micro‑frontend architecture.',
      'Shipped 3D interactive product tours increasing conversions by 27%.',
      'Mentored team on performance, accessibility, and testing best practices.',
    ],
  },
  {
    role: 'Full‑Stack Engineer',
    company: 'PixelForge Studio',
    period: '2020 — 2022',
    location: 'Berlin, DE',
    bullets: [
      'Designed scalable APIs and real‑time features for collaborative tools.',
      'Built component libraries adopted across 4 internal products.',
      'Partnered with design to craft motion‑driven experiences.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'CloudArc Systems',
    period: '2018 — 2020',
    location: 'San Francisco, CA',
    bullets: [
      'Implemented responsive, accessible UI systems with Tailwind.',
      'Optimized rendering pipelines reducing TTI by 40%.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full scroll-mt-20 bg-black px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
            <p className="mt-1 text-white/70">A journey through roles that shaped my craft.</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-6" />
          <ul className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 pl-12 backdrop-blur sm:p-6 sm:pl-14"
              >
                <span className="absolute left-2 top-6 grid h-8 w-8 place-items-center rounded-full bg-teal-400/90 text-gray-900 shadow-sm sm:left-3">
                  <Building2 size={16} />
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="text-lg font-medium text-white">{exp.role}</h3>
                  <span className="text-white/60">@ {exp.company}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/80">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
