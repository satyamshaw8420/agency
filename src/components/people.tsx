import { COMM_POINTS, FOUNDERS } from "../data";
import { Eagle, Reveal, SectionHead } from "./ui";

/* ================= PEOPLE ================= */

export function People() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="09"
          label="People"
          meta="THE STUDIO IS TWO PEOPLE — BY DESIGN"
          lines={["THE PEOPLE", "BEHIND THE WORK."]}
          copy="Beyond Limit is built around direct collaboration, careful design and hands-on development. No account managers, no hand-offs."
        />

        <div className="grid gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 120} className="group relative overflow-hidden bg-obsidian p-10 transition-colors duration-500 hover:bg-void md:p-14">
              {/* oversized watermark initials */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[11rem] font-extrabold leading-none text-void transition-colors duration-700 group-hover:text-panel md:text-[15rem]"
              >
                {f.initials}
              </span>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] tracking-[0.3em] text-gold">{f.tag}</span>
                  <span className="text-gold/40 transition-colors duration-500 group-hover:text-gold">
                    <Eagle className="h-4 w-6" />
                  </span>
                </div>

                {/* monogram frame */}
                <div className="mt-10 flex h-28 w-28 items-center justify-center border border-line transition-all duration-500 group-hover:border-gold/60 md:h-32 md:w-32">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-secondary transition-all duration-500 group-hover:scale-105 group-hover:text-goldbright md:text-4xl">
                    {f.initials}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold uppercase leading-none tracking-tight text-primary">
                  {f.name}
                </h3>

                <div className="mt-6 h-px w-full bg-line">
                  <div className="h-full w-0 bg-gold transition-all duration-700 group-hover:w-1/3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex items-start gap-4">
          <span className="mt-1.5 inline-block h-[7px] w-[7px] shrink-0 rotate-45 bg-gold" />
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Small on purpose. Every project gets the attention of the people whose names are on the
            studio — from the first conversation to the final deployment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= DIRECT COMMUNICATION ================= */

export function Comms() {
  return (
    <section className="border-b border-line bg-void/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="10"
          label="Direct Access"
          meta="NO MIDDLE LAYERS"
          lines={["NO LAYERS BETWEEN THE", "IDEA AND THE BUILD."]}
          copy="Projects are discussed directly, requirements are understood clearly, and the people involved in the work remain accessible throughout the process."
        />

        <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
          {COMM_POINTS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="group relative border-b border-r border-line p-7 transition-colors duration-500 hover:bg-obsidian md:p-8"
            >
              <span className="font-mono text-[10.5px] tracking-[0.3em] text-muted transition-colors duration-300 group-hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-display text-base font-bold uppercase leading-snug tracking-tight text-primary md:text-lg">
                {c.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{c.copy}</p>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
