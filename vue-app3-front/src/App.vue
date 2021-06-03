<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">


        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/saxion-logo.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/home"
        text
        color="primary"
      >
        <span class="mr-2">Student Portal</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>



<Footer/>

  </v-app>
</template>

<script>

import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer},
  data: () => ({
    //
  })
}
</script>
