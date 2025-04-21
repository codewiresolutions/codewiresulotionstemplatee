import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../views/contact.vue'
import ItSuccess from '@/views/ItSuccess.vue'
import ItSolutions from '@/views/It-Solutions.vue'
import BestExperts from '@/views/Best-experts.vue'
import ProjectCompleted from '@/views/Project-Completed.vue'
import OurCustomers from '@/views/Our-Customers.vue'
import AllProjects from '@/views/AllProjects.vue'
import PageView1 from '@/views/PageView1.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/PageView1',
    name: 'PageView1',
    component: PageView1
  },
  {
    path: '/all-projects',
    name: 'AllProjects',
    component: AllProjects
  },
  {
    path: '/OurCustomers',
    name: 'OurCustomers',
    component: OurCustomers
  },
  {
    path: '/ProjectCompleted',
    name: 'ProjectCompleted',
    component: ProjectCompleted
  },
  {
    path: '/BestExperts',
    name: 'BestExperts',
    component: BestExperts
  },
  {
    path: '/ItSolutions',
    name: 'ItSolutions',
    component: ItSolutions
  },
  {
    path: '/ItSuccess',
    name: 'ItSuccess',
    component: ItSuccess
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
