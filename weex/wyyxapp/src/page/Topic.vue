<template>
<div class="wrapper">
  <text class="title">专题</text>
  <list class="list">
    <scroller class="topics">
      <div class="topic-item"></div>
    </scroller>
    <div class="list-item"></div>
  </list>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.title {
    height: 70px;
    padding-top: 20px;
    line-height: 50px;
    font-size: 32px;
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
