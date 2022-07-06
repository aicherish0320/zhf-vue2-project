<template>
  <el-container>
    <el-header>
      <PageHeader></PageHeader>
    </el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>
      <PageFooter></PageFooter>
    </el-footer>
  </el-container>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
export default {
  name: 'App',
  components: { PageHeader, PageFooter }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #333;
}
.el-footer {
  background-color: #333;
}
.el-main {
  min-height: calc(100vh - 120px);
}
</style>
