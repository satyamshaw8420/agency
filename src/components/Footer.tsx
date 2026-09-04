import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="studio-footer" className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top footer row: Brand & Status */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Beyond Limits Studio"
                  onError={() => setLogoError(true)}
                  className="h-14 sm:h-16 w-auto max-w-[260px] object-contain drop-shadow-[0_2px_12px_rgba(234,179,8,0.12)]"
                />
              ) : (
                <img
                  src="/logo.svg"
                  alt="Beyond Limits Studio"
                  className="h-14 sm:h-16 w-auto max-w-[260px] object-contain"
                />
              )}
            </div>
            <p className="mt-3 text-xs text-neutral-400 max-w-sm leading-relaxed">
              Independent digital design & development studio. Crafting modern web applications, high-converting landing pages, and clean digital systems.
            </p>
          </div>

          {/* Real studio availability & contact */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-neutral-400">STATUS:</span>
              <span className="text-emerald-400 font-medium">Taking On New Projects</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">EMAIL:</span>
              <a
                href="mailto:beyondlimits.webb@gmail.com"
                className="text-neutral-200 hover:text-white transition-colors"
              >
                beyondlimits.webb@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} BeyondLimits Digital Studio. Crafted by Satyam Shaw & Swayam Chowdhary.
          </div>

          <div className="flex items-center gap-6">
            <a href="#work-section" className="hover:text-neutral-300 transition-colors">
              Work
            </a>
            <a href="#services-section" className="hover:text-neutral-300 transition-colors">
              Capabilities
            </a>
            <a href="#about-section" className="hover:text-neutral-300 transition-colors">
              Philosophy
            </a>
            <a href="#contact-section" className="hover:text-neutral-300 transition-colors">
              Inquire
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer ml-4"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
