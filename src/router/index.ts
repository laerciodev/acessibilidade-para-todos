import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/pages/Home.vue'), name: 'Home' },
  { path: '/deficiencia-visual', component: () => import('@/pages/Vision.vue'), name: 'Vision' },
  { path: '/deficiencia-auditiva', component: () => import('@/pages/Ear.vue'), name: 'Ear' },
  { path: '/feedback', component: () => import('@/pages/Feedback.vue'), name: 'Feedback' },
  { path: '/quiz', component: () => import('@/pages/Quiz.vue'), name: 'Quiz' },
  { path: '/tools', component: () => import('@/pages/Tools.vue'), name: 'Tools' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;