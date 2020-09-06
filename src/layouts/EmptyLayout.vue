<template>
  <div class="empty-layout">
      <router-view/>
  </div>
</template>

<script>
import messages from '../utils/messages'
  export default {
    data() {
      return {
      }
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