<template>
  <v-card
    class="pa-2 mb-4"
    outlined
    elevation="0"
    :disabled="allowedToDoAssignment"
    shaped
  >
    <v-card-title>{{ assignment.title }}</v-card-title>
    <v-card-subtitle>{{ assignment.subtitle }}</v-card-subtitle>
    <v-btn
      color="primary"
      text
      @click="viewUploadPoint = true"
    >
      VIEW
    </v-btn>
    <div v-if="viewUploadPoint === true">
      <PeerStudyAssignmentView></PeerStudyAssignmentView>
    </div>
  </v-card>
</template>

<script>
import PeerStudyAssignmentView from "@/components/peer-study/Peer-study-assignment-view";

export default {
  name: "Peer-study-assignment-preview",
  components: {PeerStudyAssignmentView},
  props: ['assignment', 'index'],
  data() {
    return {
      files: [],
      loading: false,
      viewUploadPoint: false
    }
  },
  computed: {
    allowedToDoAssignment() {
      return this.$store.getters.allowedToDoAssignment(this.$props.index)
    }
  }
}
</script>

<style scoped>

</style>
