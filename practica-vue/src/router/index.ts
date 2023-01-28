import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/loginView.vue'),
  },
  {
    path: '/Products',
    name: '/Products',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/UserView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
