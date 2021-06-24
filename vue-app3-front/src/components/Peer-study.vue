<template>
  <div>
    <div v-for="( assignment, idx ) in ASSIGNMENTS">
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
    this.$store.dispatch('fetchPeerStudyAssignments');
  },
  computed: {
    ASSIGNMENTS() {
      return this.$store.state.course.peerStudy.assignments
    }
  },
  methods: {
    ...mapMutations([
      'setPeerStudiesAmount',
    ])
  },
  data() {
    return {
      files: [],
      loading: false,
      icon: 'mdi-forum',
    }
  }
}
</script>

<style scoped>

</style>
