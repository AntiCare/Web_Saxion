<template>
  <v-card
    class="pa-2 mb-4"
    outlined
    elevation="0"
    shaped
  >
    <v-card-title>{{ assignment.publisher }}</v-card-title>
    <v-card-subtitle>{{ assignment.time }}</v-card-subtitle>
    <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click="showComments = true ; download();"
    >
      Download
      <v-icon right dark>mdi-cloud-download</v-icon>
    </v-btn>
    <v-icon color="primary" large v-show="assignment.downloaded">mdi-check</v-icon>
    <div v-if="showComments">
      <PeerStudyAssignmentComments v-on="$listeners"></PeerStudyAssignmentComments>
    </div>
  </v-card>
</template>

<script>

import PeerStudyAssignmentComments from "@/components/peer-study/Peer-study-assignment-comments";
import * as axios from "axios";
import fileDownload from "js-file-download";
export default {
  name: "Peer-study-submitted-assignment",
  components: {PeerStudyAssignmentComments},
  props: ['assignment', 'index'],
  data () {
    return {
      showComments: false

    }
  },
  methods : {
    download: function () {
      axios({
        url: 'http://localhost:3000/api/download',
        method: 'post',
        responseType: 'blob'
      })
        .then(res => {
          fileDownload(res.data, 'filename.txt')
        })
    },
  }
}
</script>

<style scoped>

</style>
