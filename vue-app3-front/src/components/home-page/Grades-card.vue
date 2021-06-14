<template>
  <div class="card card__home-page">
    <div class="card__heading">
      Grades
    </div>
    <div class="grades-years">
      Year 1 | Year 2 | Year 3 | Year 4
    </div>
    <div class="progress-bar-section">
      <div class="progress-bar">
        <div class="progress-bar__outer"></div>
        <div class="progress-bar__inner"></div>
      </div>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary lighten-2"
            dark
            icon
            v-bind="attrs"
            v-on="on">
            <v-icon size="30px">
              mdi-spider-web
            </v-icon>
          </v-btn>
        </template>
        <v-card>
          <spider></spider>
        </v-card>
      </v-dialog>

    </div>
    <div id="gradeBox">

    </div>
    <div class = "loginBox" id="loginBox">
    </div>
  </div>
</template>

<script>
import Spider from "@/components/Spider";
export default {
  name: "Grades",
  components: {Spider},
  mounted () {
    this.getGrades()
  },
  methods: {
    // get the grades.
    getGrades: function () {
      // use fetch to get data.
      fetch('http://localhost:3000/api/exam-score', {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          // get the respond from backend.
          console.log(data)
          if (data !== null) {
            // console.log(data.length)
            var box = document.getElementById('gradeBox')
            for (let i = 0; i < data.length; i++) {
              var gradeInner = document.createElement('div')
              var grade = document.createElement('div')
              var subjectName = document.createElement('div')
              var gradeResult = document.createElement('div')

              gradeInner.className = 'grades__inner'
              grade.className = 'grade'
              subjectName.className = 'subject-name'
              gradeResult.className = 'grade-result'

              subjectName.innerHTML = data[i].exam_name.toString()
              gradeResult.innerHTML = data[i].exam_result.toString()

              grade.appendChild(subjectName)
              grade.appendChild(gradeResult)
              gradeInner.appendChild(grade)
              box.appendChild(gradeInner)
            }
          }
        })
    }
  }

}
</script>

<style scoped>

</style>
