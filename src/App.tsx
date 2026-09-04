import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkShowcase } from './components/WorkShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FoundersSection } from './components/FoundersSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectEstimator } from './components/ProjectEstimator';
import { SkeletonLoader } from './components/SkeletonLoader';
import { CaseStudy } from './types';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [estimatorService, setEstimatorService] = useState<string | undefined>(undefined);
  const [contactSubject, setContactSubject] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const handleExploreWork = () => {
    const el = document.getElementById('work-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContact = (subject?: string) => {
    if (subject) setContactSubject(subject);
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEstimator = (serviceName?: string) => {
    setEstimatorService(serviceName);
    setEstimatorOpen(true);
  };

  const handleCaseStudyInquiry = (studyTitle: string) => {
    handleOpenContact(`Inquiry inspired by ${studyTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-neutral-100 flex flex-col selection:bg-sky-400 selection:text-[#050811]">
      {isLoading && <SkeletonLoader />}

      {/* Sticky Top Navbar */}
      <Navbar
        onOpenEstimator={() => handleOpenEstimator()}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero
          onExploreWork={handleExploreWork}
          onOpenEstimator={() => handleOpenEstimator()}
          onOpenContact={() => handleOpenContact()}
        />

        <WorkShowcase
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenEstimator(serviceTitle)}
        />

        <AboutSection />

        <FoundersSection />

        <FAQSection onOpenContact={() => handleOpenContact()} />

        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartInquiry={handleCaseStudyInquiry}
      />

      {/* Interactive Scope & Price Estimator Modal */}
      <ProjectEstimator
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        initialService={estimatorService}
      />
    </div>
  );
};

export default App;
