import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VideoPlayer from 'vue-video-player'
import store from './store'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')




