<template>
  <div class="card card__home-page schedule-card">
    <div class="card__heading">
      Schedule
    </div>
    <div class="schedule__inner" id="schedule__inner">
    </div>
    <a href="#" class="card__btn">See entire schedule</a>
  </div>
</template>

<script>
export default {
  name: 'Schedule-card',
  mounted () {
    this.getSchedule()
  },
  methods: {
    // get the grades.
    getSchedule: function () {
      // use fetch to get data.
      fetch('http://localhost:3000/api/schedule', {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          // get the respond from backend.
          console.log(data)
          if (data !== null) {
            // console.log(data.length)
            var scheduleBox = document.getElementById('schedule__inner')
            for (let i = 0; i < data.length; i++) {
              var scheduleItem = document.createElement('div')
              var time = document.createElement('div')
              var course = document.createElement('div')

              scheduleItem.className = 'schedule-item'
              time.className = 'schedule__time'
              course.className = 'schedule__subject'

              time.innerHTML = data[i].H.toString() + ':' + data[i].M.toString() + (data[i].H <= 12 ? 'am' : 'pm')
              course.innerHTML = data[i].course_name.toString()
              scheduleItem.appendChild(time)
              scheduleItem.appendChild(course)
              scheduleBox.appendChild(scheduleItem)
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
