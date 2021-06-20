<template>
  <div class="text-left">
    <v-file-input
      :v-model="'file'+tasks.id"
      color="primary"
      counter
      label="File input"
      multiple
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
      @click="changeFile()"
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
      @click="successUp()"
    >
      Upload
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>
    <v-icon color="primary" large v-show="this.upload">mdi-check</v-icon>
  </div>
</template>

<script>
export default {
  name: 'Submit',

  data () {
    return {
      upload: false,
      file1: [],
      file2: [],
      tasks: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  },
  methods: {
    successUp () {
      this.upload = true
    },
    changeFile() {
      this.upload = false
    }
  }
}
</script>

<style scoped>

</style>
