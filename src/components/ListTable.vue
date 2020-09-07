<template>
    <div class="list mt-5 text-center">
        <h3>{{obj.date | date}}</h3>
        <div class="table">
            <div class="table-block">
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Понедельник</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.firstWeek.monday.firstExse}}</div>
                            <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.firstWeek.monday.secondExse}}</div>
                            <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.firstWeek.monday.thirdExse}}</div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.firstWeek.wednesday.firstExse}}</div>
                            <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.firstWeek.wednesday.secondExse}}</div>
                            <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.firstWeek.wednesday.thirdExse}}</div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.firstWeek.friday.firstExse}}</div>
                            <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.firstWeek.friday.secondExse}}</div>
                            <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.firstWeek.friday.thirdExse}}</div>
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
                <div class="table-block" :class="{hidden: !firstStep}">
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Понедельник</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.secondWeek.monday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.secondWeek.monday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.secondWeek.monday.thirdExse}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Среда</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.secondWeek.wednesday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.secondWeek.wednesday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.secondWeek.wednesday.thirdExse}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Пятница</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.secondWeek.friday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.secondWeek.friday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.secondWeek.friday.thirdExse}}</div>
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
                <div class="add" :class="{hidden: firstStep}">
                    <div class="add-block">
                        <svg class="add-block__svg" width="100" height="100" @click="firstStep = !firstStep">
                            <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                            <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <div class="table-block" :class="{hidden: !secondStep}">
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Понедельник</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.thirdWeek.monday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.thirdWeek.monday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.thirdWeek.monday.thirdExse}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Среда</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.thirdWeek.wednesday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.thirdWeek.wednesday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.thirdWeek.wednesday.thirdExse}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Пятница</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.thirdWeek.friday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.thirdWeek.friday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.thirdWeek.friday.thirdExse}}</div>
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
                <div class="add" :class="{hidden: secondStep}">
                    <div class="add-block">
                        <svg class="add-block__svg" width="100" height="100" @click="secondStep = !secondStep">
                            <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                            <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <div class="table-block" :class="{hidden: !thirdStep}">
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Понедельник</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.fourthWeek.monday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.fourthWeek.monday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.fourthWeek.monday.thirdExse}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Среда</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.fourthWeek.wednesday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.fourthWeek.wednesday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.fourthWeek.wednesday.thirdExse}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-block-items">
                        <div class="wrap">
                            <div class="wrap-title">
                                <span>Пятница</span>
                            </div>
                            <div class="wrap-info">
                                <div class="wrap-info__item">{{obj.names.firstExercise}} - {{obj.fourthWeek.friday.firstExse}}</div>
                                <div class="wrap-info__item">{{obj.names.secondExercise}} - {{obj.fourthWeek.friday.secondExse}}</div>
                                <div class="wrap-info__item">{{obj.names.thirdExercise}} - {{obj.fourthWeek.friday.thirdExse}}</div>
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
                <div class="add" :class="{hidden: thirdStep}">
                    <div class="add-block">
                        <svg class="add-block__svg" width="100" height="100" @click="thirdStep = !thirdStep">
                            <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                            <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="button">
            <b-button @click="$router.push('/month/' + obj.id)" class="button-submit" variant="outline-primary">Изменить</b-button>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstStep: null,
        secondStep: null,
        thirdStep: null
      }
    },
    props: ['obj'],
    mounted() {
        this.firstStep = this.obj.blocks.firstStep,
        this.secondStep = this.obj.blocks.secondStep,
        this.thirdStep = this.obj.blocks.thirdStep
    },
    computed: {
        sumFirstWeek() {
            const firstExercise = +this.obj.firstWeek.monday.firstExse + +this.obj.firstWeek.wednesday.firstExse + +this.obj.firstWeek.friday.firstExse
            const secondExercise = +this.obj.firstWeek.monday.secondExse + +this.obj.firstWeek.wednesday.secondExse + +this.obj.firstWeek.friday.secondExse
            const thirdExercise = +this.obj.firstWeek.monday.thirdExse + +this.obj.firstWeek.wednesday.thirdExse + +this.obj.firstWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumSecondWeek() {
            const firstExercise = +this.obj.secondWeek.monday.firstExse + +this.obj.secondWeek.wednesday.firstExse + +this.obj.secondWeek.friday.firstExse
            const secondExercise = +this.obj.secondWeek.monday.secondExse + +this.obj.secondWeek.wednesday.secondExse + +this.obj.secondWeek.friday.secondExse
            const thirdExercise = +this.obj.secondWeek.monday.thirdExse + +this.obj.secondWeek.wednesday.thirdExse + +this.obj.secondWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumThirdWeek() {
            const firstExercise = +this.obj.thirdWeek.monday.firstExse + +this.obj.thirdWeek.wednesday.firstExse + +this.obj.thirdWeek.friday.firstExse
            const secondExercise = +this.obj.thirdWeek.monday.secondExse + +this.obj.thirdWeek.wednesday.secondExse + +this.obj.thirdWeek.friday.secondExse
            const thirdExercise = +this.obj.thirdWeek.monday.thirdExse + +this.obj.thirdWeek.wednesday.thirdExse + +this.obj.thirdWeek.friday.thirdExse
            
            return {
                firstExercise,
                secondExercise,
                thirdExercise
            }
        },
        sumFourthWeek() {
            const firstExercise = +this.obj.fourthWeek.monday.firstExse + +this.obj.fourthWeek.wednesday.firstExse + +this.obj.fourthWeek.friday.firstExse
            const secondExercise = +this.obj.fourthWeek.monday.secondExse + +this.obj.fourthWeek.wednesday.secondExse + +this.obj.fourthWeek.friday.secondExse
            const thirdExercise = +this.obj.fourthWeek.monday.thirdExse + +this.obj.fourthWeek.wednesday.thirdExse + +this.obj.fourthWeek.friday.thirdExse
            
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