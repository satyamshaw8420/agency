/* ------------------------------------------------------------------ */
/*  BEYOND LIMIT — content & configuration                             */
/* ------------------------------------------------------------------ */

export const WA_NUMBER = "917980224089";
export const WA_DISPLAY = "+91 79802 24089";
export const WA_DEFAULT_MSG =
  "Hi Beyond Limit, I'd like to discuss a project for my business.";

export const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const EMAIL = "hello@beyondlimit.studio";
export const INSTAGRAM = "beyondlimit.studio";

/* ---------------- projects ---------------- */

export interface Project {
  no: string;
  name: string;
  industry: string;
  type: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    no: "01",
    name: "BONG CHOW",
    industry: "Restaurant / Digital Experience",
    type: "Website Design & Development",
    description:
      "A digital dining experience for a Bengali-Chinese kitchen — menu-first interface, WhatsApp ordering and a visual language as bold as the food itself.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    url: "https://bong-chow.vercel.app/",
    image:
      "https://image.qwenlm.ai/generated-images/a217f314-752d-4e64-9356-fa18ca592056/_result.png",
  },
  {
    no: "02",
    name: "SIAN KITCHEN",
    industry: "Restaurant / Digital Experience",
    type: "Website Design & Development",
    description:
      "A warm, editorial web presence for a modern kitchen — refined menu presentation, table reservations and a calm design system built around the food.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    url: "https://siankitchen.vercel.app/",
    image:
      "https://image.qwenlm.ai/generated-images/0e78ad3f-f957-469f-b9de-4d2040317dac/_result.png",
  },
  {
    no: "03",
    name: "SALT & PEPPERS",
    industry: "Restaurant / Digital Experience",
    type: "Website Design & Development",
    description:
      "A high-contrast, appetite-first website built to make the menu impossible to scroll past — with ordering wired directly into WhatsApp.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    url: "https://saltpeppers123.vercel.app/",
    image:
      "https://image.qwenlm.ai/generated-images/540cbf11-de30-49e7-ad67-b66dd59a854b/_result.png",
  },
];

/* ---------------- trust principles ---------------- */

export const TRUST_BLOCKS = [
  {
    no: "01",
    title: "REAL WORK",
    copy: "Selected projects that visitors can actually open and experience.",
  },
  {
    no: "02",
    title: "CLEAR SCOPE",
    copy: "Straightforward services, deliverables and starting prices.",
  },
  {
    no: "03",
    title: "DIRECT ACCESS",
    copy: "Communicate directly with the people working on your project.",
  },
  {
    no: "04",
    title: "BUILT TO LAST",
    copy: "Clean, responsive and maintainable digital experiences.",
  },
];

/* ---------------- services ---------------- */

export interface Service {
  no: string;
  title: string;
  description: string;
  includes: string[];
  ideal: string;
  starts: string;
}

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "Professional responsive websites designed around the business, audience and objective — never around a template.",
    includes: [
      "UX planning",
      "UI design",
      "Responsive development",
      "SEO foundation",
      "Deployment",
      "Basic performance optimization",
    ],
    ideal: "Businesses and professionals that need a serious online presence.",
    starts: "₹14,999+",
  },
  {
    no: "02",
    title: "UI / UX DESIGN",
    description:
      "Interfaces designed around usability, hierarchy, clarity and conversion.",
    includes: [
      "User flows",
      "Wireframes",
      "Interface design",
      "Responsive layouts",
      "Design systems",
      "Interaction states",
    ],
    ideal: "Products and teams that need design without development.",
    starts: "₹2,999+",
  },
  {
    no: "03",
    title: "E-COMMERCE DEVELOPMENT",
    description:
      "Digital stores designed to present products clearly and create a smooth purchasing experience.",
    includes: [
      "Catalogue architecture",
      "Product pages",
      "Cart & checkout flow",
      "Payment integration",
      "Order communication",
      "Responsive storefront",
    ],
    ideal: "Businesses selling products online.",
    starts: "₹17,999+",
  },
  {
    no: "04",
    title: "CUSTOM WEB APPLICATIONS",
    description:
      "Purpose-built web applications for unique business workflows and operational requirements.",
    includes: [
      "Workflow analysis",
      "Application architecture",
      "Authentication & roles",
      "Dashboards",
      "API integration",
      "Deployment & handover",
    ],
    ideal: "Businesses with processes that off-the-shelf tools can't fit.",
    starts: "₹24,999+",
  },
  {
    no: "05",
    title: "LOGO & BRANDING",
    description:
      "Visual identity systems designed to make businesses recognizable and consistent.",
    includes: [
      "Logo design",
      "Color system",
      "Typography direction",
      "Identity usage",
      "Brand assets",
    ],
    ideal: "New and evolving businesses that need a face.",
    starts: "₹1,499+",
  },
  {
    no: "06",
    title: "SOCIAL MEDIA DESIGN",
    description:
      "Professional creative systems for consistent digital brand communication.",
    includes: [
      "Post & story templates",
      "Campaign creatives",
      "Profile design",
      "Content system",
    ],
    ideal: "Brands communicating regularly on social platforms.",
    starts: "₹299/design",
  },
  {
    no: "07",
    title: "BUSINESS PROFILE & DIGITAL CATALOGUE",
    description:
      "Professional digital profiles and catalogues for businesses that need a polished way to present their services or products.",
    includes: [
      "Company profile",
      "Digital catalogue",
      "Service presentation",
      "Shareable format",
    ],
    ideal: "Businesses pitching to clients, partners or investors.",
    starts: "₹2,999+",
  },
  {
    no: "08",
    title: "WEBSITE MAINTENANCE & SUPPORT",
    description:
      "Ongoing updates, fixes, improvements and technical support after launch.",
    includes: [
      "Content updates",
      "Bug fixes",
      "Performance checks",
      "Security updates",
      "Priority support",
    ],
    ideal: "Businesses that want their website looked after.",
    starts: "₹1,999/mo+",
  },
];

