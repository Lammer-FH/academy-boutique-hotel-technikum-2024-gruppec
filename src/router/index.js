import { createRouter, createWebHistory } from 'vue-router'
import Impressum from '@/views/Impressum.vue'
import UeberUnsView from "@/views/UeberUnsView.vue"
import landingView from "@/views/landingView.vue"
import roomsView from "@/views/roomsView.vue";  // Import LandingView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // beschreibt die Hierarchie auf der Seite = Front.
      name: 'landingView',
      component: landingView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: roomsView
    },
    {
      path: '/ueber-uns',
      name: 'ueber-uns',
      component: UeberUnsView
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum
    }
  ]
})

export default router;

