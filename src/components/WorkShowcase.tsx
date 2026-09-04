import React, { useState, useMemo, memo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy, WorkCategory } from '../types';

interface WorkShowcaseProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = memo(({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return CASE_STUDIES;
    return CASE_STUDIES.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categories: { id: WorkCategory; label: string }[] = [
    { id: 'all', label: 'All Projects (3)' },
    { id: 'engineering', label: 'Web Applications' },
    { id: 'product', label: 'UI/UX & Dining' },
    { id: 'brand', label: 'Brand Hubs' },
  ];

  return (
    <motion.section
      id="work-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-neutral-800/80 bg-neutral-950 transform-gpu"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Live Client Portfolio • 2025</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight">
              Selected Client Work
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Real-world web platforms, digital menus, and high-converting restaurant experiences engineered with modern React, Next.js, and sub-second load times.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer transform-gpu ${
                  activeCategory === cat.id
                    ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                    : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`case-study-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-neutral-800/90 bg-neutral-900/40 hover:bg-neutral-900/70 overflow-hidden transition-all duration-500 hover:border-amber-500/30 flex flex-col justify-between shadow-xl transform-gpu will-change-transform"
            >
              {/* Media preview container */}
              <div
                className="relative aspect-16/10 overflow-hidden bg-neutral-950 cursor-pointer"
                onClick={() => onSelectCaseStudy(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width="600"
                  height="375"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100 transform-gpu"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent pointer-events-none" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-neutral-950/80 backdrop-blur-md text-neutral-200 border border-neutral-700/60 font-semibold">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Client label overlay bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] text-emerald-400/90 uppercase tracking-wider font-mono font-medium">
                      {project.client}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-neutral-100/90 text-neutral-950 flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all shadow-md transform-gpu">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {project.tagline}
                  </p>

                  {/* Deliverables tags */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                    {project.deliverables.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-neutral-300 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`visit-live-site-${project.id}`}
                      className="flex-1 py-2.5 px-3.5 rounded-xl bg-neutral-100 text-neutral-950 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 no-underline transform-gpu"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(project)}
                    className="py-2.5 px-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer transform-gpu"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

WorkShowcase.displayName = 'WorkShowcase';
