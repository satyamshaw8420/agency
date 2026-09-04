import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Quote, Sparkles, ExternalLink } from 'lucide-react';
import { CaseStudy } from '../types';

interface ProjectModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartInquiry: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  caseStudy,
  onClose,
  onStartInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl lg:max-w-4xl bg-neutral-900 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-y-auto max-h-[92vh] my-auto flex flex-col"
      >
        {/* Modal Header Banner with image */}
        <div className="relative h-48 sm:h-60 md:h-72 w-full overflow-hidden bg-neutral-950 flex-shrink-0">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent pointer-events-none" />

          {/* Top Actions */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-950/85 hover:bg-neutral-900 text-neutral-200 hover:text-white border border-neutral-700/80 text-xs font-mono transition-all no-underline shadow-lg backdrop-blur-md"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              id="close-case-study-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-950/85 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer shadow-lg backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title lockup */}
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-neutral-950/90 text-neutral-200 border border-neutral-700/80 font-medium">
                {caseStudy.categoryLabel}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-medium">
                {caseStudy.client}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-100 uppercase tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              {caseStudy.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7 flex-1">
          {/* Performance & Delivery Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-3.5 sm:p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/90">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-base sm:text-lg font-bold font-display text-amber-400">
                    {m.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                The Objective &amp; Challenge
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Technical Execution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Deliverables checklist */}
          <div className="pt-5 border-t border-neutral-800/80">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              Key Deliverables &amp; Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Quote */}
          {caseStudy.quote && (
            <div className="p-4 sm:p-5 rounded-xl border border-neutral-800 bg-neutral-950/80 relative">
              <Quote className="w-5 h-5 text-neutral-700 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-neutral-200 italic leading-relaxed">
                "{caseStudy.quote.text}"
              </p>
              <div className="mt-2.5 text-xs font-mono text-neutral-400">
                <span className="font-semibold text-neutral-300">{caseStudy.quote.author}</span>
                {' — '}
                <span>{caseStudy.quote.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="sticky bottom-0 p-4 sm:p-5 border-t border-neutral-800 bg-neutral-950/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 z-10">
          <div className="flex items-center gap-3">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium transition-colors no-underline"
              >
                <span>Visit {caseStudy.title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 cursor-pointer transition-colors"
            >
              Close
            </button>
            <button
              id="modal-inquire-project-btn"
              onClick={() => {
                onClose();
                onStartInquiry(caseStudy.title);
              }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-neutral-100 text-neutral-950 text-xs font-semibold hover:bg-white transition-all cursor-pointer shadow-md active:scale-95"
            >
              <span>Inquire For Similar Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-950" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
