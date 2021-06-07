<template>
  <v-card
    class="mx-auto my-4"
    max-width="400"

  >


    <v-data-table

      aria-placeholder="red"
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      loading
      loading-text="Loading... Please wait"

    >


      <template v-slot:top>

        <v-card-title>Find</v-card-title>

        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
          append-icon="mdi-magnify"

          background-color="grey"

        ></v-text-field>
      </template>


    </v-data-table>


  </v-card>
</template>

<script>
export default {
  name: "Cardkeith",
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
          name: "Brit",
          email: "blavers0@blogspot.com"
        }, {
          name: "Derron",
          email: "dcoppen1@printfriendly.com"
        }, {
          name: "Kimmie",
          email: "kchill2@odnoklassniki.ru"
        }, {
          name: "Sharleen",
          email: "scolliss3@msu.edu"
        }, {
          name: "Nadiya",
          email: "nneath4@123-reg.co.uk"
        }, {
          name: "Claudio",
          email: "csnoad5@google.co.uk"
        }, {
          name: "Sophronia",
          email: "sarrowsmith6@google.co.uk"
        }, {
          name: "Talbert",
          email: "tbrailsford7@msu.edu"
        }, {
          name: "Bucky",
          email: "bbote8@trellian.com"
        }, {
          name: "West",
          email: "wfourcade9@hugedomains.com"
        }, {
          name: "Sly",
          email: "ssollanda@prweb.com"
        }, {
          name: "Shellie",
          email: "svainb@vk.com"
        }, {
          name: "Midge",
          email: "mrylettc@foxnews.com"
        }, {
          name: "Hill",
          email: "htideswelld@telegraph.co.uk"
        }, {
          name: "Gene",
          email: "goluwatoyine@cbslocal.com"
        }, {
          name: "Darrel",
          email: "debbinf@dion.ne.jp"
        }, {
          name: "Jessika",
          email: "jibbitsong@cyberchimps.com"
        }, {
          name: "Alberta",
          email: "aragdaleh@huffingtonpost.com"
        }, {
          name: "Sherry",
          email: "sdoultoni@state.gov"
        }, {
          name: "Hersch",
          email: "hhartzogj@utexas.edu"
        }, {
          name: "Alfy",
          email: "alentk@yahoo.co.jp"
        }, {
          name: "Hester",
          email: "hdampierl@plala.or.jp"
        }, {
          name: "Adan",
          email: "apepism@thetimes.co.uk"
        }, {
          name: "Fulton",
          email: "flowlesn@bing.com"
        }, {
          name: "Reese",
          email: "rfranciottoio@alibaba.com"
        }, {
          name: "Joshia",
          email: "jcastagnap@baidu.com"
        }, {
          name: "Ben",
          email: "bludyq@imdb.com"
        }, {
          name: "Cheston",
          email: "ckaliszr@google.ru"
        }, {
          name: "Dede",
          email: "dmatresses@goo.gl"
        }, {
          name: "Pascal",
          email: "pcottlet@latimes.com"
        }, {
          name: "Wolfie",
          email: "wwoodworthu@about.com"
        }, {
          name: "Elia",
          email: "eragbournev@etsy.com"
        }, {
          name: "Almeria",
          email: "adunnanw@com.com"
        }, {
          name: "Rana",
          email: "rdundinx@360.cn"
        }, {
          name: "Chick",
          email: "chilaryy@digg.com"
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
          sortable: true,
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

  },

}
</script>

<style scoped>

</style>
