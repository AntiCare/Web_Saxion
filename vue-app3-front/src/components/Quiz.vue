<template>
  <div class="text-left">
    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
    <!--progress Bar-->
    <div>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="n in 5">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
            >
              Step {{ n }}
            </v-stepper-step>

            <v-divider
              v-if="n !== 5"
              :key="n"
            ></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            v-for="n in 7"
            :key="`${n}-content`"
            :step="n"
          >

            <!--quiz-->
            <div  v-for="(questionNum,id) in Questions"
                  :key="id">
              <v-card
                v-if="n===id+1"
                class="mb-12 elevation-0"
                height="200px"
              >
                <v-card-title >{{questionNum.question}}</v-card-title>
                <!--type1-->
                <v-card-text v-if="questionNum.type==='Multiple choice 1'">
                  <v-chip-group
                    active-class="primary accent-4 white--text"
                    column
                  >
                    <v-chip v-for="(option,idx) in questionNum.options"
                            :key="idx">{{option}} </v-chip>
                  </v-chip-group>
                </v-card-text>
                <!--type2-->
                <v-card-text v-else-if="questionNum.type==='Multiple choice 2'">
                  <v-chip-group
                    active-class="primary accent-4 white--text"
                    column
                    multiple
                  >
                    <v-chip v-for="(option,idx) in questionNum.options"
                            :key="idx">{{option}} </v-chip>
                  </v-chip-group>
                </v-card-text>
                <!--type3-->
                <v-card-text v-else-if="questionNum.type==='text'">
                  <v-combobox
                    label="enter your answer here"
                    prepend-icon="mdi-pen"
                  >
                  </v-combobox>
                </v-card-text>
                <!--type4-->
                <v-card-text v-else-if="questionNum.type==='TF'">
                  <v-radio-group
                    column
                  >
                    <v-radio
                      label="True"
                      value="radio-1"
                    ></v-radio>
                    <v-radio
                      label="False"
                      value="radio-2"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>

              </v-card>
            </div>
            <v-icon
              v-if="n === 7"
              color="success"
              align-center
              large="large"
            >
              mdi-check
            </v-icon>

            <v-btn
              color="primary"
              @click="nextStep(n)"
              v-if="n !== 6 && n!==7"
            >
              Continue
            </v-btn>

            <v-btn
              color="primary"
              @click="nextStep(n)"
              v-if="n === 6"
              large
            >
              Finish
            </v-btn>
            <v-btn text @click="backStep(n)"
                   v-if="n !== 7">
              Back
            </v-btn>

          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  data () {
    return {
      skill: 0,
      e1: 1,
      Questions: [
        {
          question: 'Which of the following cannot be used as a loop condition.',
          type: 'Multiple choice 1',
          options: [
            'A: i++;', 'B: void aMethod();', 'C: bEqual = str.equals("q");', 'D: count = = i;'
          ]
        },
        {
          question: 'Which of the following options belong to the reference data type. (multiple choice)',
          type: 'Multiple choice 2',
          options: [
            'A: String', 'B: char', 'C: Student', 'D: int'
          ]
        },
        {
          question: 'In the Java interface, the valid method declaration in the following options is _______.(multiple choice)',
          type: 'Multiple choice 2',
          options: [
            'A: public void aMethod();', 'B: void aMethod();', 'C: protected void aMethod();', 'D: private void aMethod();'
          ]
        },
        {
          question: 'Initialize an array of type int, which contains 5 elements.',
          type: 'text'
        },
        {
          question: 'i is an int type, it can be changed to a string type through i.toString()',
          type: 'TF'
        }
      ]
    }
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    }
  },
  methods: {
    backStep (n) {
      if (n !== 1) {
        this.e1 = n - 1
      }
      if (this.skill >= 20) {
        this.skill = this.skill - 20
      }
    },
    nextStep (n) {
      this.e1 = n + 1
      if (this.skill < 100) {
        this.skill = this.skill + 20
      }
      if (n === 6) {
        this.$store.commit('changeWeekStatus')
        console.log(this.$store.state.weekFinish)
      }
    }

  }

}
</script>

<style scoped>

</style>
