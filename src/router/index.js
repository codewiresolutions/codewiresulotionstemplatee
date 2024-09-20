import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../views/contact.vue'
import ItSuccess from '@/views/ItSuccess.vue'
import ItSolutions from '@/views/It-Solutions.vue'
import BestExperts from '@/views/Best-experts.vue'
import ProjectCompleted from '@/views/Project-Completed.vue'
import OurCustomers from '@/views/Our-Customers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
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
})

export default router
