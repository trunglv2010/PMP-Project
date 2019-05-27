<template>
<el-container>
  <el-aside width="200px">
    
  </el-aside>
  <el-main>
    <div class="loginForm">
      <el-form ref="form" label-width="120px">
          <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
          <div v-if="serverError" class="server-error">{{ serverError }}</div>
            <el-form-item label="Email">
                <el-input v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">Login</el-button>
                <br/>
                <el-link type="primary" @click="dialogCreateVisible = true">Register</el-link>  
            </el-form-item>
        </el-form>
    </div>
 
  </el-main>
</el-container>
    
</template>

<script>
import {mapState} from "vuex"
import layout from "../layouts/layout.vue"

export default {
  components:{
    layout
  },
  props:{
    dataSuccessMessage: {
      type: String
    }
  },
  name: "index",
  data() {
          return {
          email: "",
          password: "",
          serverError: '',
          successMessage: this.dataSuccessMessage
          }
      },  
  methods:{
    login(e){
      e.preventDefault();
      this.$store.dispatch("account/login",{email:this.email, password: this.password})
      .then(response => {
        this.$router.push({name:'listUser'});
      })
      .catch(error => {
        this.serverError = error.response.data
        this.password = ''
        this.successMessage = ''
      })
    }
  },
 
}
</script>

<style>

.loginForm {
    width: 600px;
    text-align: center;
    margin-left: 200px;
    margin-top: 200px;
}

</style>
