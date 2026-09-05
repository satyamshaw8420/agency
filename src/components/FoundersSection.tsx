import React, { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Globe, ShieldCheck, Sparkles } from 'lucide-react';

export const FoundersSection: React.FC = memo(() => {
  const founders = [
    {
      name: 'Satyam Shaw',
      role: 'Co-Founder & Full-Stack Creative Engineer',
      bio: 'Specializes in high-performance React architecture, frontend engineering, and seamless web experiences. Obsessed with sub-second speeds and bulletproof code.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      portfolioUrl: 'https://satyamshaw.vercel.app/',
      badge: 'Lead Architect',
    },
    {
      name: 'Swayam Chowdhary',
      role: 'Co-Founder & Product Design Architect',
      bio: 'Focuses on 0-to-1 product design, UI/UX systems, brand identity, and intuitive user workflows. Passionate about turning complex ideas into sleek interfaces.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      portfolioUrl: 'https://swayam1108.vercel.app/',
      badge: 'Design Lead',
    },
  ];

  return (
    <motion.section
      id="founders-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-neutral-800/80 bg-neutral-950 relative overflow-hidden transform-gpu"
    >
      {/* Background radial gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight">
            Meet the{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            No middle managers, account reps, or junior interns. You work 1-on-1 directly with Satyam and Swayam to build and ship your product.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="velvet-card rounded-2xl p-8 border border-neutral-800/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_35px_rgba(245,158,11,0.08)] transform-gpu will-change-transform active:scale-[0.98]"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      width="80"
                      height="80"
                      loading="lazy"
                      decoding="async"
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border border-amber-500/30 shadow-md group-hover:border-amber-400/60 transition-colors transform-gpu"
                    />
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        {founder.badge}
                      </span>
                    </div>
                  </div>

                  {/* Portfolio Website Link */}
                  <a
                    href={founder.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-300 hover:border-amber-500/50 transition-all duration-150 shadow-sm group/btn transform-gpu active:scale-90"
                    title="Visit Portfolio"
                  >
                    <Globe className="w-4 h-4 group-hover/btn:scale-110 transition-transform text-neutral-300 group-hover/btn:text-amber-400" />
                  </a>
                </div>

                <h3 className="font-display text-2xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                  {founder.name}
                </h3>
                <span className="text-xs font-mono text-amber-400/90 block mt-1 mb-4 font-medium">
                  {founder.role}
                </span>

                <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Builder
                </span>
                <a
                  href={founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-semibold transition-colors no-underline group/link"
                >
                  <span>View Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

FoundersSection.displayName = 'FoundersSection';
