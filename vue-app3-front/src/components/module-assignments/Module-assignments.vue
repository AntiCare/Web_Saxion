<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      color="" v-for="(assignment, idx) in assignments" :key="'T' + idx"
    >
      <v-card-title>{{ assignment.title }}</v-card-title>
      <v-card-subtitle>{{ assignment.subtitle }}</v-card-subtitle>

      <v-rating
        v-model="assignment.rating"
        readonly
        icon-label="custom icon label text {0} of {1}"
      ></v-rating>
      <v-card-text>
        {{ assignment.text }}
        <!--img assignment1-->
        <v-img
          max-height="300"
          max-width="418"
          :src="require(`@/assets/${assignment.image}`)"
        >
        </v-img>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Module-assignments",
  data() {
    return {
      assignments: [
        {
          title: 'assignment 1',
          subtitle: 'level 1',
          rating: 1,
          text: 'Write a program, that greets you whenever you run it.\n' + ' \t\n' + 'For example:\n',
          image: 'assignment1.png'
        },
        {
          title: 'assignment 2',
          subtitle: 'level 2',
          rating: 2,
          text: 'Write a program that prompts the user for a name. Then greet the person with that name.\n' + ' \t\n' + 'For example:\n',
          image: 'assignment2.png'
        },
        {
          title: 'assignment 3',
          subtitle: 'level 3',
          rating: 3,
          text: 'Write a program that prompts the user for an answer of a calculation. You may hard-code the values used in the question.',
          image: 'assignment3.png'
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>
