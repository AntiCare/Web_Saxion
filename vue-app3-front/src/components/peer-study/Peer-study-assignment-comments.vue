<template>
  <div>
    Comments: {{ comments.length }}
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      v-for="(comment, idx) in comments"
    >
      <v-card-title>{{ comment.publisher }}</v-card-title>
      <v-card-subtitle>{{ comment.time }}</v-card-subtitle>
      <v-card-text>{{ comment.text }}</v-card-text>
    </v-card>
    <v-combobox
      v-model="userComment"
      label="Enter your comment here"
      prepend-icon="mdi-pen"
      color="green"
    >

    </v-combobox>
    <v-btn
      color="success"
      class="mr-4"
      @click="submitComment()"
    >
      Send
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Peer-study-assignment-comments",
  data() {
    return {
      userComment: 'DSlksdjklf',
      comments: [
        {
          publisher: "Mykhailo",
          time: "05.01.2021",
          text: "Good job!"
        },
        {
          publisher: "Mykhailo",
          time: "05.01.2021",
          text: "Good job!"
        },
        {
          publisher: "Mykhailo",
          time: "05.01.2021",
          text: "Good job!"
        },
        {
          publisher: "Mykhailo",
          time: "05.01.2021",
          text: "Good job!"
        },
        {
          publisher: "Mykhailo",
          time: "05.01.2021",
          text: "Good job!"
        },

      ]
    }
  },
  methods: {
    submitComment() {
      if (this.userComment === '') return

      var comment = this.userComment;
      this.comments.push({ publisher: "Mykhailo",
        time: "05.01.2021",
        text : comment })
      this.userComment = '';
    }
  }
}
</script>

<style scoped>

</style>
