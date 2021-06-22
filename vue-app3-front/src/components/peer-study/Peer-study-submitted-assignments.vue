<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      v-for="(assignment, idx) in assignments"
    >
      <v-card-title>{{ assignment.publisher }}</v-card-title>
      <v-card-subtitle>{{ assignment.time }}</v-card-subtitle>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        @click="assignment.downloaded = true"
      >
        Download
        <v-icon right dark>mdi-cloud-download</v-icon>
      </v-btn>
      <v-icon color="primary" large v-show="assignment.downloaded">mdi-check</v-icon>
      <div v-if="assignment.downloaded">
        <PeerStudyAssignmentComments v-on:commented="updateState"></PeerStudyAssignmentComments>
      </div>
    </v-card>
  </div>
</template>

<script>
import PeerStudyAssignmentComments from "@/components/peer-study/Peer-study-assignment-comments";
import {mapMutations} from "vuex";
export default {
  name: "Peer-study-submitted-assignments",
  components: {PeerStudyAssignmentComments},
  data() {
    return {
      commented: false,
      assignments: [
        {
          publisher: 'Yang',
          time: '5 Jan 2020 20:20',
          downloaded: false
        },
        {
          publisher: 'Mykhailo',
          time: '5 Jan 2020 20:20',
          downloaded: false
        },
        {
          publisher: 'Yang2',
          time: '5 Jan 2020 20:20',
          downloaded: false
        },
        {
          publisher: 'Mykhailo2',
          time: '5 Jan 2020 20:20',
          downloaded: false
        }
      ]
    }
  },
  methods : {
    ...mapMutations(['finishedPeerStudyAssignment']),
    updateState() {
      if (this.commented) return;
      this.commented = true;
      this.finishedPeerStudyAssignment()
    }
  }
}
</script>

<style scoped>

</style>
