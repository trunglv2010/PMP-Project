import Vue from 'vue'
import Vuex from 'vuex'
import {db} from './main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null
  },
  getters: {
    getUsers: state => {
      console.log(state.users);
      return state.users
    }
  },
  mutations: {
    setUsers: state => {
      let users = [];
      db.collection('users').onSnapshot((snapshot) => {
        
        users = [];
        snapshot.forEach((doc) => {
          users.push({id:doc.id, username: doc.data().username});
          // console.log(doc.data().username);
        })
      })
      state.users = users;
    }
  },
  actions: {
    setUsers: context => {
      context.commit('setUsers');
    }
  }
})
