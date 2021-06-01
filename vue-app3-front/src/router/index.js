import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home1 from '@/components/Home1'
import news1 from '@/components/news/news-single1'
import news2 from '@/components/news/news-single2'
import news3 from '@/components/news/news-single3'
import newsList from '@/components/news/news-list'
import Assignment from '@/components/Assignment'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // login page
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // register page
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // home page
  {
    name: 'home',
    path: '/home',
    component: Home1
  },
  // news 1
  {
    name: 'news-single1',
    path: '/news/1',
    component: news1
  },
  // news 2
  {
    name: 'news-single2',
    path: '/news/2',
    component: news2
  },
  // news 3
  {
    name: 'news-single3',
    path: '/news/3',
    component: news3
  },
  // news list
  {
    name: 'news-list',
    path: '/news/list',
    component: newsList
  }

  ,
  // news list
  {
    name: 'assignment',
    path: '/assignment',
    component: Assignment
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
