<template>
  <div class="card card__home-page schedule-card">
    <div class="card__heading">
      Schedule
    </div>
    <div class="schedule__inner" id="schedule__inner">
      <section v-if="errored">
        <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again later</p>
      </section>
      <section v-else class="grades__inner">
        <div v-if="loading" class="pa-2">Loading...</div>
        <div
          v-else
          v-for="item in schedule"
          class="schedule-card"
        >
          <div class="schedule-item"  >
            <div class="schedule__time " > {{ formatTimeStamp(item.schedule_time) }}</div>
            <div class="schedule__subject" > {{ item.schedule_name }}</div>

          </div>
        </div>
      </section>
    </div>
    <a href="#" class="card__btn">See entire schedule</a>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'Schedule-card',
  data: () => ({
    arrayEvents: null,
    schedule: [],
    loading: true,
    errored: false,
  }),
  mounted () {
    this.arrayEvents = [...Array(4)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
    this.getSchedule()
  },
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
    },
    getSchedule: function () {
      axios
        .get('http://localhost:3000/api/schedule')
        .then(response => {
          console.log(response)
          this.schedule = response.data
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
