import { createRouter, createWebHistory } from 'vue-router'
import allNews from '../views/allNews.vue'
import addNews from '../views/addNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all news',
      component: allNews
    },
    {
      path: '/create',
      name: 'add news',
      component: addNews
    }
  ]
})

export default router
