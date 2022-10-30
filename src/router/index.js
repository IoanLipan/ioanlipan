import { createRouter, createWebHistory } from 'vue-router';
import WebDev from '../views/webDeveloperPage.vue';
import Athlete from '../views/athletePage.vue';
import Engineer from '../views/engineerPage.vue';
import ProblemSolver from '../views/problemSolverPage.vue';

const routes = [
  {
    path: '/',
    name: 'WebDev',
    component: WebDev,
    // this is for lazyloading
    // component: () => import('../views/webDeveloper.vue'),
  },
  {
    path: '/athlete',
    name: 'Athlete',
    component: Athlete,
  },
  {
    path: '/engineer',
    name: 'Engineer',
    component: Engineer,
  },
  {
    path: '/problem-solver',
    name: 'ProblemSolver',
    component: ProblemSolver,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
