<template lang="html">
   <el-button>
     <template v-slot:default>默认按钮</template>
   </el-button>
</template>

<script>
export default {
  mounted() {
    this._isTux = true;
  }
}
</script>
