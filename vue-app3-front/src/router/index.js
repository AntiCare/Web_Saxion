import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Course from '@/components/Course'
import Spider from "@/components/Spider";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  // course page
  {
    name: 'course',
    path: '/course',
    component: Course
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
