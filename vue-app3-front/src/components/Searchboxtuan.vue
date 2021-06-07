<template>
  <div>
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
          clearable
          prepend-icon="mdi-map-marker"

        ></v-text-field>
      </template>

    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      email: '',
      desserts: [
        {
          name: 'Keith Iqbal',
          email: 'keith@saxion',

        },
        {
          name: 'Tuan',
          email: 'tuan@saxion',

        },
        {
          name: 'Floor',
          email: 'floor@saxion',

        },
        {
          name: 'Cupcake',
          email: 305,

        },
        {
          name: 'Gingerbread',
          email: 356,

        },
        {
          name: 'Jelly bean',
          email: 375,

        },
        {
          name: 'Lollipop',
          email: 392,

        },
        {
          name: 'Honeycomb',
          email: 408,

        },
        {
          name: 'Donut',
          email: 452,

        },
        {
          name: 'KitKat',
          email: 518,

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
