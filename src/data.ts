import { CaseStudy, Service, Testimonial, Award, StudioMetric } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'sian-kitchen',
    title: 'Sian Kitchen',
    client: 'Sian Kitchen & Cloud Kitchen',
    tagline: 'Modern culinary web platform featuring interactive digital menus & instant ordering',
    category: 'engineering',
    categoryLabel: 'Creative Web Platform',
    year: '2025',
    liveUrl: 'https://siankitchen.vercel.app/',
    deliverables: ['Next.js / React Web App', 'Interactive Digital Menu', 'Mobile-First Quick Order Flow', 'Vercel Edge Deployment'],
    metrics: [
      { label: 'Core Web Vitals', value: '99/100' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Mobile Optimization', value: '100%' },
    ],
    overview: 'A sleek, appetizing web platform engineered for a contemporary cloud kitchen and dining brand. Designed with rich visual dish storytelling, clear dietary indicators, and direct ordering integrations to maximize customer appetite and sales conversions.',
    challenge: 'Building a lightning-fast digital menu with rich food photography that loads instantaneously on mobile networks without sacrificing visual fidelity.',
    solution: 'Engineered an ultra-lightweight responsive React architecture with adaptive image compression, frictionless dish filtering, and direct one-tap customer connect.',
    quote: {
      text: 'The website elevated our food presentation and made ordering effortless for our customers. Speed and mobile UX are top tier.',
      author: 'Kitchen Operations',
      role: 'Founding Team',
    },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    featuredColor: '#10b981',
  },
  {
    id: 'zorko-howrah',
    title: 'Zorko Howrah',
    client: 'Zorko Eatery & Fast Food',
    tagline: 'High-energy fast food brand hub with dynamic menu browsing & outlet connect',
    category: 'brand',
    categoryLabel: 'Brand & Web App',
    year: '2025',
    liveUrl: 'https://zorko-howrah.vercel.app/',
    deliverables: ['Responsive Web App', 'Combo & Specials Showcase', 'Category-Based Menu Navigator', 'One-Tap WhatsApp Connect'],
    metrics: [
      { label: 'Interaction Latency', value: '<35ms' },
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Customer Connect', value: 'Instant' },
    ],
    overview: 'A vibrant, youth-centric digital presence crafted for the popular Zorko outlet in Howrah. Features bold typographic hierarchy, appetizing combo banners, categorized menu browsing (burgers, pizzas, shakes), and direct one-tap customer connect.',
    challenge: 'Translating an energetic fast-food atmosphere into a clutter-free, responsive layout where customers find combos and place orders within seconds.',
    solution: 'Designed high-contrast visual category cards, smooth micro-interactions, and instant WhatsApp ordering links for maximum conversion.',
    quote: {
      text: 'Customers love the clean design and how quickly they can browse our full menu on their phones.',
      author: 'Zorko Howrah',
      role: 'Outlet Management',
    },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    featuredColor: '#f97316',
  },
  {
    id: 'salt-and-pepper',
    title: 'Salt & Pepper',
    client: 'Salt & Pepper Bistro Lounge',
    tagline: 'Atmospheric multi-cuisine dine-in showcase with chef specials & reservation flows',
    category: 'product',
    categoryLabel: 'Product & UI Design',
    year: '2025',
    liveUrl: 'https://saltpeppers123.vercel.app/',
    deliverables: ['Modern Web Experience', 'Chef Specials Showcase', 'Table Reservation Form', 'Atmospheric Food Gallery'],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Table Booking Inquiries', value: '+40%' },
      { label: 'Responsive Modes', value: 'All Devices' },
    ],
    overview: 'An inviting, minimalist web experience designed for an upscale bistro and cafe lounge. Focuses on tactile dining ambiance, signature chef culinary creations, table booking inquiry flows, and effortless responsive browsing across all screen sizes.',
    challenge: 'Balancing a sophisticated fine-dining brand aesthetic with practical reservation utilities and interactive food galleries.',
    solution: 'Crafted warm editorial typography, balanced negative space, and a streamlined reservation inquiry workflow built in React and Tailwind.',
    quote: {
      text: 'Delivered an elegant web experience that perfectly captures the warm ambiance and culinary craftsmanship of our restaurant.',
      author: 'Hospitality Lead',
      role: 'Salt & Pepper',
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    featuredColor: '#eab308',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'Digital Product Design',
    shortDesc: '0-to-1 product strategy, intuitive UX architecture, and responsive UI systems.',
    description: 'We partner with ambitious founders and engineering leaders to design products that users fall in love with. We distill complex business workflows into serene, high-utility digital experiences.',
    deliverables: [
      'Interactive Figma Prototypes',
      'Information Architecture & Wireframing',
      'High-Fidelity Component Libraries',
      'User Research & Usability Benchmarking',
      'Design Token Specifications'
    ],
    technologies: ['Figma', 'Framer', 'Protopie', 'Design Tokens', 'Radix Primitives']
  },
  {
    id: 'brand-systems',
    number: '02',
    title: 'Brand Systems & Identity',
    shortDesc: 'Iconic visual identities, typography direction, and comprehensive guidelines.',
    description: 'Brands are living operating systems. We create distinctive identity marks, custom type treatments, motion guidelines, and design languages that cut through modern algorithmic noise.',
    deliverables: [
      'Brand Identity & Mark Design',
      'Typography Hierarchy & Color Systems',
      '3D Visual Assets & Kinetic Motion Rules',
      'Editorial Guidelines & Voice Playbook',
      'Pitch Decks & Investor Collateral'
    ],
    technologies: ['Vector Geometry', 'Cinema4D / Blender', 'Motion Guidelines', 'Typography Spec']
  },
  {
    id: 'creative-engineering',
    number: '03',
    title: 'Creative Web Engineering',
    shortDesc: 'Pixel-perfect frontend architecture, WebGL motion, and low-latency performance.',
    description: 'We bridge design and code without compromise. Our engineering team builds resilient, production-grade applications that load instantly, animate smoothly, and scale seamlessly.',
    deliverables: [
      'React & Next.js Architecture',
      'Tailwind CSS & Modern Utility Stacks',
      'Fluid Micro-Interactions & Physics',
      'Real-Time WebSocket State Sync',
      'Lighthouse 95+ Performance Tuning'
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Node.js', 'Vite']
  },
  {
    id: 'ai-interfaces',
    number: '04',
    title: 'AI Systems & Interactions',
    shortDesc: 'Natural language workflows, generative canvas design, and agentic UI.',
    description: 'The interface is the differentiator in the AI era. We specialize in designing and engineering novel interaction paradigms for intelligent agents, streaming outputs, and generative tools.',
    deliverables: [
      'Agentic Workflow UI Patterns',
      'Streaming Prompt & Response Views',
      'Human-in-the-Loop Feedback Loops',
      'Multi-Modal Model Prototyping',
      'Telemetry & Confidence Indicators'
    ],
    technologies: ['LLM Orchestration', 'Multi-Modal UX', 'Streaming WebSockets', 'Vector UI']
  }
];

