/**
 * Resources / downloads. Every entry is a SAMPLE placeholder (`sample: true`)
 * and is flagged in the UI. Replace with real guides, templates and checklists
 * (and working download/read links) before launch.
 */

export const resourceTypes = ['All', 'Guides', 'Checklists', 'Templates', 'Tools']

export const resources = [
  {
    title: 'The Pre-Build Checklist',
    type: 'Checklists',
    icon: 'check-circle',
    description:
      'The questions we answer before writing code on any new web app — data model, scope, risks and success metrics.',
    format: 'PDF',
    sample: true,
  },
  {
    title: 'Choosing Your Tech Stack',
    type: 'Guides',
    icon: 'layers',
    description:
      'A plain-English guide to picking a stack that fits your product, team and budget — without chasing hype.',
    format: 'Guide',
    sample: true,
  },
  {
    title: 'Website Launch Readiness',
    type: 'Checklists',
    icon: 'zap',
    description:
      'Performance, SEO, accessibility and security checks to run before you flip a new site live.',
    format: 'PDF',
    sample: true,
  },
  {
    title: 'Project Brief Template',
    type: 'Templates',
    icon: 'pen-tool',
    description:
      'A simple template for describing your project clearly, so quotes come back faster and more accurate.',
    format: 'DOC',
    sample: true,
  },
  {
    title: 'AI Feature Feasibility Guide',
    type: 'Guides',
    icon: 'sparkles',
    description:
      'How to tell whether an AI feature is worth building — and how to scope it without burning budget.',
    format: 'Guide',
    sample: true,
  },
  {
    title: 'Core Web Vitals Cheat Sheet',
    type: 'Tools',
    icon: 'trending-up',
    description:
      'The performance metrics that matter, what “good” looks like, and the usual culprits behind slow scores.',
    format: 'PDF',
    sample: true,
  },
]
