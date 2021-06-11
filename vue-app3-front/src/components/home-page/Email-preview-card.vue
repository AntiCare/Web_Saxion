<template>
  <div class="card card__home-page">
    <div class="card__heading">
      Email preview
    </div>
    <div class="email-card__inner">
      <section v-if="errored">
        <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again
          later</p>
      </section>
      <section v-else class="exam-card__inner">
        <div v-if="loading" class="pa-2">Loading...</div>
        <div
          v-else
          v-for="item in emails"
          class="email-item"
        >
          <div class="email__time">{{formatTimeStamp(item.email_time)}}</div>
          <div class="email__content">
            <div class="exam__sender">Sender: {{item.sender_name}}</div>
            <div class="exam__title">Title: {{item.title}}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: "Email-preview",
  data: () => ({
    emails: [],
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
    axios
      .get('http://localhost:3000/api/email-preview')
      .then(response => {
        // console.log(response)
        this.emails = response.data;
      })
      .catch(error => {
        console.error(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

  }
}
</script>

<style scoped>

</style>
