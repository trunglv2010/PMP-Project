<template>
       <!--Dialog show create/update-->
    <div>
        <el-dialog title="Create User" :visible.sync="dialogCreateVisible">
            <el-dialog
                width="35%"
                title="Create User"
                append-to-body>
            </el-dialog>
            <el-form ref="newUser" :model="newUser" :rules="rules" label-width="140px" class="demo-ruleForm">
                <el-form-item label="Email" prop="email">
                    <el-input type="text" v-model="newUser.email"></el-input>
                </el-form-item>
                <el-form-item label="User name" prop="username">
                    <el-input type="text" v-model="newUser.username"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input type="password" v-model="newUser.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password" prop="confirmPassword">
                    <el-input type="password" v-model="newUser.confirmPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Profile imange URL">
                    <el-input type="text" v-model="newUser.url"></el-input>
                    <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :limit="3">
                    <el-button size="small" type="primary">Upload</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogCreateVisible = false;">Cancel</el-button>
            <el-button type="primary" @click="addUser($event);">Register</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
      data() {
          return {
            dialogCreateVisible: false,
            newUser: {
            id: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            url: ""
          }
          }
      }
}
</script>


