import { createRouter, createWebHistory } from 'vue-router';
import WebDev from '../views/webDeveloperPage.vue';
// import Athlete from '../views/athletePage.vue';
// import Engineer from '../views/engineerPage.vue';
// import ProblemSolver from '../views/problemSolverPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: WebDev,
    meta: { title: 'Ioan Lipan' },
    // this is for lazyloading
    // component: () => import('../views/webDeveloperPage.vue'),
  },
  {
    path: '/athlete',
    name: 'athlete',
    // component: Athlete,
    component: () => import('../views/athletePage.vue'),
    meta: { title: 'Athlete' },
  },
  {
    path: '/engineer',
    name: 'engineer',
    // component: Engineer,
    component: () => import('../views/engineerPage.vue'),
    meta: { title: 'Engineer' },
  },
  {
    path: '/problem-solver',
    name: 'problem-solver',
    // component: ProblemSolver,
    component: () => import('../views/problemSolverPage.vue'),
    meta: { title: 'Problem Solver' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    // component: ProblemSolver,
    component: () => import('../views/pageNotFound.vue'),
    meta: { title: 'Not Found' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
