import React, { useState, useEffect, memo } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = memo(({ onOpenEstimator, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#070709]/90 backdrop-blur-xl border-b border-neutral-800/80 py-2.5 sm:py-3 shadow-xl shadow-black/50 transform-gpu will-change-transform"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center group text-neutral-100 no-underline py-0.5"
        >
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Beyond Limits Studio"
              width="210"
              height="52"
              onError={() => setLogoError(true)}
              className="h-11 sm:h-13 md:h-16 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[250px] object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_16px_rgba(245,158,11,0.22)] transform-gpu"
            />
          ) : (
            <img
              src="/logo.svg"
              alt="Beyond Limits Studio"
              width="210"
              height="52"
              className="h-11 sm:h-13 md:h-16 w-auto max-w-[170px] sm:max-w-[210px] md:max-w-[250px] object-contain transition-all duration-300 group-hover:scale-105 transform-gpu"
            />
          )}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <button
            id="nav-link-work"
            onClick={() => scrollTo('work-section')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Selected Work
          </button>
          <button
            id="nav-link-services"
            onClick={() => scrollTo('services-section')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Capabilities
          </button>
          <button
            id="nav-link-estimator"
            onClick={onOpenEstimator}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            Project Estimator
          </button>
          <button
            id="nav-link-about"
            onClick={() => scrollTo('about-section')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Studio & Standards
          </button>
        </nav>

        {/* Action button & Status */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available This Month
          </div>

          <button
            id="nav-cta-contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-md active:scale-95 cursor-pointer transform-gpu"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-amber-500/50 transition-all duration-150 focus:outline-none cursor-pointer transform-gpu active:scale-90 select-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-6 py-6 transition-all transform-gpu will-change-transform"
        >
          <div className="flex flex-col gap-3 text-base font-medium text-neutral-200">
            <button
              onClick={() => scrollTo('work-section')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-900/60 hover:text-white cursor-pointer active:scale-[0.97] transition-all transform-gpu select-none"
            >
              Selected Work (Live Portfolio)
            </button>
            <button
              onClick={() => scrollTo('services-section')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-900/60 hover:text-white cursor-pointer active:scale-[0.97] transition-all transform-gpu select-none"
            >
              Capabilities & Disciplines
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="text-left py-2.5 px-3 rounded-lg flex items-center gap-2 text-neutral-200 hover:bg-neutral-900/60 hover:text-white cursor-pointer active:scale-[0.97] transition-all transform-gpu select-none"
            >
              <Sparkles className="w-4 h-4 text-neutral-400" />
              Interactive Project Estimator
            </button>
            <button
              onClick={() => scrollTo('about-section')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-900/60 hover:text-white cursor-pointer active:scale-[0.97] transition-all transform-gpu select-none"
            >
              Studio & Standards
            </button>
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center py-3.5 rounded-xl bg-neutral-100 text-neutral-950 font-semibold active:scale-[0.97] transition-all duration-150 transform-gpu cursor-pointer select-none shadow-md"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';
