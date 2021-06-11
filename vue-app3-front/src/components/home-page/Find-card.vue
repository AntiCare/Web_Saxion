<template>
  <div class="card card__home-page find__card">
    <div class="card__heading">
      Find
    </div>
    <div class="find-card__inner">
      <form action="/" class="find-form">
        <v-text-field
          label="Teacher name"
          placeholder="Dick"
          color="rgb(255, 255, 255)"
          outlined
          filled
          light
          rounded
          dense
        ></v-text-field>
      </form>
      <section v-if="errored">
        <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again
          later</p>
      </section>
      <section v-else class="find-card__inner">
        <div v-if="loading" class="pa-2">Loading...</div>
        <div
          v-else
          v-for="item in teachers"
          class="find-item"
        >
          <div class="find-item__image">
            <img src="https://source.unsplash.com/random/200x150" alt="random photo">
          </div>
          <div class="find-item__contact-details">
            <div class="find-item__text"><strong>Name:</strong> {{ item.teacher_name }}</div>
            <div class="find-item__text"><strong>Email:</strong> {{ item.teacher_email}}</div>
            <div class="find-item__text"><strong>Abbreviation:</strong> {{ item.teacher_abbreviation }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: "Find-card",
  data: () => ({
    teachers: [],
    loading: true,
    errored: false,
  }),
  methods: {},
  mounted() {
    axios
      .get('http://localhost:3000/api/find-teacher')
      .then(response => {
        console.log(response)
        this.teachers = response.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>
