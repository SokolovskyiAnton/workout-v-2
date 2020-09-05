<template>
  <div class="card">
    <b-form @submit.prevent="onSubmit" class="card-content">
      <span class="card-title">Дневник тренировок</span>
      <b-form-group
        id="input-group-1"
        label="Почтовый ящик"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          placeholder="Введите название"
        ></b-form-input>
        <b-form-invalid-feedback>
        Это обязательное поле.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль" label-for="password">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          placeholder="Введите пароль"
        ></b-form-input>
        <b-form-invalid-feedback>
        Это обязательное поле.
        </b-form-invalid-feedback>
      </b-form-group>
    </b-form>
    <b-form-row class="card-action">
        <b-col>
            <b-button type="submit" variant="primary" class="card-action__auth center">Войти</b-button>
            <p class="card-action__text">Нет аккаунта ? <router-link to="/registration">ЗАРЕГИСТРИРОВАТЬСЯ</router-link></p>
        </b-col>
    </b-form-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          email: '',
          password: ''
      }
    },
    methods: {
        onSubmit() {

        }
    }
  }
</script>
