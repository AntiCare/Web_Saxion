<template>
  <div>
   <div v-for="(assignment, idx) in ASSIGNMENTS" :key="idx">
     <PeerStudySubmittedAssignment v-bind:assignment="assignment" v-bind:index="idx" v-on:commented="updateState"></PeerStudySubmittedAssignment>
   </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import PeerStudySubmittedAssignment from "@/components/peer-study/Peer-study-submitted-assignment";

export default {
  name: 'Peer-study-submitted-assignments',
  components: {PeerStudySubmittedAssignment},
  computed: {
    ASSIGNMENTS() {
      return this.$store.state.course.peerStudy.submittedAssignments;
    }
  },
  data() {
    return {
      commented: false,
    }
  },
  methods: {
    ...mapMutations(['finishedPeerStudyAssignment']),
    updateState() {
      if (this.commented) return;
      this.commented = true;
      this.finishedPeerStudyAssignment()
    },
  },
  mounted() {
    this.$store.dispatch('fetchPeerStudySubmittedAssignments', {
      peerStudyId: 23
    });
  },
}
</script>

<style scoped>

</style>

