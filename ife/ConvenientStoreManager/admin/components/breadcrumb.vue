<template lang="html">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in list" :to="{ path: item.path }" :replace="true" :key="item.path">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    currentRoute: Object
  },
  computed: {
    list: function() {
      var arr = []
      const base = { path: '/', name: '首页' }
      let baseRoute = this.$store.state.baseRoute
      if (baseRoute) {
        arr = [base, baseRoute]
        if (this.currentRoute != null && this.currentRoute.path === '/') {
          arr = []
        } else if (this.currentRoute != null && this.currentRoute.path !== baseRoute.path) {
          arr.push(this.currentRoute)
        }
      }
      return arr
    }
  }
}
</script>

<style lang="css">
</style>
