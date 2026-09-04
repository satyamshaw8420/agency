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
    <section id="hero-section" className="relative min-h-[90vh] pb-20 pt-24 sm:pt-28 lg:pt-8 overflow-hidden bg-[#070709] rounded-none sm:rounded-2xl lg:rounded-3xl border-0 sm:border border-neutral-800/60 elevated-canvas">
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

        {/* Desktop Golden Cyber Frame — no SVG filters for performance */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#fef08a" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Left line — no filter */}
          <path
            d="M 2 80 L 2 240 L 26 265 L 26 620 L 2 645 L 2 880"
            stroke="url(#goldStroke)"
            strokeWidth="1.5"
            strokeOpacity="0.75"
          />
          <path
            d="M 2 80 L 2 240 L 26 265 L 26 620 L 2 645 L 2 880"
            stroke="url(#laserBeam)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-gold-beam-reverse"
          />

          {/* Right line — no filter */}
          <path
            d="M 1200 50 L 1180 50 L 1180 160 L 1065 275 L 1065 420 L 1180 535 L 1180 670 L 980 870 L 320 870"
            stroke="url(#goldStroke)"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <path
            d="M 1200 50 L 1180 50 L 1180 160 L 1065 275 L 1065 420 L 1180 535 L 1180 670 L 980 870 L 320 870"
            stroke="url(#laserBeam)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-gold-beam"
          />
        </svg>

        {/* Mobile/Tablet: simple static line only, no animation for perf */}
        <svg
          className="lg:hidden absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 400 100 L 388 115 L 388 340 L 372 360 L 372 520 L 388 540 L 388 740 L 340 780 L 60 780"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Desktop Top Canvas Bar */}
        <div className="hidden lg:flex items-center justify-end gap-8 pb-14 pt-2">
          <button
            onClick={() => scrollTo('work-section')}
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer tracking-wide"
          >
            Selected Work
          </button>
          <button
            onClick={() => scrollTo('services-section')}
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer tracking-wide"
          >
            Capabilities
          </button>
          <button
            onClick={onOpenEstimator}
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer tracking-wide"
          >
            Project Estimator
          </button>
          <button
            onClick={() => scrollTo('about-section')}
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer tracking-wide"
          >
            Studio & Standards
          </button>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-xl border border-amber-500/70 bg-amber-500/5 hover:bg-amber-500/15 text-neutral-100 font-semibold text-xs flex items-center gap-2 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Eyebrow / Studio Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 pt-2 lg:pt-0"
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

