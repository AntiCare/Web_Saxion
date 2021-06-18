<template>
  <v-tab-item>
    <v-card>
      <v-tabs vertical>
        <v-tab v-for="(introduction, idx) in introductionPage " :key="idx">
          <v-icon left>
            {{ introduction.icon }}
          </v-icon>
          {{ introduction.submenu }}
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
</template>

<script>
export default {
  data() {
    return {
      name: 'Introduction',
      introductionPage: [
        {
          submenu: 'Introduction',
          icon: 'mdi-help-circle',
          tasks: [
            {
              title: 'Introduction',
              image: '',
              text: 'Hello students (that participated in the retake of an Introduction to Programming)!\n\n              In a few moments the final grades for Introduction Programming retake of January 12th 2021 will be\n              published via Bison. For most of you the results will not be a surprise as the individual rubric scores\n              have been on Blackboard for some time now.\n\n              We would like to ask all students to check if we have entered your grade correctly based on the number\n              of points. Blackboard is leading in this, so if your grade somehow is incorrect, please contact me\n              (Tristan, t.pothoven@saxion.nl) as soon as possible.\n\n              As far as the exam review is concerned, Introduction Programming will *not* make use of the scheduled\n              exam review time in quartile 3. This is because your grade is already explained via Blackboard including\n              our arguments.\n\n              It is of course possible that you have questions about your result or that you suspect an error has been\n              made somewhere. You can report this by sending me (Tristan) an email.\n\n              I do ask however that you provide the following information:\n\n              Which rubric line is it about? (functionality, data types, methods, if-statements, loops or lists)\n              What is wrong with it? (unclear reasoning from us, too few points for reason X, etc.)\n              (If you have questions on more than one topic, I would kindly request that you write this out per\n              topic.)\n\n              General remarks such as "I disagree with the result" without any further argumentation unfortunately\n              cannot be discussed. So please be as explicit as possible.\n\n              You will have 2 weeks to respond to your result in case of questions. This means that the official\n              period of "exam review" now has begun and lasts until February 17th, 2021 after which all results are\n              final.\n\n              If you have any questions about the test or your grade, please feel free to send me an e-mail!'
            },
            {title: 'Course Manual', image: 'course manual', text: ''}
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
