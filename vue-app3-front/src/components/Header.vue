<template>

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
      to="/"
      text
      color=""
    >
      <v-icon color="primary">mdi-open-in-new</v-icon>
    </v-btn>


    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color=""
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="primary">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    items: [
      {title: 'Settings'},
      {title: 'Log out'},
    ],
  }),


}
</script>

<style scoped>

</style>
