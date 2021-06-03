<template>
  <v-app>
    <Header/>

    <v-main>
      <router-view/>
    </v-main>


    <Footer/>

  </v-app>
</template>

<script>

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {Header, Footer},
  data: () => ({
    //
  })
}
</script>
