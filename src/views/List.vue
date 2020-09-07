<template>
  <div>
    <Spinner v-if="spinner"/>
    <b-container>
      <div v-for="table in tables" :key="table.id">
        <ListTable :obj="table"/>
      </div>
    </b-container>
  </div>
</template>

<script>
  import ListTable from '../components/ListTable'
  export default {
    data() {
      return {
        spinner: true,
        tables: []
      }
    },
    async mounted() {
      this.tables = await this.$store.dispatch('fetchTables')
      this.spinner = false
    },
    components: {
      ListTable
    }
  }
</script>

<style scoped>
</style>