<template lang="html">
  <section class="menu-container">
  <transition name="fade">
    <el-menu  default-active="1" :router="true" @select="menuSelectEvent" :collapse="collapse" style="border-right:none;"  background-color="#222d32" text-color="#fff"
      active-text-color="#ffd04b">
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
    <div class="menu-footer">
        <a class="menu-btn" :class="{'collapse':collapse}" title="切换侧边栏" href="#" @click="toggleCollapse" original-title="">
          <i v-if="collapse==false" class="el-icon-d-arrow-left"></i>
          <i v-if="collapse==true" class="el-icon-d-arrow-right"></i>
        </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    collapse: Boolean
  },
  methods: {
    toggleCollapse: function() {
      this.$emit('toggleCollapse')
    },
    menuSelectEvent: function(path, arr, object) {
      if (path) {
        this.$store.commit('SELECT_MENU', { path, name: object.$el.innerHTML })
      }
    }
  }
}
</script>

<style lang="css" scoped>
.menu-container{
  position: relative;
  height: 100%;
}

.menu-footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 40px;
  padding: 5px 40px 0 9px;
  color: #ffff;
  box-sizing: border-box;
  background: #000;
  opacity:0.5;
  vertical-align: center;
}

.menu-btn{
  position: absolute;
  display: inline-block;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: right;
  padding-right: 10px;
}

.menu-btn.collapse{
  width: 100%;
  text-align: center;
  padding: 0;
}
</style>
