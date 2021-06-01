<template>

  <div>
    <v-card

      class="pa-2"
    >
      <!--    <v-toolbar-->
      <!--      color="cyan"-->
      <!--      dark-->
      <!--      flat-->
      <!--    >-->

      <!--      <template v-slot:extension>-->
      <v-tabs
        v-model="tab"
        align-with-title

        background-color="primary"
        center-active
        dark
      >
        <v-tabs-slider color="white"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <!--      </template>-->
      <!--    </v-toolbar>-->

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat>
            <v-card-text text="text">


            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>


      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              class="pa-2"
              outlined
              tile
            >
              <v-col
                cols="12"
                md="12"
              >
                <v-card
                  class="mx-auto"
                  width="256"
                >
                  <v-navigation-drawer
                    class="accent-4 secondary"
                    dark
                    permanent
                  >
                    <v-list>
                      <v-list-item
                        v-for="link in links"
                        :key="link.title"
                        link
                      >
                        <v-list-item-icon>
                          <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title>{{ link.title }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>


                  </v-navigation-drawer>
                </v-card>


              </v-col>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="8"
          >
            <v-card
              class="pa-2"
              outlined
              tile
            >
              <v-col
                cols="12"

              >
                <v-card
                  class="pa-2"
                  outlined
                  elevation="2"
                  outlined
                  shaped
                 color="primary"
                >
                  <v-card-title>Assignment 1</v-card-title>
                  <v-card-subtitle>urgent work</v-card-subtitle>
                  <v-card-text>For loops are like this</v-card-text>
                  <v-card-actions></v-card-actions>

                </v-card>
              </v-col>

              <v-col
                cols="12"

              >
                <v-card
                  class="pa-2"
                  outlined
                  elevation="2"
                  outlined
                  shaped
                  color="primary"
                >
                  <v-card-title>Assignment 2</v-card-title>
                  <v-card-subtitle>urgent work</v-card-subtitle>
                  <v-card-text>If statements are the stuff</v-card-text>
                  <v-card-actions></v-card-actions>

                </v-card>
              </v-col>


            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-card>


  </div>
</template>


<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        'Intro', 'Week 1', 'Week 2', 'Discussion', 'Extra',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      links: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Account', icon: 'mdi-account-box'},
        {title: 'Admin', icon: 'mdi-laptop'},
      ],

    }
  },
}
</script>
