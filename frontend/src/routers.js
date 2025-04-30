import { createRouter, createWebHistory } from 'vue-router'
import person from "@/components/person.vue"
import skill from "@/components/skill.vue"
import dashboard from '@/components/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/skill',
      name: 'skill',
      component : skill,
    },
    {
      path: '/person',
      name: 'person',
      component : person,
    },

  ],
})

export default router
