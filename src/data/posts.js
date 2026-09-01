/**
 * Blog posts. SAMPLE editorial content for design and layout purposes
 * (`sample: true`), flagged in the UI. Replace with real articles.
 *
 * `body` is an ordered list of content blocks used by the single-post
 * page. Supported block types:
 *   { type: 'p',     text }        → paragraph
 *   { type: 'h2',    text }        → section heading
 *   { type: 'ul',    items: [] }   → bullet list
 *   { type: 'quote', text }        → pull quote
 */

export const blogCategories = [
  'All',
  'Web Development',
  'WordPress',
  'AI & Automation',
  'Python',
  'MERN Stack',
  'UI/UX',
  'Career',
  'Technology',
  'Company News',
]

export const posts = [
  {
    slug: 'building-scalable-web-apps',
    title: 'How We Build Web Apps That Scale From Day One',
    category: 'Web Development',
    excerpt:
      'Architecture decisions you make early quietly define how far your product can grow. Here is the checklist we run before writing code.',
    image: '/images/blog-featured-1-1.jpg',
    author: 'Javed Iqbal',
    authorRole: 'Founder / Software Architect',
    date: '2026-07-28',
    readTime: 7,
    featured: true,
    // sample: true,
    body: [
      { type: 'p', text: 'Most scaling problems aren’t caused by traffic — they’re caused by decisions made in the first two weeks, long before anyone worried about load. A rushed data model or a tangle of business logic in the UI will slow a team down far sooner than a spike in users ever will.' },
      { type: 'p', text: 'Here is the short checklist we run through before writing a single line of production code on a new web application.' },
      { type: 'h2', text: 'Start with the data model, not the screens' },
      { type: 'p', text: 'It’s tempting to open a design tool and start on the dashboard. We start with the entities instead: what are the core objects, how do they relate, and which relationships will change most often? A clear, normalized model early on saves painful migrations later.' },
      { type: 'h2', text: 'Choose boring, proven technology' },
      { type: 'p', text: 'The newest framework is rarely the right bet for something you’ll maintain for years. We default to mature, well-documented tools with large communities, and only reach for something newer when it solves a problem the boring option genuinely can’t.' },
      { type: 'h2', text: 'Design for observability from the first commit' },
      { type: 'p', text: 'You can’t fix what you can’t see. Structured logging, request tracing and basic metrics cost very little to add at the start and are enormously expensive to retrofit once the app is live and misbehaving.' },
      { type: 'ul', items: [
        'A single, well-defined source of truth for each entity',
        'Clear boundaries between UI, business logic and data access',
        'Automated tests around the riskiest logic, not everything',
        'A deployment pipeline that anyone on the team can trigger',
      ] },
      { type: 'quote', text: 'Scalability is mostly a byproduct of clarity. Systems that are easy to understand tend to be easy to grow.' },
      { type: 'p', text: 'None of this is glamorous, and that’s the point. The teams whose products scale smoothly are usually the ones who were slightly boring and disciplined at the very beginning.' },
    ],
  },
  {
    slug: 'practical-ai-integration',
    title: 'Practical AI Integration: Beyond the Hype',
    category: 'AI & Automation',
    excerpt:
      'Most AI features fail because they solve no real problem. A framework for shipping AI that users actually keep using.',
    image: '/images/blog-featured-1-2.jpg',
    author: 'Qasim Javed',
    authorRole: 'Senior Backend Developer',
    date: '2026-07-15',
    readTime: 9,
    featured: false,
    // sample: true,
    body: [
      { type: 'p', text: 'Adding “AI” to a product is easy. Adding AI that people actually keep using is not. The difference is almost never the model — it’s whether the feature is aimed at a real, repeated pain point.' },
      { type: 'h2', text: 'Start from the job, not the technology' },
      { type: 'p', text: 'Before we integrate anything, we ask: what task is the user doing today that is slow, repetitive or error-prone? If we can’t name that task in one sentence, the feature isn’t ready to build yet.' },
      { type: 'h2', text: 'Ground the model in your own data' },
      { type: 'p', text: 'General models are impressive but generic. The value shows up when you connect them to your own documents, tickets or catalog through retrieval-augmented generation, so answers are specific and verifiable instead of plausible-sounding guesses.' },
      { type: 'h2', text: 'Design the failure cases' },
      { type: 'p', text: 'AI features fail differently from normal code — they’re confidently wrong. We plan for that: clear “I’m not sure” states, easy human handoff, and guardrails that keep the model inside the task it was given.' },
      { type: 'ul', items: [
        'A concrete, repeated task the feature accelerates',
        'Retrieval grounded in the client’s real content',
        'Visible confidence and graceful fallbacks',
        'Cost and latency budgets set before launch',
      ] },
      { type: 'quote', text: 'The best AI features feel less like magic and more like a very fast, slightly cautious assistant.' },
      { type: 'p', text: 'Ship the smallest version that solves one real task well, measure whether people come back to it, and expand from there. That single loop separates useful AI from expensive novelty.' },
    ],
  },
  {
    slug: 'mern-stack-2026',
    title: 'The MERN Stack in 2026: Still Worth Learning?',
    category: 'MERN Stack',
    excerpt:
      'The JavaScript ecosystem moves fast. We break down where the MERN stack still shines and how to learn it the smart way.',
    image: '/images/blog-featured-1-3.jpg',
    author: 'Hafiz M. Nadeem',
    authorRole: 'MERN Stack Developer',
    date: '2026-06-30',
    readTime: 6,
    featured: false,
    // sample: true,
    body: [
      { type: 'p', text: 'Every year someone declares the MERN stack dead, and every year thousands of products keep shipping on it. So where does MongoDB, Express, React and Node.js actually stand in 2026?' },
      { type: 'h2', text: 'Why it still holds up' },
      { type: 'p', text: 'One language across the whole stack lowers the barrier to full-stack work dramatically. For startups and small teams, being able to move between the API and the UI without switching mental models is a real, measurable advantage.' },
      { type: 'h2', text: 'Where it isn’t the right tool' },
      { type: 'p', text: 'Heavily relational data, strict transactional guarantees, or teams that already live in another ecosystem are all good reasons to look elsewhere. MERN is a strong default, not a universal answer.' },
      { type: 'h2', text: 'How to learn it without drowning' },
      { type: 'p', text: 'Don’t try to learn all four pieces at once. Get comfortable with JavaScript and React first, then add Node and Express, and only then introduce MongoDB. Build one real project end to end rather than following ten disconnected tutorials.' },
      { type: 'ul', items: [
        'Solid JavaScript fundamentals before any framework',
        'One full project from database to deployed UI',
        'Authentication and deployment — the parts tutorials skip',
        'Reading other people’s code, not just writing your own',
      ] },
      { type: 'quote', text: 'The stack you finish a real project with beats the “perfect” stack you never ship.' },
      { type: 'p', text: 'For most people entering web development, MERN remains one of the fastest routes from zero to a working, deployable full-stack app — and that’s exactly why we still teach it.' },
    ],
  },
  {
    slug: 'wordpress-speed-guide',
    title: 'Making WordPress Genuinely Fast',
    category: 'WordPress',
    excerpt:
      'A slow WordPress site is a choice, not a fate. The exact steps we take to hit 90+ PageSpeed on client builds.',
    image: '/images/project-1-2.jpg',
    author: 'Muhammad Mujahid',
    authorRole: 'WordPress Expert',
    date: '2026-06-12',
    readTime: 8,
    featured: false,
    // sample: true,
    body: [
      { type: 'p', text: 'WordPress has a reputation for being slow. In our experience it isn’t WordPress that’s slow — it’s bloated themes, a pile of overlapping plugins, and unoptimized images. Fix those three and most sites transform.' },
      { type: 'h2', text: 'Start with the theme' },
      { type: 'p', text: 'A lean, purpose-built theme loads a fraction of the CSS and JavaScript that a do-everything multipurpose theme ships. For client work we almost always build a custom theme rather than fight a bloated one.' },
      { type: 'h2', text: 'Audit every plugin' },
      { type: 'p', text: 'Each plugin is code you didn’t write running on every request. We remove anything that duplicates functionality, and we’re ruthless about plugins that load scripts on pages where they’re never used.' },
      { type: 'h2', text: 'Images, caching, and the network' },
      { type: 'p', text: 'Modern image formats, correct sizing, a good caching layer and a CDN do the heavy lifting. Together they’re usually the difference between a two-second load and an instant one.' },
      { type: 'ul', items: [
        'A custom or genuinely lightweight theme',
        'Only the plugins that earn their place',
        'Next-gen images, sized and lazy-loaded',
        'Page caching plus a CDN in front',
      ] },
      { type: 'quote', text: 'Speed isn’t a plugin you install at the end. It’s a series of small decisions you make throughout the build.' },
      { type: 'p', text: 'Hitting a 90+ performance score on WordPress is very achievable — it just requires treating performance as part of the build, not an afterthought.' },
    ],
  },
  {
    slug: 'design-systems-that-last',
    title: 'Design Systems That Actually Get Used',
    category: 'UI/UX',
    excerpt:
      'A design system is only valuable if the team reaches for it. How we build systems developers and designers love.',
    image: '/images/project-1-3.jpg',
    author: 'Mubashar Shahzad',
    authorRole: 'Frontend Developer',
    date: '2026-05-29',
    readTime: 5,
    featured: false,
    // sample: true,
    body: [
      { type: 'p', text: 'Plenty of teams have a design system that nobody uses. It looks beautiful in the design tool and gets quietly ignored the moment there’s a deadline. A system only pays off when reaching for it is the path of least resistance.' },
      { type: 'h2', text: 'Build it from real screens' },
      { type: 'p', text: 'We don’t design components in the abstract. We build a few real pages first, notice what repeats, and extract those patterns into the system. Components born from actual needs get used; speculative ones gather dust.' },
      { type: 'h2', text: 'Keep design and code in sync' },
      { type: 'p', text: 'If the design library and the coded components drift apart, trust evaporates. We treat the coded components as the source of truth and make sure the design side reflects what’s actually shippable.' },
      { type: 'h2', text: 'Document the “why”, briefly' },
      { type: 'p', text: 'Good documentation isn’t a novel. A short note on when to use a component — and when not to — prevents most misuse and saves endless back-and-forth in reviews.' },
      { type: 'ul', items: [
        'Components extracted from real, shipped screens',
        'One source of truth shared by design and code',
        'Short, practical usage guidance',
        'A low-friction way to propose changes',
      ] },
      { type: 'quote', text: 'The best design system is the one your team forgets is optional.' },
      { type: 'p', text: 'Get those fundamentals right and the system stops being a rulebook people resent — it becomes the fastest way to build.' },
    ],
  },
  {
    slug: 'breaking-into-tech',
    title: 'Breaking Into Tech: A Realistic Roadmap',
    category: 'Career',
    excerpt:
      'No fluff. The path our Academy graduates actually follow to land their first developer role.',
    image: '/images/project-1-4.jpg',
    author: 'Shahbaz Ahmed',
    authorRole: 'Business Analyst',
    date: '2026-05-10',
    readTime: 7,
    featured: false,
    // sample: true,
    body: [
      { type: 'p', text: 'There’s no shortage of “learn to code in 30 days” promises online. The reality is slower and far more encouraging: with a steady routine and real projects, a career change into tech is genuinely achievable — it just doesn’t happen in a month.' },
      { type: 'h2', text: 'Pick one path and commit' },
      { type: 'p', text: 'The fastest way to stall is to jump between languages and stacks. Choose one track — front-end, full-stack, whatever fits your goals — and stay with it long enough to get past the confusing early stage.' },
      { type: 'h2', text: 'Build things you can show' },
      { type: 'p', text: 'Certificates help; a portfolio of real projects helps more. Employers want to see that you can take something from an idea to a working, deployed result. Two or three solid projects beat a dozen half-finished tutorials.' },
      { type: 'h2', text: 'Learn in public and ask for feedback' },
      { type: 'p', text: 'Share your work, get it reviewed, and act on the feedback. Every graduate we’ve seen succeed did this consistently — code review is where beginners turn into professionals.' },
      { type: 'ul', items: [
        'One clear learning path, followed to competence',
        'A small portfolio of finished, deployed projects',
        'Regular code review and honest feedback',
        'Consistency over intensity — steady beats sporadic',
      ] },
      { type: 'quote', text: 'You don’t need to be brilliant. You need to be consistent and coachable.' },
      { type: 'p', text: 'It’s a real climb, but a well-worn one. Thousands of people with no technical background have made this exact transition — the roadmap is not a secret, it just takes follow-through.' },
    ],
  },
]

export const featuredPost = posts.find((p) => p.featured) || posts[0]
export const recentPosts = posts.slice(0, 3)

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

/** Up to `n` other posts, preferring the same category. */
export function relatedPosts(slug, n = 3) {
  const current = getPost(slug)
  if (!current) return posts.slice(0, n)
  const sameCat = posts.filter((p) => p.slug !== slug && p.category === current.category)
  const others = posts.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...sameCat, ...others].slice(0, n)
}

export function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
