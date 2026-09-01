/**
 * Frequently asked questions. These are general, honest answers about how
 * CodeWire works — not fabricated stats or testimonials. Specific numbers
 * (pricing, exact timelines, cohort dates) are intentionally left open and
 * pushed to a conversation, so nothing here needs verification before launch.
 */

export const faqGroups = [
  {
    key: 'general',
    label: 'General',
    icon: 'message',
    items: [
      {
        q: 'What does CodeWire Solutions actually do?',
        a: 'We’re a software studio. We design, build, launch and maintain custom web and mobile products — and through CodeWire Academy we train people to build software too. If it involves shipping quality software, it’s in our wheelhouse.',
      },
      {
        q: 'Where are you based, and do you work remotely?',
        a: 'We’re based in Vehari, Pakistan, and we work with clients remotely. Most collaboration happens over calls, email and shared tools, with a regular check-in rhythm that keeps everyone aligned regardless of time zone.',
      },
      {
        q: 'How do we get started?',
        a: 'Book a free consultation or send us a message describing what you’re trying to achieve. We’ll reply within one business day with initial thoughts and, if it’s a fit, a suggested next step — no pressure and no obligation.',
      },
    ],
  },
  {
    key: 'services',
    label: 'Working with us',
    icon: 'briefcase',
    items: [
      {
        q: 'How much does a project cost?',
        a: 'It depends on scope, complexity and timeline — a marketing site and a multi-team platform are very different projects. After an initial conversation we’ll scope the work and give you a clear, itemized estimate before anything begins. No surprise invoices.',
      },
      {
        q: 'How long will my project take?',
        a: 'Small builds can wrap in a few weeks; larger platforms run over several months in phases. We’ll give you a realistic timeline once we understand the requirements, and we’d rather commit to a date we can hit than an optimistic one we can’t.',
      },
      {
        q: 'Do you work with existing codebases?',
        a: 'Yes. Alongside greenfield builds, we take on modernization, feature work and rescue projects. We start with an assessment so we understand the current state before proposing changes.',
      },
      {
        q: 'What happens after launch?',
        a: 'Launch is the start, not the finish. We offer ongoing maintenance, monitoring and iterative improvements, and we hand over clean documentation so your team is never locked out of your own product.',
      },
      {
        q: 'Who owns the code and IP?',
        a: 'You do. On completion and settlement, the code, designs and associated intellectual property are yours. We’ll walk you through the handover so nothing is left in a black box.',
      },
    ],
  },
  {
    key: 'academy',
    label: 'Academy',
    icon: 'graduation-cap',
    items: [
      {
        q: 'Who are the courses for?',
        a: 'They’re built for career-focused learners — beginners changing fields and junior developers levelling up. Each course lists its expected starting level so you can pick the right entry point.',
      },
      {
        q: 'Are classes online or in person?',
        a: 'Courses are offered online and onsite. The format for each cohort is listed on the course, so you can choose what fits your schedule and location.',
      },
      {
        q: 'Do I get a certificate?',
        a: 'Yes — every course ends with a CodeWire Academy certificate. More importantly, you finish with real, reviewed projects in a portfolio you can show employers or clients.',
      },
      {
        q: 'When does the next cohort start?',
        a: 'Cohort dates are confirmed ahead of each intake. Tell us which track interests you and we’ll share the upcoming dates, syllabus and enrollment details.',
      },
      {
        q: 'Do I need a computer science degree?',
        a: 'No. Our tracks are designed for motivated people without formal CS backgrounds. What matters is consistency and a willingness to build — we’ll handle the rest.',
      },
    ],
  },
]

/** Flat list — handy for a “top questions” strip or search. */
export const allFaqs = faqGroups.flatMap((g) => g.items)
