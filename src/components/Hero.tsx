import React from 'react';
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
  return (
    <section id="hero-section" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Subtle structural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2626260f_1px,transparent_1px),linear-gradient(to_bottom,#2626260f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Eyebrow / Studio Status */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs text-amber-300 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Independent Digital Studio
          </div>
          <span className="text-neutral-500 text-xs hidden sm:inline">•</span>
          <span className="text-neutral-400 text-xs font-mono">Remote-First • Fast Turnaround</span>
          <span className="text-neutral-500 text-xs hidden sm:inline">•</span>
          <span className="text-emerald-400 text-xs font-mono font-medium">Available For New Projects</span>
        </div>

        {/* Master Typographic Display */}
        <div className="max-w-5xl">
          <h1
            id="hero-main-title"
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-neutral-100 leading-[1.05] uppercase"
          >
            We design & build modern web apps.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed font-normal">
            A remote-first digital studio crafting fast, scalable and high-performing web experiences for ambitious brands.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            id="hero-explore-work-btn"
            onClick={onExploreWork}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-95 cursor-pointer shadow-lg shadow-white/5"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            id="hero-open-estimator-btn"
            onClick={onOpenEstimator}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-200 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-neutral-400" />
            <span>Interactive Project Estimator</span>
          </button>

          <button
            id="hero-contact-link-btn"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors p-2 cursor-pointer"
          >
            <span>Direct Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Studio Pillars Strip */}
        <div className="mt-20 pt-10 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-300">
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
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-300">
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
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-300">
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
            <div className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-300">
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
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
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
