<template>

  <div>
    <v-card

    >
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
      <v-tabs-items v-model="tab">
        <!-- Introduction page-->
       <Introduction></Introduction>
        <!--Online lectures page-->
        <Lectures></Lectures>
        <!-- discussion page-->
         <Discussion></Discussion>
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
                  {{ weekPage.icon }}
                </v-icon>
                {{ weekPage.submenu }}
              </v-tab>

              <v-tab-item v-for="(weekPage, idx) in weekPages" :key="'W2' + idx">
                <!--Peer study-->
                <div class="text-left"
                     v-if="weekPage.submenu === 'Peer study'">
                  <PeerStudy></PeerStudy>
                </div>

                <div class="text-left"
                     v-if="weekPage.submenu === 'Assignment'">
                  <ModuleAssignments></ModuleAssignments>
                </div>
                <v-card
                  class="pa-2 mb-4"
                  outlined
                  elevation="0"
                  shaped
                  color="" v-for="(task, idx) in weekPage.tasks" :key="'T' + idx"
                >
                  <v-card-title>{{ task.title }}</v-card-title>
                  <v-card-subtitle>{{ task.subtitle }}</v-card-subtitle>
                  <!--Video-->
                  <div v-if="weekPage.submenu==='Video'">
                    <Video></Video>
                  </div>
                 <!--Submit-->
                  <div v-if="weekPage.submenu==='Submit'">
                    <Submit></Submit>
                  </div>

                  <!--Quiz-->
                  <div v-if="weekPage.submenu==='Quiz'">
                    <Quiz></Quiz>
                  </div>
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
import Introduction from "./Introduction";
import PeerStudy from "@/components/Peer-study";
import Quiz from "./Quiz";
import Discussion from "./Discussion/Discussion";
import Submit from "./Submit/Submit";
import Video from "@/components/Video";
import ModuleAssignments from "@/components/module-assignments/Module-assignments";

Vue.use(VueCoreVideoPlayer)

export default {
  components: {ModuleAssignments, Video, Submit, Discussion, Quiz, Introduction,PeerStudy, Lectures},
  data() {
    return {
      isShow: false,
      number: 20,
      tab: null,
      // weeks (tabs)
      weeks: [
        'Intro', 'Online lectures', 'Discussion', 'Week 1', 'Week 2', 'Week 3', 'Extra'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

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
            {
              title: 'How to install the Java Development Kit and IntelliJ IDEA Community Edition',
              subtitle: 'Set up system',
              text: "During the first lecture we will install the required software together, but in case you are\n                wondering we have created a step-by-step guide on how to install the software needed for this course.\n                Head over to https://www.oracle.com/nl/java/technologies/javase-downloads.htmland go download the Java\n                SE 11 (LTS) installer for your specific operating system.\n                You'll need to create an Oracle account and sign in to be able to download the installer.\n                Head over to https://www.jetbrains.com/idea/download and get IntelliJ IDEA Community Edition for your\n                specific operating system.\n                Install the Java SE 11 development kit downloaded from step 1.\n                Unfortunately, there is no \"easy\" way to check whether or not the installation was a success. If the\n                installer exitedwithout errors, you should assume everything is up and running. If your installer\n                crashes, please contact your teacher.\n                Install IntelliJ IDEA Community Edition downloaded from step 2.\n                Download the DemoProject.zip file (below) and extract it to somewhere you can easily find it.\n                Open IntelliJ and select open and select the folder you extracted from the zipfile as discussed in step\n                5.\n                Head over to \"1: Project\" (top left), open up \"Demo1\", open up \"src\" before double-clicking on\n                \"Application\".\n                You might need to wait before IntelliJ has indexed the Java Development Kit. If you see a progressbar in\n                the bottom, wait a moment! Be patient.\n                If everything worked out correctly, you should a green triangle that you can now click to run your\n                program. If you can do so, your installation was succesful!\n                Just to help out, we have created a video that shows all these steps and explains a little about what\n                happens. Have a look at https://youtu.be/8Dp9jP56b4U."
            },
            {
              title: 'Sandbox project',
              subtitle: '',
              text: 'Download the Sandbox project here. A Sandbox project does not contain exercises, but should\n                be considered a playground for you to experiment upon!'
            }
          ]
        },
        // Assignment
        {
          submenu: 'Assignment',
          icon: 'mdi-briefcase',
        },
        // peer study
        {
          submenu: 'Peer study',
          icon: 'mdi-forum'
        },
        // Video
        {
          submenu: 'Video',
          icon: 'mdi-video-box',
          tasks: [
            {title: 'Loop(while)', subtitle: 'How to use while loop in Java'},
            {title: 'Loop(for)', subtitle: 'How to use for loop in Java' }
          ]
        },
        // Submit
        {
          submenu: 'Submit',
          icon: 'mdi-bookmark',
          tasks: [
            {
              title: 'Delivery assignment 1',
              subtitle: 'level: easy',
              text: 'Please confirm that it meets the requirements before uploading, code + document'
            },
            {
              title: 'Delivery assignment 2',
              subtitle: 'level: difficult',
              text: 'Please confirm that it meets the requirements before uploading, code + document'
            }
          ]
        },
        // Quiz
        {
          submenu: 'Quiz',
          icon: 'mdi-book-open-blank-variant',
          tasks: [
            {title: 'Week 1 quize', subtitle: 'level :easy'}
          ]
        }
      ],

      links: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Account', icon: 'mdi-account-box'},
        {title: 'Admin', icon: 'mdi-laptop'}
      ]
    }
  },
  methods: {
    pushState() {
      const state = {page_id: 1, user_id: 5}
      const title = ''
      const url = '/course-code/intro-to-programming/week-1/assignment-2'
      history.pushState(state, title, url)
    }
  }
}
</script>

<style scoped>
.vertical-tab {
  justify-content: normal;
}
</style>


