import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    weekFinish: 0,
    course: {
      peerStudy : {
        finishedPeerStudy: 0,
        assignments: []
      }
    }
  },
  mutations: {
    changeWeekStatus (state) {
      state.weekFinish += 10
    },
    finishedPeerStudyAssignment (state) {
      state.course.peerStudy.finishedPeerStudy++;
    },
    SET_PEER_STUDY_ASSIGNMENTS(state, assignments) {
      state.course.peerStudy.assignments = assignments;
    }
  },
  getters: {
    allowedToDoQuiz: state => {
      return state.course.peerStudy.assignments.length <= state.course.peerStudy.finishedPeerStudy;
    },
    allowedToDoAssignment: state => (assignmentNumber) => {
      return !(assignmentNumber <= state.course.peerStudy.finishedPeerStudy);
    }
  },
  actions: {
    fetchPeerStudyAssignments ({ commit }) {
      axios
        .get('http://localhost:3000/api/peer-study')
        .then(response => {
          commit('SET_PEER_STUDY_ASSIGNMENTS', response.data);
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
