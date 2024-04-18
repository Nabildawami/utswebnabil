import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/daftar.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/forget.vue')
    },
    {
      path: '/Reset',
      name: 'Reset',
      component: () => import('../views/Reset.vue')
    },
    {
      path: '/rumah',
      name: 'rumah',
      component: () => import('../views/rumah.vue')
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: () => import('../views/pendaftaran.vue')
    },
    {
      path: '/from',
      name: 'from',
      component: () => import('../views/from.vue')
    },
    {
      path: '/dosenpa',
      name: 'dosenpa',
      component: () => import('../views/dosenpa.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('../views/status.vue')
    },
    {
      path: '/diterima',
      name: 'diterima',
      component: () => import('../views/diterima.vue')
    },
    {
      path: '/ditolak',
      name: 'ditolak',
      component: () => import('../views/ditolak.vue')
    },
    {
      path: '/menunggu',
      name: 'menunggu',
      component: () => import('../views/menunggu.vue')
    },
  ]
})

export default router
