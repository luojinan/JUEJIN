import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HomePage from '@/pages/home/components/Homepage'
import HomeFrontend from '@/pages/home/components/HomeFrontend'
import HomeProduct from '@/pages/home/components/HomeProduct'
import HomeDesign from '@/pages/home/components/HomeDesign'
import HomeAfterend from '@/pages/home/components/HomeAfterend'

import Find from '@/pages/find/Find'
import Info from '@/pages/info/Info'
import Mine from '@/pages/mine/Mine'
import MineUpdate from '@/common/MineUpdate'

import Detail from '@/pages/detail/Detail'

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
        },
        {
          path: '/home/homefrontend',
          component: HomeFrontend
        },
        {
          path: '/home/homeproduct',
          component: HomeProduct
        },
        {
          path: '/home/homedesign',
          component: HomeDesign
        },
        {
          path: '/home/homeafterend',
          component: HomeAfterend
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
      component: Mine,
      name:'Mine'
    },
    {
      path: '/mine/update',
      component: MineUpdate,
      name:'MineUpdate'
    },
    {
      path: '/detail/:id',
      component: Detail,
      name:'Detail'
    }
  ]
})
