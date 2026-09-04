import { CtaLink, Eagle, GoldDot, MaskLines, Reveal } from "./ui";
import { waLink, WA_DEFAULT_MSG, MARQUEE_ITEMS, TRUST_BLOCKS } from "../data";

/* ================= HERO ================= */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* architectural gridlines */}
      <div className="hero-gridlines pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* rotating drafting rings */}
      <div className="pointer-events-none absolute -right-40 top-24 hidden md:block" aria-hidden="true">
        <svg viewBox="0 0 600 600" className="animate-spin-slow text-line" style={{ width: 540, height: 540 }}>
          <circle cx="300" cy="300" r="298" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="300" cy="300" r="212" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
          <path d="M300 2 v44 M300 554 v44 M2 300 h44 M554 300 h44" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -right-16 top-[290px] hidden text-gold/[0.09] md:block" aria-hidden="true">
        <Eagle className="h-40 w-60" />
      </div>

      {/* vertical brand line */}
      <div
        className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 rotate-180 xl:block"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.5em] text-muted/60">
          DIGITAL EXPERIENCES WITHOUT LIMITS —
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-44">
        {/* eyebrow row */}
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-secondary">
            <span className="inline-block h-[7px] w-[7px] rotate-45 bg-gold" />
            Independent Digital Studio
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-line bg-void/70 px-4 py-2">
            <GoldDot />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-secondary">
              Available for select projects
            </span>
          </div>
        </Reveal>

        {/* headline */}
        <h1 className="mt-10 md:mt-14">
          <MaskLines
            lines={[
              "WE ENGINEER",
              "WEBSITES THAT",
              <>
                COMMAND <span className="text-outline">AUTHORITY.</span>
              </>,
            ]}
            className="font-display text-[clamp(2.7rem,9.2vw,8.4rem)] font-extrabold uppercase leading-[0.94] tracking-tight"
            stagger={110}
          />
        </h1>

        {/* supporting block */}
        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
          <Reveal delay={150} className="lg:col-span-5">
            <p className="font-display text-lg font-semibold uppercase leading-snug text-secondary md:text-xl">
              Digital experiences built with precision, purpose and personality.
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Beyond Limit designs and develops high-quality websites, digital products and brand
              experiences for businesses that want to move beyond ordinary online presence.
            </p>
          </Reveal>

          <Reveal delay={280} className="flex flex-wrap items-start gap-4 lg:col-span-4 lg:col-start-8 lg:justify-end">
            <CtaLink href={waLink(WA_DEFAULT_MSG)} external>
              Start a Project
            </CtaLink>
            <CtaLink href="#work" variant="ghost" arrow="down">
              View Selected Work
            </CtaLink>
          </Reveal>
        </div>

        {/* technical strip */}
        <Reveal delay={200} className="mt-16 md:mt-24">
          <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-muted">
              Strategy <span className="text-gold">—</span> UI/UX{" "}
              <span className="text-gold">—</span> Development{" "}
              <span className="text-gold">—</span> Brand
            </p>
            <p className="hidden font-mono text-[10.5px] uppercase tracking-[0.26em] text-muted md:block">
              BL / EST. STANDARD — HIGH
            </p>
            <a href="#studio" className="group flex items-center gap-3 self-start sm:self-auto">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-secondary transition-colors group-hover:text-gold">
                Scroll
              </span>
              <span className="relative block h-8 w-px overflow-hidden bg-line">
                <span className="scroll-line absolute inset-0 bg-gold" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= MARQUEE ================= */

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee overflow-hidden border-b border-line bg-void py-4" aria-hidden="true">
      <div className="marquee-track items-center">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="px-6 font-display text-sm font-bold uppercase tracking-[0.22em] text-secondary md:text-base">
              {item}
            </span>
            <span className="inline-block h-[6px] w-[6px] rotate-45 bg-gold/80" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= TRUST INTRO ================= */

export function Trust() {
  return (
    <section id="studio" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
            <span className="text-gold">00</span>
            <span className="text-line">/</span>
            <span>The Studio</span>
            <span className="mx-2 hidden h-px flex-1 bg-line sm:block" />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <MaskLines
            lines={["NOT ANOTHER", "TEMPLATE."]}
            className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight lg:col-span-7"
          />
          <Reveal delay={200} className="lg:col-span-5 lg:pt-2">
            <p className="text-[15.5px] leading-relaxed text-secondary">
              Every business has a different story, audience and objective.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              We design and build digital experiences around those differences — instead of forcing
              businesses into the same recycled layout.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BLOCKS.map((b, i) => (
            <Reveal
              key={b.no}
              delay={i * 90}
              className="group bg-obsidian p-7 transition-colors duration-500 hover:bg-void sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-[0.3em] text-gold">{b.no}</span>
                <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-12 group-hover:bg-gold/60" />
              </div>
              <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-tight text-primary transition-colors duration-300 group-hover:text-goldbright md:text-2xl">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
