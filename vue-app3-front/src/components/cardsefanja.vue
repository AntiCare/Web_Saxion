<template>
  <v-card
    class="mx-auto my-4"
    max-width="344"
    outlined
  >
    <v-card-title>
      <span class="text-h6 font-weight-light">Find</span>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          class="mx-4"
          background-color="grey"
        ></v-text-field>

      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "cardsefanja",
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
          name: 'Floor',
          email: 'floor782@saxion.nl',
        },
        {
          name: 'Sefanja',
          email: '418136@student.saxion.nl',
        },
        {
          name: 'Tuan',
          email: '288733@student.saxion.nl',
        },
        {
          name: 'Naga',
          email: 'naga@student.saxion.nl',
        },
        {
          "name": "Corbet",
          "email": "cperon0@homestead.com"
        }, {
          "name": "Andras",
          "email": "ataunton1@dmoz.org"
        }, {
          "name": "Etheline",
          "email": "elanigan2@shinystat.com"
        }, {
          "name": "Menard",
          "email": "mnorrey3@nyu.edu"
        }, {
          "name": "Roderigo",
          "email": "rmcgennis4@huffingtonpost.com"
        }, {
          "name": "Drusi",
          "email": "dcobelli5@simplemachines.org"
        }, {
          "name": "Elset",
          "email": "ehydes6@w3.org"
        }, {
          "name": "Sayer",
          "email": "sgreensitt7@unesco.org"
        }, {
          "name": "Justino",
          "email": "jkilliam8@sitemeter.com"
        }, {
          "name": "Witty",
          "email": "wharlett9@cpanel.net"
        }, {
          "name": "Juditha",
          "email": "jcorbiea@quantcast.com"
        }, {
          "name": "Whitman",
          "email": "wbromellb@technorati.com"
        }, {
          "name": "Yul",
          "email": "yhingec@smugmug.com"
        }, {
          "name": "Bruce",
          "email": "bpennazzid@barnesandnoble.com"
        }, {
          "name": "Kenna",
          "email": "kmacclanceye@washingtonpost.com"
        }, {
          "name": "Hardy",
          "email": "hchaplinf@gov.uk"
        }, {
          "name": "Sile",
          "email": "shughsong@buzzfeed.com"
        }, {
          "name": "Clifford",
          "email": "cspeckh@bandcamp.com"
        }, {
          "name": "Marice",
          "email": "msacksi@bloglovin.com"
        }, {
          "name": "Cullan",
          "email": "cgwalterj@gizmodo.com"
        }, {
          "name": "Ramona",
          "email": "rcodnerk@jiathis.com"
        }, {
          "name": "Saleem",
          "email": "sharlickl@devhub.com"
        }, {
          "name": "Perle",
          "email": "pkettridgem@who.int"
        }, {
          "name": "Jessie",
          "email": "jcaudwelln@a8.net"
        }, {
          "name": "Morgen",
          "email": "mbaffordo@senate.gov"
        }, {
          "name": "Carly",
          "email": "cboristonp@usatoday.com"
        }, {
          "name": "Alison",
          "email": "abriscoeq@mozilla.org"
        }, {
          "name": "Elizabeth",
          "email": "eglenwrightr@a8.net"
        }, {
          "name": "Bogey",
          "email": "bwhittingtons@barnesandnoble.com"
        }, {
          "name": "Farrell",
          "email": "fargot@csmonitor.com"
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
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',
        },
      ]
    },
  },

}
</script>

<style scoped>

</style>
