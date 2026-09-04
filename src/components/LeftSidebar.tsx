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

  // Forward wheel events to window so mouse on sidebar still scrolls page effortlessly
  const handleWheel = (e: React.WheelEvent) => {
    window.scrollBy({ top: e.deltaY, behavior: 'auto' });
  };

  return (
    <aside 
      onWheel={handleWheel}
      className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:h-screen lg:z-40 bg-[#070709] border-r border-neutral-800/80 p-4 xl:p-5 lg:py-5 justify-between select-none overflow-hidden"
    >
      {/* Top: Logo & Nav items */}
      <div className="space-y-4 xl:space-y-5">
        {/* Brand Logo with golden accent */}
        <a href="#" className="flex flex-col items-center group block pt-0.5">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Beyond Limit"
              width="200"
              height="56"
              onError={() => setLogoError(true)}
              className="h-12 xl:h-14 w-auto object-contain drop-shadow-[0_2px_16px_rgba(245,158,11,0.22)] transition-transform duration-200 group-hover:scale-105"
            />
          ) : (
            <img
              src="/logo.svg"
              alt="Beyond Limit"
              width="200"
              height="56"
              className="h-12 xl:h-14 w-auto object-contain"
            />
          )}
        </a>

        {/* Navigation List */}
        <nav className="space-y-1.5">
          <button
            onClick={() => scrollTo('work-section')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800 text-neutral-100 text-xs font-semibold hover:border-amber-500/50 transition-colors text-left cursor-pointer group shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="tracking-wide">Selected Work</span>
          </button>

          <button
            onClick={() => scrollTo('services-section')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-neutral-400 text-xs font-medium hover:text-white hover:bg-neutral-900/50 transition-colors text-left cursor-pointer"
          >
            <Layers className="w-4 h-4 text-neutral-500" />
            <span className="tracking-wide">Capabilities</span>
          </button>

          <button
            onClick={onOpenEstimator}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-neutral-400 text-xs font-medium hover:text-white hover:bg-neutral-900/50 transition-colors text-left cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-neutral-500" />
            <span className="tracking-wide">Project Estimator</span>
          </button>

          <button
            onClick={() => scrollTo('about-section')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-neutral-400 text-xs font-medium hover:text-white hover:bg-neutral-900/50 transition-colors text-left cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-neutral-500" />
            <span className="tracking-wide">Studio &amp; Standards</span>
          </button>
        </nav>

        {/* Start a Project button in Sidebar */}
        <button
          onClick={onOpenContact}
          className="w-full py-2.5 px-3.5 rounded-xl border border-neutral-700 bg-neutral-900/50 text-neutral-200 font-semibold text-xs hover:border-amber-500/60 hover:text-white transition-all flex items-center justify-between cursor-pointer active:scale-[0.98]"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400" />
        </button>
      </div>

      {/* Bottom: Status info */}
      <div className="space-y-2 pt-3 border-t border-neutral-800/80">
        <div className="space-y-1 text-xs font-mono">
          <div className="text-neutral-300 font-medium flex items-center gap-2">
            <span>Independent Digital Studio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </div>
          <div className="text-neutral-500 text-[11px]">Remote-First • Fast Turnaround</div>
          <div className="text-amber-400 text-[11px] font-semibold">Available For New Projects</div>
        </div>

        <div className="pt-1.5 border-t border-neutral-900 text-[10px] font-mono text-neutral-600 leading-relaxed">
          © {new Date().getFullYear()} Beyond Limit.<br />All rights reserved.
        </div>
      </div>
    </aside>
  );
};

