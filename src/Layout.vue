<template>
  <div>
  
  <el-container style="height: 700px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', ]">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/banner">Banner</router-link ></template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">新增banner</el-menu-item>
          <el-menu-item index="1-2">删除banner</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3"><router-link to="/news">新闻列表</router-link ></el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span class="title_pro">后台管理系统&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <span v-if="uinfo"><i class="el-icon-info"></i>{{uinfo}}</span>
      <span v-else><router-link to="/login"><i class="el-icon-info"></i>登录</router-link></span>
    </el-header>
    
    <el-main>
      <router-view></router-view>  
      
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
   
</el-container>
  
  
      
  
  </div>
</template>

<script>
  import Vue from 'vue';
  
  
  
  export default {
    name: "Layout",
    data: function() {
        
      return {
        //uinfo : window.localStorage.getItem('username'),
        uinfo : window.sessionStorage.getItem('username'),
      }
    },
  
  }
</script>

<style scoped>
   .el-header {
    background-color: rgb(231, 81, 81);
    color: #333;
    line-height: 60px;
  }
  .title_pro{
    display: inline-block;
    font-size: 36px;
    font-weight: bold;
    color:darkviolet;
    margin-left:-200px;
  }
  .el-aside {
    color: #333;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
</style>