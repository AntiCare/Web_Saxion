import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    weekFinish: 0,
    course: {
      peerStudiesAmount: 2,
      finishedPeerStudy: 0,

      moduleAssignment: {
        assignments: []
      }
    }

  },
  mutations: {
    changeWeekStatus (state) {
      state.weekFinish += 10
    },
    updatePeerStudyAssignmentAmount (state, amount) {
      state.course.peerStudiesAmount = amount
    },
    finishedPeerStudyAssignment (state) {
      state.course.finishedPeerStudy++
    },
    updatePeerStudiesAmount (state, amount) {
      state.course.peerStudiesAmount = amount
    },
    SET_MODULE_ASSIGNMENTS (state, assignments) {
      state.course.moduleAssignment.assignments = assignments
    }
  },
  getters: {
    allowedToDoQuiz: state => {
      return state.course.peerStudiesAmount <= state.course.finishedPeerStudy
    },
    allowedToDoAssignment: state => (assignmentNumber) => {
      return !(assignmentNumber <= state.course.finishedPeerStudy)
    }
  },
  actions: {
    fetchModuleAssignments ({ commit }) {
      axios
        .get('http://localhost:3000/api/assignment')
        .then(response => {
          commit('SET_MODULE_ASSIGNMENTS', response.data)
        })
    }

  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer (state) {
        return {
          weekFinish: state.weekFinish,
          course: state.course
        }
      }
    }
    )
  ]
})

export default store
