import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

//import firebase from 'firebase'
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAt_LVQ3SEiLBmOsLs9AuntFhtz5PtGMu4",
  authDomain: "vue-calendario-d8aca.firebaseapp.com",
  projectId: "vue-calendario-d8aca",
  storageBucket: "vue-calendario-d8aca.appspot.com",
  messagingSenderId: "838640849900",
  appId: "1:838640849900:web:628b95e23084483d39a6c9"
});

export const db = firebase.firestore();

new Vue({
  router,
  firebase,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
