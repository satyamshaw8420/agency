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
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Banner with image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-950 flex-shrink-0">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

          {/* Top Actions */}
          <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950/80 hover:bg-neutral-900 text-neutral-200 hover:text-white border border-neutral-700/80 text-xs font-mono transition-all no-underline shadow-md"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              id="close-case-study-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title lockup */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-neutral-950/90 text-neutral-200 border border-neutral-700/80">
                {caseStudy.categoryLabel}
              </span>
              <span className="text-xs font-mono text-emerald-400">
                {caseStudy.client}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-neutral-100 uppercase">
              {caseStudy.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-neutral-300 max-w-2xl">
              {caseStudy.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Key Impact Metrics */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Demonstrated Performance & Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 flex flex-col"
                >
                  <span className="font-display text-2xl sm:text-3xl font-bold text-emerald-400">
                    {metric.value}
                  </span>
                  <span className="mt-1 text-xs text-neutral-400 font-mono">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-800">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 font-display mb-2">
                The Objective & Challenge
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 font-display mb-2">
                Technical Execution
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Deliverables checklist */}
          <div className="pt-6 border-t border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              Key Deliverables & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Quote */}
          {caseStudy.quote && (
            <div className="p-5 sm:p-6 rounded-xl border border-neutral-800 bg-neutral-950/80 relative">
              <Quote className="w-6 h-6 text-neutral-700 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
                "{caseStudy.quote.text}"
              </p>
              <div className="mt-3 text-xs font-mono text-neutral-400">
                <span className="font-semibold text-neutral-300">{caseStudy.quote.author}</span>
                {' — '}
                <span>{caseStudy.quote.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium transition-colors no-underline"
              >
                <span>Visit {caseStudy.title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 cursor-pointer"
            >
              Close
            </button>
            <button
              id="modal-inquire-project-btn"
              onClick={() => {
                onClose();
                onStartInquiry(caseStudy.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-neutral-100 text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <span>Inquire For Similar Build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
