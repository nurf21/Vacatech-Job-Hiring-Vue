import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/register/worker',
    name: 'RegisterWorker',
    component: () => import('../views/RegisterCandidate.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/register/recruiter',
    name: 'RegisterRecruiter',
    component: () => import('../views/RegisterRecruiter.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/Reset.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/setpassword',
    name: 'Set',
    component: () => import('../views/Set.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/activate',
    name: 'Activation',
    component: () => import('../views/Activation.vue'),
    meta: { requiresVisitor: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
