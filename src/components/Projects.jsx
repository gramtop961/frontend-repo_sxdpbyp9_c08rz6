import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aether UI',
    description: 'A motion‑first React component library with 3D primitives and accessibility baked in.',
    tags: ['React', 'Framer Motion', 'Accessibility'],
    href: '#',
    repo: '#',
    cover:
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nebula Studio',
    description: 'Web‑based editor for generative visuals with real‑time collaboration.',
    tags: ['TypeScript', 'WebGL', 'CRDT'],
    href: '#',
    repo: '#',
    cover:
      'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse Analytics',
    description: 'Privacy‑first analytics focusing on UX signals and performance.',
    tags: ['Next.js', 'Edge', 'DX'],
    href: '#',
    repo: '#',
    cover:
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-gradient-to-b from-black to-gray-950 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Work</h2>
            <p className="mt-1 text-white/70">A few projects that highlight my approach and impact.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg shadow-black/10"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                    View <ArrowUpRight size={14} />
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a
                    href={p.repo}
                    onClick={(e) => p.repo === '#' && e.preventDefault()}
                    className="inline-flex items-center gap-1 text-white/70 hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
