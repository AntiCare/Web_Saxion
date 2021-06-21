import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: { weekFinish: 0 },
  mutations: {
    changeWeekStatus (state) {
      state.weekFinish += 10
    }
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer (state) {
        return {
          weekFinish: state.weekFinish
        }
      }
    }
    )
  ]
})

export default store
