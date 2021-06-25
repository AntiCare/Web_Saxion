<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary">
        <strong class="subheading">Welcome to Saxion University of Applied Sciences</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, idx) in icons"
          :key="'icon' + idx"
          class="mx-4"
          dark
          icon
          :href="icon.URL"
        >
          <v-icon size="24px">
            {{ icon.img }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>IT CORP Project 2.4 by Mykhalio & Yang</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        img: 'mdi-library',
        URL: 'https://saxionbibliotheek.nl/saxion-library-homepage/'
      },
      {
        img: 'mdi-google',
        URL: 'https://www.saxion.edu/'
      },
      {
        img: 'mdi-youtube',
        URL: 'https://www.youtube.com/user/SaxionHogescholen'
      }

    ]
  })
}
</script>

<style scoped>

</style>
