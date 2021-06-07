<template>
  <v-card
    class="mx-auto my-4"
    max-width="344"
  >
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      loading
      loading-text="Loading... Please wait"

    >
      <template v-slot:top>

        <v-card-title>Finder</v-card-title>
        <v-text-field

          v-model="search"
          label="   Search   "
          class="mx-4"
          background-color="grey"
          clearable
          append-icon="mdi-magnify"

        ></v-text-field>
      </template>

    </v-data-table>
  </v-card>
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
          name: "Joaquin",
          "email": "jkobus0@reverbnation.com"
        }, {
          name: "Elka",
          "email": "egillespie1@tripod.com"
        }, {
          name: "Francklin",
          "email": "fdunlop2@linkedin.com"
        }, {
          name: "Latisha",
          "email": "ldanko3@oakley.com"
        }, {
          name: "Dulsea",
          "email": "dcicccitti4@rambler.ru"
        }, {
          name: "Sharon",
          "email": "smcmillan5@goo.ne.jp"
        }, {
          name: "Mahmoud",
          "email": "mallward6@usnews.com"
        }, {
          name: "Ferdinanda",
          "email": "fkiloh7@arizona.edu"
        }, {
          name: "Dedie",
          "email": "drentoll8@devhub.com"
        }, {
          name: "Enid",
          "email": "eflintoffe9@mapy.cz"
        }, {
          name: "Madonna",
          "email": "mgoldera@nytimes.com"
        }, {
          name: "Jeanine",
          "email": "jbresnenb@weibo.com"
        }, {
          name: "Obadiah",
          "email": "oettlesc@behance.net"
        }, {
          name: "Boniface",
          "email": "bbugged@rediff.com"
        }, {
          name: "Avie",
          "email": "abeckleye@canalblog.com"
        }, {
          name: "Edwina",
          "email": "egorbellf@jiathis.com"
        }, {
          name: "Ker",
          "email": "kneasamg@admin.ch"
        }, {
          name: "Rica",
          "email": "reglintonh@skyrock.com"
        }, {
          name: "Janka",
          "email": "jwebberi@springer.com"
        }, {
          name: "Pacorro",
          "email": "pmityushkinj@tuttocitta.it"
        }, {
          name: "Zebulon",
          "email": "zmacnessk@mozilla.com"
        }, {
          name: "Eda",
          "email": "egoddingl@senate.gov"
        }, {
          name: "Bryn",
          "email": "blingerm@yellowpages.com"
        }, {
          name: "Hildegarde",
          "email": "hsarvarn@macromedia.com"
        }, {
          name: "Wes",
          "email": "wgronewayo@oakley.com"
        }, {
          name: "Harwilll",
          "email": "hspollenp@typepad.com"
        }, {
          name: "Irvine",
          "email": "icorkettq@virginia.edu"
        }, {
          name: "Godfrey",
          "email": "gheardr@utexas.edu"
        }, {
          name: "Raina",
          "email": "rrolstones@tamu.edu"
        }, {
          name: "Brinn",
          "email": "bdorant@cnn.com"
        }, {
          name: "Chelsae",
          "email": "cgianettiu@cbc.ca"
        }, {
          name: "Latia",
          "email": "lharmerv@homestead.com"
        }, {
          name: "Karyn",
          "email": "kwharramw@illinois.edu"
        }, {
          name: "Wallie",
          "email": "wfritterx@yolasite.com"
        }, {
          name: "Cullin",
          "email": "cbouzany@ifeng.com"
        }, {
          name: "Fanya",
          "email": "fashlinz@census.gov"
        }, {
          name: "Ladonna",
          "email": "lkerrane10@gmpg.org"
        }, {
          name: "Jdavie",
          "email": "jrealph11@google.ca"
        }, {
          name: "Modestia",
          "email": "mmcdonagh12@sbwire.com"
        }, {
          name: "Meagan",
          "email": "mpritchard13@yale.edu"
        }, {
          name: "Paddy",
          "email": "pinkin14@nba.com"
        }, {
          name: "Roley",
          "email": "rvedekhov15@mediafire.com"
        }, {
          name: "Paolo",
          "email": "pchatwin16@cisco.com"
        }, {
          name: "Weber",
          "email": "wvignaux17@histats.com"
        }, {
          name: "Tymothy",
          "email": "tyakubovics18@howstuffworks.com"
        }, {
          name: "Morse",
          "email": "mmackean19@wufoo.com"
        }, {
          name: "Gordan",
          "email": "gcastaneda1a@mapquest.com"
        }, {
          name: "Reagan",
          "email": "rmayling1b@ow.ly"
        }, {
          name: "Eleanora",
          "email": "edollard1c@stanford.edu"
        }, {
          name: "Ignace",
          "email": "idemaid1d@google.fr"
        }, {
          name: "Gerrilee",
          "email": "gcrannis1e@people.com.cn"
        }, {
          name: "Lennard",
          "email": "lvassall1f@cbc.ca"
        }, {
          name: "Debbie",
          "email": "dpochet1g@networkadvertising.org"
        }, {
          name: "Russell",
          "email": "rdoran1h@amazon.co.jp"
        }, {
          name: "Shawn",
          "email": "smclevie1i@telegraph.co.uk"
        }, {
          name: "Gill",
          "email": "gtitcombe1j@networksolutions.com"
        }, {
          name: "Cairistiona",
          "email": "cenders1k@craigslist.org"
        }, {
          name: "Nata",
          "email": "nmccormack1l@bbc.co.uk"
        }, {
          name: "Levon",
          "email": "ljiroutek1m@diigo.com"
        }, {
          name: "Delcine",
          "email": "dflye1n@wisc.edu"
        }, {
          name: "Brynn",
          "email": "brisbie1o@blogs.com"
        }, {
          name: "Marin",
          "email": "mclementson1p@nasa.gov"
        }, {
          name: "Delaney",
          "email": "dweymouth1q@cbslocal.com"
        }, {
          name: "Margi",
          "email": "mromaynes1r@purevolume.com"
        }, {
          name: "Brade",
          "email": "bholsey1s@ucoz.com"
        }, {
          name: "Burke",
          "email": "bmccloughen1t@bluehost.com"
        }, {
          name: "Filberto",
          "email": "fmabley1u@patch.com"
        }, {
          name: "Vernor",
          "email": "vmepsted1v@ycombinator.com"
        }, {
          name: "Gwen",
          "email": "grodden1w@github.io"
        }, {
          name: "Zachary",
          "email": "zwrefford1x@npr.org"
        }, {
          name: "Estele",
          "email": "ecozins1y@arizona.edu"
        }, {
          name: "Minni",
          "email": "mhovert1z@weather.com"
        }, {
          name: "Elvina",
          "email": "edanes20@booking.com"
        }, {
          name: "Adlai",
          "email": "agossop21@webeden.co.uk"
        }, {
          name: "Betti",
          "email": "bmuckart22@spotify.com"
        }, {
          name: "Arty",
          "email": "abattie23@digg.com"
        }, {
          name: "Egon",
          "email": "egayter24@joomla.org"
        }, {
          name: "Tanner",
          "email": "tgroome25@cam.ac.uk"
        }, {
          name: "Darn",
          "email": "dblaksland26@phpbb.com"
        }, {
          name: "Roarke",
          "email": "reccott27@yelp.com"
        }, {
          name: "Revkah",
          "email": "rpetch28@cisco.com"
        }, {
          name: "Eldredge",
          "email": "eeberle29@tamu.edu"
        }, {
          name: "Vittoria",
          "email": "vdulson2a@github.com"
        }, {
          name: "Amata",
          "email": "aparadis2b@usa.gov"
        }, {
          name: "Yolanda",
          "email": "ybrettell2c@nps.gov"
        }, {
          name: "Bjorn",
          "email": "bwoods2d@oracle.com"
        }, {
          name: "Regan",
          "email": "rcandlin2e@mashable.com"
        }, {
          name: "Egbert",
          "email": "ehutchcraft2f@desdev.cn"
        }, {
          name: "Nikita",
          "email": "npepineaux2g@umn.edu"
        }, {
          name: "Hugo",
          "email": "hpizey2h@uol.com.br"
        }, {
          name: "Renaldo",
          "email": "rfalk2i@fotki.com"
        }, {
          name: "Mandi",
          "email": "mwrightson2j@unicef.org"
        }, {
          name: "Casey",
          "email": "cglastonbury2k@google.co.uk"
        }, {
          name: "Udale",
          "email": "ufrance2l@digg.com"
        }, {
          name: "Johnnie",
          "email": "jgouldbourn2m@tumblr.com"
        }, {
          name: "Emili",
          "email": "ebartke2n@amazonaws.com"
        }, {
          name: "Shaylynn",
          "email": "sshitliffe2o@csmonitor.com"
        }, {
          name: "Rora",
          "email": "rcalveley2p@yahoo.com"
        }, {
          name: "Nichol",
          "email": "nemtage2q@acquirethisname.com"
        }, {
          name: "Tirrell",
          "email": "tgrzelak2r@nytimes.com"
        }
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
