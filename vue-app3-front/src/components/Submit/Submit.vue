<template>
  <div class="text-left">
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      color="" v-for="(text, idx) in tasks" :key="'T' + idx"
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

  data () {
    return {
      tasks: [
        {
          id: 1,
          title: 'Delivery assignment 1',
          subtitle: 'level: easy',
          text: 'Please confirm that it meets the requirements before uploading, code + document'
        },
        {
          id: 2,
          title: 'Delivery assignment 2',
          subtitle: 'level: difficult',
          text: 'Please confirm that it meets the requirements before uploading, code + document'
        }
      ],
      file1: [],
      file2: []
    }
  }
}
</script>

<style scoped>

</style>
