<template>
    <el-row>
        <el-col>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo">
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Navigator Four</span>
            </el-menu-item>
            <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
