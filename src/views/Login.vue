<template>
  <div class="card">
    <b-form @submit.prevent="onSubmit" class="card-content">
      <span class="card-title">Дневник тренировок</span>
      <b-form-group id="input-group-1">
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          placeholder="Введите email"
          :class="{invalid: $v.email.$dirty && $v.email.$error}"
        ></b-form-input>
        <div class="invalid-message" v-if="$v.email.$dirty && !$v.email.required">
          Это обязательное поле.
        </div>
        <div class="invalid-message" v-if="$v.email.$dirty && !$v.email.email">
          Введите корректный email.
        </div>
      </b-form-group>

      <b-form-group id="input-group-2">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          placeholder="Введите пароль"
          :class="{invalid: $v.password.$dirty && $v.password.$error}"
        ></b-form-input>
        <div class="invalid-message" v-if="$v.password.$dirty && !$v.password.required">
          Это обязательное поле.
        </div>
      </b-form-group>
      <b-form-row class="card-action">
        <b-col>
            <b-button type="submit" variant="primary" class="card-action__auth center">Войти</b-button>
            <p class="card-action__text">Нет аккаунта ? <router-link to="/registration">ЗАРЕГИСТРИРОВАТЬСЯ</router-link></p>
        </b-col>
    </b-form-row>
    </b-form>
    
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
          email: '',
          password: ''
      }
    },
    methods: {
        onSubmit() {
          if (this.$v.$invalid) {
            this.$v.$touch()
            return
          }
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    }
  }
</script>
