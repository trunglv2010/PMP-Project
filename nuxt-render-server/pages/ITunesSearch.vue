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
          <el-form class="demo-form-inline">
            <el-form-item label="Search iTunes">
                <el-input v-model="search" placeholder="Enter Artist Name" autofocus="true" ref="search"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
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
            search: ''
        }
    },
    methods: {
        onSubmit(){
            // alert('test');
            this.$router.push(`results/${this.search}`);
        }
    }
}
</script>

