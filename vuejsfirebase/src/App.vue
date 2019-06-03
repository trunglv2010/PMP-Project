<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBf-WOkCsP9Dqgi8qcJucLgX1f2WwGoUpM",
    authDomain: "vuejs-firebase-01-5a44c.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01-5a44c.firebaseio.com",
    projectId: "vuejs-firebase-01-5a44c",
    storageBucket: "",
    messagingSenderId: "216486478247",
    appId: "1:216486478247:web:dd3a1ca60402549e"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let bookRef = db.ref('books');

export default {
  name: 'App',
  firebase: {
    books: bookRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
