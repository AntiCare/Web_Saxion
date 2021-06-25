<template>
  <!-- Lectures page-->
  <v-tab-item>
    <v-card>
      <v-tabs vertical>
        <v-tab v-for="(lecture, idx) in lectures " :key="idx" class="vertical-tab">
          <v-icon left>
            {{ lecture.icon }}
          </v-icon>
          {{ lecture.submenu }}
        </v-tab>

        <v-tab-item v-for="(lecture, idx) in lectures" :key="idx">
          <v-card
            class="pa-2 mb-4"
            outlined
            elevation="2"
            shaped
            color="" v-for="(task, idx) in lecture.tasks" :key="'t' + idx"
            :disabled="task.disabled"
          >
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-text>
              {{ task.text }}
            </v-card-text>
            <v-card-text v-if="task.duration" class="font-weight-bold">
              Duration: {{ task.duration }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                v-if="!lecture.archive"
              >
                <v-icon left>
                  {{ lecture.icon }}
                </v-icon>
                JOIN
              </v-btn>

              <v-btn
                color="primary"
                text
                v-else
              >
                <v-icon left>
                  mdi-play
                </v-icon>
                WATCH
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  name: 'Lectures',
  data () {
    return {
      // Online lectures page.
      lectures: [
        {
          submenu: 'Lectures',
          icon: 'mdi-play',
          tasks: this.$store.state.course.lectures.lecture
        },
        {
          submenu: 'Archive',
          icon: 'mdi-archive',
          archive: true,
          tasks: this.$store.state.course.lectures.archive
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('fetchLectures_lecture', {
      courseId: 1
    })
    this.$store.dispatch('fetchLectures_archive', {
      courseId: 1
    })
  },
  computed: {
    lecture () {
      return this.$store.state.course.lectures.lecture
    },
    archive () {
      return this.$store.state.course.lectures.archive
    }
  }

}
</script>

<style scoped>

</style>
