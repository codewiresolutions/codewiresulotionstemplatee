/**
 * Portfolio / case studies. All entries are SAMPLE case studies for
 * design purposes (`sample: true`) and are flagged in the UI. Replace
 * with real CodeWire projects (names, screenshots, metrics) before launch.
 */

export const projectCategories = [
  'All',
  'Web Applications',
  'Mobile Apps',
  'E-commerce',
  'WordPress',
  'UI/UX',
  'AI & Automation',
]

export const projects = [
  {
    slug: 'meditrack-platform',
    name: 'MediTrack',
    category: 'Web Applications',
    industry: 'Healthcare',
    image: '/images/project-1-1.jpg',
    tech: ['Vue', 'Node.js', 'PostgreSQL', 'AWS'],
    summary:
      'A patient-management platform that replaced spreadsheets and cut appointment admin time dramatically.',
    challenge:
      'A growing clinic network was drowning in disconnected spreadsheets, leading to double-bookings and lost records.',
    solution:
      'We built a unified web platform with role-based access, real-time scheduling and automated reminders, backed by a scalable API.',
    results: ['60% less admin time', 'Zero double-bookings', '4.9/5 staff satisfaction'],
    featured: true,
    // sample: true,
  },
  {
    slug: 'shopwave-storefront',
    name: 'ShopWave',
    category: 'E-commerce',
    industry: 'Retail',
    image: '/images/project-1-2.jpg',
    tech: ['Next.js', 'Shopify', 'Stripe'],
    summary:
      'A headless storefront rebuild that made the catalog faster and lifted checkout conversion.',
    challenge:
      'A fashion retailer’s legacy store was slow on mobile and losing customers at checkout.',
    solution:
      'We delivered a headless Shopify storefront with an optimized, one-page checkout and blazing-fast product pages.',
    results: ['+34% checkout conversion', '1.2s average load', '2x mobile revenue'],
    featured: true,
    // sample: true,
  },
  {
    slug: 'fleetpulse-app',
    name: 'FleetPulse',
    category: 'Mobile Apps',
    industry: 'Logistics',
    image: '/images/project-1-3.jpg',
    tech: ['React Native', 'Firebase', 'Node.js'],
    summary:
      'A driver companion app with live tracking, offline support and route optimization.',
    challenge:
      'A logistics operator had no real-time visibility of its fleet and relied on phone calls for updates.',
    solution:
      'We shipped a cross-platform app with GPS tracking, offline-first data sync and push updates for dispatchers.',
    results: ['Real-time fleet visibility', '4.8 app store rating', '50% fewer status calls'],
    featured: true,
    // sample: true,
  },
  {
    slug: 'insightdesk-ai',
    name: 'InsightDesk AI',
    category: 'AI & Automation',
    industry: 'SaaS',
    image: '/images/project-1-4.jpg',
    tech: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
    summary:
      'An AI support assistant that deflects repetitive tickets using the client’s own knowledge base.',
    challenge:
      'A SaaS company’s support team was overwhelmed by repetitive questions with long response times.',
    solution:
      'We built a RAG-powered assistant grounded in their docs, with human handoff and answer-quality guardrails.',
    results: ['45% tickets deflected', '2 min → instant answers', 'Higher CSAT'],
    featured: false,
    // sample: true,
  },
  {
    slug: 'brightlearn-cms',
    name: 'BrightLearn',
    category: 'WordPress',
    industry: 'Education',
    image: '/images/blog-featured-1-1.jpg',
    tech: ['WordPress', 'PHP', 'ACF'],
    summary:
      'A fast, custom WordPress build for an education provider with a fully editable course catalog.',
    challenge:
      'An education brand was stuck on a bloated theme they could not edit without a developer.',
    solution:
      'We built a lean custom theme with flexible content blocks, so their team publishes courses on their own.',
    results: ['90+ PageSpeed score', 'Self-service publishing', 'Simplified content ops'],
    featured: false,
    // sample: true,
  },
  {
    slug: 'nova-banking-ux',
    name: 'Nova Banking',
    category: 'UI/UX',
    industry: 'FinTech',
    image: '/images/blog-featured-1-2.jpg',
    tech: ['Figma', 'Design System'],
    summary:
      'A complete UX overhaul and design system for a digital banking dashboard.',
    challenge:
      'A fintech product had grown feature-by-feature into a confusing, inconsistent interface.',
    solution:
      'We ran research, restructured key flows, and delivered a reusable design system the team now builds on.',
    results: ['Unified design system', '+22% task success', 'Faster feature delivery'],
    featured: false,
    // sample: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
