import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    weekFinish: 0,
    grades: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    course: {
      introArticles: [],
      submitAssignments: [],
      peerStudy: {
        finishedPeerStudy: 0,
        assignments: [],
        submittedAssignments: []
      },
      moduleAssignment: {
        assignments: []
      },
      video: {
        tasks: []
      },
      instruction: {
        instructions: []
      },
      lectures: {
        lecture: [],
        archive: []
      },
      weekPages: []
    }
  },
  mutations: {
    SET_INTRO_ARTICLES (state, introArticles) {
      state.course.introArticles = introArticles
      console.log(`SET_INTRO_ARTICLES ${JSON.stringify(state.course.introArticles)}`)
    },
    changeWeekStatus (state) {
      state.weekFinish += 10
    },
    changeGrades (state, idx) {
      state.grades[idx] += 1
    },
    updatePeerStudyAssignmentAmount (state, amount) {
      state.course.peerStudiesAmount = amount
    },
    finishedPeerStudyAssignment (state) {
      state.course.peerStudy.finishedPeerStudy++
    },
    SET_PEER_STUDY_ASSIGNMENTS (state, assignments) {
      state.course.peerStudy.assignments = assignments
    },
    SET_MODULE_ASSIGNMENTS (state, assignments) {
      state.course.moduleAssignment.assignments = assignments
    },
    SET_SUBMIT_ASSIGNMENTS (state, submitAssignments) {
      state.course.submitAssignments = submitAssignments
    },
    SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS (state, submittedAssignments) {
      state.course.peerStudy.submittedAssignments = submittedAssignments
      console.log(`SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS ${JSON.stringify(state.course.peerStudy.submittedAssignments)}`)
    },
    UPDATE_PEER_STUDY_SUBMITTED_ASSIGNMENTS (state, { submittedAssignment, idx }) {
      console.log(`state1 ${submittedAssignment} idx ${idx}`)

      state.course.peerStudy.submittedAssignments[idx].downloaded = true
      console.log(`stateee ${JSON.stringify(state.course.peerStudy.submittedAssignments)}`)
    },
    SET_VIDEO (state, tasks) {
      state.course.video.tasks = tasks
    },
    SET_INSTRUCTIONS (state, instructions) {
      state.course.instruction.instructions = instructions
    },
    SET_LECTURES_LECTURE (state, lecture) {
      state.course.lectures.lecture = lecture
    },
    SET_LECTURES_ARCHIVE (state, archive) {
      state.course.lectures.archive = archive
    },
    SET_WEEK_PAGE (state, weekPages) {
      state.course.weekPages = weekPages
    }
  },
  getters: {
    allowedToDoQuiz: state => {
      return state.course.peerStudy.assignments.length <= state.course.peerStudy.finishedPeerStudy
    },
    allowedToDoAssignment: state => (assignmentNumber) => {
      return !(assignmentNumber <= state.course.peerStudy.finishedPeerStudy)
    }
  },
  actions: {
    fetchSubmitAssignments ({ commit }, { weekId }) {
      axios
        .get('http://localhost:3000/api/submit-point', { params: { weekId } })
        .then(response => {
          commit('SET_SUBMIT_ASSIGNMENTS', response.data)
        })
    },
    fetchIntroArticles ({ commit }, { courseId }) {
      axios
        .get('http://localhost:3000/api/intro-page', { params: { courseId } })
        .then(response => {
          commit('SET_INTRO_ARTICLES', response.data)
        })
    },
    fetchPeerStudyAssignments ({ commit }) {
      axios
        .get('http://localhost:3000/api/peer-study')
        .then(response => {
          commit('SET_PEER_STUDY_ASSIGNMENTS', response.data)
        })
    },
    fetchPeerStudySubmittedAssignments ({ commit }, { peerStudyId }) {
      console.log(peerStudyId)

      axios
        .get('http://localhost:3000/api/peer-study-submitted-assignments', { params: { peerStudyId } })
        .then(response => {
          commit('SET_PEER_STUDY_SUBMITTED_ASSIGNMENTS', response.data)
        })
    },
    fetchModuleAssignments ({ commit }, { weekId }) {
      axios
        .get('http://localhost:3000/api/assignment', { params: { weekId } })
        .then(response => {
          commit('SET_MODULE_ASSIGNMENTS', response.data)
        })
    },
    fetchVideo ({ commit }, { weekId }) {
      axios
        .get('http://localhost:3000/api/video', { params: { weekId } })
        .then(response => {
          commit('SET_VIDEO', response.data)
        })
    },
    fetchInstructions ({ commit }, { weekId }) {
      axios
        .get('http://localhost:3000/api/instructions', { params: { weekId } })
        .then(response => {
          commit('SET_INSTRUCTIONS', response.data)
        })
    },
    fetchLectures_lecture ({ commit }, { courseId }) {
      axios
        .get('http://localhost:3000/api/lectures-lecture', { params: { courseId } })
        .then(response => {
          commit('SET_LECTURES_LECTURE', response.data)
        })
    },
    fetchLectures_archive ({ commit }, { courseId }) {
      axios
        .get('http://localhost:3000/api/lectures-archive', { params: { courseId } })
        .then(response => {
          commit('SET_LECTURES_ARCHIVE', response.data)
        })
    },
    fetchWeekPage ({ commit }, { weekId }) {
      axios
        .get('http://localhost:3000/api/week-page', { params: { weekId } })
        .then(response => {
          commit('SET_WEEK_PAGE', response.data)
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
