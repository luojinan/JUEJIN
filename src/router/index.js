import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HomePage from '@/pages/home/components/Homepage'

import Find from '@/pages/find/Find'
import Info from '@/pages/info/Info'
import Mine from '@/pages/mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: './home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: './homepage'
        },
        {
          path: '/home/homepage',
          component: HomePage
        }]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
