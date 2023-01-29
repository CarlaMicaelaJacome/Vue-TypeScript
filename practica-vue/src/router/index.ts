import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import haveRoleGuard from "./auth-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    beforeEnter: [haveRoleGuard],
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/loginView.vue'),
  },

  {
    path: "/About':id",
    name: 'About',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    props: (route)=>{
      const id= Number(route.params.id)
      return isNaN(id) ? {id: null} : {id}
    }
  },
  {
    path: '/User',
    name: 'User',
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "User" */ '../views/UserView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
