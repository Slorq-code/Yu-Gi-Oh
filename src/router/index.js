import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SingInModule/HomeView.vue'
import About from '../views/SingInModule/AboutView.vue'
import grid from '../views/GridModule/Grid.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/grid',
    name: 'grid',
    component: grid
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
