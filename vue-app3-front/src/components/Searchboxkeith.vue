<template>
  <div>
    <v-data-table

      aria-placeholder="red"
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"

          background-color="grey"


        ></v-text-field>
      </template>


    </v-data-table>





  </div>
</template>

<script>
export default {
  name: "Searchboxkeith",
  data() {
    return {
      search: '',
      email: '',
      desserts: [
        {
          name: 'Dick Heijn',
          email: 'Dick@saxion.nl',
        },
        {
          name: 'Fluer Weinman',
          email: 'fleur@saxion.nl',
        },
        {
          name: 'Tuan V',
          email: '487845@student.saxion.nl',
        },
        {
          name: 'Sefania H',
          email: '6666@student.saxion.nl',
        },
        {
          name: 'Yang Ying',
          email: '5555@student.saxion.nl',
        },




      ],
    }
  },
  computed: {
    headers() {
      return [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',

        },


      ]
    },
  },
  methods: {
    filterOnlyCapsText(value, search, item) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
  },

}
</script>

<style scoped>

</style>
