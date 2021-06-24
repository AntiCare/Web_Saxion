<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      color="" v-for="(assignment, idx) in ASSIGNMENTS" :key="'T' + idx"
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
  name: 'Module-assignments',
  mounted () {
    this.$store.dispatch('fetchModuleAssignments')
  },
  computed: {
    ASSIGNMENTS () {
      return this.$store.state.course.moduleAssignment.assignments
    }
  }
}
</script>

<style scoped>

</style>
