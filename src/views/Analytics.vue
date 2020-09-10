<template>
  <b-container>
    <Spinner v-if="spinner"/>
    <canvas ref="canvas"></canvas>
  </b-container>
</template>

<script>
import {Line} from 'vue-chartjs'
import {NewLine} from '../charts/main.chart'
import dateFilter from '@/filters/date.filter'
export default {
  data() {
    return {
      spinner: true,
      tables: [],
      colors: ['red','blue','aqua', 'brown']
    }
  },
  extends: Line,
  metaInfo: {
    title: 'Analytics | Workout'
  },
  async mounted() {
    const tables = await this.$store.dispatch('fetchTables')
    this.tables = tables
    this.renderChart({labels: this.lables, datasets: this.chart})
    this.spinner = false  
  },
  computed: {
    chart() {
      const data = this.tables
      const names = [] // массив названий упражнений
      const arr = [] // массив классов
      
      for (let obj of data) {
        const namesArray = Object.values(obj.names) // названия упражнений
        const sumFirstExerciseOfMonth = function() {
          const fitstWeek = +obj.firstWeek.monday.firstExse + +obj.firstWeek.wednesday.firstExse + +obj.firstWeek.friday.firstExse
          const secondWeek = +obj.secondWeek.monday.firstExse + +obj.secondWeek.wednesday.firstExse + +obj.secondWeek.friday.firstExse
          const thirdWeek = +obj.thirdWeek.monday.firstExse + +obj.thirdWeek.wednesday.firstExse + +obj.thirdWeek.friday.firstExse
          const fourthWeek = +obj.fourthWeek.monday.firstExse + +obj.fourthWeek.wednesday.firstExse + +obj.fourthWeek.friday.firstExse
          return fitstWeek + secondWeek + thirdWeek + fourthWeek
        }
        const sumSecondExerciseOfMonth = function() {
          const fitstWeek = +obj.firstWeek.monday.secondExse + +obj.firstWeek.wednesday.secondExse + +obj.firstWeek.friday.secondExse
          const secondWeek = +obj.secondWeek.monday.secondExse + +obj.secondWeek.wednesday.secondExse + +obj.secondWeek.friday.secondExse
          const thirdWeek = +obj.thirdWeek.monday.secondExse + +obj.thirdWeek.wednesday.secondExse + +obj.thirdWeek.friday.secondExse
          const fourthWeek = +obj.fourthWeek.monday.secondExse + +obj.fourthWeek.wednesday.secondExse + +obj.fourthWeek.friday.secondExse
          return fitstWeek + secondWeek + thirdWeek + fourthWeek
        }
        const sumThirdExerciseOfMonth = function() {
          const fitstWeek = +obj.firstWeek.monday.thirdExse + +obj.firstWeek.wednesday.thirdExse + +obj.firstWeek.friday.thirdExse
          const secondWeek = +obj.secondWeek.monday.thirdExse + +obj.secondWeek.wednesday.thirdExse + +obj.secondWeek.friday.thirdExse
          const thirdWeek = +obj.thirdWeek.monday.thirdExse + +obj.thirdWeek.wednesday.thirdExse + +obj.thirdWeek.friday.thirdExse
          const fourthWeek = +obj.fourthWeek.monday.thirdExse + +obj.fourthWeek.wednesday.thirdExse + +obj.fourthWeek.friday.thirdExse
          return fitstWeek + secondWeek + thirdWeek + fourthWeek
        }
        const arrFunctions = [sumFirstExerciseOfMonth(),sumSecondExerciseOfMonth(),sumThirdExerciseOfMonth()]

        for (let i = 0; i < namesArray.length; i++) {
          const nameExercise = names.find(item => namesArray[i] === item)
          if (nameExercise === undefined) {
            names.push(namesArray[i])

            const sum = [{x: dateFilter(obj.date) ,y:arrFunctions[i]}]
           
            arr.push(new NewLine(namesArray[i], this.colors[i], sum))

          } else if (nameExercise) {
            const itemName = arr.find(item => item.label === namesArray[i])

            const sum = {x: dateFilter(obj.date) ,y:arrFunctions[i]}
            
            itemName.data.push(sum)
          }
        }
      }
      console.log(arr);
      return arr
    },
    lables() {
      const lables = ["Jul","Aug","Sept","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept"]
      return lables
    }
  }
}
</script>

<style scoped>
</style>
