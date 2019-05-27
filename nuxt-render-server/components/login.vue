<template>
    <el-container>
    <el-header>
    </el-header>
    <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-container>
        <el-main>
            <el-form ref="form" :model="user" label-width="120px">
                <el-form-item label="Email">
                    <el-input v-model="user.email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">Login</el-button>
                    <br/>
                    <el-link type="primary">Register</el-link>
                </el-form-item>
            </el-form>
            <!-- {{users}} -->
        </el-main>
        <el-footer>

        </el-footer>
        </el-container>
    </el-container>
    </el-container>

</template>
<script>
//khai bao du lieu + trang thai cua du lieu
// import {mapState} from 'vuex'

export default {
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    // computed: mapState([
    //      "users"
    // ])
}
</script>
