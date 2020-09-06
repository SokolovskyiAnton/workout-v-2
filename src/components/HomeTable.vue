<template>
<div>
    <div class="table">
        <div class="table-block">
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Понедельник</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="firstWeek.monday.firstDay" max="1000"></div>
                        <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="firstWeek.monday.secondDay" max="1000"></div>
                        <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="firstWeek.monday.thirdDay" max="1000"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Среда</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="firstWeek.wednesday.firstDay" max="1000"></div>
                        <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="firstWeek.wednesday.secondDay" max="1000"></div>
                        <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="firstWeek.wednesday.thirdDay" max="1000"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Пятница</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="firstWeek.friday.firstDay" max="1000"></div>
                        <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="firstWeek.friday.secondDay" max="1000"></div>
                        <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="firstWeek.friday.thirdDay" max="1000"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="count">
                    <div class="count-item">
                        <div class="count-item__title">Неделя</div>
                        <div class="count-info">
                            <div class="count-info__item">100</div>
                            <div class="count-info__item">100</div>
                            <div class="count-info__item">100</div>
                    </div>
                    </div>
                    <div class="count-item">
                        <div class="count-item__title">Месяц</div>
                        <div class="count-info">
                            <div class="count-info__item">100</div>
                            <div class="count-info__item">200</div>
                            <div class="count-info__item">300</div>
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
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="secondWeek.monday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="secondWeek.monday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="secondWeek.monday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="secondWeek.wednesday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="secondWeek.wednesday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="secondWeek.wednesday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="secondWeek.friday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="secondWeek.friday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="secondWeek.friday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">900</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">300</div>
                        </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">1000</div>
                                <div class="count-info__item">200</div>
                                <div class="count-info__item">300</div>
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
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="thirdWeek.monday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="thirdWeek.monday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="thirdWeek.monday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="thirdWeek.wednesday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="thirdWeek.wednesday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="thirdWeek.wednesday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="thirdWeek.friday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="thirdWeek.friday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="thirdWeek.friday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">900</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">300</div>
                        </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">1000</div>
                                <div class="count-info__item">200</div>
                                <div class="count-info__item">300</div>
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
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="fourthWeek.monday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="fourthWeek.monday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="fourthWeek.monday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="fourthWeek.wednesday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="fourthWeek.wednesday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="fourthWeek.wednesday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="fourthWeek.friday.firstDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="fourthWeek.friday.secondDay" max="1000"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="fourthWeek.friday.thirdDay" max="1000"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">900</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">300</div>
                        </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">1000</div>
                                <div class="count-info__item">200</div>
                                <div class="count-info__item">300</div>
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
        <b-button @click="createTable" class="button-submit" variant="outline-primary">Сохранить</b-button>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        firstWeek: {
            monday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            wednesday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            friday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            }
        },
        secondWeek: {
            monday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            wednesday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            friday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            }
        },
        thirdWeek: {
            monday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            wednesday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            friday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            }
        },
        fourthWeek: {
            monday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            wednesday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            },
            friday: {
                firstDay: 0,
                secondDay: 0,
                thirdDay: 0
            }
        },
        firstStep: false,
        secondStep: false,
        thirdStep: false
      }
    },
    props: ['names'],
    methods: {
        
        async createTable() {
            const obj = {
                blocks: {
                    firstStep: this.firstStep,
                    secondStep: this.secondStep,
                    thirdStep: this.thirdStep
                },
                names: {
                    firstExercise: this.names.firstName,
                    secondExercise: this.names.secondName,
                    thirdExercise: this.names.thirdName
                },
                firstWeek: {
                    date: new Date().toJSON(),
                    monday: {
                        firstDay: this.firstWeek.monday.firstDay,
                        secondDay: this.firstWeek.monday.secondDay,
                        thirdDay: this.firstWeek.monday.thirdDay
                    },
                    wednesday: {
                        firstDay: this.firstWeek.wednesday.firstDay,
                        secondDay: this.firstWeek.wednesday.secondDay,
                        thirdDay: this.firstWeek.wednesday.thirdDay
                    },
                    friday: {
                        firstDay: this.firstWeek.friday.firstDay,
                        secondDay: this.firstWeek.friday.secondDay,
                        thirdDay: this.firstWeek.friday.thirdDay
                    }
                },
                secondWeek: {
                    monday: {
                        firstDay: this.secondWeek.monday.firstDay,
                        secondDay: this.secondWeek.monday.secondDay,
                        thirdDay: this.secondWeek.monday.thirdDay
                    },
                    wednesday: {
                        firstDay: this.secondWeek.wednesday.firstDay,
                        secondDay: this.secondWeek.wednesday.secondDay,
                        thirdDay: this.secondWeek.wednesday.thirdDay
                    },
                    friday: {
                        firstDay: this.secondWeek.friday.firstDay,
                        secondDay: this.secondWeek.friday.secondDay,
                        thirdDay: this.secondWeek.friday.thirdDay
                    }
                },
                thirdWeek: {
                    monday: {
                        firstDay: this.thirdWeek.monday.firstDay,
                        secondDay: this.thirdWeek.monday.secondDay,
                        thirdDay: this.thirdWeek.monday.thirdDay
                    },
                    wednesday: {
                        firstDay: this.thirdWeek.wednesday.firstDay,
                        secondDay: this.thirdWeek.wednesday.secondDay,
                        thirdDay: this.thirdWeek.wednesday.thirdDay
                    },
                    friday: {
                        firstDay: this.thirdWeek.friday.firstDay,
                        secondDay: this.thirdWeek.friday.secondDay,
                        thirdDay: this.thirdWeek.friday.thirdDay
                    }
                },
                fourthWeek: {
                    monday: {
                        firstDay: this.fourthWeek.monday.firstDay,
                        secondDay: this.fourthWeek.monday.secondDay,
                        thirdDay: this.fourthWeek.monday.thirdDay
                    },
                    wednesday: {
                        firstDay: this.fourthWeek.wednesday.firstDay,
                        secondDay: this.fourthWeek.wednesday.secondDay,
                        thirdDay: this.fourthWeek.wednesday.thirdDay
                    },
                    friday: {
                        firstDay: this.fourthWeek.friday.firstDay,
                        secondDay: this.fourthWeek.friday.secondDay,
                        thirdDay: this.fourthWeek.friday.thirdDay
                    }
                }
            }
            try {
                await this.$store.dispatch('createTable', obj)
                this.$router.push('/list')
            } catch (e) {}
        }
    }
  }
</script>

<style scoped>
</style>