<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
      v-for="(assignment, idx) in assignments"
    >
      <v-card-title>{{ assignment.title }}</v-card-title>
      <v-card-subtitle>{{ assignment.subtitle }}</v-card-subtitle>
      <v-btn
        color="primary"
        text
        @click="assignment.viewUploadPoint = true"
      >
        VIEW
      </v-btn>
      <div v-if="assignment.viewUploadPoint">
        <Peer-study-assignment-view></Peer-study-assignment-view>
      </div>
    </v-card>
  </div>
</template>

<script>
import PeerStudyAssignmentView from "@/components/peer-study/Peer-study-assignment-view";
export default {
  name: "Peer-study",
  components: {PeerStudyAssignmentView},
  data() {
    return {
      files: [],
      loading: false,
      icon: 'mdi-forum',
      assignments: [
        {
          title: 'Research update',
          subtitle: 'some subtitle',
          viewUploadPoint: false

        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
