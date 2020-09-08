<template>
<b-container>
  <Spinner v-if="spinner"/>
  <div v-else>
    <div class="table">
        <div class="table-block">
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Понедельник</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="firstWeek.monday.firstExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="firstWeek.monday.secondExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="firstWeek.monday.thirdExse" max="1000" min="0"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Среда</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="firstWeek.wednesday.firstExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="firstWeek.wednesday.secondExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="firstWeek.wednesday.thirdExse" max="1000" min="0"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Пятница</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="firstWeek.friday.firstExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="firstWeek.friday.secondExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="firstWeek.friday.thirdExse" max="1000" min="0"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="count">
                    <div class="count-item">
                        <div class="count-item__title">Неделя</div>
                        <div class="count-info">
                            <div class="count-info__item">{{sumFirstWeek.firstExercise}}</div>
                            <div class="count-info__item">{{sumFirstWeek.secondExercise}}</div>
                            <div class="count-info__item">{{sumFirstWeek.thirdExercise}}</div>
                    </div>
                    </div>
                    <div class="count-item">
                        <div class="count-item__title">Месяц</div>
                        <div class="count-info">
                            <div class="count-info__item">{{sumMonth.sumMonthFirstExse}}</div>
                            <div class="count-info__item">{{sumMonth.sumMonthSecondExse}}</div>
                            <div class="count-info__item">{{sumMonth.sumMonthThirdExse}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div>
            <div class="table-block" :class="{hidden: !blocks.firstStep}">
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Понедельник</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="secondWeek.monday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="secondWeek.monday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="secondWeek.monday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="secondWeek.wednesday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="secondWeek.wednesday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="secondWeek.wednesday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="secondWeek.friday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="secondWeek.friday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="secondWeek.friday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">{{sumSecondWeek.firstExercise}}</div>
                                <div class="count-info__item">{{sumSecondWeek.secondExercise}}</div>
                                <div class="count-info__item">{{sumSecondWeek.thirdExercise}}</div>
                            </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">{{sumMonth.sumMonthFirstExse}}</div>
                                <div class="count-info__item">{{sumMonth.sumMonthSecondExse}}</div>
                                <div class="count-info__item">{{sumMonth.sumMonthThirdExse}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add" :class="{hidden: blocks.firstStep}">
                <div class="add-block">
                    <svg class="add-block__svg" width="100" height="100" @click="blocks.firstStep = !blocks.firstStep">
                        <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                        <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div class="table-block" :class="{hidden: !blocks.secondStep}">
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Понедельник</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="thirdWeek.monday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="thirdWeek.monday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="thirdWeek.monday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="thirdWeek.wednesday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="thirdWeek.wednesday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="thirdWeek.wednesday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="thirdWeek.friday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="thirdWeek.friday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="thirdWeek.friday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">{{sumThirdWeek.firstExercise}}</div>
                                <div class="count-info__item">{{sumThirdWeek.secondExercise}}</div>
                                <div class="count-info__item">{{sumThirdWeek.thirdExercise}}</div>
                            </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">{{sumMonth.sumMonthFirstExse}}</div>
                                <div class="count-info__item">{{sumMonth.sumMonthSecondExse}}</div>
                                <div class="count-info__item">{{sumMonth.sumMonthThirdExse}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add" :class="{hidden: blocks.secondStep}">
                <div class="add-block">
                    <svg class="add-block__svg" width="100" height="100" @click="blocks.secondStep = !blocks.secondStep">
                        <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                        <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div class="table-block" :class="{hidden: !blocks.thirdStep}">
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Понедельник</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="fourthWeek.monday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="fourthWeek.monday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="fourthWeek.monday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="fourthWeek.wednesday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="fourthWeek.wednesday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="fourthWeek.wednesday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstExercise}} - <input type="number" v-model="fourthWeek.friday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondExercise}} - <input type="number" v-model="fourthWeek.friday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdExercise}} - <input type="number" v-model="fourthWeek.friday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">{{sumFourthWeek.firstExercise}}</div>
                                <div class="count-info__item">{{sumFourthWeek.secondExercise}}</div>
                                <div class="count-info__item">{{sumFourthWeek.thirdExercise}}</div>
                            </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">{{sumMonth.sumMonthFirstExse}}</div>
                                <div class="count-info__item">{{sumMonth.sumMonthSecondExse}}</div>
                                <div class="count-info__item">{{sumMonth.sumMonthThirdExse}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add" :class="{hidden: blocks.thirdStep}">
                <div class="add-block">
                    <svg class="add-block__svg" width="100" height="100" @click="blocks.thirdStep = !blocks.thirdStep">
                        <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                        <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                        <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                    </svg>
                </div>
            </div>
        </div>
        
    </div>
    <div class="button">
        <b-button @click="updateTable" class="button-submit" variant="outline-primary">Сохранить</b-button>
    </div>
</div>
</b-container>
</template>

<script>
  export default {
    data() {
      return {
        spinner: true,
        firstWeek: {
            monday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            wednesday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            friday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            }
        },
        secondWeek: {
            monday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            wednesday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            friday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            }
        },
        thirdWeek: {
            monday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            wednesday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            friday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            }
        },
        fourthWeek: {
            monday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            wednesday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            },
            friday: {
                firstExse: 0,
                secondExse: 0,
                thirdExse: 0
            }
        },
        names: {
          firstExercise: null,
          secondExercise: null,
          thirdExercise: null
        },
        blocks: {
          firstStep: null,
          secondStep: null,
          thirdStep: null
        }
      }
    },
    async mounted() {
      const id = this.$route.params.id
      const table = await this.$store.dispatch('fetchTableById', id)
      this.names = {
        firstExercise: table.names.firstExercise,
        secondExercise: table.names.secondExercise,
        thirdExercise: table.names.thirdExercise
      }
      this.firstWeek = {
            monday: {
              date: table.firstWeek.monday.date,
              firstExse: table.firstWeek.monday.firstExse,
              secondExse: table.firstWeek.monday.secondExse,
              thirdExse: table.firstWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: table.firstWeek.wednesday.firstExse,
              secondExse: table.firstWeek.wednesday.secondExse,
              thirdExse: table.firstWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: table.firstWeek.friday.firstExse,
              secondExse: table.firstWeek.friday.secondExse,
              thirdExse: table.firstWeek.friday.thirdExse
            }
      },
      this.secondWeek = {
            monday: {
              firstExse: table.secondWeek.monday.firstExse,
              secondExse: table.secondWeek.monday.secondExse,
              thirdExse: table.secondWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: table.secondWeek.wednesday.firstExse,
              secondExse: table.secondWeek.wednesday.secondExse,
              thirdExse: table.secondWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: table.secondWeek.friday.firstExse,
              secondExse: table.secondWeek.friday.secondExse,
              thirdExse: table.secondWeek.friday.thirdExse
            }
      },
      this.thirdWeek = {
            monday: {
              firstExse: table.thirdWeek.monday.firstExse,
              secondExse: table.thirdWeek.monday.secondExse,
              thirdExse: table.thirdWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: table.thirdWeek.wednesday.firstExse,
              secondExse: table.thirdWeek.wednesday.secondExse,
              thirdExse: table.thirdWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: table.thirdWeek.friday.firstExse,
              secondExse: table.thirdWeek.friday.secondExse,
              thirdExse: table.thirdWeek.friday.thirdExse
            }
      },
      this.fourthWeek = {
            monday: {
              firstExse: table.fourthWeek.monday.firstExse,
              secondExse: table.fourthWeek.monday.secondExse,
              thirdExse: table.fourthWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: table.fourthWeek.wednesday.firstExse,
              secondExse: table.fourthWeek.wednesday.secondExse,
              thirdExse: table.fourthWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: table.fourthWeek.friday.firstExse,
              secondExse: table.fourthWeek.friday.secondExse,
              thirdExse: table.fourthWeek.friday.thirdExse
            }
      },
      this.blocks = {
          firstStep: table.blocks.firstStep,
          secondStep: table.blocks.secondStep,
          thirdStep: table.blocks.thirdStep
      }
      this.spinner = false
    },
    methods: {
      async updateTable() {
        const id = this.$route.params.id
        const data = {
          names: {
            firstExercise: this.names.firstExercise,
            secondExercise: this.names.secondExercise,
            thirdExercise: this.names.thirdExercise
          },
          firstWeek: {
            monday: {
              firstExse: this.firstWeek.monday.firstExse,
              secondExse: this.firstWeek.monday.secondExse,
              thirdExse: this.firstWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: this.firstWeek.wednesday.firstExse,
              secondExse: this.firstWeek.wednesday.secondExse,
              thirdExse: this.firstWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: this.firstWeek.friday.firstExse,
              secondExse: this.firstWeek.friday.secondExse,
              thirdExse: this.firstWeek.friday.thirdExse
            }
          },
          secondWeek: {
            monday: {
              firstExse: this.secondWeek.monday.firstExse,
              secondExse: this.secondWeek.monday.secondExse,
              thirdExse: this.secondWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: this.secondWeek.wednesday.firstExse,
              secondExse: this.secondWeek.wednesday.secondExse,
              thirdExse: this.secondWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: this.secondWeek.friday.firstExse,
              secondExse: this.secondWeek.friday.secondExse,
              thirdExse: this.secondWeek.friday.thirdExse
            }
          },
          thirdWeek: {
            monday: {
              firstExse: this.thirdWeek.monday.firstExse,
              secondExse: this.thirdWeek.monday.secondExse,
              thirdExse: this.thirdWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: this.thirdWeek.wednesday.firstExse,
              secondExse: this.thirdWeek.wednesday.secondExse,
              thirdExse: this.thirdWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: this.thirdWeek.friday.firstExse,
              secondExse: this.thirdWeek.friday.secondExse,
              thirdExse: this.thirdWeek.friday.thirdExse
            }
          },
          fourthWeek: {
            monday: {
              firstExse: this.fourthWeek.monday.firstExse,
              secondExse: this.fourthWeek.monday.secondExse,
              thirdExse: this.fourthWeek.monday.thirdExse
            },
            wednesday: {
              firstExse: this.fourthWeek.wednesday.firstExse,
              secondExse: this.fourthWeek.wednesday.secondExse,
              thirdExse: this.fourthWeek.wednesday.thirdExse
            },
            friday: {
              firstExse: this.fourthWeek.friday.firstExse,
              secondExse: this.fourthWeek.friday.secondExse,
              thirdExse: this.fourthWeek.friday.thirdExse
            }
          },
          blocks: {
            firstStep: this.blocks.firstStep,
            secondStep: this.blocks.secondStep,
            thirdStep: this.blocks.thirdStep
          }
        }

        try {
          await this.$store.dispatch('updateTable', {data, id})
          this.$router.push('/list')
        } catch (e) {
          throw e
        }
      }

      
    },
    computed: {
         sumFirstWeek() {
            const firstExercise = +this.firstWeek.monday.firstExse + +this.firstWeek.wednesday.firstExse + +this.firstWeek.friday.firstExse
            const secondExercise = +this.firstWeek.monday.secondExse + +this.firstWeek.wednesday.secondExse + +this.firstWeek.friday.secondExse
            const thirdExercise = +this.firstWeek.monday.thirdExse + +this.firstWeek.wednesday.thirdExse + +this.firstWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumSecondWeek() {
            const firstExercise = +this.secondWeek.monday.firstExse + +this.secondWeek.wednesday.firstExse + +this.secondWeek.friday.firstExse
            const secondExercise = +this.secondWeek.monday.secondExse + +this.secondWeek.wednesday.secondExse + +this.secondWeek.friday.secondExse
            const thirdExercise = +this.secondWeek.monday.thirdExse + +this.secondWeek.wednesday.thirdExse + +this.secondWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumThirdWeek() {
            const firstExercise = +this.thirdWeek.monday.firstExse + +this.thirdWeek.wednesday.firstExse + +this.thirdWeek.friday.firstExse
            const secondExercise = +this.thirdWeek.monday.secondExse + +this.thirdWeek.wednesday.secondExse + +this.thirdWeek.friday.secondExse
            const thirdExercise = +this.thirdWeek.monday.thirdExse + +this.thirdWeek.wednesday.thirdExse + +this.thirdWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumFourthWeek() {
            const firstExercise = +this.fourthWeek.monday.firstExse + +this.fourthWeek.wednesday.firstExse + +this.fourthWeek.friday.firstExse
            const secondExercise = +this.fourthWeek.monday.secondExse + +this.fourthWeek.wednesday.secondExse + +this.fourthWeek.friday.secondExse
            const thirdExercise = +this.fourthWeek.monday.thirdExse + +this.fourthWeek.wednesday.thirdExse + +this.fourthWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumMonth() {
            const sumMonthFirstExse = this.sumFirstWeek.firstExercise + this.sumSecondWeek.firstExercise + this.sumThirdWeek.firstExercise + this.sumFourthWeek.firstExercise
            const sumMonthSecondExse = this.sumFirstWeek.secondExercise + this.sumSecondWeek.secondExercise + this.sumThirdWeek.secondExercise + this.sumFourthWeek.secondExercise
            const sumMonthThirdExse = this.sumFirstWeek.thirdExercise + this.sumSecondWeek.thirdExercise + this.sumThirdWeek.thirdExercise + this.sumFourthWeek.thirdExercise

            return {
                sumMonthFirstExse,
                sumMonthSecondExse,
                sumMonthThirdExse
            }
        }
    }
  }
</script>

<style scoped>
</style>