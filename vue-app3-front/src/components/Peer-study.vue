<template>
  <div>
    <div v-for="( assignment, idx ) in assignments">
      <PeerStudyAssignment v-bind:assignment="assignment" v-bind:index="idx"></PeerStudyAssignment>
    </div>
  </div>
</template>

<script>
import PeerStudyAssignmentView from "@/components/peer-study/Peer-study-assignment-view";
import PeerStudyAssignment from "@/components/peer-study/Peer-study-assignment-preview";
import {mapMutations} from "vuex";

export default {
  name: "Peer-study",
  components: {PeerStudyAssignment, PeerStudyAssignmentView},
  mounted() {
    this.updatePeerStudyAssignmentAmount(this.assignments.length);
  },
  methods: {
    ...mapMutations([
      'updatePeerStudyAssignmentAmount'
    ])
  },
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

        },
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
