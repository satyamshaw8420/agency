import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquareQuote } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Services & Scope',
    question: 'What types of projects do you take on?',
    answer: 'We specialize in 0-to-1 digital product design, high-converting landing pages, modern React & Tailwind web applications, and AI-powered interfaces. Whether you are launching a startup MVP, restaurant platform, or SaaS dashboard, we build production-ready software.'
  },
  {
    category: 'Services & Scope',
    question: 'Will I work directly with the creators?',
    answer: 'Yes, 100%. Unlike traditional agencies that pass your project through account managers and junior interns, you work directly with Satyam Shaw and Swayam Chowdhary. This ensures maximum speed, clear communication, and absolute zero bureaucratic friction.'
  },
  {
    category: 'Pricing & Sprints',
    question: 'How does your sprint pricing work?',
    answer: 'We operate on transparent, flat sprint pricing rather than hourly retainers. Projects typically start around $500 for quick landing pages and range up to $3,500+ for full-scale web applications and multi-page product sprints.'
  },
  {
    category: 'Pricing & Sprints',
    question: 'What payment terms do you offer?',
    answer: 'We typically split project billing into two milestones: a 50% deposit to kick off the sprint and lock in dedicated design/engineering time, and the remaining 50% upon final delivery and code handover.'
  },
  {
    category: 'Timelines',
    question: 'How fast can you build and launch my project?',
    answer: 'Depending on complexity, standard MVPs and landing pages are delivered within 7 to 14 days. We provide regular preview staging links so you can watch your application come to life in real-time.'
  },
  {
    category: 'Timelines',
    question: 'What happens after the project is launched?',
    answer: 'Every project comes with 30 days of free bug-fixing support and deployment guidance. You also retain 100% ownership of your GitHub repository and Figma design source files from day one.'
  }
];

export const FAQSection: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-24 border-t border-neutral-800/80 bg-[#050811] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight">
            Frequently Asked <span className="text-sky-400">Questions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-mono leading-relaxed">
            Everything you need to know about our sprints, pricing, timelines, and direct collaboration model.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="velvet-card rounded-2xl border border-neutral-800/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-xs font-mono text-sky-400/80">0{index + 1}</span>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400/70 block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-neutral-100">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-sky-950/60 text-sky-400 border-sky-500/30' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-neutral-800/50 mt-1">
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 rounded-2xl velvet-card p-8 sm:p-10 border border-sky-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h3 className="font-display text-xl font-bold text-neutral-100">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
              Reach out directly and we will respond within 2 hours.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-sky-500 text-[#050811] font-bold text-xs uppercase tracking-wider hover:bg-sky-400 transition-all flex items-center gap-2 shrink-0 shadow-lg cursor-pointer"
          >
            <MessageSquareQuote className="w-4 h-4" />
            <span>Ask Us Directly</span>
          </button>
        </div>
      </div>
    </section>
  );
};
