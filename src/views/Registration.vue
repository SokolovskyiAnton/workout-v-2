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

      <b-form-group id="input-group-3">
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          placeholder="Введите имя"
          :class="{invalid: $v.name.$dirty && $v.name.$error}"
        ></b-form-input>
        <div class="invalid-message" v-if="$v.name.$dirty && !$v.name.required">
          Это обязательное поле.
        </div>
      </b-form-group>
      <b-form-row class="card-action">
        <b-col>
            <b-button type="submit" variant="primary" class="card-action__auth">Зарегистрироваться</b-button>
            <p class="card-action__text">Уже есть аккаунт ? <router-link to="/login">НАЖМИТЕ ЗДЕСЬ.</router-link></p>
        </b-col>
      </b-form-row>
    </b-form>
    
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        email: '',
        password: '',
        name: ''
      }
    },
    metaInfo: {
      title: 'Registration | Workout'
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
            name: this.name
          }

          try {
            await this.$store.dispatch('register', obj)
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
        },
        name: {
          required
        }
    }
  }
</script>

<style scoped>
</style>