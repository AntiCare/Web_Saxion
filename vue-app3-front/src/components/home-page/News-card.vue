<template>
  <div class="card card__home-page">
    <v-col class="shrink">
      <v-btn
        height="55px"
        width="220px"
        class="primary--text"
        color="#c4c4c4"
        dark
        @click="expand2 = !expand2"
      >
        News
        <div class="text-center">
          <v-badge
            :value="hover"
            color="deep-purple accent-4"
            content="3"
            right
            transition="slide-x-reverse-transition"
          >
            <v-hover v-model="hover">
              <v-icon
                color="primary"
              >
                mdi-book-open-blank-variant
              </v-icon>
            </v-hover>
          </v-badge>
        </div>
      </v-btn>
      <v-expand-x-transition >
        <v-card
          v-show="expand2"
          height="50"
          width="220"
          class="mx-auto secondary ma-2"
        >
          <div class="text--primary text-lowercase">
            {{latestNews}}
          </div>
        </v-card>
      </v-expand-x-transition>
    </v-col>
    <div class="news" id="news">
      <section v-if="errored">
        <p class="pa-2">We're sorry, we're not able to retrieve this information at the moment, please try again
          later</p>
      </section>
      <section v-else class="card-home-content">
        <div v-if="loading" class="pa-5">Loading...</div>
        <div
          v-else
          v-for="item in news"
          class="find-item"
        >
          <div class="card__post"  >
            <div class="post-text " > {{ item.news_title }}</div>
          <a class="post__btn" :href="'news/'+item.id">Read Article</a>
          </div>
        </div>
      </section>
    </div>
    <a href="/news/list" class="card__btn">See all news</a>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: "News-card",
  data: () => ({
    hover: false,
    expand2: false,
    news: [],
    loading: true,
    errored: false,
    latestNews: ''
  }),
  mounted () {
    this.getNews()
  },
  methods: {
    getNews: function () {
      axios
        .get('http://localhost:3000/api/news')
        .then(response => {
          console.log(response)
          this.news= response.data;
          this.latestNews=this.news[0].news_title
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
