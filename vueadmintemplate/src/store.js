import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'
import { stat } from 'fs';

Vue.use(Vuex)
Vue.use(firebase)

export const store = new Vuex.Store({
  state: {
    _isTrue: true,
    books : []
  },
  getters: {
    isTrue: function (state) {
      return state._isTrue
    },

  },
  mutations: {
    toggle: function (state, bool) {
      // eslint-disable-next-line no-return-assign
      return state._isTrue = bool
    },
    setBooks: function(state, payload){
      state.books = payload;
    }
  },
  actions: {
    toggle: function (context) {
      console.log("OK");
      let temp = !context.state._isTrue
      firebase.database.ref('books').set(temp)
    },
    getFirebaseData: function (context) {
      firebase.database.ref('books').on('value', function (snapshot) {
        context.commit('toggle', snapshot.val())
        console.log(snapshot.val());
      })
    },

    getBooks: function(context){
      firebase.database.ref('books').on('value', snapshot => {
        context.commit('setBooks', snapshot.val());
      });
    }

  }
})
