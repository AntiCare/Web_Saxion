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
import Assignment2 from '@/components/Assignment2'
import TestComponent from "@/components/TestComponent";
import Assignment3 from "@/components/Assignment3";
import Tuan1 from "@/components/Tuan1";
import Searchboxtuan from "@/components/Searchboxtuan";
import Cardtuan from "@/components/Cardtuan";
import Searchboxkeith from "@/components/Searchboxkeith";
import Cardkeith from "@/components/Cardkeith";
import searchboxsefanja from "@/components/searchboxsefanja";
import cardsefanja from "@/components/cardsefanja";
import Spider from "@/components/Spider";

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
  },
  // assignment page
  {
    name: 'assignment',
    path: '/assignment',
    component: Assignment
  },
  // assignment page
  {
    name: 'assignment2',
    path: '/assignment2',
    component: Assignment2
  },

  // assignment page
  {
    name: 'sldjflsdjf',
    path: '/testcomp',
    component: TestComponent
  },

  // assignment page
  {
    name: 'sldjflsdjfsdf',
    path: '/tuan1',
    component: Tuan1
  },
  // assignment page
  {
    name: 'sdf',
    path: '/testcomp',
    component: TestComponent
  },
  // assignment page
  {
    name: 'assignment3',
    path: '/assignment3',
    component: Assignment3
  },

  {
    name: 'searchboxtuan',
    path: '/searchboxtuan',
    component: Searchboxtuan
  },

  {
    name: 'cardtuan',
    path: '/cardtuan',
    component: Cardtuan
  },
  {
    name: 'Searchboxsefanja',
    path: '/searchboxsefanja',
    component: searchboxsefanja
  },

  {
    name: 'Cardsefanja',
    path: '/cardsefanja',
    component: cardsefanja
  }, {
    // card page - sefanja
    name: 'searchboxkeith',
    path: '/searchboxkeith',
    component: Searchboxkeith
  },
  {
    name: 'Cardkeith',
    path: '/cardkeith',
    component: Cardkeith
  },
  {
    name: 'Spider',
    path: '/spider',
    component: Spider
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
