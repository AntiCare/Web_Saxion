import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: { weekFinish: 0 },
  mutations: {
    changeWeekStatus (state) {
      state.weekFinish += 10
    }
  }
})

export default store
