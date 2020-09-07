import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'main'},
      component: () => import('../views/Home.vue')
    },
    {
      path: '/list',
      name: 'List',
      meta: {layout: 'main'},
      component: () => import('../views/List.vue')
    },
    {
      path: '/month/:id',
      name: 'Month',
      meta: {layout: 'main'},
      component: () => import('../views/Month.vue')
    },
    {
      path: '/analytics',
      name: 'Analytics',
      meta: {layout: 'main'},
      component: () => import('../views/Analytics.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login.vue')
    },
    {
      path: '/registration',
      name: 'Registration',
      meta: {layout: 'empty'},
      component: () => import('../views/Registration.vue')
    } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