export const STUDIO_METRICS: StudioMetric[] = [
  { value: '100%', label: 'Direct Builder Access', detail: 'Work 1-on-1 directly with the designer & developer. Zero middle managers.' },
  { value: '7–14 Days', label: 'Rapid MVP Delivery', detail: 'From wireframes and Figma prototypes to live deployed applications.' },
  { value: '0% Fluff', label: 'Transparent Pricing', detail: 'Flat, honest sprint pricing with clear deliverables and no surprise fees.' },
  { value: '100%', label: 'Full Code Ownership', detail: 'Clean GitHub repositories and complete Figma design source file handoff.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Working directly with the builder cut our launch timeline in half. Fast communication, clean code, and zero corporate overhead.',
    client: 'Rohan Sharma',
    role: 'Founder',
    company: 'NovaStack SaaS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    metric: 'Shipped in 10 Days'
  },
  {
    id: '2',
    quote: 'They took our rough sketches and turned them into a slick, responsive web app. Extremely responsive on Slack and very receptive to feedback.',
    client: 'Sarah Miller',
    role: 'Product Lead',
    company: 'Loomic Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    metric: '100% On-Time Delivery'
  },
  {
    id: '3',
    quote: 'Honest pricing, modern React & Tailwind code, and genuine attention to detail. Great experience for an early-stage team.',
    client: 'David Chen',
    role: 'Creator & Solo Builder',
    company: 'PromptPulse',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    metric: '98 Lighthouse Score'
  }
];

export const STUDIO_STANDARDS = [
  {
    principle: 'Pixel-Perfect Craft',
    focus: 'UI/UX Design',
    detail: 'Tailored Figma design systems with strict typography, optical balance, and dark/light mode parity.'
  },
  {
    principle: 'Modern Tech Stack',
    focus: 'React, Next.js & Tailwind',
    detail: 'Clean, modular TypeScript code that your team can easily extend, host, and maintain.'
  },
  {
    principle: 'Sub-Second Speeds',
    focus: 'Performance & SEO',
    detail: 'Optimized asset delivery, semantic markup, fast load times, and 95+ Google Lighthouse scores.'
  },
  {
    principle: 'Direct Communication',
    focus: 'Slack, WhatsApp & Email',
    detail: 'Rapid response times with regular staging preview links and open collaboration.'
  },
  {
    principle: '30-Day Post-Launch Support',
    focus: 'Client Peace of Mind',
    detail: 'Free bug fixes and deployment guidance for 30 days following handover.'
  },
];

// Kept for backward compatibility if referenced
export const AWARDS: Award[] = [
  { year: 'Commitment', organization: 'Code Quality', project: 'Clean TypeScript & React', category: 'Production-ready architecture' },
  { year: 'Commitment', organization: 'Performance', project: 'Core Web Vitals', category: 'Lighthouse 95+ score target' },
  { year: 'Commitment', organization: 'Transparency', project: 'Weekly Demos', category: 'Direct Slack/Email communication' },
  { year: 'Commitment', organization: 'Ownership', project: 'Full IP Handover', category: '100% GitHub & Figma source files' },
  { year: 'Commitment', organization: 'Post-Launch', project: '30-Day Bug Support', category: 'Peace of mind warranty' },
];

export const CLIENT_LOGOS = [
  { name: 'SaaS & Web Apps', sector: 'Interactive Dashboards' },
  { name: 'Startup Landing Pages', sector: 'High-Converting UI' },
  { name: 'Creator & Portfolios', sector: 'Distinctive Aesthetic' },
  { name: 'E-Commerce Brands', sector: 'Modern Online Stores' },
  { name: 'AI Interface Tools', sector: 'Interactive Prompts & Chat' },
  { name: 'Design Systems', sector: 'Reusable UI Component Kits' },
];

