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
          v-for="(week, idx) in weeks"
          :key="idx"
        >
          {{ week }}
        </v-tab>
      </v-tabs>
      <!--      </template>-->
      <!--    </v-toolbar>-->

      <v-tabs-items v-model="tab" >

        <!-- Introduction page-->
        <v-tab-item
          v-for="(introduction, idx ) in introductionPage"
          :key="'introduction' + idx">
          <v-card>
            <v-tabs vertical>
              <v-tab v-for="(introduction, idx) in introductionPage " :key="idx">
                <v-icon left>
                  {{introduction.icon }}
                </v-icon>
                {{introduction.submenu }}
              </v-tab>

              <v-tab-item v-for="(introduction, idx) in introductionPage " :key="idx">
                <v-card
                  class="pa-2 mb-4"
                  outlined
                  elevation="2"
                  shaped
                  color="" v-for="(task, idx) in introduction.tasks" :key="'Task' + idx"
                >
                  <v-card-title>{{ task.title }}</v-card-title>
                  <v-card-text>
                    <v-img
                      v-if="task.image==='course manual'"
                      lazy-src="../assets/course-manual.png"
                      src="../assets/course-manual.png"
                    >
                    </v-img>
                    {{ task.text }}

                  </v-card-text>
                  <v-card-actions></v-card-actions>
                </v-card>
              </v-tab-item>
            </v-tabs>

          </v-card>
        </v-tab-item>

        <!--Online lectures page-->
        <Lectures></Lectures>

        <!-- discussion page-->
        <v-tab-item>

          <v-card>
            <v-tabs vertical>
              <v-tab>
                <v-icon left>
                  mdi-message-draw
                </v-icon>
                Homework
              </v-tab>
              <v-tab>
                <v-icon left>
                  mdi-help-circle
                </v-icon>
                Questions
              </v-tab>

              <v-tab-item>
                <v-container>
                  <v-timeline
                    dense
                    clipped
                  >
                    <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="primary"
                      large
                    >
                      <template v-slot:icon>
                        <span>YC</span>
                      </template>
                      <v-text-field
                        background-color="primary"
                        v-model="input"
                        hide-details
                        flat
                        label="Enter comments here"
                        solo
                        @keydown.enter="comment"
                      >
                        <template v-slot:append>
                          <v-btn
                            class="mx-0 "
                            depressed
                            @click="comment"
                            color="white"
                          >
                            Send
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-timeline-item>

                    <v-slide-x-transition
                      group
                    >
                      <v-timeline-item
                        v-for="(event, idx) in timeline"
                        :key="'event' + idx"
                        class="mb-4"
                        Medium
                      >
                        <template v-slot:icon>
                          <span class="white--text">YC</span>
                        </template>
                        <v-row justify="space-between">
                          <v-col
                            cols="7"
                            v-text="event.text"
                          ></v-col>
                          <v-col
                            class="text-right"
                            cols="5"
                            v-text="event.time"
                          ></v-col>
                        </v-row>
                      </v-timeline-item>
                    </v-slide-x-transition>
                  </v-timeline>
                </v-container>
              </v-tab-item>
              <v-tab-item>
                <v-container>
                  <v-timeline
                    dense
                    clipped
                  >
                    <v-timeline-item
                      fill-dot
                      class="white--text mb-12"
                      color="primary"
                      large
                    >
                      <template v-slot:icon>
                        <span>YC</span>
                      </template>
                      <v-text-field
                        background-color="primary"
                        v-model="input2"
                        hide-details
                        flat
                        label="Enter comments here"
                        solo
                        @keydown.enter="comment2"
                      >
                        <template v-slot:append>
                          <v-btn
                            class="mx-0 "
                            depressed
                            @click="comment2"
                            color="white"
                          >
                            Send
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-timeline-item>

                    <v-slide-x-transition
                      group
                    >
                      <v-timeline-item
                        v-for="event2 in timeline2"
                        :key="event2.id"
                        class="mb-4"
                        Medium
                      >
                        <template v-slot:icon>
                          <span class="white--text">YC</span>
                        </template>
                        <v-row justify="space-between">
                          <v-col
                            cols="7"
                            v-text="event2.text"
                          ></v-col>
                          <v-col
                            class="text-right"
                            cols="5"
                            v-text="event2.time"
                          ></v-col>
                        </v-row>
                      </v-timeline-item>
                    </v-slide-x-transition>
                  </v-timeline>
                </v-container>

              </v-tab-item>
            </v-tabs>
          </v-card>

        </v-tab-item>
        <!--week page week1-3-->
        <v-tab-item
          v-for="(weekPage, idx) in weekPages"
          :key="idx"
          class="elevation-0"
        >
          <v-card
            class="elevation-0">
            <v-tabs vertical>
              <v-tab v-for="(weekPage, idx) in weekPages" :key="'W' + idx" class="vertical-tab">
                <v-icon left>
                  {{weekPage.icon }}
                </v-icon>
                {{ weekPage.submenu }}
              </v-tab>
              <v-tab-item v-for="(weekPage, idx) in weekPages" :key="'W2' + idx">
                <v-card
                  class="pa-2 mb-4"
                  outlined
                  elevation="0"
                  shaped
                  color="" v-for="(task, idx) in weekPage.tasks" :key="'T' + idx"
                >
                  <v-card-title>{{ task.title }}</v-card-title>
                  <v-card-subtitle>{{ task.subtitle }}</v-card-subtitle>
                  <!--Assignment-->
                  <div class="text-left"
                       v-if="weekPage.submenu==='Assignment'">
                    <v-rating
                      v-model="task.rating"
                      icon-label="custom icon label text {0} of {1}"
                    ></v-rating>
                  </div>
                  <!--Peer study-->
                  <div class="text-left"
                       v-if="weekPage.submenu==='Peer study'">
                    <v-file-input
                      v-model="files"
                      color="primary"
                      counter
                      label="File input"
                      multiple
                      placeholder="Select your files"
                      prepend-icon="mdi-paperclip"
                      outlined
                      :show-size="1000"
                    >
                      <template v-slot:selection="{ index, text }">
                        <v-chip
                          v-if="index < 2"
                          color="primary"
                          dark
                          label
                          small
                        >
                          {{ text }}
                        </v-chip>

                        <span
                          v-else-if="index === 2"
                          class="text-overline grey--text text--darken-3 mx-2"
                        >
                         +{{ files.length - 2 }} File(s)
                      </span>
                      </template>
                    </v-file-input>
                    <!--upload button-->
                    <v-btn
                      :loading="loading3"
                      :disabled="loading3"
                      color="blue-grey"
                      class="ma-2 white--text"
                      @click="isShow=true"
                    >
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </div>
                  <!--Submit-->
                  <!--Delivery assignment 1-->
                  <div class="text-left"
                       v-if="weekPage.submenu==='Submit' && task.title==='Delivery assignment 1'">
                    <v-file-input
                      v-model="files1"
                      color="primary"
                      counter
                      label="File input"
                      multiple
                      placeholder="Select your files"
                      prepend-icon="mdi-paperclip"
                      outlined
                      :show-size="1000"
                      @click="ShowSuccess=false"
                    >
                      <template v-slot:selection="{ index, text }">
                        <v-chip
                          v-if="index < 2"
                          color="primary"
                          dark
                          label
                          small
                        >
                          {{ text }}
                        </v-chip>

                        <span
                          v-else-if="index === 2"
                          class="text-overline grey--text text--darken-3 mx-2"
                        >
                         +{{ files.length - 2 }} File(s)
                      </span>
                      </template>
                    </v-file-input>
                    <!--upload button-->
                    <v-btn
                      :loading="loading3"
                      :disabled="loading3"
                      color="blue-grey"
                      class="ma-2 white--text"
                      @click="ShowSuccess=true"
                    >
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                    <v-icon color="primary" large v-show="ShowSuccess">mdi-check</v-icon>
                  </div>
                  <!--Delivery assignment 2-->
                  <div class="text-left"
                       v-if="weekPage.submenu==='Submit' && task.title==='Delivery assignment 2'">
                    <v-file-input
                      v-model="files2"
                      color="primary"
                      counter
                      label="File input"
                      multiple
                      placeholder="Select your files"
                      prepend-icon="mdi-paperclip"
                      outlined
                      :show-size="1000"
                      @click="ShowSuccess1=false"
                    >
                      <template v-slot:selection="{ index, text }">
                        <v-chip
                          v-if="index < 2"
                          color="primary"
                          dark
                          label
                          small
                        >
                          {{ text }}
                        </v-chip>

                        <span
                          v-else-if="index === 2"
                          class="text-overline grey--text text--darken-3 mx-2"
                        >
                         +{{ files.length - 2 }} File(s)
                      </span>
                      </template>
                    </v-file-input>
                    <!--upload button-->
                    <v-btn
                      :loading="loading3"
                      :disabled="loading3"
                      color="blue-grey"
                      class="ma-2 white--text"
                      @click="ShowSuccess1=true"
                    >
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                    <v-icon color="primary" large v-show="ShowSuccess1">mdi-check</v-icon>
                  </div>
                  <!--Quiz-->
                  <div class="text-left"
                       v-if="weekPage.submenu==='Quiz'">
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
                  <v-card-text>
                    {{ task.text }}
                    <!--img assignment1-->
                    <v-img
                      max-height="300"
                      max-width="418"
                      v-if="task.image==='assignment1'"
                      lazy-src="../assets/assignment1.png"
                      src="../assets/assignment1.png"
                    >
                    </v-img>
                    <!--img assignment2-->
                    <v-img
                      max-height="300"
                      max-width="418"
                      v-else-if="task.image==='assignment2'"
                      lazy-src="../assets/assignment2.png"
                      src="../assets/assignment2.png"
                    >
                    </v-img>
                    <!--img assignment3-->
                    <v-img
                      max-height="300"
                      max-width="418"
                      v-else-if="task.image==='assignment3'"
                      lazy-src="../assets/assignment3.png"
                      src="../assets/assignment3.png"
                    >
                    </v-img>
                    <!--comments-->
                    <v-snackbar
                      v-show="isShow"
                      :timeout="-1"
                      shaped
                      color="primary"
                      :elevation=10
                      v-if="weekPage.submenu==='Peer study'&&task.comment!==null"
                      :value="true"
                      absolute
                      left
                    >
                      {{ task.comment }}
                    </v-snackbar>
                  </v-card-text>
                  <v-card-actions></v-card-actions>

                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-tab-item>

      </v-tabs-items>

    </v-card>

  </div>
