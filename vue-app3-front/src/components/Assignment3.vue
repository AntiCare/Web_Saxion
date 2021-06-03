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
        <!--keith repeat weeks-->
        <v-tab
          v-for="week in weeks"
          :key="week"
        >
          {{ week }}
        </v-tab>
      </v-tabs>
      <!--      </template>-->
      <!--    </v-toolbar>-->


      <v-tabs-items v-model="tab">
        <!--       keith repeat menu from weeks object-->
        <v-tab-item
          v-for="weekPage in weekPages"
          :key="weekPage"
        >

          <v-card>
            <v-tabs vertical>
              <!--          keith    repeat this weeks left menu items-->
              <v-tab v-for="weekPage in weekPages" :key="weekPage">
                <v-icon left>
                  {{weekPage.icon }}
                </v-icon>
                {{ weekPage.submenu }}
              </v-tab>
              <!--         keith     repeat selected menu content-->
              <v-tab-item v-for="weekPage in weekPages" :key="weekPage">
                <v-card
                  class="pa-2 mb-4"
                  outlined
                  elevation="2"
                  shaped
                  color="" v-for="task in weekPage.tasks" :key="task"
                >
                  <v-card-title>{{ task.title }}</v-card-title>
                  <v-card-subtitle>{{ task.subtitle }}</v-card-subtitle>
                  <v-card-text>{{ task.text }}</v-card-text>
                  <v-card-actions></v-card-actions>
                  <button v-on:click="pushState"> Update url</button>
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

Vue.use(VueCoreVideoPlayer)

export default {
  data() {
    return {
      skill: 0,
      number: 20,
      tab: null,
      weeks: [
        'Intro', 'Week 1', 'Week 2', 'Discussion', 'Extra'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      weekPages: [
        {submenu: "assignment 1", icon:"mdi-help-circle",
        tasks: [
          {title: "assignment 1b", subtitle: "level 1", text: "copy paste is golden"},
          {title: "assignment 2b",subtitle: "level 2", text: "copy paste is golden"},
          {title: "assignment 3c",subtitle: "level 3", text: "copy paste is golden"}

          ]
      },

        {submenu: "assignment 2", icon:"mdi-book-open-blank-variant",
        tasks: [
          {title: "assignment 2a", subtitle: "level 2", text: "copy paste is golden"},
          {title: "assignment 2b", subtitle: "level 2", text: "copy paste is golden"}
      ]
      }],

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
    },
    pushState() {
      const state = {'page_id': 1, 'user_id': 5}
      const title = ''
      const url = '/course-code/intro-to-programming/week-1/assignment-2'
      history.pushState(state, title, url)
    }

  }
}
</script>
