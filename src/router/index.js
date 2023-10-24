import { createRouter, createWebHistory } from 'vue-router';
// import LandingPage from '../views/landingPage.vue';
import webDeveloperPage from '../views/webDeveloperPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: webDeveloperPage,
    meta: { title: 'Ioan Lipan' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/webDeveloperPage.vue'),
    meta: { title: 'Projects' },
  },
  {
    path: '/athlete',
    name: 'athlete',
    component: () => import('../views/athletePage.vue'),
    meta: { title: 'Athlete' },
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('../views/travelPage.vue'),
    meta: { title: 'Travel' },
  },
  {
    path: '/tech-knowledge',
    name: 'tech-knowledge',
    component: () => import('../views/knownTechs.vue'),
    meta: { title: 'Tech-Knowledge' },
  },
  {
    path: '/engineer',
    name: 'engineer',
    component: () => import('../views/engineerPage.vue'),
    meta: { title: 'Engineer' },
  },
  {
    path: '/problem-solver',
    name: 'problem-solver',
    component: () => import('../views/problemSolverPage.vue'),
    meta: { title: 'Problem Solver' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/pageNotFound.vue'),
    meta: { title: 'Not Found' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
