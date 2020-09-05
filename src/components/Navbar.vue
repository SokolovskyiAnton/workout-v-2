<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-brand class="mk" href="#">NavBar</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <router-link tag="b-nav-item" to="/" exact active-class="active">Home</router-link>
      <router-link tag="b-nav-item" to="/list" active-class="active">List</router-link>
      <router-link tag="b-nav-item" to="/analytics" active-class="active">Analytics</router-link>

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
</style>