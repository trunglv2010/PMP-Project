<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="panel panel-default">
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
            <tbody 
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
                is="transition-group"
            >
                <tr 
                    v-for="book in books" 
                    v-bind:key="book['.key']"
                >
                    <td><a v-bind:href="book.url">{{book.title}}</a></td>
                    <td>{{book.author}}</td>
                    <td><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>


    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import firebase from './firebase'

Vue.use(firebase);

let booksRef = firebase.database.ref('2Fbooks');

export default {
  name: 'app',
  data () {
      return {
          newBook: {
              title: '',
              author: '',
              url: 'http://'
          },
          errors: []
      }
  },
  firebase: {
    books: booksRef
  },

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
