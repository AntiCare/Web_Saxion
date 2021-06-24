<template>
  <v-tab-item>
    <v-card>
      <v-tabs vertical>
        <v-tab v-for="(introduction, idx) in introductionPage " :key="idx">
          <v-icon left>
            {{ introduction.icon }}
          </v-icon>
          {{ introduction.submenu }}
        </v-tab>

        <v-tab-item v-for="(introduction, idx) in introductionPage " :key="idx">
          <v-card
            class="pa-2 mb-4"
            outlined
            elevation="2"
            shaped
            color="" v-for="(article, idx) in ARTICLES" :key="'Task' + idx"
          >
            <v-card-title>{{ article.title }}</v-card-title>
              <ProgressBarIntroduction v-if="article.title==='Learning progress'"></ProgressBarIntroduction>
            <v-card-text>
              <v-img
                v-if="article.image"
                :src="require(`@/assets/${article.image}`)"
              >
              </v-img>
              {{ article.text }}
            </v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs>

    </v-card>
  </v-tab-item>
</template>

<script>
import ProgressBarIntroduction from "./Introduction/ProgressBarIntroduction";
export default {
  components: {ProgressBarIntroduction},
  data() {
    return {
      name: 'Introduction',
      introductionPage: [
        {
          submenu: 'Introduction',
          icon: 'mdi-help-circle'
        }
      ]
    }
  },
  computed: {
    ARTICLES() {
      return this.$store.state.course.introArticles;
    }
  },
  mounted() {
    this.$store.dispatch('fetchIntroArticles', {
      courseId: 23
    });
  },
}
</script>
<style scoped>

</style>
