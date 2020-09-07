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
                        <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="firstWeek.monday.firstExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="firstWeek.monday.secondExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="firstWeek.monday.thirdExse" max="1000" min="0"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Среда</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="firstWeek.wednesday.firstExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="firstWeek.wednesday.secondExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="firstWeek.wednesday.thirdExse" max="1000" min="0"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Пятница</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="firstWeek.friday.firstExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="firstWeek.friday.secondExse" max="1000" min="0"></div>
                        <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="firstWeek.friday.thirdExse" max="1000" min="0"></div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="count">
                    <div class="count-item">
                        <div class="count-item__title">Неделя</div>
                        <div class="count-info">
                            <div class="count-info__item">0</div>
                            <div class="count-info__item">0</div>
                            <div class="count-info__item">0</div>
                    </div>
                    </div>
                    <div class="count-item">
                        <div class="count-item__title">Месяц</div>
                        <div class="count-info">
                            <div class="count-info__item">0</div>
                            <div class="count-info__item">0</div>
                            <div class="count-info__item">0</div>
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
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="secondWeek.monday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="secondWeek.monday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="secondWeek.monday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="secondWeek.wednesday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="secondWeek.wednesday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="secondWeek.wednesday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="secondWeek.friday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="secondWeek.friday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="secondWeek.friday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                        </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
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
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="thirdWeek.monday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="thirdWeek.monday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="thirdWeek.monday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="thirdWeek.wednesday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="thirdWeek.wednesday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="thirdWeek.wednesday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="thirdWeek.friday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="thirdWeek.friday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="thirdWeek.friday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                        </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
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
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="fourthWeek.monday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="fourthWeek.monday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="fourthWeek.monday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Среда</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="fourthWeek.wednesday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="fourthWeek.wednesday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="fourthWeek.wednesday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="wrap">
                        <div class="wrap-title">
                            <span>Пятница</span>
                        </div>
                        <div class="wrap-info">
                            <div class="wrap-info__item">{{names.firstName}} - <input type="number" v-model="fourthWeek.friday.firstExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.secondName}} - <input type="number" v-model="fourthWeek.friday.secondExse" max="1000" min="0"></div>
                            <div class="wrap-info__item">{{names.thirdName}} - <input type="number" v-model="fourthWeek.friday.thirdExse" max="1000" min="0"></div>
                        </div>
                    </div>
                </div>
                <div class="table-block-items">
                    <div class="count">
                        <div class="count-item">
                            <div class="count-item__title">Неделя</div>
                            <div class="count-info">
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                        </div>
                        </div>
                        <div class="count-item">
                            <div class="count-item__title">Месяц</div>
                            <div class="count-info">
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
                                <div class="count-info__item">0</div>
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
        firstStep: false,
        secondStep: false,
        thirdStep: false
      }
    },
    props: ['names'],
    methods: {
        
        async createTable() {
            const obj = {
                date: new Date().toJSON(),
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