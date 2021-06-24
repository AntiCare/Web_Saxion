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
      peerStudy : {
        finishedPeerStudy: 0,
        assignments: [],
        submittedAssignments: []
      },
      moduleAssignment: {
        assignments: []
      },

      video: {
        tasks: []
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
      state.course.peerStudy.finishedPeerStudy++;
    },
    SET_PEER_STUDY_ASSIGNMENTS(state, assignments) {
      state.course.peerStudy.assignments = assignments;
    },
    SET_MODULE_ASSIGNMENTS (state, assignments) {
      state.course.moduleAssignment.assignments = assignments
    },
    SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS(state, submittedAssignments) {
      state.course.peerStudy.submittedAssignments = submittedAssignments;
      console.log(`SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS ${JSON.stringify(state.course.peerStudy.submittedAssignments)}`)
    },
    UPDATE_PEER_STUDY_SUBMITTED_ASSIGNMENTS(state, {submittedAssignment, idx}) {
      console.log(`state1 ${submittedAssignment} idx ${idx}`)

      state.course.peerStudy.submittedAssignments[idx].downloaded = true;
      console.log(`stateee ${JSON.stringify(state.course.peerStudy.submittedAssignments)}`)
    },
    SET_VIDEO (state, tasks) {
      state.course.video.tasks = tasks
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
    },
    fetchPeerStudySubmittedAssignments ({ commit }, { peerStudyId }) {
      console.log(peerStudyId)

      axios
        .get('http://localhost:3000/api/peer-study-submitted-assignments', { params: { peerStudyId } })
        .then(response => {

          // console.log(response.data)
          commit('SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS', response.data);
          // console.log(`SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS ${JSON.stringify(state.course.peerStudy.submittedAssignments)}`)

        })
    },
    fetchModuleAssignments ({ commit }) {
      axios
        .get('http://localhost:3000/api/assignment')
        .then(response => {
          commit('SET_MODULE_ASSIGNMENTS', response.data)
        })
    },
    fetchVideo ({ commit }) {
      axios
        .get('http://localhost:3000/api/video')
        .then(response => {
          commit('SET_VIDEO', response.data)
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
