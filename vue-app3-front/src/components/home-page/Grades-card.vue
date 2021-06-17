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
    <div id="gradeBox" >
      <section v-if="errored">
      <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again
        later</p>
    </section>
      <section v-else class="grades__inner">
        <div v-if="loading" class="pa-5">Loading...</div>
        <div
          v-else
          v-for="item in grades"
          class="find-item"
        >
      <div class="grade"  >
        <div class="subject-name " > {{ item.exam_name }}</div>
        <v-chip
        class="grade_result v-icon--right"
        small
        >{{ item.exam_result }}
        </v-chip>
      </div>
        </div>
      </section>
    </div>
    <div class = "loginBox" id="loginBox">
    </div>
  </div>
</template>

<script>
import Spider from "@/components/Spider";
import * as axios from "axios";
export default {
  name: "Grades",
  data: () => ({
    grades: [],
    loading: true,
    errored: false
  }),
  components: {Spider},
  mounted () {
    this.getGrades()
  },
  methods: {
    // get the grades.
    getGrades: function () {
      axios
        .get('http://localhost:3000/api/exam-score')
        .then(response => {
          console.log(response)
          this.grades = response.data;
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }

}
</script>

<style scoped>

</style>
