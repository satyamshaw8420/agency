import { useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";

/* ---------------- hooks ---------------- */

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function useCountUp(target: number, duration = 550) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(target);
  const prev = useRef(target);
  useEffect(() => {
    if (reduced) {
      prev.current = target;
      setValue(target);
      return;
    }
    const from = prev.current;
    if (from === target) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else prev.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      prev.current = target;
    };
  }, [target, duration, reduced]);
  return value;
}

/* ---------------- reveal primitives ---------------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/** Line-mask reveal for editorial headlines. */
export function MaskLines({
  lines,
  className = "",
  lineClassName = "",
  stagger = 90,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -4% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <span ref={ref} className={`masked block ${className}`}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span
            className={`line-inner ${lineClassName}`}
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ---------------- section header ---------------- */

export function SectionHead({
  index,
  label,
  lines,
  meta,
  copy,
}: {
  index: string;
  label: string;
  lines: ReactNode[];
  meta?: string;
  copy?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-muted uppercase">
          <span className="text-gold">{index}</span>
          <span className="text-line">/</span>
          <span>{label}</span>
          <span className="mx-2 hidden h-px flex-1 bg-line sm:block" />
          {meta && <span className="hidden text-muted/80 sm:block">{meta}</span>}
        </div>
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 className="lg:col-span-8">
          <MaskLines
            lines={lines}
            className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          />
        </h2>
        {copy && (
          <Reveal delay={200} className="lg:col-span-4">
            <p className="max-w-sm text-[15px] leading-relaxed text-secondary lg:ml-auto">
              {copy}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ---------------- icons (custom inline SVG) ---------------- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "square" as const,
};

export function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} d="M4 12 L12 4 M6 4 h6 v6" />
    </svg>
  );
}

export function ArrowDownRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} d="M4 4 L12 12 M12 6 v6 h-6" />
    </svg>
  );
}

export function ArrowUp({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} d="M8 13 V3 M3.5 7.5 L8 3 l4.5 4.5" />
    </svg>
  );
}

export function PlusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} d="M8 2.5 v11 M2.5 8 h11" />
    </svg>
  );
}

export function CrossMark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} strokeWidth={1.4} d="M4 4 L12 12 M12 4 L4 12" />
    </svg>
  );
}

export function CheckMark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path {...stroke} d="M2.5 8.5 L6.5 12.5 L13.5 4" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <rect x="1.8" y="3.2" width="12.4" height="9.6" {...stroke} />
      <path {...stroke} d="M2 3.8 L8 8.6 L14 3.8" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" rx="3.5" {...stroke} />
      <circle cx="8" cy="8" r="3" {...stroke} />
      <circle cx="11.6" cy="4.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

/* ---------------- eagle mark ---------------- */

export function Eagle({ className = "w-6 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 48" className={className} aria-hidden="true">
      <g fill="currentColor">
        <path d="M2 44 L28 6 L28 18 L14 44 Z" />
        <path d="M70 44 L44 6 L44 18 L58 44 Z" />
        <path d="M36 0 L41 16 L36 48 L31 16 Z" />
      </g>
    </svg>
  );
}

/** Stroke version used for the intro draw-on sequence. */
export function EagleDraw({ className = "w-20 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 48" className={`intro-draw ${className}`} aria-hidden="true">
      <path d="M2 44 L28 6 L28 18 L14 44 Z" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M70 44 L44 6 L44 18 L58 44 Z" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M36 0 L41 16 L36 48 L31 16 Z" pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ---------------- CTA ---------------- */

export function CtaLink({
  href,
  children,
  variant = "primary",
  arrow = "up" as "up" | "down" | "none",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  arrow?: "up" | "down" | "none";
  className?: string;
  external?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-[6px] px-6 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-300";
  const variants = {
    primary:
      "bg-gold text-obsidian hover:bg-goldbright hover:shadow-[0_8px_32px_-8px_rgba(212,175,55,0.45)]",
    ghost:
      "border border-line bg-transparent text-secondary hover:border-gold/70 hover:text-primary",
  };
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {arrow === "up" && (
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
      {arrow === "down" && (
        <ArrowDownRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      )}
    </a>
  );
}

/* ---------------- misc ---------------- */

export function GoldDot() {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold/60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
    </span>
  );
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
