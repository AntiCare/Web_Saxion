<template>


  <v-card
    class="mx-auto my-4"
    max-width="500"
    height="70%"
    outlined
    shaped
  >
    <v-card-title>
      <v-icon
        left
      >
        mdi-finance
      </v-icon>
      <span class="text-h6 font-weight-light">Vaardigheden Paspoort</span>
    </v-card-title>
    <v-card-subtitle>Naga Baker 418136</v-card-subtitle>
    <div id="chart"> </div>

  </v-card>


</template>

<script>
import ApexCharts from 'apexcharts'

export default {
  name: "Spider",

  methods: {
    loadChart() {

      var options = {
        chart: {
          type: 'radar',
          width: '140%',
          offsetX: -100,
          offsetY: -45,
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          toolbar: {
            show: false
          },
        },
        fill: {
          colors: ['gray'],
        },
        dataLabels: {
          enabled: true,
          fill: {
            color: 'red'
          },
          style: {
            fontSize: '15px',
            colors: ['#039BE5']
          }
        },
        stroke: {
          show: true,
          colors: ['#40FFA7'],
        },
        markers: {
          enabled: false,
          size: 0,
          hover: {
            size: 10
          },
          colors: '#15A563',
          opacity: .5
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColors: '',
              fill: {
                colors: ['#f8f8f8', '#fff'],
              },
            },
          },

        },
        title: {
          subtitle: '487130'
        },
        series: [{
          name: 'Level',
          data: [8, 5, 3, 4, 10, 4, 5, 6, 9, 5],
        }],
        xaxis: {
          categories: ['English', 'Dutch', 'Presentation', 'ICT', 'Creative Technology', 'Communication', 'Onderhandelen', 'Conflict hank', 'Team Work', 'Kr. D']
          ,
          labels: {
            style: {
              colors: ['#15A563', '#15A563', '#15A563', '#15A563', '#15A563', '#15A563', '#15A563', '#15A563', '#15A563', '#15A563'],
              fontSize: '15px',
            }
          }
        },
        yaxis: {
          min: 0,
          max: 10
        },


      }

      var chart = new ApexCharts(document.querySelector("#chart"), options);

      chart.render();
    }
  },
  mounted: function () {
    this.loadChart();

  }

}


</script>


<style scoped>

</style>
