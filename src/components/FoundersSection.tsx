import React from 'react';
import { ExternalLink, Github, Globe, Linkedin, ShieldCheck, Sparkles, User } from 'lucide-react';

export const FoundersSection: React.FC = () => {
  const founders = [
    {
      name: 'Satyam Shaw',
      role: 'Co-Founder & Full-Stack Creative Engineer',
      bio: 'Specializes in high-performance React architecture, frontend engineering, and seamless web experiences. Obsessed with sub-second speeds and bulletproof code.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      portfolioUrl: 'https://github.com/satyamshaw8420', // User can update anytime
      github: 'https://github.com',
      badge: 'Lead Architect',
    },
    {
      name: 'Swayam Chowdhary',
      role: 'Co-Founder & Product Design Architect',
      bio: 'Focuses on 0-to-1 product design, UI/UX systems, brand identity, and intuitive user workflows. Passionate about turning complex ideas into sleek interfaces.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      portfolioUrl: 'https://github.com', // User can update anytime
      github: 'https://github.com',
      badge: 'Design Lead',
    },
  ];

  return (
    <section id="founders-section" className="py-24 border-t border-neutral-800/80 bg-neutral-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight">
            Meet the <span className="text-sky-400">Founders</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-mono leading-relaxed">
            No middle managers, account reps, or junior interns. You work 1-on-1 directly with Satyam and Swayam to build and ship your product.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="velvet-card rounded-2xl p-8 border border-neutral-800/80 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <img
                      src={founder.avatar}
                      alt={founder.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-sky-500/20 shadow-lg group-hover:border-sky-400/50 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-sky-500 text-[#050811] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow">
                      {founder.badge}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={founder.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
                      title="Portfolio / GitHub Profile"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                      title="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-neutral-100 group-hover:text-sky-300 transition-colors">
                  {founder.name}
                </h3>
                <span className="text-xs font-mono text-sky-400 block mt-1 mb-4">
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
                  className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
