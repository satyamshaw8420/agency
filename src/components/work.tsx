import { PROJECTS, waLink } from "../data";
import { ArrowUpRight, Reveal, SectionHead } from "./ui";

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="01"
          label="Selected Work"
          meta="03 PROJECTS — LIVE"
          lines={["SELECTED", "WORK."]}
          copy="A selection of digital experiences designed and developed by Beyond Limit. Every project below is live — open it, scroll it, test it."
        />

        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((p, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article key={p.no} className="group">
                <div className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12`}>
                  {/* image */}
                  <Reveal
                    className={`relative lg:col-span-8 ${flip ? "lg:order-2" : ""}`}
                  >
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live project: ${p.name}`}
                      className="relative block overflow-hidden rounded-[8px] border border-line bg-void"
                    >
                      {/* browser chrome */}
                      <div className="flex items-center gap-2 border-b border-line bg-obsidian px-4 py-2.5">
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-gold/70" />
                        <span className="ml-3 truncate rounded-[4px] border border-line bg-void px-3 py-0.5 font-mono text-[10px] tracking-wide text-muted">
                          {p.url.replace("https://", "")}
                        </span>
                        <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-gold">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                          LIVE
                        </span>
                      </div>
                      <div className="overflow-hidden">
                        <img
                          src={p.image}
                          alt={`${p.name} — website design by Beyond Limit`}
                          width={1600}
                          height={1000}
                          loading={idx === 0 ? "eager" : "lazy"}
                          className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                        />
                      </div>
                      {/* hover metadata */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-[4px] border border-gold/30 bg-obsidian/80 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-gold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-primary sm:flex">
                          Open project
                          <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                        </span>
                      </div>
                    </a>
                  </Reveal>

                  {/* meta */}
                  <Reveal delay={140} className={`lg:col-span-4 ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4 font-mono text-[10.5px] uppercase tracking-[0.28em] text-muted">
                      <span className="text-gold">{p.no}</span>
                      <span className="h-px w-10 bg-line" />
                      <span>{p.industry}</span>
                    </div>

                    <h3 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold uppercase leading-none tracking-tight text-primary">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 group-hover:text-goldbright"
                      >
                        {p.name}
                      </a>
                    </h3>

                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                      {p.type}
                    </p>

                    <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-muted">
                      {p.description}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.22em] text-gold transition-colors hover:text-goldbright"
                      >
                        View Live
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                      </a>
                      <a
                        href={waLink(
                          `Hi Beyond Limit, I saw ${p.name} in your selected work. I'd like to build something similar for my business.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-sweep font-mono text-[11.5px] uppercase tracking-[0.22em] text-secondary transition-colors hover:text-primary"
                      >
                        Build Something Similar
                      </a>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>

        <Reveal className="mt-20 border-t border-line pt-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted">
            Your project could be next —{" "}
            <a
              href={waLink(WA_DEFAULT())}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-goldbright"
            >
              start the conversation ↗
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WA_DEFAULT() {
  return "Hi Beyond Limit, I'd like to discuss a project for my business.";
}
