import { useEffect, useRef, useState } from "react";
import {
  Eagle,
  EagleDraw,
  ArrowUpRight,
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  ArrowUp,
  useReducedMotion,
} from "./ui";
import { waLink, WA_DEFAULT_MSG, EMAIL, INSTAGRAM } from "../data";

/* ================= INTRO ================= */

export function Intro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [pct, setPct] = useState(0);
  const [exit, setExit] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1250;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setPct(Math.floor(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setExit(true);
        window.setTimeout(onDone, 720);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exit ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-gold">
        <EagleDraw className="h-16 w-24 md:h-20 md:w-32" />
      </div>
      <div className="intro-name mt-7 font-display text-sm font-bold uppercase text-primary md:text-base">
        BEYOND LIMIT
      </div>
      <div className="mt-10 h-px w-40 overflow-hidden bg-line md:w-56">
        <div className="h-full bg-gold transition-[width] duration-150 ease-linear" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-4 font-mono text-[11px] tracking-[0.3em] text-muted">
        {String(pct).padStart(3, "0")}
      </div>
    </div>
  );
}

/* ================= NAV ================= */

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "services", "process", "pricing", "about"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] border-b transition-colors duration-500 ${
          scrolled ? "border-line bg-obsidian/92 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        {/* reading progress */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-transparent">
          <div className="h-full bg-gold/80" style={{ width: `${progress}%` }} />
        </div>

        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-[72px] md:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Beyond Limit — home">
            <span className="text-gold transition-colors duration-300">
              <Eagle className="h-[17px] w-6" />
            </span>
            <span className="font-display text-[13px] font-bold uppercase tracking-[0.28em] text-primary">
              Beyond&nbsp;Limit
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`u-sweep font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active === l.href ? "is-active text-gold" : "text-secondary hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-[6px] bg-gold px-5 py-2.5 font-body text-[11.5px] font-semibold uppercase tracking-[0.14em] text-obsidian transition-colors duration-300 hover:bg-goldbright sm:inline-flex"
            >
              Start a Project
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-[6px] border border-line lg:hidden"
            >
              <span
                className={`h-px w-4.5 bg-primary transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
                style={{ width: "18px" }}
              />
              <span
                className={`h-px bg-primary transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
                style={{ width: "18px" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[75] flex flex-col bg-obsidian pt-24 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-6">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-baseline justify-between border-b border-line py-5 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-gold">0{i + 1}</span>
                <span className="font-display text-3xl font-bold uppercase tracking-tight text-primary">
                  {l.label}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </a>
          ))}
        </nav>
        <div className="px-6 pb-10">
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-[6px] bg-gold py-4 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-obsidian"
          >
            Start a Project <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <p className="mt-5 text-center font-mono text-[10px] tracking-[0.25em] text-muted">
            DIGITAL EXPERIENCES WITHOUT LIMITS
          </p>
        </div>
      </div>
    </>
  );
}

/* ================= FLOATING WHATSAPP (mobile) ================= */

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(WA_DEFAULT_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Beyond Limit on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/50 bg-void text-gold shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-gold hover:text-obsidian sm:hidden"
    >
      <WhatsAppIcon className="h-5.5 w-5.5" />
    </a>
  );
}

/* ================= FOOTER ================= */

export function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="text-gold">
                <Eagle className="h-5 w-8" />
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-[0.28em] text-primary">
                Beyond Limit
              </span>
            </a>
            <p className="mt-5 max-w-xs font-display text-lg font-semibold uppercase leading-snug text-secondary">
              Digital experiences without limits.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              An independent digital studio designing and developing websites, products and identities with precision, purpose and personality.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Navigation</h3>
            <ul className="mt-5 space-y-2.5">
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="u-sweep font-body text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Contact</h3>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={waLink(WA_DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 font-body text-sm text-secondary transition-colors hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 font-body text-sm text-secondary transition-colors hover:text-gold"
                >
                  <MailIcon className="h-4 w-4" /> {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 font-body text-sm text-secondary transition-colors hover:text-gold"
                >
                  <InstagramIcon className="h-4 w-4" /> @{INSTAGRAM}
                </a>
              </li>
            </ul>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group mt-8 inline-flex items-center gap-2 rounded-[6px] border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:border-gold/60 hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10.5px] tracking-[0.18em] text-muted">
            © 2026 BEYOND LIMIT. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[10.5px] tracking-[0.18em] text-muted/70">
            DESIGN · TECHNOLOGY · DETAIL
          </p>
        </div>
      </div>
    </footer>
  );
}
