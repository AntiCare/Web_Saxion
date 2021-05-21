<template>
  <div id="app">
    
    <Header :numCorrect="numCorrect" :numTotal="numTotal" />
    

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
             v-if="questions.length"
            :currentQuestion="questions[index]"
            :nextQuestion="nextQ"
            :increment="increment"
            :start="start"
            :correctAnswersCount="numCorrect"
            :index="index"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 1,
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
      fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple", {
        method: "get",
      })
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
    },
  },

  mounted: function() {
    this.start();
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
