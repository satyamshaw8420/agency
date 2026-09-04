import { useMemo, useState } from "react";
import {
  EST_COMPLEXITY,
  EST_FEATURES,
  EST_MAINTENANCE,
  EST_TIMELINE,
  EST_TYPES,
  waLink,
} from "../data";
import { inr, PlusIcon, Reveal, SectionHead, useCountUp, CheckMark } from "./ui";

const round = (n: number) => Math.max(500, Math.round(n / 500) * 500);

export function Estimator() {
  const [typeIdx, setTypeIdx] = useState(1);
  const [cxIdx, setCxIdx] = useState(0);
  const [features, setFeatures] = useState<Set<number>>(new Set());
  const [tlIdx, setTlIdx] = useState(0);
  const [mntIdx, setMntIdx] = useState(0);

  const { low, high, featuresTotal, base, cxLabel, tlLabel, mnt } = useMemo(() => {
    const baseV = EST_TYPES[typeIdx].value ?? 0;
    const cxMult = EST_COMPLEXITY[cxIdx].mult ?? 1;
    const fTotal = [...features].reduce((s, i) => s + (EST_FEATURES[i].value ?? 0), 0);
    const tlMult = EST_TIMELINE[tlIdx].mult ?? 1;
    const sub = (baseV * cxMult + fTotal) * tlMult;
    return {
      low: round(sub),
      high: round(sub * 1.25),
      featuresTotal: fTotal,
      base: baseV,
      cxLabel: EST_COMPLEXITY[cxIdx].label,
      tlLabel: EST_TIMELINE[tlIdx].label,
      mnt: EST_MAINTENANCE[mntIdx],
    };
  }, [typeIdx, cxIdx, features, tlIdx, mntIdx]);

  const animLow = useCountUp(low);
  const animHigh = useCountUp(high);

  const toggleFeature = (i: number) =>
    setFeatures((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const reset = () => {
    setTypeIdx(1);
    setCxIdx(0);
    setFeatures(new Set());
    setTlIdx(0);
    setMntIdx(0);
  };

  const featureNames = [...features].map((i) => EST_FEATURES[i].label);
  const message = `Hi Beyond Limit, I'd like to discuss a project.\n\n— Project type: ${EST_TYPES[typeIdx].label}\n— Complexity: ${cxLabel}\n— Features: ${featureNames.length ? featureNames.join(", ") : "None selected"}\n— Timeline: ${tlLabel}\n— Maintenance: ${mnt.label}\n— Indicative estimate shown on site: ${inr(low)} – ${inr(high)}\n\nCould we talk about the actual scope?`;

  const labelCls = "font-mono text-[10.5px] uppercase tracking-[0.28em] text-muted";
  const chip = (active: boolean) =>
    `rounded-[6px] border px-4 py-2.5 font-body text-[13px] font-medium transition-all duration-300 ${
      active
        ? "border-gold/70 bg-gold/10 text-gold"
        : "border-line bg-transparent text-secondary hover:border-muted hover:text-primary"
    }`;

  return (
    <section id="estimator" className="border-b border-line bg-void/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="06"
          label="Estimator"
          meta="INDICATIVE RANGE"
          lines={["PROJECT COST", "ESTIMATOR."]}
          copy="Shape your project below and get an instant indicative range. It's an estimate — final pricing always follows a real conversation about scope."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* controls */}
          <Reveal className="space-y-10 lg:col-span-7">
            <div>
              <p className={labelCls}>
                <span className="text-gold">A /</span> Project Type
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5" role="group" aria-label="Project type">
                {EST_TYPES.map((t, i) => (
                  <button key={t.label} onClick={() => setTypeIdx(i)} className={chip(i === typeIdx)} aria-pressed={i === typeIdx}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className={labelCls}>
                <span className="text-gold">B /</span> Complexity
              </p>
              <div className="mt-4 grid max-w-md grid-cols-3 gap-2.5" role="group" aria-label="Complexity">
                {EST_COMPLEXITY.map((c, i) => (
                  <button key={c.label} onClick={() => setCxIdx(i)} className={chip(i === cxIdx)} aria-pressed={i === cxIdx}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className={labelCls}>
                <span className="text-gold">C /</span> Features{" "}
                <span className="normal-case tracking-normal text-muted/70">— select any</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5" role="group" aria-label="Features">
                {EST_FEATURES.map((f, i) => {
                  const on = features.has(i);
                  return (
                    <button
                      key={f.label}
                      onClick={() => toggleFeature(i)}
                      aria-pressed={on}
                      className={`inline-flex items-center gap-2 rounded-[6px] border px-4 py-2.5 font-body text-[13px] font-medium transition-all duration-300 ${
                        on
                          ? "border-gold/70 bg-gold/10 text-gold"
                          : "border-line bg-transparent text-secondary hover:border-muted hover:text-primary"
                      }`}
                    >
                      {on ? <CheckMark className="h-3 w-3" /> : <PlusIcon className="h-3 w-3" />}
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className={labelCls}>
                  <span className="text-gold">D /</span> Timeline
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2.5" role="group" aria-label="Timeline">
                  {EST_TIMELINE.map((t, i) => (
                    <button key={t.label} onClick={() => setTlIdx(i)} className={chip(i === tlIdx)} aria-pressed={i === tlIdx}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className={labelCls}>
                  <span className="text-gold">E /</span> Maintenance
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2.5" role="group" aria-label="Maintenance">
                  {EST_MAINTENANCE.map((m, i) => (
                    <button key={m.label} onClick={() => setMntIdx(i)} className={chip(i === mntIdx)} aria-pressed={i === mntIdx}>
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={reset}
              className="u-sweep font-mono text-[10.5px] uppercase tracking-[0.24em] text-muted transition-colors hover:text-primary"
            >
              ↺ Reset selections
            </button>
          </Reveal>

          {/* summary */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[8px] border border-gold/25 bg-obsidian lg:sticky lg:top-28">
              <div className="flex items-center justify-between border-b border-line px-6 py-4 md:px-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                  Estimated Project Investment
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-gold">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                  LIVE
                </span>
              </div>

              <div className="px-6 py-8 md:px-8">
                <p className="font-display text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold tracking-tight text-primary tabular-nums">
                  {inr(animLow)}
                  <span className="text-muted"> – </span>
                  <span className="text-goldbright">{inr(animHigh)}</span>
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Indicative range · INR
                </p>

                <dl className="mt-8 space-y-3 border-t border-line pt-6 font-mono text-[11.5px] tracking-wide">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Type</dt>
                    <dd className="text-right text-secondary">{EST_TYPES[typeIdx].label}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Base</dt>
                    <dd className="text-secondary tabular-nums">{inr(base)}+</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Complexity</dt>
                    <dd className="text-secondary">{cxLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Features ({features.size})</dt>
                    <dd className="text-right text-secondary tabular-nums">
                      {features.size ? `+ ${inr(featuresTotal)}` : "—"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Timeline</dt>
                    <dd className="text-secondary">
                      {tlLabel}
                      {EST_TIMELINE[tlIdx].note && (
                        <span className="text-muted"> ({EST_TIMELINE[tlIdx].note})</span>
                      )}
                    </dd>
                  </div>
                  {mntIdx > 0 && (
                    <div className="flex justify-between gap-4 border-t border-line pt-3">
                      <dt className="text-muted">{mnt.label}</dt>
                      <dd className="text-gold tabular-nums">+ {inr(mnt.value ?? 0)}/mo</dd>
                    </div>
                  )}
                </dl>

                <p className="mt-6 rounded-[6px] border border-line bg-void px-4 py-3 text-[12px] leading-relaxed text-muted">
                  This is an <span className="text-secondary">estimate, not a guaranteed quotation</span>.
                  Final pricing depends on actual scope, content and technical requirements.
                </p>

                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-center justify-center gap-2.5 rounded-[6px] bg-gold px-6 py-4 font-body text-[12.5px] font-semibold uppercase tracking-[0.16em] text-obsidian transition-all duration-300 hover:bg-goldbright hover:shadow-[0_8px_32px_-8px_rgba(212,175,55,0.45)]"
                >
                  Discuss This Project
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M4 12 L12 4 M6 4 h6 v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
