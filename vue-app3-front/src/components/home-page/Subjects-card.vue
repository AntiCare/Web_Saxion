<template>
  <div class="card card__subjects" id="subjects" >
    <div class="card__heading">
      Subjects
    </div>
    <div class="subjects-quartiles">
      Q1 | Q2 | Q3 | Q4
    </div>
    <div class="grades__inner">
    <section v-if="errored">
      <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again
        later</p>
    </section>
    <section class="grades__inner" v-else>
      <div v-if="loading" class="pa-2">Loading...</div>
      <div
        v-else
        v-for="item in subjects"
        class="find-item"
      >
          <a class="grade" href="/course"> {{ item.subject_name }}</a>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: 'subjects-card',
  data: () => ({
    subjects: [],
    loading: true,
    errored: false
  }),
  mounted () {
    this.getSubjects()
  },
  methods: {
    getSubjects: function () {
      axios
        .get('http://localhost:3000/api/subjects')
        .then(response => {
          console.log(response)
          this.subjects = response.data;
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
