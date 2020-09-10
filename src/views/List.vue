<template>
  <div>
    <Spinner v-if="spinner"/>
    <p v-else-if="!tables.length" class="text-center mt-5"> Здесь пока ничего нет...</p>
    <b-container v-else>

      <div v-for="table in newList" :key="table.id">
        <ListTable :obj="table"/>
      </div>
      
      <b-pagination-nav pills class="mt-4" align="center" v-model="currentPage" :page="newList" :link-gen="linkGen" :number-of-pages="rows" use-router></b-pagination-nav>
      

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
        currentPage: 1,
        rows: null
      }
    },
    metaInfo: {
      title: 'List | Workout'
    },
    async mounted() {
      const tables = await this.$store.dispatch('fetchTables')
      this.tables = tables.reverse()
      this.rows = Math.ceil(tables.length / this.perPage)
      this.spinner = false
    },
    components: {
      ListTable
    },
    computed: {
      newList() {
        const items = this.tables
        return items.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
      }
    },
    methods: {
      linkGen(pageNum) {
        const route = this.$route.path
        return `${route}?page=${pageNum}`
      }
    }
  }
</script>

<style scoped>
</style>