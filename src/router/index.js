import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Layout/Home'
import QA from '@/views/Layout/QA'
import Video from '@/views/Layout/Video'
import User from '@/views/Layout/User'
Vue.use(VueRouter)

const routes = [
  {
    // 配置登录路由
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: 'qa',
        component: QA
      },
      {
        path: '/video',
        component: Video
      },
      {
        path: '/user',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
