<template>
<el-container>
  <page-content>
    <div class="clearfix">
        <el-button-group class="fr">
          <el-button size="small" plain icon="el-icon-edit"></el-button>
          <el-button size="small" plain icon="el-icon-if-settings_light"> </el-button>
          <el-button size="small" plain icon="el-icon-delete"></el-button>
        </el-button-group>
    </div>
  </page-content>
</el-container>
</template>
<script type="text/babel">
import pageContent from '~/components/templates/page_content.vue'
export default {
  components: { pageContent }
}
</script>

<style>
.fr {
  float: right;
}
</style>
