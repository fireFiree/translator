import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/PageLogin'
import Registration from '@/pages/PageRegistration'
import WordGroups from '@/pages/PageWordGroups'
import WordGroupItem from '@/pages/PageWordGroupItem'
import Test from '@/pages/PageTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Words',
      component: WordGroups
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/wordGroup',
      name: 'WordGroup',
      component: WordGroupItem
      // props: true
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ],
  mode: 'history'
})
