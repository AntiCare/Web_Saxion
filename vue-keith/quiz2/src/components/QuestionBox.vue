<template>
  <div class="question-box-container">
    <b-overlay
      :show="loading"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
      @hidden="onHidden"
    >
      <b-jumbotron>
        <template slot="lead">
          {{ currentQuestion.question }}
        </template>

        <hr class="my-4" />

        <b-list-group>
          <b-list-group-item
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            @click.prevent="selectAnswer(index)"
            :class="answerClass(index)"
            >{{ answer }}</b-list-group-item
          >
        </b-list-group>

        <b-button
          variant="primary"
          v-on:click="submitAnswer"
          v-bind:disabled="selectedIndex === null || answered"
        >
          submit
        </b-button>
        <b-button
          @click="nextQuestion"
          v-bind:disabled="index === 9 || answered === false"
          variant="success"
          href="#"
          >next</b-button
        >

        <b-list-group v-show="index === 9 && answered === true">
          <b-alert variant="success" show> {{ gameResult() }}</b-alert>

          <b-button @click="start" variant="danger" href="#"
            >Play Again</b-button
          >
        </b-list-group>
      </b-jumbotron>
    </b-overlay>
  </div>
</template>

<script>
import lodash from "lodash";

export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
    increment: Function,
    start: Function,
    correctAnswersCount: Number,
    index: Number,
  },
  data() {
    return {
      selectedIndex: null,
      hover: false,
      shuffledAnswers: {},
      answered: false,
      correctIndex: null,
      gameResult() {
        if (this.correctAnswersCount > 5) {
          return "you won 😁";
        } else {
          return "you lost 🤨";
        }
      },
      loading: true,
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  watch: {
    // currentQuestion() {
    //   this.selectedIndex = null;
    //   this.shuffleAnswers();
    // },
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.shuffleAnswers();
        this.answered = false;
      },
    },
  },
  methods: {
    hoverHandler(isHovered) {
      if (isHovered) {
        this.active = isHovered;
      }
    },
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = lodash.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex == +this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    answerClass(index) {
      let answerClass = "";
      if (!this.answered && this.selectedIndex === index) {
        answerClass = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.selectedIndex == index &&
        this.correctIndex !== index
      ) {
        answerClass = "incorrect";
      }

      // "[
      //             !answered && selectedIndex === index
      //               ? 'selected'
      //               : answered && correctIndex === index
      //               ? 'correct'
      //               : answered && selectedIndex == index && correctIndex !== index
      //               ? 'incorrect'
      //               : '',
      //           ]"
      //     },
      return answerClass;
    },
  },

  mounted() {
    // console.log('sf')
    // console.log(this.currentQuestion)
    // this.shuffleAnswers();
    this.loading = false;
  },
};
</script>

<style scoped>
.question-box-container {
  margin-top: 15px;
}

.list-group-item:hover {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  cursor: pointer;
}
.list-group {
  margin-top: 15px;
}

.btn {
  margin: 15px 5px 0px 5px;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: red;
}
</style>
