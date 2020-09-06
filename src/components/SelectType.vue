<template>
  <b-container>
      <div class="select">
          <div class="select-block">
              <div class="select-block__item">
                  <input 
                  type="text" placeholder="Введите название упражнения #1" 
                  v-model="firstName" 
                  :class="{invalid: $v.firstName.$dirty && $v.firstName.$error}">

                  <div class="invalid-message" v-if="$v.firstName.$dirty && !$v.firstName.required">
                        Это обязательное поле.
                  </div>
                  <div class="invalid-message" v-if="$v.firstName.$dirty && !$v.firstName.maxLength">
                        Максильное число символов - 15.
                  </div>
              </div>
              <div class="select-block__item">
                  <input 
                  type="text" placeholder="Введите название упражнения #2" 
                  v-model="secondName" 
                  :class="{invalid: $v.secondName.$dirty && $v.secondName.$error}">
                  <div class="invalid-message" v-if="$v.firstName.$dirty && !$v.firstName.required">
                        Это обязательное поле.
                  </div>
                  <div class="invalid-message" v-if="$v.firstName.$dirty && !$v.firstName.maxLength">
                        Максильное число символов - 15.
                  </div>
              </div>
              <div class="select-block__item">
                  <input 
                  type="text" placeholder="Введите название упражнения #3" 
                  v-model="thirdName" 
                  :class="{invalid: $v.thirdName.$dirty && $v.thirdName.$error}">
                  <div class="invalid-message" v-if="$v.thirdName.$dirty && !$v.thirdName.required">
                        Это обязательное поле.
                  </div>
                  <div class="invalid-message" v-if="$v.thirdName.$dirty && !$v.thirdName.maxLength">
                        Максильное число символов - 15.
                  </div>
              </div>
          </div>
          <div class="select-button">
              <b-button @click="saveSelect" class="select-button__item" variant="outline-primary">Сохранить</b-button>
          </div>
      </div>
  </b-container>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'


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
        saveSelect() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
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
    },
    validations: {
        firstName: {
            required,
            maxLength: maxLength(15)
        },
        secondName: {
            required,
            maxLength: maxLength(15)
        },
        thirdName: {
            required,
            maxLength: maxLength(15)
        }
    }
  }
</script>

<style scoped>
</style>