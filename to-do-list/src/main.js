import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyD4-q9v7Z2KvtsIjWKlxbqx4WaWK9kFv9s",
  authDomain: "vueadmintemplate2.firebaseapp.com",
  databaseURL: "https://vueadmintemplate2.firebaseio.com",
  projectId: "vueadmintemplate2",
  storageBucket: "vueadmintemplate2.appspot.com",
  messagingSenderId: "320106340910",
  appId: "1:320106340910:web:66609e5fb9074bf3"
}

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
