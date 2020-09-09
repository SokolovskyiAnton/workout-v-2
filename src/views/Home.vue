<template>
  <b-container>
    <SelectType v-show="step === 1" @selected="selected"/>
    <HomeTable v-show="step === 2" :names="namesObj"/>
  </b-container>
</template>

<script>
import SelectType from '../components/SelectType'
import HomeTable from '../components/HomeTable'
  export default {
    data() {
      return {
        step: 1,
        namesObj: {}
      }
    },
    metaInfo: {
      title: 'Home | Workout'
    },
    methods: {
      selected(select) {
        this.step = select.step
        this.namesObj = select.names
      }
    },
    components: {
      HomeTable,SelectType
    },
  }
</script>

<style scoped>
</style>