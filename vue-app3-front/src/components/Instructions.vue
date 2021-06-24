<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      color="" v-for="(instruction, idx) in INSTRUCTIONS" :key="'T' + idx"
    >
      <v-card-title>{{ instruction.title }}</v-card-title>
      <v-card-subtitle>{{ instruction.subtitle }}</v-card-subtitle>
      <v-card-text>{{ instruction.text }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  mounted () {
    this.$store.dispatch('fetchInstructions')
  },
  computed: {
    INSTRUCTIONS () {
      return this.$store.state.course.instruction.instructions
    }
  }
}
</script>

<style scoped>

</style>
