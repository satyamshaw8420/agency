import { PRICING, PROCESS_STAGES } from "../data";
import { ArrowDownRight, Reveal, SectionHead } from "./ui";

/* ================= PRICING ================= */

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="07"
          label="Investment"
          meta="TRANSPARENT STARTING PRICES"
          lines={["CLEAR", "INVESTMENT."]}
          copy="No hidden pricing behind unnecessary forms. These are honest starting points — the final number follows the actual scope."
        />

        <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal
              key={p.no}
              delay={(i % 3) * 70}
              className="group relative flex flex-col bg-obsidian p-7 transition-colors duration-500 hover:bg-void md:p-8"
            >
              <span
                className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.3em] text-muted transition-colors duration-300 group-hover:text-gold">
                  {p.no}
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-gold/80">
                  From
                </span>
              </div>
              <h3 className="mt-7 font-display text-lg font-bold uppercase leading-tight tracking-tight text-primary md:text-xl">
                {p.name}
              </h3>
              <p className="mt-5 font-display text-[1.7rem] font-extrabold tracking-tight text-primary md:text-3xl">
                {p.price}
                <span className="text-gold">+</span>
                {p.per && <span className="text-base font-bold text-muted md:text-lg">{p.per}</span>}
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{p.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-2xl font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
            * Final pricing depends on project scope, features, integrations, content and technical
            requirements.
          </p>
          <a
            href="#estimator"
            className="group inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.22em] text-gold transition-colors hover:text-goldbright"
          >
            Not sure? Use the estimator
            <ArrowDownRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */

export function Process() {
  return (
    <section id="process" className="border-b border-line bg-void/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="08"
          label="Process"
          meta="IDEA → LAUNCH"
          lines={["HOW WE", "WORK."]}
          copy="Five stages, one straight line from idea to launch. Timelines are set realistically — we don't promise what we can't deliver well."
        />

        <div className="grid border border-line md:grid-cols-5">
          {PROCESS_STAGES.map((s, i) => (
            <Reveal key={s.no} delay={i * 90} className="group relative border-b border-r border-line p-7 transition-colors duration-500 last:border-b-0 hover:bg-obsidian md:border-b-0 md:last:border-r-0 md:p-8">
              <div className="flex items-baseline justify-between md:block">
                <span className="font-display text-5xl font-extrabold tracking-tight text-line transition-colors duration-500 group-hover:text-gold md:text-6xl">
                  {s.no}
                </span>
                <span className="h-px w-10 bg-line transition-all duration-500 group-hover:w-14 group-hover:bg-gold/60 md:mt-6 md:block" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.copy}</p>
              <span className="absolute right-6 top-7 font-mono text-[9.5px] tracking-[0.24em] text-muted/50 md:top-auto md:bottom-7 md:right-auto md:left-8 md:top-auto">
                STAGE {i + 1}/5
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-start gap-4 rounded-[8px] border border-line bg-obsidian p-6 md:p-7">
          <span className="mt-1.5 inline-block h-[7px] w-[7px] shrink-0 rotate-45 bg-gold" />
          <p className="text-sm leading-relaxed text-secondary">
            <span className="font-semibold text-primary">Communication is part of the process.</span>{" "}
            <span className="text-muted">
              You speak directly with the people doing the work, progress is visible at every stage,
              and expectations are agreed before anything is built.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
