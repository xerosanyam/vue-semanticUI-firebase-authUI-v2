import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Profile from '@/components/Profile'
import Profile2 from '@/components/Profile2'

import Page404 from '@/components/Page404'

Vue.use(Router)
// var vm = this
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile2',
      name: 'Profile2',
      component: Profile2
    },
    {
      path: '/page404',
      name: 'Page404',
      component: Page404
    }
  ]
})
router.beforeEach((to, from, next) => {
  // if page exists
  if (to.name) {
    sessionStorage['lastVisited'] = to.name
    next()
  } else {
    next({name: 'Page404'})
  }
})
export default router
