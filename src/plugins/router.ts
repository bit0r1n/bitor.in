import { createWebHistory, createRouter } from 'vue-router'
import MainCardView from '@/views/MainPageView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import DonateView from '@/views/DonateView.vue'

const routes = [
  { path: '/:pathMatch(.*)', name: 'где', component: NotFoundView },
  { path: '/', component: MainCardView },
  { path: '/donate', component: DonateView }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
