<template>
<el-container>
  <page-content></page-content>
  <el-header class="content-header">
    <el-button-group>
      <el-button size="small" plain icon="el-icon-edit"></el-button>
      <el-button size="small" plain icon="el-icon-if-settings_light"> </el-button>
      <el-button size="small" plain icon="el-icon-delete"></el-button>
    </el-button-group>
  </el-header>
  <el-main></el-main>
</el-container>
</template>
<script type="text/babel">
import pageContent from '~/components/templates/page_content.vue'
export default {
  components: { pageContent }
}
</script>

<style>

</style>
