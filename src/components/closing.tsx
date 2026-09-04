import { useState } from "react";
import { FAQS, WA_DISPLAY, waLink, WA_DEFAULT_MSG } from "../data";
import { CtaLink, MaskLines, PlusIcon, Reveal, SectionHead, GoldDot } from "./ui";

/* ================= FAQ ================= */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="11"
          label="FAQ"
          meta="STRAIGHT ANSWERS"
          lines={["QUESTIONS,", "ANSWERED."]}
          copy="The things businesses usually ask before starting. If yours isn't here, ask it directly on WhatsApp."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="border-b border-line">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={Math.min(i * 30, 180)} className="border-t border-line">
                    <h3>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="flex items-baseline gap-5">
                          <span className={`font-mono text-[10.5px] tracking-[0.28em] transition-colors ${isOpen ? "text-gold" : "text-muted"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-display text-[clamp(1rem,2vw,1.35rem)] font-bold uppercase leading-snug tracking-tight transition-colors duration-300 ${
                              isOpen ? "text-goldbright" : "text-primary group-hover:text-goldbright"
                            }`}
                          >
                            {f.q}
                          </span>
                        </span>
                        <span className={`shrink-0 text-secondary transition-transform duration-500 ${isOpen ? "rotate-45 text-gold" : ""}`}>
                          <PlusIcon className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>
                    <div id={`faq-${i}`} className={`acc-panel ${isOpen ? "open" : ""}`}>
                      <div>
                        <p className="max-w-2xl pb-7 pl-[46px] text-[14.5px] leading-relaxed text-muted">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={150} className="lg:col-span-4">
            <div className="rounded-[8px] border border-line bg-void p-7 lg:sticky lg:top-28 md:p-8">
              <GoldDot />
              <p className="mt-5 font-display text-xl font-bold uppercase leading-snug tracking-tight text-primary">
                Still deciding?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A short conversation costs nothing. Describe what you're thinking about and get an
                honest read on scope, effort and investment.
              </p>
              <CtaLink href={waLink(WA_DEFAULT_MSG)} external className="mt-7 w-full">
                Start a Project
              </CtaLink>
              <p className="mt-4 text-center font-mono text-[10.5px] tracking-[0.2em] text-muted">
                {WA_DISPLAY} · WHATSAPP
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= FINAL CONVERSION ================= */

export function Closing() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* faint gridlines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(31,31,36,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,31,36,0.45) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 100%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 100%, black 20%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
            <span className="text-gold">12</span>
            <span className="text-line">/</span>
            <span>Contact</span>
            <span className="mx-2 hidden h-px flex-1 bg-line sm:block" />
          </div>
        </Reveal>

        <h2 className="mt-10">
          <MaskLines
            lines={[
              "HAVE AN IDEA?",
              <span key="l2" className="text-outline">
                LET'S BUILD IT<span className="text-gold" style={{ WebkitTextStroke: "0px" }}>.</span>
              </span>,
            ]}
            className="font-display text-[clamp(2.6rem,8.5vw,7.5rem)] font-extrabold uppercase leading-[0.96] tracking-tight"
            stagger={120}
          />
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Reveal delay={180} className="lg:col-span-5">
            <p className="text-[15.5px] leading-relaxed text-secondary">
              Tell us what you're building, what you need and where you want to go.
            </p>
            <p className="mt-3 text-[15.5px] leading-relaxed text-muted">
              We'll help define the right digital solution for it — directly, without forms or
              callbacks.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Direct line <span className="text-gold">—</span>{" "}
              <span className="text-secondary">{WA_DISPLAY}</span>
            </p>
          </Reveal>

          <Reveal delay={280} className="flex flex-wrap items-start gap-4 lg:col-span-4 lg:col-start-8 lg:justify-end">
            <CtaLink href={waLink(WA_DEFAULT_MSG)} external>
              Start a Project
            </CtaLink>
            <CtaLink href="#work" variant="ghost" arrow="down">
              View Our Work
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
