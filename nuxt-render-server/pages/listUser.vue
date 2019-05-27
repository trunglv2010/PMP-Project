 <template>
    <el-container>
    <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
                <nuxt-link to="/">Home</nuxt-link>
            </el-menu-item>
            <el-menu-item index="2">
            <nuxt-link to="/listUser">User management</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3">
                <el-button type="text" @click="dialogCreateVisible = true">Register</el-button>          
            </el-menu-item>
        </el-menu>
    </el-header>
    <el-container>
        <el-aside width="200px">
           
        </el-aside>
        <el-container>
        <el-main>
            <!-- Search Form-->
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="Username">
                    <el-input type="text" v-model="filter.username" v-on:input="searchUser"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input type="text" v-model="filter.email" v-on:input="searchUser"></el-input>
                </el-form-item>
            </el-form>    

            <!--List Form
            :data="users.slice((currentPage-1)*pagesize,currentPage*pagesize)" ref="multipleTable"-->
            <el-table
            :data="users.slice((currentPage-1)*pagesize,currentPage*pagesize)" ref="multipleTable"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="email"
                label="Email"
                width="180">
            </el-table-column>
            <el-table-column
                prop="username"
                label="Username">
            </el-table-column>
            <el-table-column
                prop="url"
                label="Profile Img">
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="dialogUpdateVisible = true; clickEdit(scope.$index)">Edit</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="deleteUser(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
            </el-table>
            <div style="text-align: center;margin-top: 30px;">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="5"
                @current-change="current_change">
            </el-pagination>
            </div>
            <!--Dialog show create/update-->
            <div v-if="!updateFlg">
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

            <div v-else>
            <!--Dialog show Update-->
            <el-dialog title="Update" :visible.sync="dialogUpdateVisible">
                <el-dialog
                    width="35%"
                    title="Update User"
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
                        :limit="3"
                        >
                        <el-button size="small" type="primary">Upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUpdateVisible = false;updateFlg = false;">Cancel</el-button>
                <el-button type="primary" @click="editUser($event);dialogUpdateVisible = false;updateFlg = false;">Update</el-button>
                </div>
            </el-dialog>
            </div>    

        </el-main>
        <el-footer>
           
        </el-footer>
        </el-container>
    </el-container>
    </el-container>

  </template>

  <script>
export default {
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.newUser.confirmPassword !== '') {
            this.$refs.newUser.validateField('confirmPassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.newUser.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
    return {
      dialogCreateVisible: false,
      dialogUpdateVisible: false,
      updateFlg: false,
      multipleSelection: [],
      total: 0,
      pagesize: 5,
      currentPage: 1,
      newUser: {
        id: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        url: ""
      },
      id: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      url: "",
      filter: {username:"", email:""},
      rules:{
          email:[
              {required: true, message: 'Please input email', trigger: 'blur' },
              {type:'email', message: 'Valid email required', trigger: 'blur'}
          ],
          username:[
              {required: true, message: 'Please input username', trigger: 'blur' }
          ],
           password:[
              {required: true, validator: validatePass, trigger: 'blur'}
          ],
           confirmPassword:[
              {required: true, validator: validatePass2, trigger: 'blur'}
          ]
      }
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("user/getUsers");
  },
  computed: {
    users() {
          this.total = this.$store.state.user.users.length;
          return this.$store.state.user.users;
    },
    user() {
      return this.$store.state.user.user;
    }
  },
  //refresh table
//   watch: {
//     users() {
//       this.$store.dispatch("user/getUsers");
//     }
//   },
  methods: {
    resetForm() {
      this.newUser = {};
    },
    //addUser
    addUser(event) {
      event.preventDefault();
      let isSuccess = false;
      if (!this.updateFlg) {
          //validate
        this.$refs["newUser"].validate((valid) => {
            if(valid){
                isSuccess = true;
                let response = this.$store.dispatch("user/addUser", this.newUser);
                
            }else{
                console.log('error submit!!');
                return false;
            }
        });
        
      }
      //  console.log(response);
    //   this.$store.dispatch("user/getUsers");
      if(isSuccess){
        this.dialogCreateVisible = false;
        this.$router.go(this.$router.currentRoute);
        // this.resetForm();
      }
    //   this.$router.push({"name":"listUser"});
      
    },
    //get User by Id
    getUserById(index) {
      this.updateFlg = true;
      let response = this.$store.dispatch(
        "user/getUserById",
        this.users[index].id
      );
      console.log(response);
      //  return this.$store.state.user.user;
    },
    //Edit User
    async editUser(event) {
      event.preventDefault();
      let newInfo = Object.assign({}, this.user);

      newInfo.email = this.newUser.email;
      newInfo.username = this.newUser.username;
      newInfo.password = this.newUser.password;
      newInfo.confirmPassword = this.newUser.confirmPassword;
      newInfo.url = this.newUser.url;
      if (this.updateFlg) {
        let response = this.$store.dispatch("user/editUser", newInfo);
      }
      //  console.log(response);
    //   this.$store.dispatch("user/getUsers");
     this.$router.go(this.$router.currentRoute);
      this.resetForm();
    },
    //Delete User
    deleteUser(index, row) {
      //console.log(index, row);
      this.$store.dispatch("user/deleteUser", this.users[index].id);
    //   this.$store.dispatch("user/getUsers");
     this.$router.go(this.$router.currentRoute);
    },

    //paging -- todo
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    //show edit data
    clickEdit(index) {
      this.getUserById(index);
      this.newUser = Object.assign({}, this.users[index]);
    },
    //search User
    searchUser(){
        return this.$store.dispatch("user/searchUser", this.filter);
    },
  }
};
</script>