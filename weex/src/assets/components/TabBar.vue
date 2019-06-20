<template>
<div class="wrapper">
  <div class="bar-item">
    <text class="bar-icon iconfont">&#xe7d5;</text>
    <text class="bar-txt">首页</text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont">&#xe816;</text>
    <text class="bar-txt">专题</text>
    <text class="notice-dot"></text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont">&#xe729;</text>
    <text class="bar-txt">分类</text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont">&#xe7d8;</text>
    <text class="bar-txt">购物车</text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont">&#xe7d6;</text>
    <text class="bar-txt">个人</text>
    <text class="i-notice">2</text>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.iconfont {
    font-family: "myiconfont"
}

.wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    height: 95px;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
}

.bar-item {
    flex: 1;
}

.bar-txt,
.bar-icon {
    color: #666;
    text-align: center;
}

.bar-icon {
    font-size: 38px;
    padding-top: 14px;
}

.bar-txt {
    font-size: 22px;
    padding-top: 2px;
}

.i-notice {
    /*位置与大小*/
    position: absolute;
    top: 10px;
    right: 30px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    /*文字内容*/
    color: #FFF;
    font-size: 26px;
    text-align: center;
    line-height: 30px;
    /*背景颜色*/
    background-color: #F00;
}

.notice-dot {
    position: absolute;
    top: 15px;
    right: 40px;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background-color: #f00;
}
</style>
