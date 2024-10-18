import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Impressum from '../components/Impressum.vue'; // Importiere die Impressum-Komponente

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/impressum', // Füge die Impressum-Route hinzu
      name: 'impressum',
      component: Impressum
    }
  ]
})

export default router;

