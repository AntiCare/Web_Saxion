<template>
  <!-- Lectures page-->
  <v-tab-item>
    <v-card>
      <v-tabs vertical>
        <v-tab v-for="(tab, idx) in lectureTabs " :key="idx" class="vertical-tab">
          <v-icon left>
            {{ tab.icon }}
          </v-icon>
          {{ tab.submenu }}
        </v-tab>

        <v-tab-item v-for="(tab, idx) in lectureTabs" :key="idx">
          <v-card
            class="pa-2 mb-4"
            outlined
            elevation="2"
            shaped
            color="" v-for="(lecture, idx) in LECTURES" :key="'t' + idx"
            :disabled="lecture.disabled"
          >
            <v-card-title>{{ lecture.title }}</v-card-title>
            <v-card-text>
              {{ lecture.text }}
            </v-card-text>
            <v-card-text v-if="lecture.duration" class="font-weight-bold">
              Duration: {{ lecture.duration }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                v-if="!tab.archive"
              >
                <v-icon left>
                  {{ tab.icon }}
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
      lectureTabs: [
        {
          submenu: 'Lectures',
          icon: 'mdi-play',
        },
        {
          submenu: 'Archive',
          icon: 'mdi-archive',
          archive: true,
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
    LECTURES () {
      return this.$store.state.course.lectures.lecture
    },
    ARCHIVES () {
      return this.$store.state.course.lectures.archive
    }
  }

}
</script>

<style scoped>

</style>
