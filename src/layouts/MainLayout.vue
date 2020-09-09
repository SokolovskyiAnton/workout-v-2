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
    },
    computed: {
        error() {
          return this.$store.getters.error
        }
    },
    watch: {
        error(err) {
            this.$error(messages[err.code] || 'Что-то пошло не так') // при изменении геттера вызывается плагин эррор
        }
    }
  }
</script>

<style scoped>
</style>