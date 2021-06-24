<template>
  <div>
  <v-card
    class="pa-2 mb-4"
    outlined
    elevation="0"
    shaped
    color="" v-for="(task, idx) in VIDEO" :key="'T' + idx"
  >
    <v-card-title>{{ task.title }}</v-card-title>
    <v-card-subtitle>{{ task.subtitle }}</v-card-subtitle>
  <div class="input_video">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions"
    ></video-player>
  </div>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data: () => ({
    playerOptions: {
      playbackRates: [0.5, 1.0, 1.5, 2.0], // video speed
      autoplay: false, // if true, it will play auto.
      muted: false, // mute voice.
      loop: false, // when video end, play again.
      preload: 'auto',
      aspectRatio: '16:9', // "16:9"or"4:3"
      fluid: true,
      sources: [{
        type: 'video/mp4',
        src: require('../assets/exampleVideo.mp4')// url
      }],
      poster: '', // Video cover
      // width: document.documentElement.clientWidth,
      notSupportedMessage: 'This video is temporarily unavailable, please try again later', // error info
      controlBar: {
        timeDivider: true,
        durationDisplay: true, // Show duration
        remainingTimeDisplay: false, // Show remaining time
        fullscreenToggle: true // Full screen button
      }
    }
  }),
  mounted () {
    this.$store.dispatch('fetchVideo')
  },
  computed: {
    VIDEO () {
      return this.$store.state.course.video.tasks
    }
  }
}
</script>

<style scoped>
.input_video{
  width: 400px;
  height: 250px;
}
</style>
