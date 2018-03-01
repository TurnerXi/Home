<template>
<el-container class="wrapper">
  <el-header height="80px" style="background-color: #3B8070;">
    <img src="~assets/img/header-logo.svg" alt="element-logo" class="header-logo"/>
    <ul class="header-operations">
      <li>仪表盘</li>
      <li>项目</li>
      <li>问题</li>
      <li>Boards</li>
    </ul>
  </el-header>
  <el-container>
    <el-aside class="menu" >
      <el-menu default-active="1" :router="true">
        <el-menu-item index="/products/">商品管理</el-menu-item>
        <el-menu-item index="/">页面２</el-menu-item>
        <el-menu-item index="3">页面３</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" :replace="true">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      </el-breadcrumb>
      <nuxt />
    </el-main>
  </el-container>
  <el-footer>
    <my-footer/> </el-footer>
</el-container>
</template>

<script>
import MyFooter from '../components/Footer.vue'
export default {
  components: {
    MyFooter
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.header-logo {
    display: inline-block;
    vertical-align: middle;
    max-height:100%;
}

.header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
}

.header-operations:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}

.header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
}

.title {
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>
