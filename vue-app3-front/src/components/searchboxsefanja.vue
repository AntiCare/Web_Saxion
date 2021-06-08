<template>
  <div>
    <p class="font-weight-black">
    <v-data-table
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
    </p>
  </div>
</template>
<script>
export default {
  name: "searchboxsefanja",
  data () {
    return {
      search: '',
      email: '',
      desserts: [
        {
          name: 'Dick',
          email: 'dick458@saxion.nl',
        },
        {
          name: 'Floor Weijeman',
          email: 'floor782@saxion.nl',
        },
        {
          name: 'Sefanja de Hoon',
          email: '418136@student.saxion.nl',
        },
        {
          name: 'Tuan Nguyen',
          email: '288733@student.saxion.nl',
        },
        {
          name: 'Naga',
          email: 'naga@student.saxion.nl',
        },
      ],
    }
  },
  computed: {
    headers () {
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
    filterOnlyCapsText (value, search, item) {
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
