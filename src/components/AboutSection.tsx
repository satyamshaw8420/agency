import React, { memo } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { STUDIO_METRICS, STUDIO_STANDARDS } from '../data';

export const AboutSection: React.FC = memo(() => {
  return (
    <motion.section
      id="about-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-neutral-800/80 bg-neutral-950 transform-gpu"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Studio Manifesto / Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-neutral-800/80">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Studio Philosophy
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight leading-tight">
              Built lean, agile &amp; focused on real results
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base leading-relaxed font-normal">
            <p>
              We are an independent, newly launched digital studio founded on a straightforward promise: delivering high-craft web apps and digital designs without agency bloat or inflated retainers.
            </p>
            <p className="text-neutral-400">
              Traditional agencies often charge enterprise fees only to pass your project down to junior interns while drowning you in meetings. We do the opposite. You collaborate 1-on-1 with the actual designer and developer building your product, ensuring fast execution, sharp attention to detail, and rapid iteration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs text-neutral-300">
              <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 transform-gpu will-change-transform">
                <div className="text-neutral-200 font-bold mb-1 flex items-center gap-2">
                  <span className="text-amber-400 font-mono">[01]</span>
                  <span>DIRECT COLLABORATION</span>
                </div>
                <div className="text-neutral-400">Direct Slack/Email access to the builder. Clear weekly demos, zero bureaucratic friction.</div>
              </div>
              <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 transform-gpu will-change-transform">
                <div className="text-neutral-200 font-bold mb-1 flex items-center gap-2">
                  <span className="text-amber-400 font-mono">[02]</span>
                  <span>PRODUCTION STANDARDS</span>
                </div>
                <div className="text-neutral-400">Modern React, Next.js &amp; Tailwind CSS. Clean, maintainable code you own 100% from day one.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Metrics Grid */}
        <div className="py-16 border-b border-neutral-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STUDIO_METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col transform-gpu will-change-transform">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight">
                  {metric.value}
                </span>
                <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-neutral-300 font-display">
                  {metric.label}
                </span>
                <span className="mt-1 text-xs text-neutral-400 font-mono leading-relaxed">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Working Standards & Commitments */}
        <div className="pt-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h3 className="font-display text-xl font-bold uppercase text-neutral-100">
                Our Production Standards &amp; Guarantees
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400">Zero Compromises</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STUDIO_STANDARDS.map((std, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700 transition-all flex flex-col justify-between transform-gpu will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      {std.focus}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                  </div>
                  <h4 className="font-display text-base font-bold text-neutral-100 mb-2">
                    {std.principle}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                    {std.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
});

AboutSection.displayName = 'AboutSection';

