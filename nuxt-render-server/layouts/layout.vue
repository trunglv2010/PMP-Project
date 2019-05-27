<template>
  <div>
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
  </div>
</template>
