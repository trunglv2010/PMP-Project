<template>
  <div id="app">
    <button @click="toggleMe">Toggle Me</button>
    <button @click="created">getBooks</button>
    <hr>
    <img v-if="isTrue" src="./assets/logo.png">
    <router-view></router-view>
    <!-- <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Book List</h3>
        </div>
        <div class="panel-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in books" 
                        v-bind:key="book['.key']">
                        <td><a v-bind:href="book.url">{{book.title}}</a></td>
                        <td>{{book.author}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> -->
  </div>
</template>
<script>
import firebase from "./firebase"

export default {
  name: 'app',
  computed: {
    isTrue: function() {
      return this.$store.getters.isTrue
    }
    // showBooks() {
    //   return this.$store.state.store.books;
    // }
  },
  methods: {
    toggleMe: function() {
      this.$store.dispatch('toggle')
    },
    getBooks: function(){
      this.$store.dispatch('getBooks');
    },
  created: function() {
    this.$store.dispatch('getFirebaseData')
  }
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>