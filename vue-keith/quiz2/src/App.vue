<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal" />

    <b-container class="bv-example-row">
      <!-- game category box -->
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionCategory
            :gameOutcome="gameOutcome"
            :playingGame="playingGame"
            :start="start"
            :selectedCategory="cate"
          />
        </b-col>
        a{{this.selectedCategory}} t
      </b-row>

      <!-- game box -->
      <b-row v-show="index !== null">
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :nextQuestion="nextQ"
            :increment="increment"
            :start="start"
            :correctAnswersCount="numCorrect"
            :index="index"
            :playingGame="playingGame"
          />
        </b-col>
      </b-row>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import QuestionBox from "./components/QuestionBox.vue";
import QuestionCategory from "./components/QuestionCategory";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    QuestionBox,
    QuestionCategory,
  },
  abc() {
    return {
      abc: 2,
    };
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 1,
      playingGame: true,
      gameOutcome: true,
    cate:this.selectedCategory,
      
    };
  },

  methods: {
   
    nextQ: function() {
      this.index++;
      this.numTotal++;
      // console.log('next q')
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      // this.numTotal++;
    },
    start() {
      this.resetStats();
      // this.selectedCategory = 10;
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${this.selectedCategory}&type=multiple`,
        {
          method: "get",
        }
      )
        .then((response) => {
          // console.log(response.json())
          return response.json();
        })
        .then((jsonData) => {
          this.questions = jsonData.results;
        });
    },
    resetStats: function() {
      this.questions = [];
      this.index = 0;
      this.numCorrect = 0;
      this.numTotal = 1;
      this.playingGame = true;
      this.gameOutcome = true;
    },
  },

  mounted: function() {
    // this.start();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
