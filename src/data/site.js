/**
 * Central site configuration — company info, navigation, contact.
 * Contact details are the REAL CodeWire Solutions details pulled from
 * the existing site. Update here to change them site-wide.
 */

export const company = {
  name: 'CodeWire Solutions',
  shortName: 'CodeWire',
  tagline: 'We build digital products that move businesses forward.',
  description:
    'CodeWire Solutions is a software development and technology company helping startups, businesses and organizations design, build, launch and scale digital products.',
  founded: 2022,
  domain: 'codewiresolutions.com',
  apiBase: 'https://api.codewiresolutions.com/api',
}

export const contact = {
  email: 'info@codewiresolutions.com',
  phone: '+92 308 7933900',
  phoneHref: '+923087933900',
  whatsapp: '923087933900',
  address: {
    line1: 'Street #1, House #66, Block Z',
    line2: 'Tehmoor Shaheed Colony, Vehari',
    city: 'Vehari',
    country: 'Pakistan',
  },
  hours: [
    { days: 'Mon – Fri', time: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
}

export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/javed-iqbal-5b7294243/' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/' },
]

/** Primary navigation */
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Academy', to: '/academy' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

/** Footer link columns */
export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Work', to: '/work' },
      { label: 'Reviews', to: '/reviews' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Mobile App Development', to: '/services/mobile-development' },
      { label: 'UI/UX Design', to: '/services/ui-ux-design' },
      { label: 'AI Integration', to: '/services/ai-integration' },
      { label: 'DevOps & Cloud', to: '/services/devops-cloud' },
      { label: 'All Services', to: '/services' },
    ],
  },
  {
    title: 'Academy',
    links: [
      { label: 'All Courses', to: '/academy' },
      { label: 'Web Development', to: '/academy/web-development' },
      { label: 'WordPress Development', to: '/academy/wordpress-development' },
      { label: 'AI with Python', to: '/academy/ai-with-python' },
      { label: 'MERN Stack', to: '/academy/mern-stack' },
      { label: 'Student Projects', to: '/student-projects' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/work' },
      { label: 'Technologies', to: '/technologies' },
      { label: 'Guides & Downloads', to: '/resources' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Book a Consultation', to: '/consultation' },
    ],
  },
]
