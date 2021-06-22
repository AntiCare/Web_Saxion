import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    weekFinish: 0,
    course: {
      peerStudiesAmount: 2,
      finishedPeerStudy: 0,
    }

  },
  mutations: {
    changeWeekStatus (state) {
      state.weekFinish += 10
    },
    updatePeerStudyAssignmentAmount (state, amount) {
      state.course.peerStudiesAmount = amount;
    },
    finishedPeerStudyAssignment (state) {
      state.course.finishedPeerStudy++;
    },
    updatePeerStudiesAmount(state, amount) {
      state.course.peerStudiesAmount = amount;
    }
  },
  getters: {
    allowedToDoQuiz: state => {
      return state.course.peerStudiesAmount <= state.course.finishedPeerStudy;
    },
    allowedToDoAssignment: state => (assignmentNumber) => {
      return !(assignmentNumber <= state.course.finishedPeerStudy);
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
