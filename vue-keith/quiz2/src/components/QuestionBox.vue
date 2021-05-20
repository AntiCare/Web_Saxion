<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template slot="lead">
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <p v-for="(answer, index) in answers" :key="index">
        {{ answer }}
      </p>

      <b-button variant="primary" href="#">submit</b-button>
      <b-button @click="nextQuestion" variant="success" href="#">next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      return answers.push(this.currentQuestion.correct_answer);
    },
  },

  mounted() {
    // console.log('sf')
    // console.log(this.currentQuestion)
  },
};
</script>