</template>

<script>
import VueCoreVideoPlayer from 'vue-core-video-player'
import Vue from 'vue'
import Lectures from "@/components/Lectures";

Vue.use(VueCoreVideoPlayer)

export default {
  components: {Lectures},
  data () {
    return {
      events2: [],
      input2: null,
      nonce2: 0,
      events: [],
      input: null,
      nonce: 0,
      ShowSuccess1: false,
      ShowSuccess: false,
      loading3: false,
      isShow: false,
      files: [],
      files1: [],
      files2: [],
      skill: 0,
      number: 20,
      tab: null,

      // weeks (tabs)
      weeks: [
        'Intro','Online lectures', 'Discussion', 'Week 1', 'Week 2', 'Week 3', 'Extra'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      // introduction page data.
      introductionPage: [
        {
          submenu: 'Introduction',
          icon: 'mdi-help-circle',
          tasks: [
            { title: 'Introduction', image: '', text: 'Hello students (that participated in the retake of an Introduction to Programming)!\n\n              In a few moments the final grades for Introduction Programming retake of January 12th 2021 will be\n              published via Bison. For most of you the results will not be a surprise as the individual rubric scores\n              have been on Blackboard for some time now.\n\n              We would like to ask all students to check if we have entered your grade correctly based on the number\n              of points. Blackboard is leading in this, so if your grade somehow is incorrect, please contact me\n              (Tristan, t.pothoven@saxion.nl) as soon as possible.\n\n              As far as the exam review is concerned, Introduction Programming will *not* make use of the scheduled\n              exam review time in quartile 3. This is because your grade is already explained via Blackboard including\n              our arguments.\n\n              It is of course possible that you have questions about your result or that you suspect an error has been\n              made somewhere. You can report this by sending me (Tristan) an email.\n\n              I do ask however that you provide the following information:\n\n              Which rubric line is it about? (functionality, data types, methods, if-statements, loops or lists)\n              What is wrong with it? (unclear reasoning from us, too few points for reason X, etc.)\n              (If you have questions on more than one topic, I would kindly request that you write this out per\n              topic.)\n\n              General remarks such as "I disagree with the result" without any further argumentation unfortunately\n              cannot be discussed. So please be as explicit as possible.\n\n              You will have 2 weeks to respond to your result in case of questions. This means that the official\n              period of "exam review" now has begun and lasts until February 17th, 2021 after which all results are\n              final.\n\n              If you have any questions about the test or your grade, please feel free to send me an e-mail!' },
            { title: 'Course Manual', image: 'course manual', text: '' }
          ]
        }
      ],

      // weekPage data.
      weekPages: [
        // Instruction
        {
          submenu: 'Instruction',
          icon: 'mdi-book-open-blank-variant',
          tasks: [
            {
              title: 'Discord',
              subtitle: '',
              text: 'Hello students,\n' +
                '\n' +
                "To assist you on your journey on learning how to program, we've created some additional help for you in the form of a Discord server. Please log in to this server to ask for assistance.\n" +
                '\n' +
                'So if you have questions, feel free to post them on the server. Usually there should be someone online to help out...'
            },
            { title: 'How to install the Java Development Kit and IntelliJ IDEA Community Edition', subtitle: 'Set up system', text: "During the first lecture we will install the required software together, but in case you are\n                wondering we have created a step-by-step guide on how to install the software needed for this course.\n                Head over to https://www.oracle.com/nl/java/technologies/javase-downloads.htmland go download the Java\n                SE 11 (LTS) installer for your specific operating system.\n                You'll need to create an Oracle account and sign in to be able to download the installer.\n                Head over to https://www.jetbrains.com/idea/download and get IntelliJ IDEA Community Edition for your\n                specific operating system.\n                Install the Java SE 11 development kit downloaded from step 1.\n                Unfortunately, there is no \"easy\" way to check whether or not the installation was a success. If the\n                installer exitedwithout errors, you should assume everything is up and running. If your installer\n                crashes, please contact your teacher.\n                Install IntelliJ IDEA Community Edition downloaded from step 2.\n                Download the DemoProject.zip file (below) and extract it to somewhere you can easily find it.\n                Open IntelliJ and select open and select the folder you extracted from the zipfile as discussed in step\n                5.\n                Head over to \"1: Project\" (top left), open up \"Demo1\", open up \"src\" before double-clicking on\n                \"Application\".\n                You might need to wait before IntelliJ has indexed the Java Development Kit. If you see a progressbar in\n                the bottom, wait a moment! Be patient.\n                If everything worked out correctly, you should a green triangle that you can now click to run your\n                program. If you can do so, your installation was succesful!\n                Just to help out, we have created a video that shows all these steps and explains a little about what\n                happens. Have a look at https://youtu.be/8Dp9jP56b4U." },
            { title: 'Sandbox project', subtitle: '', text: 'Download the Sandbox project here. A Sandbox project does not contain exercises, but should\n                be considered a playground for you to experiment upon!' }
          ]
        },
        // Assignment
        {
          submenu: 'Assignment',
          icon: 'mdi-briefcase',
          tasks: [
            { title: 'assignment 1', subtitle: 'level 1', rating: 1, text: 'Write a program, that greets you whenever you run it.\n' + ' \t\n' + 'For example:\n', image: 'assignment1' },
            { title: 'assignment 2', subtitle: 'level 2', rating: 2, text: 'Write a program that prompts the user for a name. Then greet the person with that name.\n' + ' \t\n' + 'For example:\n', image: 'assignment2' },
            { title: 'assignment 3', subtitle: 'level 3', rating: 3, text: 'Write a program that prompts the user for an answer of a calculation. You may hard-code the values used in the question.', image: 'assignment3' }
          ]
        },
        // peer study
        {
          submenu: 'Peer study',
          icon: 'mdi-forum',
          tasks: [
            { title: 'assignment 1', subtitle: 'level 1', text: 'comments: 0', comment: 'good job , Can I copy your code? +rep' }
            // ,
            // { title: 'assignment 2', subtitle: 'level 2', text: 'comments:\n', comment: 'It is working, thanks' }
            // { title: 'assignment 3', subtitle: 'level 3', text: 'comments:\n', comment: 'Your code is like rubbish' },
            // { title: 'assignment 4', subtitle: 'level 4', text: 'comments:\n', comment: 'Are you kidding me? Error everywhere. -rep' },
            // { title: 'assignment 5', subtitle: 'level 2', text: 'comments:\n', comment: 'I will leave the project, you are all too weak!' }
          ]
        },
        // Video
        {
          submenu: 'Video',
          icon: 'mdi-video-box',
          tasks: [
            { title: 'assignment 3a', subtitle: 'level 3', text: 'copy paste is golden' },
            { title: 'assignment 3b', subtitle: 'level 3', text: 'copy paste is golden' }
          ]
        },
        // Submit
        {
          submenu: 'Submit',
          icon: 'mdi-bookmark',
          tasks: [
            { title: 'Delivery assignment 1', subtitle: 'level: easy', text: 'Please confirm that it meets the requirements before uploading, code + document' },
            { title: 'Delivery assignment 2', subtitle: 'level: difficult', text: 'Please confirm that it meets the requirements before uploading, code + document' }
          ]
        },
        // Quiz
        {
          submenu: 'Quiz',
          icon: 'mdi-book-open-blank-variant',
          tasks: [
            { title: 'Week 1 quize', subtitle: 'level :easy' }
          ]
        }
      ],

      links: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Admin', icon: 'mdi-laptop' }
      ],
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
  computed: {
    timeline () {
      return this.events.slice().reverse()
    },
    timeline2 () {
      return this.events2.slice().reverse()
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
    },
    pushState () {
      const state = { page_id: 1, user_id: 5 }
      const title = ''
      const url = '/course-code/intro-to-programming/week-1/assignment-2'
      history.pushState(state, title, url)
    },
    comment () {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        })
      })

      this.input = null
    },
    comment2 () {
      const time = (new Date()).toTimeString()
      this.events2.push({
        id: this.nonce2++,
        text: this.input2,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        })
      })

      this.input = null
    }
  }
}
</script>

<style scoped>
.vertical-tab {
  justify-content: normal;
}
</style>


