import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'
import WordGroups from '@/pages/WordGroups'
import WordGroupItem from '@/pages/WordGroupItem'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    },
    {
      path: '/words',
      name: 'Words',
      component: WordGroups
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ],
  mode: 'history'
})
