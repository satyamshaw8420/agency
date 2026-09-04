import { useState } from "react";
import { INDUSTRIES, SERVICES, waLink } from "../data";
import { ArrowUpRight, CheckMark, PlusIcon, Reveal, SectionHead } from "./ui";

/* ================= SERVICES ================= */

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="border-b border-line bg-void/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="02"
          label="Services"
          meta="08 DISCIPLINES"
          lines={["WHAT WE", "BUILD."]}
          copy="Straightforward services with clear deliverables and starting prices. Expand any discipline to see exactly what's included."
        />

        <div className="border-b border-line">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.no} delay={Math.min(i * 40, 200)} className="border-t border-line">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-${i}`}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[64px_1fr_auto_40px] md:gap-6 md:py-8"
                  >
                    <span className={`font-mono text-xs tracking-[0.3em] transition-colors duration-300 ${isOpen ? "text-gold" : "text-muted group-hover:text-gold"}`}>
                      {s.no}
                    </span>
                    <span
                      className={`font-display text-[clamp(1.15rem,2.6vw,2.1rem)] font-bold uppercase leading-tight tracking-tight transition-all duration-300 ${
                        isOpen ? "text-goldbright md:translate-x-2" : "text-primary group-hover:translate-x-2"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="hidden font-mono text-[11px] tracking-[0.14em] text-muted md:block">
                      FROM <span className="text-secondary">{s.starts}</span>
                    </span>
                    <span
                      className={`justify-self-end text-secondary transition-transform duration-500 ${
                        isOpen ? "rotate-45 text-gold" : "group-hover:text-primary"
                      }`}
                    >
                      <PlusIcon className="h-4.5 w-4.5" />
                    </span>
                  </button>
                </h3>

                <div id={`service-${i}`} className={`acc-panel ${isOpen ? "open" : ""}`}>
                  <div>
                    <div className="grid gap-8 pb-9 md:grid-cols-12 md:pl-[88px]">
                      <div className="md:col-span-4">
                        <p className="text-[14.5px] leading-relaxed text-secondary">{s.description}</p>
                        <a
                          href={waLink(
                            `Hi Beyond Limit, I'm interested in ${s.title.toLowerCase()}. Could we discuss scope and pricing?`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/cta mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold transition-colors hover:text-goldbright"
                        >
                          Discuss this
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                        </a>
                      </div>

                      <div className="md:col-span-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                          Includes
                        </p>
                        <ul className="mt-4 space-y-2">
                          {s.includes.map((inc) => (
                            <li key={inc} className="flex items-start gap-3 text-sm text-secondary">
                              <span className="mt-1 text-gold">
                                <CheckMark className="h-3 w-3" />
                              </span>
                              {inc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                          Ideal for
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-secondary">{s.ideal}</p>
                        <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] tracking-[0.12em] text-muted md:hidden">
                          FROM <span className="text-gold">{s.starts}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= INDUSTRIES ================= */

export function Industries() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="03"
          label="Industries"
          meta="WHERE WE WORK"
          lines={["DESIGNED FOR", "BUSINESS."]}
          copy="Different businesses need different things. These are the kinds of teams we commonly build for — the approach is always shaped around yours."
        />

        <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind}
              delay={(i % 2) * 80}
              className="group flex items-center justify-between bg-obsidian px-4 py-6 transition-colors duration-300 hover:bg-void md:px-7 md:py-8"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[10.5px] tracking-[0.3em] text-muted transition-colors duration-300 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-bold uppercase tracking-tight text-primary transition-transform duration-300 group-hover:translate-x-1.5 md:text-2xl">
                  {ind}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
            </Reveal>
          ))}
          <Reveal
            delay={120}
            className="group flex items-center justify-between bg-void px-4 py-6 transition-colors duration-300 hover:bg-panel md:px-7 md:py-8"
          >
            <a
              href={waLink("Hi Beyond Limit, my business doesn't fit a standard category. Can we talk about what I need?")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[10.5px] tracking-[0.3em] text-gold">08</span>
                <span className="font-display text-xl font-bold uppercase tracking-tight text-goldbright transition-transform duration-300 group-hover:translate-x-1.5 md:text-2xl">
                  Something else? Let's talk.
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
