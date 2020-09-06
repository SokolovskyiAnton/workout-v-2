<template>
<div class="table">
    <div class="table-block">
        <div class="table-block-items">
            <div class="wrap">
                <div class="wrap-title">
                    <span>Понедельник</span>
                </div>
                <div class="wrap-info">
                    <div class="wrap-info__item">Подтягивание - <input type="number" v-model="first" max="1000"></div>
                    <div class="wrap-info__item">2</div>
                    <div class="wrap-info__item">3</div>
                </div>
            </div>
        </div>
        <div class="table-block-items">
            <div class="wrap">
                <div class="wrap-title">
                    <span>Среда</span>
                </div>
                <div class="wrap-info">
                    <div class="wrap-info__item">1</div>
                    <div class="wrap-info__item">2</div>
                    <div class="wrap-info__item">3</div>
                </div>
            </div>
        </div>
        <div class="table-block-items">
            <div class="wrap">
                <div class="wrap-title">
                    <span>Пятница</span>
                </div>
                <div class="wrap-info">
                    <div class="wrap-info__item">1</div>
                    <div class="wrap-info__item">2</div>
                    <div class="wrap-info__item">3</div>
                </div>
            </div>
        </div>
        <div class="table-block-items">
            <div class="count">
                <div class="count-item">
                    <div class="count-item__title">За неделю</div>
                    <div class="count-info">
                        <div class="count-info__item">1</div>
                        <div class="count-info__item">2</div>
                        <div class="count-info__item">3</div>
                   </div>
                </div>
                <div class="count-item">
                    <div class="count-item__title">За все время</div>
                    <div class="count-info">
                        <div class="count-info__item">1</div>
                        <div class="count-info__item">2</div>
                        <div class="count-info__item">3</div>
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
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Среда</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Пятница</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="count">
                    <div class="count-item">
                        <div class="count-item__title">За неделю</div>
                        <div class="count-info">
                            <div class="count-info__item">1</div>
                            <div class="count-info__item">2</div>
                            <div class="count-info__item">3</div>
                    </div>
                    </div>
                    <div class="count-item">
                        <div class="count-item__title">За все время</div>
                        <div class="count-info">
                            <div class="count-info__item">1</div>
                            <div class="count-info__item">2</div>
                            <div class="count-info__item">3</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="add" :class="{hidden: firstStep}">
            <div class="add-block">
                <svg class="add-block__svg" width="100" height="100" @click="firstStep= true">
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
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Среда</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Пятница</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="count">
                    <div class="count-item">
                        <div class="count-item__title">За неделю</div>
                        <div class="count-info">
                            <div class="count-info__item">1</div>
                            <div class="count-info__item">2</div>
                            <div class="count-info__item">3</div>
                    </div>
                    </div>
                    <div class="count-item">
                        <div class="count-item__title">За все время</div>
                        <div class="count-info">
                            <div class="count-info__item">1</div>
                            <div class="count-info__item">2</div>
                            <div class="count-info__item">3</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="add" :class="{hidden: secondStep}">
            <div class="add-block">
                <svg class="add-block__svg" width="100" height="100" @click="secondStep = true">
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
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Среда</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="wrap">
                    <div class="wrap-title">
                        <span>Пятница</span>
                    </div>
                    <div class="wrap-info">
                        <div class="wrap-info__item">1</div>
                        <div class="wrap-info__item">2</div>
                        <div class="wrap-info__item">3</div>
                    </div>
                </div>
            </div>
            <div class="table-block-items">
                <div class="count">
                    <div class="count-item">
                        <div class="count-item__title">За неделю</div>
                        <div class="count-info">
                            <div class="count-info__item">1</div>
                            <div class="count-info__item">2</div>
                            <div class="count-info__item">3</div>
                    </div>
                    </div>
                    <div class="count-item">
                        <div class="count-item__title">За все время</div>
                        <div class="count-info">
                            <div class="count-info__item">1</div>
                            <div class="count-info__item">2</div>
                            <div class="count-info__item">3</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="add" :class="{hidden: thirdStep}">
            <div class="add-block">
                <svg class="add-block__svg" width="100" height="100" @click="thirdStep = true">
                    <rect x="0" y="0" width="100" height="100" fill="transparent" stroke-dasharray="4"/>
                    <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0, 0, 0, 0.3)" stroke-dasharray="4" />
                </svg>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
  export default {
    data() {
      return {
        first: 6,
        firstStep: false,
        secondStep: false,
        thirdStep: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>