import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginToken from '../views/LoginToken.vue';
import Admin from '../views/Admin.vue';
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "browse" */ '../views/Dashboard.vue'),
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
  {
    path: '/login/token/:token',
    name: 'login-token',
    component: LoginToken,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: () => import('../views/Account.vue'),
  // },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
  },
  // {
  //   path: '/accountList',
  //   name: 'Account List',
  //   component: () => import('../views/AccountList.vue'),
  // },
  // {
  //   path: '/favourite',
  //   name: 'Favourite',
  //   component: () => import('../views/FavouriteList.vue'),
  // },
  // {
  //   path: '/social',
  //   name: 'Social',
  //   component: () => import('../views/Social.vue'),
  // },
  {
    path: '/show/:id',
    component: () => import('../views/Show.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/account/:id',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/accountList/:id',
    name: 'Account List',
    component: () => import('../views/AccountList.vue'),
  },
  {
    path: '/favourite/:id',
    name: 'Favourite',
    component: () => import('../views/FavouriteList.vue'),
  },
  {
    path: '/social/:id',
    name: 'Social',
    component: () => import('../views/Social.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
