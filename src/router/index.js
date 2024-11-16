import { createRouter, createWebHistory } from 'vue-router'
import Impressum from '@/views/Impressum.vue'
import UeberUnsView from "@/views/UeberUnsView.vue"
import landingView from "@/views/landingView.vue"
import roomsView from "@/views/roomsView.vue";
import BookRoomView from "@/views/BookRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // beschreibt die Hierarchie auf der Seite = Front.
      name: 'landingView',
      component: landingView
    },
    {
      path: '/roomsView',
      name: 'roomsView',
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
    },
    {
      path: '/BookRoomView',
      name: 'BookRoomView',
      component: BookRoomView
    },
  ]
})

export default router;

