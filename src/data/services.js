/**
 * Services offered by CodeWire Solutions.
 * `icon` maps to a key in components/ui/AppIcon.vue.
 * Content is genuine capability copy (not lorem). FAQ/detail fields
 * feed the Phase-2 individual service pages.
 */

export const services = [
  {
    slug: 'web-development',
    icon: 'code',
    title: 'Web Application Development',
    short: 'Fast, scalable web apps and platforms built on modern frameworks.',
    problem:
      'Off-the-shelf tools stop scaling and slow your team down. You need software shaped around how your business actually works.',
    solution:
      'We design and engineer custom web applications — from internal platforms to customer-facing products — with clean architecture, robust APIs and performance that holds up as you grow.',
    features: [
      'Custom SaaS & internal platforms',
      'Progressive web apps (PWA)',
      'REST & GraphQL API design',
      'Real-time features & dashboards',
      'Third-party & payment integrations',
      'Performance & Core Web Vitals tuning',
    ],
    tech: ['Vue', 'React', 'Node.js', 'Laravel', 'PostgreSQL', 'TypeScript'],
  },
  {
    slug: 'mobile-development',
    icon: 'smartphone',
    title: 'Mobile App Development',
    short: 'Native-quality iOS & Android apps from a single codebase.',
    problem:
      'Your customers live on their phones, but juggling separate iOS and Android builds is slow and expensive.',
    solution:
      'We ship cross-platform apps that feel native, with offline support, push notifications and smooth 60fps interactions — released to both stores from one maintainable codebase.',
    features: [
      'Cross-platform (React Native / Flutter)',
      'Native iOS & Android when needed',
      'Offline-first & sync',
      'Push notifications',
      'App Store & Play Store release',
      'In-app analytics & crash reporting',
    ],
    tech: ['React Native', 'Flutter', 'Firebase', 'Swift', 'Kotlin'],
  },
  {
    slug: 'ui-ux-design',
    icon: 'pen-tool',
    title: 'UI/UX Design',
    short: 'Research-led product design that turns visitors into users.',
    problem:
      'A confusing interface quietly kills conversion and retention — no matter how good the engineering underneath is.',
    solution:
      'We map real user journeys, prototype fast, and design accessible, on-brand interfaces backed by a reusable design system your team can build on.',
    features: [
      'UX research & user flows',
      'Wireframing & prototyping',
      'Design systems & component libraries',
      'Accessibility (WCAG) audits',
      'Interaction & motion design',
      'Usability testing',
    ],
    tech: ['Figma', 'Framer', 'Storybook'],
  },
  {
    slug: 'wordpress-development',
    icon: 'wordpress',
    title: 'WordPress & CMS Development',
    short: 'Custom themes, plugins and headless WordPress builds.',
    problem:
      'Generic themes are bloated, slow and hard to extend — and they never quite match your brand or workflow.',
    solution:
      'We build lean custom themes and plugins, or go headless with WordPress as a backend for a modern front end — fast, secure and easy for your team to manage.',
    features: [
      'Custom theme development',
      'Custom plugin development',
      'Headless / decoupled WordPress',
      'WooCommerce stores',
      'Speed & security hardening',
      'Content migration',
    ],
    tech: ['WordPress', 'PHP', 'WooCommerce', 'ACF'],
  },
  {
    slug: 'ecommerce-development',
    icon: 'cart',
    title: 'E-commerce Development',
    short: 'High-converting online stores built to scale with your catalog.',
    problem:
      'Slow checkout, clunky catalogs and platform lock-in leave revenue on the table.',
    solution:
      'We build and optimize storefronts — custom or on Shopify/WooCommerce — with frictionless checkout, solid inventory logic and analytics that show what actually sells.',
    features: [
      'Custom & headless storefronts',
      'Shopify & WooCommerce',
      'Checkout & payment optimization',
      'Inventory & order management',
      'Subscriptions & marketplaces',
      'Conversion-rate optimization',
    ],
    tech: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js'],
  },
  {
    slug: 'ai-integration',
    icon: 'sparkles',
    title: 'AI Integration',
    short: 'Practical AI features that add real value to your product.',
    problem:
      'AI is everywhere, but bolting it on without a plan burns budget and ships gimmicks users ignore.',
    solution:
      'We integrate LLMs and ML into your product where it genuinely helps — assistants, search, automation and document intelligence — with sensible guardrails and cost control.',
    features: [
      'LLM & chatbot integration',
      'Retrieval-augmented generation (RAG)',
      'Semantic & AI search',
      'Workflow automation',
      'Document & data extraction',
      'Model evaluation & guardrails',
    ],
    tech: ['Python', 'OpenAI', 'LangChain', 'Vector DBs', 'FastAPI'],
  },
  {
    slug: 'devops-cloud',
    icon: 'server',
    title: 'DevOps & Cloud Solutions',
    short: 'Reliable infrastructure, CI/CD and cloud that scales on demand.',
    problem:
      'Manual deploys, surprise outages and runaway cloud bills make shipping risky and slow.',
    solution:
      'We automate your delivery pipeline, codify infrastructure and set up observability — so releases are boring, uptime is high and cloud spend stays predictable.',
    features: [
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Containers & Kubernetes',
      'Monitoring & observability',
      'Cloud cost optimization',
      'Zero-downtime deployments',
    ],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    slug: 'qa-testing',
    icon: 'shield-check',
    title: 'Quality Assurance & Testing',
    short: 'Automated and manual testing that ships confidence, not bugs.',
    problem:
      'Bugs caught in production cost trust and money — and slow every future release.',
    solution:
      'We build test coverage that fits your risk profile: automated end-to-end suites, API and performance testing, plus structured manual QA before every launch.',
    features: [
      'Test strategy & planning',
      'Automated E2E testing',
      'API & integration testing',
      'Performance & load testing',
      'Manual & exploratory QA',
      'Regression suites in CI',
    ],
    tech: ['Cypress', 'Playwright', 'Jest', 'k6'],
  },
  {
    slug: 'digital-transformation',
    icon: 'trending-up',
    title: 'Digital Transformation',
    short: 'Modernize legacy systems and processes for the way you work now.',
    problem:
      'Aging systems and manual processes hold teams back and make growth painful.',
    solution:
      'We assess your stack, plan a low-risk modernization roadmap, and re-platform or automate step by step — keeping the business running the whole way through.',
    features: [
      'Legacy system modernization',
      'Process automation',
      'Data migration & integration',
      'Cloud migration',
      'Technology consulting',
      'Team enablement',
    ],
    tech: ['Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
]

/** Services surfaced on the home page (order matters). */
export const homeServices = [
  'web-development',
  'mobile-development',
  'ui-ux-design',
  'devops-cloud',
  'qa-testing',
  'digital-transformation',
  'ai-integration',
  'wordpress-development',
].map((slug) => services.find((s) => s.slug === slug))

export function getService(slug) {
  return services.find((s) => s.slug === slug)
}
