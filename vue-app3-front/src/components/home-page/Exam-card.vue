<template>
  <div class="card card__home-page">
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="primary--text"
          color="#c4c4c4"
          height="55px"
          width="260px"
          v-bind="attrs"
          v-on="on"
        >
          Exam schedule
          <div class="text-center">
            <v-badge
              :value="hover"
              color="deep-purple accent-4"
              content="4"
              right
              transition="slide-x-reverse-transition"
            >
              <v-hover v-model="hover">
                <v-icon
                  color="primary"
                >
                  mdi-bookmark
                </v-icon>
              </v-hover>
            </v-badge>
          </div>
        </v-btn>
      </template>
      <div>
        <v-date-picker
          v-model="date1"
          :events="arrayEvents"
          color="primary"
          header-color="primary"
          event-color="red"
          readonly
        ></v-date-picker>
      </div>
    </v-menu>
    <div class="exam-card__inner">
      <section v-if="errored">
        <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again later</p>
      </section>
      <section v-else class="exam-card__inner">
        <div v-if="loading" class="pa-2">Loading...</div>
        <div
          v-else
          v-for="item in examItems"
          class="exam-item"
        >
          <div class="exam__time">{{ formatTimeStamp(item.exam_time) }}</div>
          <div class="exam__name">{{ item.exam_name }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: 'Exam-card',
  data: () => ({
    hover: false,
    arrayEvents: null,
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    examItems: [],
    loading: true,
    errored: false,

  }),
  methods: {
    formatTimeStamp: function (timestamp) {
      const date = new Date(timestamp * 1000);
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let min = date.getMinutes();
      month = (month < 10 ? "0" : "") + month;
      day = (day < 10 ? "0" : "") + day;
      hour = (hour < 10 ? "0" : "") + hour;
      min = (min < 10 ? "0" : "") + min;

      return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min;
    }

  },
  mounted() {
    this.arrayEvents = [...Array(4)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })

    axios
      .get('http://localhost:3000/api/exam-schedule')
      .then(response => {
        console.log(response)
        this.examItems = response.data;
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
.exam-card__inner {
  color: white;
}
</style>
