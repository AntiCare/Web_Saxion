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
          event-color="green lighten-1"
        ></v-date-picker>
      </div>
    </v-menu>
    <div class="exam-card__inner">
      <div class="exam-item">
        <div class="exam__time">21/06/21 08:30</div>
        <div class="exam__name">IT AND LAW</div>
      </div>
      <div class="exam-item">
        <div class="exam__time">21/06/21 08:30</div>
        <div class="exam__name">Dev tools</div>
      </div>
      <div class="exam-item">
        <div class="exam__time">21/06/21 08:30</div>
        <div class="exam__name">Concurrency</div>
      </div>
      <div class="exam-item">
        <div class="exam__time">21/06/21 08:30</div>
        <div class="exam__name">web tech</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exam-card',
  data: () => ({
    hover: false,
    arrayEvents: null,
    date1: new Date().toISOString().substr(0, 10)
  }),
  mounted () {
    this.arrayEvents = [...Array(4)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  }
}
</script>

<style scoped>

</style>
