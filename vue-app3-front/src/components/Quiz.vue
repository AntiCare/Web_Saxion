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

            <!--quiz Q1-->
            <v-card
              v-if="n !== 7 && n===1"
              class="mb-12 elevation-0"
              height="200px"
            >
              <v-card-title>Which of the following cannot be used as a loop condition.</v-card-title>

              <v-card-text>
                <v-chip-group
                  active-class="primary accent-4 white--text"
                  column
                >
                  <v-chip>A. i++; </v-chip>

                  <v-chip>B. i>5;</v-chip>

                  <v-chip>C. bEqual = str.equals("q");</v-chip>

                  <v-chip>D. count = = i;</v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>

            <!--quiz Q2-->
            <v-card
              v-if="n !== 7 && n===2"
              class="mb-12 elevation-0"
              height="200px"
            >
              <v-card-title>Which of the following options belong to the reference data type. (multiple choice)</v-card-title>
              <v-card-text>
                <v-chip-group
                  multiple
                  active-class="primary accent-4 white--text"
                  column
                >
                  <v-chip>A. String </v-chip>

                  <v-chip>B. char</v-chip>

                  <v-chip>C. Student</v-chip>

                  <v-chip>D. int</v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>

            <!--quiz Q3-->
            <v-card
              v-if="n !== 7 && n===3"
              class="mb-12 elevation-0"
              height="200px"
            >
              <v-card-title>In the Java interface, the valid method declaration in the following options is _______.(multiple choice)</v-card-title>

              <v-card-text>
                <v-chip-group
                  multiple
                  active-class="primary accent-4 white--text"
                  column
                >
                  <v-chip>A. public void aMethod(); </v-chip>

                  <v-chip>B. void aMethod();</v-chip>

                  <v-chip>C. protected void aMethod();</v-chip>

                  <v-chip>D. private void aMethod();</v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>

            <!--quiz Q4-->
            <v-card
              v-if="n !== 7 && n===4"
              class="mb-12 elevation-0"
              height="200px"
            >
              <v-card-title>Initialize an array of type int, which contains 5 elements. </v-card-title>
              <v-card-text>
                <v-combobox
                  label="enter your answer here"
                  prepend-icon="mdi-pen"
                >
                </v-combobox>
              </v-card-text>
            </v-card>

            <!--quiz Q5-->
            <v-card
              v-if="n !== 7 && n===5"
              class="mb-12 elevation-0"
              height="200px"
            >
              <v-card-title>i is an int type, it can be changed to a string type through i.toString()</v-card-title>

              <v-card-text>
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
      e1: 1
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
        this.finishWeek1 = true
      }
    }

  }

}
</script>

<style scoped>

</style>
