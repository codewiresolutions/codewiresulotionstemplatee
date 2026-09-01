/**
 * CodeWire Academy courses. Instructors are mapped to real CodeWire
 * team members by specialty. Pricing/dates are intentionally omitted —
 * add verified details before launch. Curriculum feeds Phase-2 pages.
 */

export const courses = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'code',
    tagline: 'Go from zero to job-ready front-end developer.',
    level: 'Beginner → Intermediate',
    duration: '12 weeks',
    mode: 'Online / Onsite',
    projects: 5,
    instructor: 'Mubashar Shahzad',
    instructorRole: 'Frontend Developer',
    image: '/images/blog-featured-1-1.jpg',
    skills: ['HTML & CSS', 'JavaScript (ES6+)', 'Responsive design', 'Vue basics', 'Git & GitHub', 'Deployment'],
    outcomes: [
      'Build and deploy responsive websites from scratch',
      'Write clean, modern JavaScript',
      'Work confidently with Git and the command line',
    ],
    certificate: true,
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    icon: 'wordpress',
    tagline: 'Build custom themes, plugins and client-ready sites.',
    level: 'Beginner → Intermediate',
    duration: '8 weeks',
    mode: 'Online / Onsite',
    projects: 4,
    instructor: 'Muhammad Mujahid',
    instructorRole: 'WordPress Expert',
    image: '/images/blog-featured-1-2.jpg',
    skills: ['WordPress core', 'Custom themes', 'Custom plugins', 'WooCommerce', 'ACF', 'Speed & security'],
    outcomes: [
      'Develop custom themes from a design',
      'Build simple plugins and WooCommerce stores',
      'Take on freelance WordPress work',
    ],
    certificate: true,
  },
  {
    slug: 'ai-with-python',
    title: 'AI Integration with Python',
    icon: 'sparkles',
    tagline: 'Build real AI features with Python and modern LLMs.',
    level: 'Intermediate',
    duration: '10 weeks',
    mode: 'Online / Onsite',
    projects: 4,
    instructor: 'Qasim Javed',
    instructorRole: 'Senior Backend Developer',
    image: '/images/blog-featured-1-3.jpg',
    skills: ['Python', 'APIs & FastAPI', 'LLM integration', 'RAG & embeddings', 'Prompt engineering', 'Deployment'],
    outcomes: [
      'Integrate LLMs into real applications',
      'Build a retrieval-augmented (RAG) assistant',
      'Ship an AI-powered project end to end',
    ],
    certificate: true,
  },
  {
    slug: 'mern-stack',
    title: 'MERN Stack Development',
    icon: 'layers',
    tagline: 'Master full-stack JavaScript with MongoDB, Express, React & Node.',
    level: 'Intermediate → Advanced',
    duration: '16 weeks',
    mode: 'Online / Onsite',
    projects: 6,
    instructor: 'Hafiz M. Nadeem',
    instructorRole: 'MERN Stack Developer',
    image: '/images/project-1-1.jpg',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs', 'Authentication', 'Deployment'],
    outcomes: [
      'Build complete full-stack applications',
      'Design and secure REST APIs',
      'Graduate with a portfolio of full-stack projects',
    ],
    certificate: true,
  },
]

export function getCourse(slug) {
  return courses.find((c) => c.slug === slug)
}

/**
 * Student project showcase (Phase 2 page). SAMPLE entries — replace with
 * real student work, live demos and GitHub links.
 */
export const studentProjects = [
  {
    title: 'Recipe Finder App',
    student: 'Sample Student',
    course: 'Web Development',
    image: '/images/project-1-2.jpg',
    tech: ['JavaScript', 'API', 'CSS'],
    sample: true,
  },
  {
    title: 'Task Manager (MERN)',
    student: 'Sample Student',
    course: 'MERN Stack',
    image: '/images/project-1-3.jpg',
    tech: ['React', 'Node', 'MongoDB'],
    sample: true,
  },
  {
    title: 'AI Study Assistant',
    student: 'Sample Student',
    course: 'AI with Python',
    image: '/images/project-1-4.jpg',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    sample: true,
  },
]
