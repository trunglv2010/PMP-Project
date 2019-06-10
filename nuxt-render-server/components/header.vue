<template>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#EBEEF5">
            <el-menu-item index="1">
                <nuxt-link to="/">Home</nuxt-link>
            </el-menu-item>
            <el-menu-item index="2">
            <nuxt-link to="/listUser">User management</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3">
                <el-button type="text">Register</el-button>          
            </el-menu-item>
        </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>