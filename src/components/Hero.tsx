import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { CLIENT_LOGOS } from '../data';

interface HeroProps {
  onExploreWork: () => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenEstimator,
  onOpenContact,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="relative min-h-[90vh] pb-20 pt-20 sm:pt-24 lg:pt-12 overflow-hidden bg-[#070709] rounded-none sm:rounded-2xl lg:rounded-3xl border-0 sm:border border-neutral-800/60 elevated-canvas">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Laptop-only luxury background image */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-right bg-no-repeat opacity-65 pointer-events-none z-0"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%)'
          }}
        />

        {/* Ambient glow — desktop only, no blur on mobile */}
        <div className="hidden lg:block absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(245,158,11,0.07)_0%,transparent_70%)]" />
        <div className="hidden lg:block absolute top-1/2 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,119,6,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Eyebrow / Studio Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 pt-2 lg:pt-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/50 bg-amber-500/5 text-xs text-amber-300 font-mono tracking-wide shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Independent Digital Studio
          </div>
        </motion.div>

        {/* Master Typographic Display — staggered entrance, no blur (perf) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.13, delayChildren: 0.3 },
            },
          }}
          className="max-w-4xl"
        >
          <h1
            id="hero-main-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.1rem] font-extrabold tracking-tight text-white leading-[0.98] sm:leading-[0.94] uppercase select-none"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="block text-neutral-100"
            >
              WE DESIGN
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="block bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
            >
              &amp; BUILD
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="block text-neutral-100"
            >
              MODERN
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="block text-neutral-300"
            >
              WEB APPS
            </motion.span>
          </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed font-normal"
          >
            A remote-first digital studio crafting fast, scalable and high-performing web experiences for ambitious brands.
          </motion.p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <button
            id="hero-start-project-btn"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-amber-500/70 bg-amber-500/5 hover:bg-amber-500/20 text-neutral-100 font-semibold text-xs uppercase tracking-wider hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all active:scale-95 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </button>

          <button
            id="hero-view-work-btn"
            onClick={onExploreWork}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-300 hover:text-white border-b border-neutral-600 pb-1 hover:border-amber-400 transition-all cursor-pointer group"
          >
            <span>View Selected Work</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>

        {/* Studio Pillars Strip */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-neutral-800/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider font-display">
                Systemic Craft
              </h2>
              <p className="mt-1 text-xs text-neutral-400 leading-normal">
                Design systems built mathematically with strict token constraints and ergonomic elegance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 text-amber-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider font-display">
                Creative Engineering
              </h2>
              <p className="mt-1 text-xs text-neutral-400 leading-normal">
                Production-grade React & WebGL performance without compromising micro-interaction fluidity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider font-display">
                AI Interaction
              </h2>
              <p className="mt-1 text-xs text-neutral-400 leading-normal">
                Novel UX patterns for agentic autonomy, multi-modal streaming, and cognitive workspaces.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider font-display">
                Direct Builder Access
              </h2>
              <p className="mt-1 text-xs text-neutral-400 leading-normal">
                Zero junior handoffs. You work directly with the designer and developer building your product.
              </p>
            </div>
          </div>
        </div>

        {/* Client Sectors Banner */}
        <div className="mt-16 pt-8 border-t border-neutral-800/40">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-5">
            Specialized in digital products & web builds across
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>
                <span className="font-medium text-neutral-300">{client.name}</span>
                <span className="text-xs text-neutral-500 font-mono">[{client.sector}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

