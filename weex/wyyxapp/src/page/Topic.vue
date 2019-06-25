<template>
<div class="wrapper">
  <text class="title">专题</text>
  <list class="list">
    <nav></nav>
    <div class="list-item"></div>
  </list>
</div>
</template>

<script>
import Nav from '@/assets/components/topic/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style scoped>
.title {
    height: 114px;
    padding-top: 44px;
    padding-bottom: 1px;
    font-size: 36px;
    line-height: 52px;
    text-align: center;
    color: #333333;
    background-color: #fafafa;
}

.list {
    position: fixed;
    top: 70px;
    bottom: 95px;
}
</style>
