<template lang="html">
  <transition name="slide">
    <el-menu class="menu" default-active="1" :router="true" @select="menuSelectEvent" style="border-right:none;" background-color="#3d464d" text-color="rgba(255, 255, 255, 0.8)"
      active-text-color="#fff">
      <el-submenu index="2"> <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
        <el-menu-item index="/products/">商品管理</el-menu-item>
        <el-menu-item index="/about">页面2</el-menu-item>
        <el-menu-item index="3">页面3</el-menu-item>
      </el-submenu>
      <el-submenu index="2"> <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
        <el-menu-item index="/products/">商品管理</el-menu-item>
        <el-menu-item index="/about">页面2</el-menu-item>
        <el-menu-item index="3">页面3</el-menu-item>
      </el-submenu>

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
</template>

<script>
export default {
  methods: {
    menuSelectEvent: function(path, arr, object) {
      if (path) {
        this.$store.commit('SELECT_MENU', { path, name: object.$el.innerHTML })
        this.$emit('hideMobileMenu')
      }
    }
  }
}
</script>
<style>
@media screen and (max-width: 400px) {
  .el-submenu__title {
    font-size: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
    padding: 0 20px;
    cursor: pointer;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box;
  }
  .el-menu-item {
    font-size: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
    padding: 0 20px;
    cursor: pointer;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box;
  }
}
</style>
<style lang="css" scoped>
.menu{
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 20;
  font-size: 0.5rem;
}

.slide-enter-active{
  transition: all .5s cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
