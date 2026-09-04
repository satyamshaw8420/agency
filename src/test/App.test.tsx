import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from '../App';
import { motion, AnimatePresence } from 'motion/react';

// Mock motion/react for testing
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock child components
vi.mock('../components/Navbar', () => ({
  Navbar: ({ onOpenEstimator, onOpenContact }: any) => (
    <nav data-testid="navbar">
      <button onClick={onOpenEstimator}>Estimator</button>
      <button onClick={onOpenContact}>Contact</button>
    </nav>
  ),
}));

vi.mock('../components/Hero', () => ({
  Hero: ({ onExploreWork, onOpenEstimator, onOpenContact }: any) => (
    <section data-testid="hero">
      <h1>WE DESIGN &amp; BUILD MODERN WEB APPS</h1>
      <button id="hero-start-project-btn" onClick={onOpenContact}>Start a Project</button>
      <button id="hero-view-work-btn" onClick={onExploreWork}>View Selected Work</button>
      <button onClick={onOpenEstimator}>Project Estimator</button>
    </section>
  ),
}));

vi.mock('../components/WorkShowcase', () => ({
  WorkShowcase: ({ onSelectCaseStudy }: any) => (
    <section data-testid="work-showcase">
      <h2>Selected Client Work</h2>
      <div data-testid="project-card" onClick={() => onSelectCaseStudy({ id: 'test', title: 'Test Project' })}>
        Test Project
      </div>
    </section>
  ),
}));

vi.mock('../components/ServicesSection', () => ({
  ServicesSection: ({ onSelectService }: any) => (
    <section data-testid="services-section">
      <h2>Studio Capabilities</h2>
      <button onClick={() => onSelectService('Digital Product Design')}>Inquire Digital Product Design</button>
    </section>
  ),
}));

vi.mock('../components/AboutSection', () => ({
  AboutSection: () => <section data-testid="about-section"><h2>Studio Philosophy</h2></section>,
}));

vi.mock('../components/FoundersSection', () => ({
  FoundersSection: () => <section data-testid="founders-section"><h2>Meet the Founders</h2></section>,
}));

vi.mock('../components/FAQSection', () => ({
  FAQSection: ({ onOpenContact }: any) => (
    <section data-testid="faq-section">
      <h2>Frequently Asked Questions</h2>
      <button onClick={onOpenContact}>Ask Us Directly</button>
    </section>
  ),
}));

vi.mock('../components/ContactSection', () => ({
  ContactSection: ({ initialSubject }: any) => (
    <section data-testid="contact-section">
      <h2>Contact Us</h2>
      <p>Initial Subject: {initialSubject || 'None'}</p>
    </section>
  ),
}));

vi.mock('../components/Footer', () => ({
  Footer: () => <footer data-testid="footer">Studio Footer</footer>,
}));

vi.mock('../components/ProjectModal', () => ({
  ProjectModal: ({ caseStudy, onClose, onStartInquiry }: any) => (
    <div data-testid="project-modal" role="dialog">
      {caseStudy && <h3>{caseStudy.title}</h3>}
      <button onClick={onClose}>Close Modal</button>
      <button onClick={() => onStartInquiry('Test Inquiry')}>Start Inquiry</button>
    </div>
  ),
}));

vi.mock('../components/ProjectEstimator', () => ({
  ProjectEstimator: ({ isOpen, onClose, initialService }: any) => (
    <div data-testid="project-estimator" role="dialog">
      {isOpen && <h3>Project Estimator{initialService ? `: ${initialService}` : ''}</h3>}
      <button onClick={onClose}>Close Estimator</button>
    </div>
  ),
}));

vi.mock('../components/SkeletonLoader', () => ({
  SkeletonLoader: () => <div data-testid="skeleton-loader">Loading...</div>,
}));

vi.mock('../components/LeftSidebar', () => ({
  LeftSidebar: ({ onOpenEstimator, onOpenContact }: any) => (
    <aside data-testid="left-sidebar">
      <button onClick={onOpenEstimator}>Estimator</button>
      <button onClick={onOpenContact}>Contact</button>
    </aside>
  ),
}));

describe('App Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('should render loading skeleton initially', () => {
    render(<App />);
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('should hide skeleton and show main content after loading', () => {
    render(<App />);
    
    // Fast-forward time to trigger loading completion
    vi.advanceTimersByTime(1200);
    
    waitFor(() => {
      expect(screen.queryByTestId('skeleton-loader')).not.toBeInTheDocument();
      expect(screen.getByTestId('hero')).toBeInTheDocument();
    });
  });

  it('should render all main sections after loading', () => {
    const { container } = render(<App />);
    
    // Fast-forward time
    vi.advanceTimersByTime(1200);
    
    waitFor(() => {
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('hero')).toBeInTheDocument();
      expect(screen.getByTestId('work-showcase')).toBeInTheDocument();
      expect(screen.getByTestId('services-section')).toBeInTheDocument();
      expect(screen.getByTestId('about-section')).toBeInTheDocument();
      expect(screen.getByTestId('founders-section')).toBeInTheDocument();
      expect(screen.getByTestId('faq-section')).toBeInTheDocument();
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
      expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    });
  });

  it('should open contact section when hero CTA is clicked', () => {
    render(<App />);
    vi.advanceTimersByTime(1200);
    
    const startProjectBtn = screen.getByTestId('hero').querySelector('#hero-start-project-btn');
    if (startProjectBtn) {
      fireEvent.click(startProjectBtn);
    }
    
    waitFor(() => {
      const contactSection = screen.getByTestId('contact-section');
      expect(contactSection).toBeInTheDocument();
    });
  });

  it('should open project estimator from hero section', () => {
    render(<App />);
    vi.advanceTimersByTime(1200);
    
    const estimatorBtn = screen.getByText('Project Estimator');
    fireEvent.click(estimatorBtn);
    
    waitFor(() => {
      expect(screen.getByTestId('project-estimator')).toBeInTheDocument();
    });
  });

  it('should open project modal when case study is selected', () => {
    render(<App />);
    vi.advanceTimersByTime(1200);
    
    const projectCard = screen.getByTestId('project-card');
    fireEvent.click(projectCard);
    
    waitFor(() => {
      expect(screen.getByTestId('project-modal')).toBeInTheDocument();
    });
  });

  it('should close project modal when close button is clicked', () => {
    render(<App />);
    vi.advanceTimersByTime(1200);
    
    // Open modal first
    const projectCard = screen.getByTestId('project-card');
    fireEvent.click(projectCard);
    
    waitFor(() => {
      const closeModalBtn = screen.getByText('Close Modal');
      fireEvent.click(closeModalBtn);
      expect(screen.queryByTestId('project-modal')).not.toBeInTheDocument();
    });
  });

  it('should pass service name to estimator when inquiring from services section', () => {
    render(<App />);
    vi.advanceTimersByTime(1200);
    
    const inquireBtn = screen.getByText('Inquire Digital Product Design');
    fireEvent.click(inquireBtn);
    
    waitFor(() => {
      expect(screen.getByTestId('project-estimator')).toBeInTheDocument();
      expect(screen.getByText(/Project Estimator: Digital Product Design/)).toBeInTheDocument();
    });
  });

  it('should handle FAQ section contact button click', () => {
    render(<App />);
    vi.advanceTimersByTime(1200);
    
    const askBtn = screen.getByText('Ask Us Directly');
    fireEvent.click(askBtn);
    
    waitFor(() => {
      const contactSection = screen.getByTestId('contact-section');
      expect(contactSection).toBeInTheDocument();
    });
  });
});
