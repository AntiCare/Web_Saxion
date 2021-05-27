import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'
import home from './assets/js/components/home.vue';
import Login from "./assets/js/components/Login.vue";
import Register from "./assets/js/components/Register.vue";

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
new Vue(Vue.util.extend({ router }, App)).$mount('#app');