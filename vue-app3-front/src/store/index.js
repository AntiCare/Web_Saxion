import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: { week1Finish: false },
  mutations: {
    changeWeek1Status (state) {
      state.week1Finish = true
    }
  }
})

export default store
