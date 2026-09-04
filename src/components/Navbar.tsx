import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo - Uses /public/logo.png with fallback */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center group text-neutral-100 no-underline py-0.5"
        >
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Beyond Limits Studio"
              onError={() => setLogoError(true)}
              className="h-14 sm:h-16 md:h-20 w-auto max-w-[260px] object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(234,179,8,0.15)]"
            />
          ) : (
            <img
              src="/logo.svg"
              alt="Beyond Limits Studio"
              className="h-14 sm:h-16 md:h-20 w-auto max-w-[260px] object-contain transition-all duration-300 group-hover:scale-105"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-6 py-6 transition-all"
        >
          <div className="flex flex-col gap-4 text-base font-medium text-neutral-200">
            <button
              onClick={() => scrollTo('work-section')}
              className="text-left py-2 hover:text-white cursor-pointer"
            >
              Selected Work (Live Portfolio)
            </button>
            <button
              onClick={() => scrollTo('services-section')}
              className="text-left py-2 hover:text-white cursor-pointer"
            >
              Capabilities & Disciplines
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="text-left py-2 flex items-center gap-2 text-neutral-200 hover:text-white cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-neutral-400" />
              Interactive Project Estimator
            </button>
            <button
              onClick={() => scrollTo('about-section')}
              className="text-left py-2 hover:text-white cursor-pointer"
            >
              Studio & Standards
            </button>
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center py-3 rounded-xl bg-neutral-100 text-neutral-950 font-semibold"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
