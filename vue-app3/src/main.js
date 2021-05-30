import Vue from 'vue'

import vuetify from '@/plugins/vuetify' // path to vuetify export

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'
import home from './assets/js/components/home.vue';
import Login from "./assets/js/components/Login.vue";
import Register from "./assets/js/components/Register.vue";
import news1 from "./assets/js/components/news/news-single1.vue";
import news2 from "./assets/js/components/news/news-single2.vue";
import news3 from "./assets/js/components/news/news-single3.vue";
import newsList from "./assets/js/components/news/news-list.vue";
// import AllProducts from './assets/js/components/all-products.vue';
// import  CreateProduct from './assets/js/components/create-product.vue';
// import  EditProduct from './assets/js/components/edit-product.vue';
// import  DeleteProduct from './assets/js/components/delete-product.vue';

const routes = [
    //login page
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    //register page
    {
        path: '/register',
        name: 'Register',
        component:Register
    },
    //home page
  {
      name: 'home',
      path: '/home',
      component: home
  },
    //news 1
    {
        name: 'news-single1',
        path: '/news/1',
        component: news1
    },
    //news 2
    {
        name: 'news-single2',
        path: '/news/2',
        component: news2
    },
    //news 3
    {
        name: 'news-single3',
        path: '/news/3',
        component: news3
    },
    //news list
    {
        name: 'news-list',
        path: '/news/list',
        component: newsList
    },

  // {
  //     name: 'all_products',
  //     path: '/',
  //     component: AllProducts
  // },
  // {
  //     name: 'create_product',
  //     path: '/products/create',
  //     component: CreateProduct
  // },
  // {
  //     name: 'edit_product',
  //     path: '/products/edit/:id',
  //     component: EditProduct
  // },
  // {
  //     name: 'delete_product',
  //     path: '/products/delete/:id',
  //     component: DeleteProduct
  // }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router, vuetify }, App)).$mount('#app');