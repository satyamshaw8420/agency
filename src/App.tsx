import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
import { LeftSidebar } from './components/LeftSidebar';
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
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleExploreWork = useCallback(() => {
    const el = document.getElementById('work-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleOpenContact = useCallback((subject?: string) => {
    if (subject) setContactSubject(subject);
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleOpenEstimator = useCallback((serviceName?: string) => {
    setEstimatorService(serviceName);
    setEstimatorOpen(true);
  }, []);

  const handleCaseStudyInquiry = useCallback((studyTitle: string) => {
    handleOpenContact(`Inquiry inspired by ${studyTitle}`);
  }, [handleOpenContact]);

  const handleCloseEstimator = useCallback(() => {
    setEstimatorOpen(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCaseStudy(null);
  }, []);

  return (
    <div className="min-h-screen paper-backdrop text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-neutral-950 relative overflow-x-hidden transform-gpu">
      {/* Smooth exit loader via AnimatePresence */}
      <AnimatePresence mode="wait">
        {isLoading && <SkeletonLoader key="app-loader" />}
      </AnimatePresence>

      {/* Desktop Left Sidebar */}
      <LeftSidebar
        onOpenEstimator={() => handleOpenEstimator()}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Mobile Top Navbar */}
      <div className="lg:hidden">
        <Navbar
          onOpenEstimator={() => handleOpenEstimator()}
          onOpenContact={() => handleOpenContact()}
        />
      </div>

      {/* Main Content Layout with 3D elevation and desktop sidebar offset */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 15 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:pl-72 flex-1 flex flex-col min-w-0 transform-gpu will-change-transform"
      >
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
      </motion.div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        caseStudy={selectedCaseStudy}
        onClose={handleCloseModal}
        onStartInquiry={handleCaseStudyInquiry}
      />

      {/* Interactive Scope & Price Estimator Modal */}
      <ProjectEstimator
        isOpen={estimatorOpen}
        onClose={handleCloseEstimator}
        initialService={estimatorService}
      />
    </div>
  );
};

export default App;
