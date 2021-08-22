import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/browse',
    name: 'Browse',
    // route level code-splitting
    // this generates a separate chunk (browse.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue'),
  },
  {
    path: '/stats',
    name: 'Stats',
    // route level code-splitting
    // this generates a separate chunk (browse.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/Stats.vue'),
  },
  {
    path: '/forum',
    name: 'Forum',
    // route level code-splitting
    // this generates a separate chunk (browse.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "browse" */ '../views/Forum.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
