import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, ChevronRight, Copy, Sparkles, X } from 'lucide-react';

interface ProjectEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
    initialService ? [initialService] : ['Product Design']
  );
  const [timelineSpeed, setTimelineSpeed] = useState<'rush' | 'standard' | 'extended'>('standard');
  const [platforms, setPlatforms] = useState<string[]>(['Web Application']);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const availableDisciplines = [
    { id: 'Product Design', label: '0→1 Product Design & UI/UX', basePrice: 14999, weeks: 2 },
    { id: 'Brand Identity', label: 'Brand Visuals & Design System', basePrice: 9999, weeks: 1 },
    { id: 'Engineering', label: 'Modern Web Engineering (React/Next)', basePrice: 24999, weeks: 2 },
    { id: 'AI Systems', label: 'AI Interfaces & Dynamic Workflows', basePrice: 19999, weeks: 2 },
  ];

  const availablePlatforms = [
    { id: 'Web Application', label: 'Web Application (React / Next.js)' },
    { id: 'Landing Page', label: 'High-Converting Landing Page' },
    { id: 'Design Tokens', label: 'Figma Library & Style Tokens' },
    { id: 'Interactive UI', label: 'Interactive Motion & Micro-Interactions' },
  ];

  const toggleDiscipline = (name: string) => {
    if (selectedDisciplines.includes(name)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== name));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, name]);
    }
  };

  const togglePlatform = (name: string) => {
    if (platforms.includes(name)) {
      if (platforms.length > 1) {
        setPlatforms(platforms.filter((p) => p !== name));
      }
    } else {
      setPlatforms([...platforms, name]);
    }
  };

  const estimation = useMemo(() => {
    let totalBase = 0;
    let maxWeeks = 2;

    selectedDisciplines.forEach((d) => {
      const match = availableDisciplines.find((item) => item.id === d);
      if (match) {
        totalBase += match.basePrice;
        if (match.weeks > maxWeeks) maxWeeks = match.weeks;
      }
    });

    // Platforms add small multiplier
    const platformFactor = 1 + (platforms.length - 1) * 0.1;
    totalBase = totalBase * platformFactor;

    // Timeline modifier
    let timeMultiplier = 1.0;
    let estimatedWeeksText = '';
    if (timelineSpeed === 'rush') {
      timeMultiplier = 1.15;
      estimatedWeeksText = `1 to 2 Weeks (Fast Track)`;
    } else if (timelineSpeed === 'standard') {
      timeMultiplier = 1.0;
      estimatedWeeksText = `${maxWeeks} to ${maxWeeks + 1} Weeks (Standard)`;
    } else {
      timeMultiplier = 0.92;
      estimatedWeeksText = `${maxWeeks + 1} to ${maxWeeks + 2} Weeks (Flexible)`;
    }

    const calculatedPrice = Math.round(totalBase * timeMultiplier);
    const minRange = Math.round(calculatedPrice * 0.92);
    const maxRange = Math.round(calculatedPrice * 1.15);

    const formatCost = (val: number) => {
      return `₹${val.toLocaleString('en-IN')}`;
    };

    return {
      priceRange: `${formatCost(minRange)} — ${formatCost(maxRange)}`,
      estimatedWeeks: estimatedWeeksText,
      calculatedPrice,
    };
  }, [selectedDisciplines, timelineSpeed, platforms]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const summary = `Agency Project Estimate:
Disciplines: ${selectedDisciplines.join(', ')}
Platforms: ${platforms.join(', ')}
Pace: ${timelineSpeed} (${estimation.estimatedWeeks})
Estimated Budget: ${estimation.priceRange}
Contact: ${clientName} (${clientEmail})
Notes: ${notes || 'N/A'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      id="project-estimator-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-estimator-modal"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-5 sm:p-8 my-auto max-h-[92vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
              <span>Studio Calculator</span>
            </div>
            <h3 className="font-display text-xl sm:text-3xl font-bold uppercase text-neutral-100 mt-1">
              Interactive Scope & Cost Estimator
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Select project requirements for a transparent, real-time estimate based on our sprint pricing.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors shrink-0 ml-2"
            aria-label="Close estimator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Step 1: Disciplines */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 mb-3">
                1. Required Capabilities (Select 1 or more)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableDisciplines.map((d) => {
                  const isChecked = selectedDisciplines.includes(d.id);
                  return (
                    <div
                      key={d.id}
                      onClick={() => toggleDiscipline(d.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                        isChecked
                          ? 'border-amber-500/70 bg-amber-500/10 text-neutral-100 font-medium shadow-[0_0_15px_rgba(245,158,11,0.12)]'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span>{d.label}</span>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-amber-400 border-amber-400' : 'border-neutral-700'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Platforms */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 mb-3">
                2. Target Platforms & Surfaces
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availablePlatforms.map((p) => {
                  const isChecked = platforms.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      onClick={() => togglePlatform(p.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs ${
                        isChecked
                          ? 'border-amber-500/70 bg-amber-500/10 text-neutral-100 font-medium shadow-[0_0_15px_rgba(245,158,11,0.12)]'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span>{p.label}</span>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-amber-400 border-amber-400' : 'border-neutral-700'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pace */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300 mb-3">
                3. Delivery Velocity & Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'rush', label: 'Accelerated Sprint', note: 'Priority staffing, dedicated syncs' },
                  { id: 'standard', label: 'Standard Focus', note: 'Balanced cadence & testing' },
                  { id: 'extended', label: 'Partnership Retainer', note: 'Multi-quarter roadmap' },
                ].map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setTimelineSpeed(tier.id as any)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      timelineSpeed === tier.id
                        ? 'border-amber-500/70 bg-amber-500/10 text-white shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-semibold text-xs text-neutral-200">{tier.label}</div>
                    <div className="text-[11px] text-neutral-400 mt-1">{tier.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculated Results Banner */}
            <div className="p-5 sm:p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-neutral-900 to-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_35px_rgba(245,158,11,0.12)]">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Studio Investment
                </span>
                <div className="font-display text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent mt-1">
                  {estimation.priceRange}
                </div>
              </div>

              <div className="sm:text-right">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Target Duration
                </span>
                <div className="font-mono text-base font-bold text-neutral-200 mt-1">
                  {estimation.estimatedWeeks}
                </div>
              </div>
            </div>

            {/* Step 4: Contact details to request consultation */}
            <div className="pt-4 border-t border-neutral-800 space-y-4">
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-300">
                4. Lock in Studio Consultation
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>
              </div>

              <textarea
                placeholder="Brief project notes, links to Figma/doc, or target launch date (optional)..."
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-neutral-800/80">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors text-center cursor-pointer"
              >
                Cancel
              </button>

              <button
                id="submit-estimator-inquiry-btn"
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] active:scale-95 cursor-pointer text-center"
              >
                Submit Estimate & Request Call
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h4 className="font-display text-2xl font-bold text-neutral-100">
              Estimate Received & Logged
            </h4>

            <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{clientName}</span>. A studio partner will review your scope ({selectedDisciplines.join(' + ')}) and respond at <span className="text-white font-medium">{clientEmail}</span> within 12 business hours.
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-neutral-300">
              <div><span className="text-neutral-500">Estimate:</span> {estimation.priceRange}</div>
              <div><span className="text-neutral-500">Timeline:</span> {estimation.estimatedWeeks}</div>
              <div><span className="text-neutral-500">Disciplines:</span> {selectedDisciplines.join(', ')}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleCopySummary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:bg-neutral-800 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-neutral-100 text-neutral-950 text-xs font-semibold hover:bg-neutral-200 cursor-pointer text-center"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
