<template>
  <div id="chart">

  </div>
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

        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          show: true,
          colors: ['#18D980'],
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
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff'],
              },
            },
          },

        },
        title: {
          text: 'Vaardighedenpaspoort',
          subtitle: '487130'
        },
        series: [{
          name: 'Level',
          data: [8, 5, 3, 4, 10, 4, 5, 6, 9, 5],
        }],
        xaxis: {
          categories: ['English', 'Dutch', 'Presentation', 'ICT', 'Creative Technology', 'Gespre', 'Onderh.', 'Conflict hank', 'Team Work', 'Kr. D']
          ,
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
