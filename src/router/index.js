import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getService } from '../data/services'
import { getProject } from '../data/projects'
import { getCourse } from '../data/courses'
import { getPost } from '../data/posts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Software Development & Technology Academy' } },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About Us' } },

    // Services
    { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue'), meta: { title: 'Services' } },
    {
      path: '/services/:slug',
      name: 'service-detail',
      component: () => import('../views/ServiceDetailView.vue'),
      meta: { title: (r) => getService(r.params.slug)?.title || 'Service' },
    },

    // Work / case studies
    { path: '/work', name: 'work', component: () => import('../views/WorkView.vue'), meta: { title: 'Our Work' } },
    {
      path: '/work/:slug',
      name: 'work-detail',
      component: () => import('../views/WorkDetailView.vue'),
      meta: { title: (r) => { const p = getProject(r.params.slug); return p ? `${p.name} — Case Study` : 'Case Study' } },
    },

    // Academy / courses
    { path: '/academy', name: 'academy', component: () => import('../views/AcademyView.vue'), meta: { title: 'CodeWire Academy' } },
    {
      path: '/academy/:slug',
      name: 'course-detail',
      component: () => import('../views/CourseDetailView.vue'),
      meta: { title: (r) => { const c = getCourse(r.params.slug); return c ? `${c.title} Course` : 'Course' } },
    },

    // Blog
    { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue'), meta: { title: 'Blog & Insights' } },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
      meta: { title: (r) => getPost(r.params.slug)?.title || 'Article' },
    },

    // Standalone secondary pages
    { path: '/technologies', name: 'technologies', component: () => import('../views/TechnologiesView.vue'), meta: { title: 'Technologies We Use' } },
    { path: '/student-projects', name: 'student-projects', component: () => import('../views/StudentProjectsView.vue'), meta: { title: 'Student Projects' } },
    { path: '/reviews', name: 'reviews', component: () => import('../views/ReviewsView.vue'), meta: { title: 'Reviews & Testimonials' } },
    { path: '/resources', name: 'resources', component: () => import('../views/ResourcesView.vue'), meta: { title: 'Resources' } },
    { path: '/faq', name: 'faq', component: () => import('../views/FaqView.vue'), meta: { title: 'FAQ' } },
    { path: '/consultation', name: 'consultation', component: () => import('../views/ConsultationView.vue'), meta: { title: 'Book a Free Consultation' } },

    { path: '/careers', name: 'careers', component: () => import('../views/CareersView.vue'), meta: { title: 'Careers' } },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact Us' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue'), meta: { title: 'Page Not Found' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 90, behavior: 'smooth' }
    }
    if (to.path === from.path) return {}
    return { top: 0 }
  },
})

const BASE = 'CodeWire Solutions'
router.afterEach((to) => {
  const raw = to.meta?.title
  const t = typeof raw === 'function' ? raw(to) : raw
  document.title = t ? `${t} — ${BASE}` : BASE
})

export default router
