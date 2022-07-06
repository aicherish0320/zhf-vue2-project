<template>
  <el-row class="header-row">
    <el-col :span="18">
      <img src="@/assets/logo.png" class="logo" alt="logo" />
      <el-menu
        class="menu"
        mode="horizontal"
        background-color="#333"
        text-color="#fff"
        active-text-color="#fff"
        :router="true"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/post">发表文章</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <div class="nav-right">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#333"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item index="login">
            <router-link to="/login">登录</router-link>
          </el-menu-item>
          <el-menu-item index="reg">
            <router-link to="reg">注册</router-link>
          </el-menu-item>
          <el-submenu index="profile">
            <template slot="title"> 张三 </template>
            <el-menu-item index="logout">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
.header-row {
  height: 100%;
  .logo {
    margin-right: 5px;
    height: 50px;
  }
  .menu,
  .logo {
    display: inline-block;
  }
  .nav-right {
    float: right;
    li {
      display: inline-block;
      text-align: center;
      line-height: 60px;
    }
    a {
      color: #fff;
    }
  }
}
</style>
