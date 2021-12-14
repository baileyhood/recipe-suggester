import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'
import Account from '../views/Account'
import { Auth } from 'aws-amplify'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(() => {
      next()
    }).catch(() => {
      next({
        name: 'Login'
      })
    })
  }
  next()
})

export default router
