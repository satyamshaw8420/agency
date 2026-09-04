import React, { useState } from 'react';
import { ArrowUpRight, Briefcase, Calculator, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface LeftSidebarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [logoError, setLogoError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-40 bg-neutral-950 border-r border-neutral-800/80 p-6 justify-between select-none">
      {/* Top: Logo & Nav items */}
      <div className="space-y-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group block">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Beyond Limit"
              onError={() => setLogoError(true)}
              className="h-16 w-auto object-contain drop-shadow-[0_2px_16px_rgba(234,179,8,0.2)]"
            />
          ) : (
            <img
              src="/logo.svg"
              alt="Beyond Limit"
              className="h-16 w-auto object-contain"
            />
          )}
        </a>

        {/* Navigation List */}
        <nav className="space-y-2">
          <button
            onClick={() => scrollTo('work-section')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-100 text-xs font-semibold hover:border-amber-500/40 transition-all text-left cursor-pointer group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span className="tracking-wide">Selected Work</span>
          </button>

          <button
            onClick={() => scrollTo('services-section')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 text-xs font-medium hover:text-white hover:bg-neutral-900/40 transition-all text-left cursor-pointer"
          >
            <Layers className="w-4 h-4 text-neutral-500" />
            <span className="tracking-wide">Capabilities</span>
          </button>

          <button
            onClick={onOpenEstimator}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 text-xs font-medium hover:text-white hover:bg-neutral-900/40 transition-all text-left cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-neutral-500" />
            <span className="tracking-wide">Project Estimator</span>
          </button>

          <button
            onClick={() => scrollTo('about-section')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 text-xs font-medium hover:text-white hover:bg-neutral-900/40 transition-all text-left cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-neutral-500" />
            <span className="tracking-wide">Studio & Standards</span>
          </button>
        </nav>
      </div>

      {/* Bottom: Start Project & Status info */}
      <div className="space-y-6 pt-6 border-t border-neutral-800/80">
        <button
          onClick={onOpenContact}
          className="w-full py-3.5 px-4 rounded-xl bg-neutral-100 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-between shadow-lg cursor-pointer"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <div className="space-y-2 text-[11px] font-mono text-neutral-400">
          <div className="text-neutral-300 font-semibold">Independent Digital Studio</div>
          <div className="text-neutral-500">Remote-First • Fast Turnaround</div>
          <div className="text-emerald-400 font-medium">Available For New Projects</div>
        </div>

        <div className="pt-4 border-t border-neutral-900 text-[10px] font-mono text-neutral-600">
          © {new Date().getFullYear()} Beyond Limit.<br />All rights reserved.
        </div>
      </div>
    </aside>
  );
};
