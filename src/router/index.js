import { createRouter, createWebHistory } from 'vue-router';
import WebDev from '../views/webDeveloperPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: WebDev,
    meta: { title: 'Ioan Lipan' },
  },
  {
    path: '/athlete',
    name: 'athlete',
    component: () => import('../views/athletePage.vue'),
    meta: { title: 'Athlete' },
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
