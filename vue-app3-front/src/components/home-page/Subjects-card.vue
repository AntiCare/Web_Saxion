<template>
  <div class="card card__subjects" id="subjects" >
    <div class="card__heading">
      Subjects
    </div>
    <div class="subjects-quartiles">
      Q1 | Q2 | Q3 | Q4
    </div>
  </div>
</template>

<script>
export default {
  name: 'subjects-card',
  mounted () {
    this.getSubjects()
  },
  methods: {
    // get the grades.
    getSubjects: function () {
      // use fetch to get data.
      fetch('http://localhost:3000/api/subjects', {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          // get the respond from backend.
          console.log(data)
          if (data !== null) {
            // console.log(data.length)
            var subjects = document.getElementById('subjects')
            for (let i = 0; i < data.length; i++) {
              var subject = document.createElement('a')
              subject.className = 'subject-item'
              subject.innerHTML = data[i].subject_name.toString()
              if (data[i].subject_name.toString() === 'Introduction to programming') {
                subject.href = 'assignment3'
              }
              subjects.appendChild(subject)
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
