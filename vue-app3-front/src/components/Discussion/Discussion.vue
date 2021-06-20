<template>
  <v-tab-item>

    <v-card>
      <v-tabs vertical>
        <v-tab>
          <v-icon left>
            mdi-message-draw
          </v-icon>
          Homework
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-help-circle
          </v-icon>
          Questions
        </v-tab>

        <v-tab-item>
          <v-container>
            <v-timeline
              dense
              clipped
            >
              <v-timeline-item
                fill-dot
                class="white--text mb-12"
                color="primary"
                large
              >
                <template v-slot:icon>
                  <span>YC</span>
                </template>
                <v-text-field
                  background-color="primary"
                  v-model="input"
                  hide-details
                  flat
                  label="Enter comments here"
                  solo
                  @keydown.enter="comment"
                >
                  <template v-slot:append>
                    <v-btn
                      class="mx-0 "
                      depressed
                      @click="comment"
                      color="white"
                    >
                      Send
                    </v-btn>
                  </template>
                </v-text-field>
              </v-timeline-item>

              <v-slide-x-transition
                group
              >
                <v-timeline-item
                  v-for="(event, idx) in timeline"
                  :key="'event' + idx"
                  class="mb-4"
                  Medium
                >
                  <template v-slot:icon>
                    <span class="white--text">YC</span>
                  </template>
                  <v-row justify="space-between">
                    <v-col
                      cols="7"
                      v-text="event.text"
                    ></v-col>
                    <v-col
                      class="text-right"
                      cols="5"
                      v-text="event.time"
                    ></v-col>
                  </v-row>
                </v-timeline-item>
              </v-slide-x-transition>
            </v-timeline>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container>
            <v-timeline
              dense
              clipped
            >
              <v-timeline-item
                fill-dot
                class="white--text mb-12"
                color="primary"
                large
              >
                <template v-slot:icon>
                  <span>YC</span>
                </template>
                <v-text-field
                  background-color="primary"
                  v-model="input2"
                  hide-details
                  flat
                  label="Enter comments here"
                  solo
                  @keydown.enter="comment2"
                >
                  <template v-slot:append>
                    <v-btn
                      class="mx-0 "
                      depressed
                      @click="comment2"
                      color="white"
                    >
                      Send
                    </v-btn>
                  </template>
                </v-text-field>
              </v-timeline-item>

              <v-slide-x-transition
                group
              >
                <v-timeline-item
                  v-for="event2 in timeline2"
                  :key="event2.id"
                  class="mb-4"
                  Medium
                >
                  <template v-slot:icon>
                    <span class="white--text">YC</span>
                  </template>
                  <v-row justify="space-between">
                    <v-col
                      cols="7"
                      v-text="event2.text"
                    ></v-col>
                    <v-col
                      class="text-right"
                      cols="5"
                      v-text="event2.time"
                    ></v-col>
                  </v-row>
                </v-timeline-item>
              </v-slide-x-transition>
            </v-timeline>
          </v-container>

        </v-tab-item>
      </v-tabs>
    </v-card>

  </v-tab-item>
</template>

<script>
export default {
  name: "Discussion",
  data () {
    return {
      events2: [],
      input2: null,
      nonce2: 0,
      events: [],
      input: null,
      nonce: 0,
    }
  },
  computed: {
    timeline() {
      return this.events.slice().reverse()
    },
    timeline2() {
      return this.events2.slice().reverse()
    }
  },
  methods: {
    comment() {
      const time = (new Date()).toTimeString()
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        })
      })
      this.input = null
    },
    comment2() {
      const time = (new Date()).toTimeString()
      this.events2.push({
        id: this.nonce2++,
        text: this.input2,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
        })
      })

      this.input = null
    }
  }
}
</script>

<style scoped>

</style>
