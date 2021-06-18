<template>
  <div>
    <v-card
      class="pa-2 mb-4"
      outlined
      elevation="0"
      shaped
    >
      <v-card-title>Upload your work</v-card-title>
        <div class="text-left">
          <v-file-input
            v-model="files"
            color="primary"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            @click="showSuccess=false"
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
          <v-container fluid>
            <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="select"
              :items="items"
              label="Choose a classmate to give you feedback"
              multiple
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
            </v-row>
          </v-container>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="blue-grey"
            class="ma-2 white--text"
            @click="updateSuccessStates()"
          >
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
          <v-icon color="primary" large v-show="showSuccess">mdi-check</v-icon>
        </div>

      <div v-if="isUploaded">
        <PeerStudySubmittedAssignments></PeerStudySubmittedAssignments>
      </div>
    </v-card>

  </div>

</template>

<script>
import PeerStudySubmittedAssignments from '@/components/peer-study/Peer-study-submitted-assignments'
export default {
  name: 'Peer-study-assignment-view',
  components: { PeerStudySubmittedAssignments },
  data () {
    return {
      files: [],
      loading: false,
      showSuccess: false,
      isUploaded: false,
      items: [
        'Yang',
        'Mykhailo'
      ],
      select: []
    }
  },
  methods: {
    updateSuccessStates () {
      this.isUploaded = true
      this.showSuccess = true
      console.log(this.isUploaded)
      console.log(this.showSuccess)
    }
  }
}
</script>

<style scoped>

</style>
