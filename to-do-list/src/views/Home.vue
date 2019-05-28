<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>Test thu Firebase</div>
    <input v-model="username"/>
    <div v-if="errors !== ''" id="errors">{{ errors }}</div>
    <button @click="addTodo">Add</button>
    <br/>
    List
    <div v-if="this.$store.getters.getUsers && this.$store.getters.getUsers.length > 0">
      <div>Yeah Yeah</div>
      <div v-for="user in this.$store.getters.getUsers" :key="user.id">
          {{user.username}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {db} from '../main';

export default {
  name: 'home',
  beforeCreate: function(){
    this.$store.dispatch('setUsers')
  },
  data: function(){
    return {
      username: '',
      errors: ''
    }
  },
  methods: {
    addTodo: function(){

      this.errors = '';
      if(this.username != ''){
        db.collection('users').add({
          username: this.username
        }).then((response) =>{
          if(response){
            console.log('thanh cong');
            this.username = '';
          }
        }).catch((error) => {
          console.log('fail');
          this.errors = error;
        })
      }else{
        this.errors = 'please enter some text';
      }
    }
  }
}
</script>
