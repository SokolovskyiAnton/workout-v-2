<template>
  <div class="list mt-5 text-center">
      <h3>{{obj.firstWeek.date | date}}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['obj']
  }
</script>

<style scoped>
</style>