<template>
<el-container class="wrapper">
  <el-header height="80px" style="background-color: #3B8070;"> <img src="~assets/img/header-logo.svg" alt="element-logo" class="header-logo" />
    <ul class="header-operations">
      <li>仪表盘</li>
      <li>项目</li>
      <li>问题</li>
      <li>Boards</li>
    </ul>
  </el-header>
  <el-container>
    <el-aside class="menu">
      <transition name="fade">
        <el-menu default-active="1" :router="true" @select="menuSelectEvent" :collapse="collapse">
          <el-menu-item v-if="collapse==false" index="" @click="collapse=true"> <i class="el-icon-d-arrow-left"></i> <span slot="title">收起菜单</span> </el-menu-item>
          <el-menu-item v-if="collapse==true" index="" @click="collapse=false"> <i class="el-icon-d-arrow-right"></i> <span slot="title">展开菜单</span> </el-menu-item>
            <el-submenu index="2"> <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item index="/products/">商品管理</el-menu-item>
              <el-menu-item index="/about">页面2</el-menu-item>
              <el-menu-item index="3">页面3</el-menu-item>
            </el-submenu>
        </el-menu>
      </transition>
    </el-aside>
    <el-main class="content">
      <breadcrumb :currentRoute="currentPage"></breadcrumb>
      <nuxt></nuxt>
    </el-main>
  </el-container>
  <el-footer>
    <cfooter></cfooter>
  </el-footer>
</el-container>
</template>

<script>
import breadcrumb from '../components/breadcrumb'
import cfooter from '../components/footer.vue'
import { mapState } from 'Vuex'
export default {
  data() {
    return {
      collapse: false
    }
  },
  components: {
    cfooter,
    breadcrumb
  },
  computed: {
    currentPage: function() {
      if (this.pageName) {
        var pagePath = this.$route.path
        return { path: pagePath, name: this.pageName }
      }
    },
    ...mapState(['pageName'])
  },
  methods: {
    menuSelectEvent: function(path, arr, object) {
      if (path) {
        this.$store.commit('selectMenu', { path, name: object.$el.innerHTML })
      }
    }
  },
  mounted() {}
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
  max-height: 100%;
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

.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
