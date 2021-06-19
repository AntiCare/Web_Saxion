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


      <!--  <div class="text-left">-->
      <!--    <v-file-input-->
      <!--        color="primary"-->
      <!--        counter-->
      <!--        label="File input"-->
      <!--        multiple-->
      <!--        placeholder="Select your files"-->
      <!--        prepend-icon="mdi-paperclip"-->
      <!--        outlined-->
      <!--        :show-size="1000"-->
      <!--        @click="ShowSuccess=false"-->
      <!--    >-->
      <!--      <template v-slot:selection="{ index, text }">-->
      <!--        <v-chip-->
      <!--            v-if="index < 2"-->
      <!--            color="primary"-->
      <!--            dark-->
      <!--            label-->
      <!--            small-->
      <!--        >-->
      <!--          {{ text }}-->
      <!--        </v-chip>-->

      <!--        <span-->
      <!--            v-else-if="index === 2"-->
      <!--            class="text-overline grey&#45;&#45;text text&#45;&#45;darken-3 mx-2"-->
      <!--        >-->
      <!--                         +{{ files.length - 2 }} File(s)-->
      <!--                      </span>-->
      <!--      </template>-->
      <!--    </v-file-input>-->
      <!--    &lt;!&ndash;upload button&ndash;&gt;-->
      <!--    <v-btn-->
      <!--        :loading="loading3"-->
      <!--        :disabled="loading3"-->
      <!--        color="blue-grey"-->
      <!--        class="ma-2 white&#45;&#45;text"-->
      <!--        @click="ShowSuccess=true"-->
      <!--    >-->
      <!--      Upload-->
      <!--      <v-icon right dark>mdi-cloud-upload</v-icon>-->
      <!--    </v-btn>-->
      <!--    <v-icon color="primary" large v-show="ShowSuccess">mdi-check</v-icon>-->
      <!--  </div>-->
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
