<template>

  <div>
    <v-card


    >
      <!--    <v-toolbar-->
      <!--      color="cyan"-->
      <!--      dark-->
      <!--      flat-->
      <!--    >-->
      <!--      <template v-slot:extension>-->
      <v-tabs
        v-model="tab"
        align-with-title
        background-color="primary"
        center-active
        dark
      >
        <v-tabs-slider color="white"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <!--      </template>-->
      <!--    </v-toolbar>-->

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="week in weeks"
          :key="week"
        >
          <v-card flat>
            <v-card-text text="text">
              {{ week }}
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <v-card>
        <v-tabs vertical>
          <v-tab>
            <v-icon left>
              mdi-help-circle
            </v-icon>
            Introduction
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-book-open-blank-variant
            </v-icon>
            Instruction
          </v-tab>

          <v-tab>
            <v-icon left>
              mdi-briefcase
            </v-icon>
            Assignment
          </v-tab>

          <v-tab>
            <v-icon left>
              mdi-forum
            </v-icon>
            Peer study
          </v-tab>

          <v-tab>
            <v-icon left>
              mdi-video-box
            </v-icon>
            Video
          </v-tab>

          <v-tab>
            <v-icon left>
              mdi-bookmark
            </v-icon>
            Assignment
          </v-tab>

          <v-tab>
            <v-icon left>
              mdi-book-open-blank-variant
            </v-icon>
            Quize
          </v-tab>

          <v-tab-item>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Introduction</v-card-title>
              <v-card-subtitle>welcome wij gaan beginnen</v-card-subtitle>
              <v-card-text>Hello students (that participated in the retake of an Introduction to Programming)!

                In a few moments the final grades for Introduction Programming retake of January 12th 2021 will be
                published via Bison. For most of you the results will not be a surprise as the individual rubric scores
                have been on Blackboard for some time now.

                We would like to ask all students to check if we have entered your grade correctly based on the number
                of points. Blackboard is leading in this, so if your grade somehow is incorrect, please contact me
                (Tristan, t.pothoven@saxion.nl) as soon as possible.

                As far as the exam review is concerned, Introduction Programming will *not* make use of the scheduled
                exam review time in quartile 3. This is because your grade is already explained via Blackboard including
                our arguments.

                It is of course possible that you have questions about your result or that you suspect an error has been
                made somewhere. You can report this by sending me (Tristan) an email.

                I do ask however that you provide the following information:

                Which rubric line is it about? (functionality, data types, methods, if-statements, loops or lists)
                What is wrong with it? (unclear reasoning from us, too few points for reason X, etc.)
                (If you have questions on more than one topic, I would kindly request that you write this out per
                topic.)

                General remarks such as "I disagree with the result" without any further argumentation unfortunately
                cannot be discussed. So please be as explicit as possible.

                You will have 2 weeks to respond to your result in case of questions. This means that the official
                period of "exam review" now has begun and lasts until February 17th, 2021 after which all results are
                final.

                If you have any questions about the test or your grade, please feel free to send me an e-mail!
              </v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Course Manual</v-card-title>
              <v-card-subtitle>welcome wij gaan beginnen</v-card-subtitle>
              <v-card-text>
                <v-img
                  lazy-src="../assets/course-manual.png"
                  src="../assets/course-manual.png"
                ></v-img>

              </v-card-text>

              <v-card-actions></v-card-actions>

            </v-card>

          </v-tab-item>
          <v-tab-item>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>How to install the Java Development Kit and IntelliJ IDEA Community Edition</v-card-title>
              <v-card-subtitle>Set up system</v-card-subtitle>
              <v-card-text>During the first lecture we will install the required software together, but in case you are
                wondering we have created a step-by-step guide on how to install the software needed for this course.
                Head over to https://www.oracle.com/nl/java/technologies/javase-downloads.htmland go download the Java
                SE 11 (LTS) installer for your specific operating system.
                You'll need to create an Oracle account and sign in to be able to download the installer.
                Head over to https://www.jetbrains.com/idea/download and get IntelliJ IDEA Community Edition for your
                specific operating system.
                Install the Java SE 11 development kit downloaded from step 1.
                Unfortunately, there is no "easy" way to check whether or not the installation was a success. If the
                installer exitedwithout errors, you should assume everything is up and running. If your installer
                crashes, please contact your teacher.
                Install IntelliJ IDEA Community Edition downloaded from step 2.
                Download the DemoProject.zip file (below) and extract it to somewhere you can easily find it.
                Open IntelliJ and select open and select the folder you extracted from the zipfile as discussed in step
                5.
                Head over to "1: Project" (top left), open up "Demo1", open up "src" before double-clicking on
                "Application".
                You might need to wait before IntelliJ has indexed the Java Development Kit. If you see a progressbar in
                the bottom, wait a moment! Be patient.
                If everything worked out correctly, you should a green triangle that you can now click to run your
                program. If you can do so, your installation was succesful!
                Just to help out, we have created a video that shows all these steps and explains a little about what
                happens. Have a look at https://youtu.be/8Dp9jP56b4U.
              </v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Sandbox project</v-card-title>
              <v-card-subtitle></v-card-subtitle>
              <v-card-text>Download the Sandbox project here. A Sandbox project does not contain exercises, but should
                be considered a playground for you to experiment upon!
              </v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>

          </v-tab-item>
          <v-tab-item>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Assignment 1</v-card-title>
              <v-card-subtitle>urgent work</v-card-subtitle>
              <v-card-text>For loops are like this</v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Assignment 2</v-card-title>
              <v-card-subtitle>urgent work</v-card-subtitle>
              <v-card-text>If statements are the stuff</v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Assignment 3</v-card-title>
              <v-card-subtitle>urgent work</v-card-subtitle>
              <v-card-text>If statements are the stuff</v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>

          </v-tab-item>

          <v-tab-item>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Assignment 3</v-card-title>
              <v-card-subtitle>urgent work</v-card-subtitle>
              <v-card-text>If statements are the stuff</v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>
          </v-tab-item>

          <v-tab-item>

            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Introduction to variables</v-card-title>
              <v-card-subtitle></v-card-subtitle>
              <v-card-text>
                <div class="player-container">
                  <vue-core-video-player @play="your_method"
                                         src="https://www.youtube.com/watch?v=gtQJXzi3Yns"></vue-core-video-player>
                </div>

              </v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card
              class="pa-2 mb-4"
              outlined
              elevation="2"
              shaped
              color=""
            >
              <v-card-title>Assignment 3</v-card-title>
              <v-card-subtitle>urgent work</v-card-subtitle>
              <v-card-text>If statements are the stuff</v-card-text>
              <v-card-actions></v-card-actions>

            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-progress-linear
              v-model="skill"
              color="blue-grey"
              height="25"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            <!--            progress Bar-->
            <div>
              <v-stepper v-model="e1">
                <v-stepper-header>
                  <template v-for="n in 5">
                    <v-stepper-step
                      :key="`${n}-step`"
                      :complete="e1 > n"
                      :step="n"
                      editable
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
                    <v-card
                      v-if="n !== 7"
                      class="mb-12"
                      color="grey lighten-1"
                      height="200px"
                    ></v-card>

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
          </v-tab-item>

        </v-tabs>
      </v-card>

    </v-card>

  </div>
</template>

<script>
import VueCoreVideoPlayer from 'vue-core-video-player'
import Vue from 'vue'

Vue.use(VueCoreVideoPlayer)

export default {
  data() {
    return {
      skill: 0,
      number: 20,
      tab: null,
      items: [
        'Intro', 'Week 1', 'Week 2', 'Discussion', 'Extra'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      weeks: ["intro", "instr", "ass"],


      links: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Account', icon: 'mdi-account-box'},
        {title: 'Admin', icon: 'mdi-laptop'}
      ],
      e1: 1
    }
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    }
  },

  methods: {
    backStep(n) {
      if (n !== 1) {
        this.e1 = n - 1
      }
      if (this.skill >= 20) {
        this.skill = this.skill - 20
      }
    },
    nextStep(n) {
      this.e1 = n + 1
      if (this.skill < 100) {
        this.skill = this.skill + 20
      }
    }
  }
}
</script>
