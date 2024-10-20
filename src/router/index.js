import { createRouter, createWebHistory } from 'vue-router'
import Impressum from '@/components/Impressum.vue'; // Importiere die Impressum-Komponente
import landingView from "@/views/landingView.vue";  // Import LandingView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/', // beschreibt die Hierarchie auf der Seite = Front.
      name: 'landningView',
      component: landingView

    },

    {
      path: '/impressum', // Füge die Impressum-Route hinzu
      name: 'impressum',
      component: Impressum
    }

  ]
})

export default router;

