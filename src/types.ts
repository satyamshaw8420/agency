export type WorkCategory = 'all' | 'product' | 'brand' | 'engineering' | 'ai';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: 'product' | 'brand' | 'engineering' | 'ai';
  categoryLabel: string;
  year: string;
  liveUrl?: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  image: string;
  featuredColor: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
}

export interface Award {
  year: string;
  organization: string;
  project: string;
  category: string;
}

export interface StudioMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectInquiryData {
  services: string[];
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
  details: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  status: string;
}
