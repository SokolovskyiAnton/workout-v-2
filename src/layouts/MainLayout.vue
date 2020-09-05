<template>
  <div class="main-layout">
      <Navbar/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
  export default {
    data() {
      return {
      }
    },
    components: {
        Navbar
    }
  }
</script>

<style scoped>
</style>