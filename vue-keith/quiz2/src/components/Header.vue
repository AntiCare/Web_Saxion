<template>
  <!-- <div>
    <b-nav tabs>
      <b-nav-item  href="/">Fancy Quiz App</b-nav-item>
      <b-nav-item disabled>Score of {{ numCorrect }} from {{ numTotal }} questions</b-nav-item>
    </b-nav>
  </div> -->

  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand href="/" class="mx-auto">
        Fancy Quiz App
      </b-navbar-brand>
    </b-navbar>
    <b-nav tabs class="mx-auto">
      <b-nav-item disabled
        >Score of {{ numCorrect }} from {{ numTotal }} questions</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"],
};
</script>
