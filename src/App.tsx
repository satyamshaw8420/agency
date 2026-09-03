import { useState } from "react";
import { Intro, Nav, Footer, FloatingWhatsApp } from "./components/chrome";
import { Hero, Marquee, Trust } from "./components/hero";
import { Work } from "./components/work";
import { Services, Industries } from "./components/services";
import { Standard, Craft } from "./components/standard";
import { Estimator } from "./components/estimator";
import { Pricing, Process } from "./components/pricing";
import { People, Comms } from "./components/people";
import { Faq, Closing } from "./components/closing";

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian font-body text-primary antialiased">
      {/* a11y skip link */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-[6px] focus:bg-gold focus:px-4 focus:py-2 focus:text-obsidian"
      >
        Skip to content
      </a>

      {!ready && <Intro onDone={() => setReady(true)} />}

      {ready && (
        <>
          <Nav />
          <main>
            <Hero />
            <Marquee />
            <Trust />
            <Work />
            <Services />
            <Industries />
            <Standard />
            <Craft />
            <Estimator />
            <Pricing />
            <Process />
            <People />
            <Comms />
            <Faq />
            <Closing />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}

      <div className="noise-overlay" aria-hidden="true" />
    </div>
  );
}
