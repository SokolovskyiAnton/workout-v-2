<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-brand class="mk" href="#">Workout</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <router-link tag="b-nav-item" to="/" exact active-class="active">Home</router-link>
      <router-link tag="b-nav-item" to="/list" active-class="active">List</router-link>
      <router-link tag="b-nav-item" to="/analytics" active-class="active">Analytics</router-link>
      <li class="b-nav-item"><a class="nav-link" @click.prevent="logout">Log out</a></li>

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('/login?message=logout')
      }
    }
  }
</script>

<style scoped>
</style>