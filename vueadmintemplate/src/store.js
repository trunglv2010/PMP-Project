import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)
Vue.use(firebase)

export const store = new Vuex.Store({
  state: {
    _isTrue: true
  },
  getters: {
    isTrue: function (state) {
      return state._isTrue
    }
  },
  mutations: {
    toggle: function (state, bool) {
      // eslint-disable-next-line no-return-assign
      return state._isTrue = bool
    }
  },
  actions: {
    toggle: function (context) {
      let temp = !context.state._isTrue
      firebase.database.ref('books').set(temp)
    },
    getFirebaseData: function (context) {
      firebase.database.ref('books').on('value', function (snapshot) {
        context.commit('toggle', snapshot.val())
      })
    }
  }
})
