<template>
<section style="width:100%">
  <el-row>
    <el-col>
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item v-for="item in list" :to="{ path: item.path }" :replace="true" :key="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-card class="box-card">
        <template slot="header" >
          <slot name="header" ></slot>
        </template>
        <slot>
          <div style="text-align:center">暂无内容</div>
        </slot>
      </el-card>
    </el-col>
  </el-row>
</section>
</template>
<script type="text/javascript">
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
  },
  watch: {
    $route() {
      localStorage.setItem('currentPath', this.list)
    }
  }
}
</script>
<style scoped>
.breadcrumb {
  padding: 8px 15px;
  margin: 0 0 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.box-card {
  box-shadow: none;
  border-radius: 0;
}
</style>
