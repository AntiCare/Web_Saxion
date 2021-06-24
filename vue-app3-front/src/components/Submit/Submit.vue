<template>
  <div class="text-left">
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      color="" v-for="(text, idx) in TASKS" :key="'T' + idx"
    >
      <v-card-title>{{ text.title }}</v-card-title>
      <v-card-subtitle>{{ text.subtitle }}</v-card-subtitle>
    <v-file-input
      :v-model="'file'+text.id"
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
      color="blue-grey"
      class="ma-2 white--text"
    >
      Upload
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Submit',
  computed: {
    TASKS() {
      return this.$store.state.course.submitAssignments;
    }
  },
  mounted() {
    this.$store.dispatch('fetchSubmitAssignments', {
      weekId: 23
    });
  },

  data () {
    return {
      file1: [],
      file2: []
    }
  }
}
</script>

<style scoped>

</style>
