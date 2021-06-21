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

                <!--Instruction-->
                <div v-if="weekPage.submenu==='Instruction'">
                  <Instructions></Instructions>
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
import Instructions from "@/components/Instructions";

Vue.use(VueCoreVideoPlayer)

export default {
  components: {Instructions, ModuleAssignments, Video, Submit, Discussion, Quiz, Introduction,PeerStudy, Lectures},
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
          icon: 'mdi-book-open-blank-variant'
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


