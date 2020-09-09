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
        <div class="invalid-message" v-if="$v.password.$dirty && !$v.password.minLength">
          Минимальная длина 6 символов.
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
import { required, email, minLength } from 'vuelidate/lib/validators'
import messages from '../utils/messages'

  export default {
    data() {
      return {
          email: '',
          password: ''
      }
    },
    metaInfo: {
      title: 'Login | Workout'
    },
    methods: {
        async onSubmit() {
          if (this.$v.$invalid) {
            this.$v.$touch()
            return
          }
          const obj = {
            email: this.email,
            password: this.password,
          }

          try {
            await this.$store.dispatch('login', obj)
            this.$router.push('/')
          } catch (e) {}
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        }
    },
    mounted() { // если в файлах об ошибках есть logout, то выводим в плагине
        if (messages[this.$route.query.message]) {
          this.$message(messages[this.$route.query.message])
        }
    }
  }
</script>
