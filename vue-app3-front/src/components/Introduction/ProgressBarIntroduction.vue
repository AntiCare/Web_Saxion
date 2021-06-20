<template>
  <v-col cols="12">
    <v-subheader class="pl-0">
    </v-subheader>
    <v-slider
      v-bind:value="slider"
      :thumb-size="50"
      thumb-label="always"
      :max="70"
      step="10"
      ticks="always"
      tick-size="5"
      track-color="grey"
      track-fill-color="primary"
    >
      <template v-slot:thumb-label="{ value }">
        {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
      </template>
    </v-slider>
  </v-col>
</template>

<script>
export default {
  name: 'ProgressBarIntroduction',
  data () {
    return {
      satisfactionEmojis: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7', 'Week8'],
      slider: 0
    }
  },
  computed: { count () { return this.$store.state.week1Finish } },
  watch: {
    '$store.state.week1Finish': {
      deep: true,
      handler: function () {
        this.slider = 10
      }
    }
  }

}
</script>

<style scoped>

>>>.v-slider--horizontal .v-slider__track-container {
  height: 10px;
}
</style>
