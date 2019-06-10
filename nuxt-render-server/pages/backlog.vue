<template>
<el-container>
  <el-header>
       <webHeader>
        
        </webHeader>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <webNav/>
    </el-aside>
    <el-container>
      <el-main>
          <el-form ref="form" label-width="120px">
              <el-form-item>
                  <el-col>
                    <div>
                        <figure>
                            <img src="~/assets/images/ngoctrinh.png" alt="ngoc trinh" width="150px">
                        </figure>
                    </div>
                  </el-col>
                  <el-col>
                        <h1 v-text="backlog.name"></h1>
                  </el-col>
                  <el-col>
                        <p v-text="backlog.priority"></p>
                  </el-col>
                  <el-col>
                         <p v-text="backlog.dueDate"></p>
                  </el-col>
                  <el-col>
                        <p v-text="backlog.status"></p>
                  </el-col>
                  <el-col>
                        <p v-text="backlog.note"></p>
                  </el-col>
                  <el-col>
                      <el-button type="primary" icon="el-icon-circle-plus" @click="addToCart">Add</el-button>
                  </el-col>
              </el-form-item>
          </el-form>    
      </el-main>
      <el-footer>

          <webFooter/>
      </el-footer>
    </el-container>
  </el-container>
</el-container>

</template>
<script>
import webHeader from '../components/header.vue';
import webNav from '../components/navigate.vue';
import webFooter from '../components/footer.vue';
export default {

    components: {
        webHeader,
        webNav,
        webFooter
    },
    data() {
        return {
            sitename: "Back Log",
            backlog: {
                id: 1,
                name: "len plan",
                priority: "High",
                dueDate: null,
                status: "done",
                note: "",
                img: "assets/images/ngoctrinh.png"
            },
            cart: []
        }
    },
    methods: {
        addToCart: function(){
            this.cart.push(this.backlog.id);
        }
    }
}
</script>
