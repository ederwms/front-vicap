import { createRouter, createWebHistory } from 'vue-router'

import {
  Public,
  Home
} from '../pages'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Public',
    redirect: '/home',
    component: Public,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
