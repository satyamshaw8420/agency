import {
  CRAFT_PRINCIPLES,
  STANDARD_BL,
  STANDARD_TYPICAL,
} from "../data";
import { CheckMark, CrossMark, MaskLines, Reveal, SectionHead } from "./ui";

/* ================= THE STANDARD ================= */

export function Standard() {
  return (
    <section className="border-b border-line bg-void/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="04"
          label="The Standard"
          meta="PHILOSOPHY"
          lines={["THE STANDARD", "IS LOW."]}
          copy="Most websites are assembled, not designed. We prefer to build higher — a comparison of philosophies, not of competitors."
        />

        <Reveal className="mb-6 -mt-4">
          <p className="font-display text-[clamp(1.3rem,3vw,2.2rem)] font-bold uppercase tracking-tight text-muted">
            We prefer to build <span className="text-goldbright">higher.</span>
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line lg:grid-cols-2">
          {/* typical */}
          <div className="bg-obsidian p-8 md:p-12">
            <Reveal>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                  Typical Website
                </h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted/60">A /</span>
              </div>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {STANDARD_TYPICAL.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border border-line text-muted">
                    <CrossMark className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] text-muted line-through decoration-line decoration-1">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* beyond limit */}
          <div className="relative bg-void p-8 md:p-12">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gold/60" aria-hidden="true" />
            <Reveal>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                  Beyond Limit
                </h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted">/ B</span>
              </div>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {STANDARD_BL.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border border-gold/40 bg-gold/10 text-gold">
                    <CheckMark className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] font-medium text-primary">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TECHNICAL CRAFT ================= */

export function Craft() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="05"
          label="Engineering"
          meta="TECHNICAL CRAFT"
          lines={["BEAUTIFUL", "ISN'T ENOUGH."]}
          copy="A website should look good — but it should also load quickly, work across devices, remain maintainable and behave properly."
        />

        <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {CRAFT_PRINCIPLES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 3) * 80}
              className="group relative border-b border-r border-line p-7 transition-colors duration-500 hover:bg-void md:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-gold">
                  {c.code}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-line transition-colors duration-300 group-hover:text-gold/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-10 font-display text-lg font-bold uppercase tracking-tight text-primary md:text-xl">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.copy}</p>
              <span
                className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-start gap-4">
          <span className="mt-1.5 inline-block h-[7px] w-[7px] shrink-0 rotate-45 bg-gold" />
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            We don't publish performance numbers we haven't measured. What we can promise is the
            discipline above — applied to every build, every time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
