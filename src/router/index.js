import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Impressum from '../components/Impressum.vue'
import UeberUnsView from "../views/UeberUnsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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