/* ---------------- industries ---------------- */

export const INDUSTRIES = [
  "Restaurants & Cafés",
  "Local Businesses",
  "Startups",
  "E-Commerce Brands",
  "Professionals",
  "Personal Brands",
  "Growing Businesses",
];

/* ---------------- the standard ---------------- */

export const STANDARD_TYPICAL = [
  "Generic template",
  "Same layout for everyone",
  "Plugin dependency",
  "Visual clutter",
  "Slow experience",
  "Limited flexibility",
  "Difficult customization",
  "Built around the template",
];

export const STANDARD_BL = [
  "Purpose-driven design",
  "Custom visual direction",
  "Clean development",
  "Responsive architecture",
  "Performance-focused",
  "Scalable structure",
  "Business-specific experience",
  "Built around the brand",
];

/* ---------------- technical craft ---------------- */

export const CRAFT_PRINCIPLES = [
  {
    title: "RESPONSIVE BY DEFAULT",
    copy: "Every layout is designed for phones, tablets and desktops from the first sketch.",
    code: "<responsive />",
  },
  {
    title: "PERFORMANCE CONSCIOUS",
    copy: "Lean code, optimized assets and efficient loading — speed is treated as a feature.",
    code: "load.optimize()",
  },
  {
    title: "SEO READY",
    copy: "Semantic structure, metadata and clean markup so the work can actually be found.",
    code: "<meta structured />",
  },
  {
    title: "CLEAN COMPONENT ARCHITECTURE",
    copy: "Modular, reusable components that keep the product consistent as it grows.",
    code: "components/modular",
  },
  {
    title: "ACCESSIBLE INTERACTION",
    copy: "Keyboard navigation, visible focus states and contrast that respects every user.",
    code: "a11y: pass",
  },
  {
    title: "MAINTAINABLE CODE",
    copy: "Written for the next developer as much as the current one — readable and documented.",
    code: "git: clean",
  },
];

/* ---------------- estimator ---------------- */

export interface EstOption {
  label: string;
  value?: number;
  mult?: number;
  note?: string;
}

export const EST_TYPES: EstOption[] = [
  { label: "Portfolio Website", value: 4999 },
  { label: "Business Website", value: 14999 },
  { label: "Restaurant Website", value: 14999 },
  { label: "E-Commerce", value: 17999 },
  { label: "Custom Web Application", value: 24999 },
  { label: "UI/UX Design", value: 2999 },
  { label: "Branding", value: 1499 },
];

export const EST_COMPLEXITY: EstOption[] = [
  { label: "Essential", mult: 1 },
  { label: "Professional", mult: 1.35 },
  { label: "Advanced", mult: 1.7 },
];

export const EST_FEATURES: EstOption[] = [
  { label: "Booking", value: 2500 },
  { label: "WhatsApp Ordering", value: 2000 },
  { label: "Product Catalogue", value: 3000 },
  { label: "Authentication", value: 3500 },
  { label: "Dashboard", value: 4500 },
  { label: "Payment Integration", value: 4000 },
  { label: "CMS", value: 3500 },
  { label: "Custom API", value: 5000 },
  { label: "Admin Panel", value: 4000 },
];

export const EST_TIMELINE: EstOption[] = [
  { label: "Standard", mult: 1 },
  { label: "Priority", mult: 1.15 },
  { label: "Custom", mult: 1, note: "scope-dependent" },
];

