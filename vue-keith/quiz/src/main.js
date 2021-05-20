import { createApp } from 'vue'
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from './App.vue'

App.use(BootstrapVue);

createApp(App).mount('#app')
