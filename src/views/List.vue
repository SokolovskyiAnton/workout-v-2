<template>
  <div>
    <Spinner v-if="spinner"/>
    <p v-else-if="!tables.length" class="text-center mt-5"> Здесь пока ничего нет...</p>
    <b-container v-else>

      <div v-for="table in lists" :key="table.id">
        <ListTable :obj="table"/>
      </div>
      
        
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
        pills
        class="mt-5"
      ></b-pagination>

    </b-container>
  </div>
</template>

<script>
  import ListTable from '../components/ListTable'
  export default {
    data() {
      return {
        spinner: true,
        tables: [],
        perPage: 2,
        currentPage: 1
      }
    },
    async mounted() {
      this.tables = await this.$store.dispatch('fetchTables')
      this.spinner = false
    },
    components: {
      ListTable
    },
    computed: {
      lists() {
        const items = this.tables
        return items.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        )
      },
      rows() {
        return this.tables.length
      }
    }
  }
</script>

<style scoped>
</style>