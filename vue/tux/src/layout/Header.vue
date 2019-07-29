<template lang="html">
  <header>
      <div class="logo-wrapper">TUX</div>
      <div class="button" @click="$emit('gencode')">生成代码</div>
  </header>
</template>

<script>
export default {
  name: 'TuxHeader'
}
</script>

<style lang="css" scoped>
.logo-wrapper{
  width: 200px;
  height:40px;
  line-height: 40px;
  display: inline-block;
}
.button{
  float: right;
  border: 1px solid #545454;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
}
</style>
