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
            Latest News: Saxion Campsite almost open,Introduction Days.
          </div>
        </v-card>
      </v-expand-x-transition>
    </v-col>
    <div class="news" id="news">

    </div>
    <a href="/news/list" class="card__btn">See all news</a>
  </div>
</template>

<script>
export default {
  name: "News-card",
  data: () => ({
    hover: false,
    expand2: false
  }),
  mounted () {
    this.getNews()
  },
  methods: {
    getNews: function () {
      fetch('http://localhost:3000/api/news', {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          // get the respond from backend.
          console.log(data)
          if (data !== null) {
            // console.log(data.length)
            var newsBox = document.getElementById('news')
            for (let i = 0; i < data.length; i++) {
              var content = document.createElement('div')
              var card = document.createElement('div')
              var title = document.createElement('div')
              var button = document.createElement('a')

              content.className = 'card-home-content'
              card.className = 'card__post'
              title.className = 'post-text'
              button.className = 'post__btn'
              button.href = '/news/' + (i + 1)
              button.innerHTML = 'Read article'
              title.innerHTML = data[i].news_title.toString()
              card.appendChild(title)
              card.appendChild(button)
              content.appendChild(card)
              newsBox.appendChild(content)
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
