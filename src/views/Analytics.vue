<template>
  <b-container>
    <Spinner v-if="spinner"/>
    <canvas ref="canvas"></canvas>
  </b-container>
</template>

<script>
import {Line} from 'vue-chartjs'
  export default {
    data() {
    return {
      spinner: true,
      tables: []
    }
  },
  extends: Line,
  metaInfo: {
    title: 'Analytics | Workout'
  },
  async mounted() {
    const tables = await this.$store.dispatch('fetchTables')
    this.tables = tables
    this.renderChart({
        labels: ["Июль","Август","Сентябрь","Октябрь","Ноябпь","Декабрь","Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь"],
        datasets: [{
          label: 'Подтягивания',
          type: 'line',
          data: tables.map(t => {
            const fitstWeek = +t.firstWeek.monday.firstExse + +t.firstWeek.wednesday.firstExse + +t.firstWeek.friday.firstExse
            const secondWeek = +t.secondWeek.monday.firstExse + +t.secondWeek.wednesday.firstExse + +t.secondWeek.friday.firstExse
            const thirdWeek = +t.thirdWeek.monday.firstExse + +t.thirdWeek.wednesday.firstExse + +t.thirdWeek.friday.firstExse
            const fourthWeek = +t.fourthWeek.monday.firstExse + +t.fourthWeek.wednesday.firstExse + +t.fourthWeek.friday.firstExse
            return fitstWeek + secondWeek + thirdWeek +fourthWeek
          }),
          backgroundColor: [
              'green'
          ],
          borderColor: [
              'green'
          ],
          borderWidth: 1,
          lineTension: 0.1,
          fill: false,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "green",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10
        },
        {
          label: 'Брусья',
          type: 'line',
          data: tables.map(t => {
            const fitstWeek = +t.firstWeek.monday.secondExse + +t.firstWeek.wednesday.secondExse + +t.firstWeek.friday.secondExse
            const secondWeek = +t.secondWeek.monday.secondExse + +t.secondWeek.wednesday.secondExse + +t.secondWeek.friday.secondExse
            const thirdWeek = +t.thirdWeek.monday.secondExse + +t.thirdWeek.wednesday.secondExse + +t.thirdWeek.friday.secondExse
            const fourthWeek = +t.fourthWeek.monday.secondExse + +t.fourthWeek.wednesday.secondExse + +t.fourthWeek.friday.secondExse
            return fitstWeek + secondWeek + thirdWeek +fourthWeek
          }),
          backgroundColor: [
              'red'
          ],
          borderColor: [
              'red'
          ],
          borderWidth: 1,
          lineTension: 0.1,
          fill: false,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "red",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10
        },
        {
          label: 'Приседания',
          type: 'line',
          data: tables.map(t => {
            const fitstWeek = +t.firstWeek.monday.thirdExse + +t.firstWeek.wednesday.thirdExse + +t.firstWeek.friday.thirdExse
            const secondWeek = +t.secondWeek.monday.thirdExse + +t.secondWeek.wednesday.thirdExse + +t.secondWeek.friday.thirdExse
            const thirdWeek = +t.thirdWeek.monday.thirdExse + +t.thirdWeek.wednesday.thirdExse + +t.thirdWeek.friday.thirdExse
            const fourthWeek = +t.fourthWeek.monday.thirdExse + +t.fourthWeek.wednesday.thirdExse + +t.fourthWeek.friday.thirdExse
            return fitstWeek + secondWeek + thirdWeek +fourthWeek
          }),
          backgroundColor: [
              'blue'
          ],
          borderColor: [
              'blue'
          ],
          borderWidth: 1,
          lineTension: 0.1,
          fill: false,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "blue",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10
        }
      ]
        
    })
    this.spinner = false
  }
}
</script>

<style scoped>
</style>