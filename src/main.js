import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/style.sass'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDjgIkma-_BbjxLNZroU8QKnsVXY-Av6mE",
  authDomain: "vue-workout-bb014.firebaseapp.com",
  databaseURL: "https://vue-workout-bb014.firebaseio.com",
  projectId: "vue-workout-bb014",
  storageBucket: "vue-workout-bb014.appspot.com",
  messagingSenderId: "376527231975",
  appId: "1:376527231975:web:a07ccee05cbcd2feb27b42"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})