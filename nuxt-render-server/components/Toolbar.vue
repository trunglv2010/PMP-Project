<template>
    <el-row>
    <el-col :span="24">
        <div class="toolbar">iTunes Search
        <el-button type="primary" icon="el-icon-refresh-right" class="cssButton" @click="refreshSearch"></el-button>
    </div>
    </el-col>
    </el-row>
</template>
<script>
export default {
    methods: {
        refreshSearch(){
            // alert('test');
            console.log('1');
            this.$router.push({name:'ITunesSearch'});
        }
    }
}
</script>

<style>
  .toolbar {
    font-size: 26px;
    color: white;
    text-align: center;
    background-color: #409EFF;
  }
  .cssButton {
      text-align: right;
      padding-left: 500px;
  }
</style>
