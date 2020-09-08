import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Home.vue')
    },
    {
      path: '/list',
      name: 'List',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/List.vue')
    },
    {
      path: '/month/:id',
      name: 'Month',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Month.vue')
    },
    {
      path: '/analytics',
      name: 'Analytics',
      meta: {layout: 'main', auth: true},
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

router.beforeEach((to, from, next) => { //защита роутов
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(m => m.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
