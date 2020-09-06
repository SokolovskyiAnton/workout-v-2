<template>
  <b-container>
      <input type="text" v-model="firstName">
      <input type="text" v-model="secondName">
      <input type="text" v-model="thirdName">
      <button @click="ok">1</button>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
          step: 1,
          firstName: '',
          secondName: '',
          thirdName: ''
      }
    },
    methods: {
        ok() {
            this.step++
            const obj =  {
                step: this.step,
                names: {
                    firstName: this.firstName,
                    secondName: this.secondName,
                    thirdName: this.thirdName,
                }
            }
            this.$emit('selected', obj)
        }
    }
  }
</script>

<style scoped>
</style>