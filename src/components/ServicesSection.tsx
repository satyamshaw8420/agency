import React, { useState, memo } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Code2, Cpu, LayoutGrid, Palette } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = memo(({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'product-design':
        return <LayoutGrid className="w-5 h-5 text-neutral-300" />;
      case 'brand-systems':
        return <Palette className="w-5 h-5 text-neutral-300" />;
      case 'creative-engineering':
        return <Code2 className="w-5 h-5 text-neutral-300" />;
      case 'ai-interfaces':
        return <Cpu className="w-5 h-5 text-neutral-300" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-neutral-300" />;
    }
  };

  return (
    <motion.section
      id="services-section"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 border-t border-neutral-800/80 bg-neutral-950 transform-gpu"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Studio Capabilities & Disciplines
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-neutral-100 tracking-tight">
            Engineered for high-stakes ventures
          </h2>
          <p className="mt-4 text-neutral-400 text-base leading-relaxed">
            We operate at the convergence of strategic product design, systemic brand architecture, and resilient creative engineering. We do not do cookie-cutter solutions.
          </p>
        </div>

        {/* Master Service Navigation & Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Selector List with staggered whileInView and tactile scale */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <motion.div
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-6 rounded-2xl border transition-all duration-150 cursor-pointer text-left transform-gpu will-change-transform active:scale-[0.98] select-none ${
                    isSelected
                      ? 'border-neutral-700 bg-neutral-900/90 shadow-xl'
                      : 'border-neutral-800/70 bg-neutral-900/30 hover:border-neutral-700/80 hover:bg-neutral-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-500 font-bold">
                        {service.number}
                      </span>
                      {getServiceIcon(service.id)}
                    </div>
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isSelected ? 'text-neutral-200 font-semibold' : 'text-neutral-500'
                      }`}
                    >
                      {isSelected ? 'ACTIVE VIEW' : 'EXPAND'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-neutral-100">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Inspector Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transform-gpu will-change-transform"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-neutral-400 font-bold">
                    CAPABILITY {selectedService.number}
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                    Full Sprint & Retainer Available
                  </span>
                </div>

                <button
                  id={`inquire-service-btn-${selectedService.id}`}
                  onClick={() => onSelectService(selectedService.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-950 text-xs font-semibold hover:bg-white transition-all duration-150 cursor-pointer active:scale-95 transform-gpu select-none"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 mt-6">
                {selectedService.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Deliverables */}
              <div className="mt-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Standard Sprint Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5 text-xs text-neutral-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooling & Frameworks */}
              <div className="mt-8 pt-6 border-t border-neutral-800">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                  Specialized Tooling & Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono text-neutral-300 bg-neutral-800/80 border border-neutral-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Engagement Model Quote */}
            <div className="mt-10 p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/60 text-xs text-neutral-400 font-mono flex items-center justify-between">
              <span>Standard Engagement: 4 to 12 Week Sprints</span>
              <span className="text-neutral-500">Fixed-Fee or Milestone Retainer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

ServicesSection.displayName = 'ServicesSection';