export const EST_MAINTENANCE: EstOption[] = [
  { label: "None", value: 0 },
  { label: "Monthly Support", value: 1999 },
  { label: "Continuous Maintenance", value: 4999 },
];

/* ---------------- pricing ---------------- */

export interface PriceCard {
  no: string;
  name: string;
  price: string;
  per?: string;
  note: string;
}

export const PRICING: PriceCard[] = [
  { no: "01", name: "PORTFOLIO WEBSITE", price: "₹4,999", note: "For professionals and personal brands." },
  { no: "02", name: "BUSINESS WEBSITE", price: "₹14,999", note: "For businesses that need a professional online presence." },
  { no: "03", name: "E-COMMERCE", price: "₹17,999", note: "For businesses selling products online." },
  { no: "04", name: "CUSTOM WEB APPLICATION", price: "₹24,999", note: "For custom workflows and digital systems." },
  { no: "05", name: "UI / UX DESIGN", price: "₹2,999", note: "Interfaces, flows and design systems." },
  { no: "06", name: "LOGO & BRANDING", price: "₹1,499", note: "Identity systems that make brands recognizable." },
  { no: "07", name: "SOCIAL MEDIA DESIGN", price: "₹299", per: "/design", note: "Professional creatives, per design." },
  { no: "08", name: "BUSINESS PROFILE / DIGITAL CATALOGUE", price: "₹2,999", note: "Polished digital presentation for your business." },
  { no: "09", name: "WEBSITE MAINTENANCE", price: "₹1,999", per: "/month", note: "Ongoing updates, fixes and support." },
];

/* ---------------- process ---------------- */

export const PROCESS_STAGES = [
  {
    no: "01",
    title: "DISCOVER",
    copy: "Understand the business, goals, audience and requirements.",
  },
  {
    no: "02",
    title: "DEFINE",
    copy: "Establish the structure, features and visual direction.",
  },
  {
    no: "03",
    title: "DESIGN",
    copy: "Create the interface and overall visual experience.",
  },
  {
    no: "04",
    title: "BUILD",
    copy: "Develop, integrate and test the digital product.",
  },
  {
    no: "05",
    title: "LAUNCH",
    copy: "Deploy, review and hand over the final product.",
  },
];

/* ---------------- direct communication ---------------- */

export const COMM_POINTS = [
  {
    title: "DIRECT DISCUSSION",
    copy: "Talk about the project without unnecessary middle layers.",
  },
  {
    title: "CLEAR REQUIREMENTS",
    copy: "Understand scope before development begins.",
  },
  {
    title: "VISIBLE PROGRESS",
    copy: "Keep the project process clear.",
  },
  {
    title: "POST-LAUNCH SUPPORT",
    copy: "Continue supporting the product after launch according to the selected support plan.",
  },
];

/* ---------------- FAQ ---------------- */

export const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Projects start from ₹4,999+ depending on the type and requirements. The estimator on this page gives a quick indicative range, and final pricing is confirmed after understanding the actual scope.",
  },
  {
    q: "Do you build restaurant websites?",
    a: "Yes. Restaurant and café websites can include menus, reservations, WhatsApp ordering and other relevant functionality. You can open our live restaurant projects in the Selected Work section.",
  },
  {
    q: "Do you build e-commerce websites?",
    a: "Yes. E-commerce projects start from ₹17,999+ depending on catalogue size, payment requirements and integrations.",
  },
  {
    q: "Can you build custom web applications?",
    a: "Yes. Custom web applications start from ₹24,999+ depending on scope — workflows, authentication, dashboards and integrations all shape the final investment.",
  },
  {
    q: "Can I hire you only for UI/UX?",
    a: "Yes. Design-only engagements start from ₹2,999+ and include flows, wireframes, interface design and interaction states.",
  },
  {
    q: "Do you provide branding?",
    a: "Yes. Logo and branding projects start from ₹1,499+ and cover the visual identity system your business needs to stay consistent.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. Maintenance starts from ₹1,999/month+ and covers updates, fixes, improvements and technical support after launch.",
  },
  {
    q: "How do I start a project?",
    a: "Click Start a Project and contact Beyond Limit directly through WhatsApp. You'll speak with the people who will actually work on it.",
  },
];

/* ---------------- founders ---------------- */

export const FOUNDERS = [
  { initials: "SS", name: "SATYAM SHAW", tag: "BL / 01" },
  { initials: "SC", name: "SWAYAM CHOWDHARY", tag: "BL / 02" },
];

/* ---------------- marquee ---------------- */

export const MARQUEE_ITEMS = [
  "WEBSITE DESIGN",
  "E-COMMERCE",
  "WEB APPLICATIONS",
  "UI / UX",
  "BRANDING",
  "RESTAURANT EXPERIENCES",
  "SOCIAL DESIGN",
  "MAINTENANCE",
];
