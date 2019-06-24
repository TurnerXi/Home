<template>
<div class="wrapper">
  <div class="bar-item">
    <text class="bar-icon iconfont" :class="{'on':page=='home'}">&#xe7d5;</text>
    <text class="bar-txt" :class="{'on':page=='home'}" @click="switchTab('/')">首页</text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont" :class="{'on':page=='topic'}">&#xe816;</text>
    <text class="bar-txt" :class="{'on':page=='topic'}" @click="switchTab('topic')">专题</text>
    <text class="notice-dot"></text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont" :class="{'on':page=='catalog'}">&#xe729;</text>
    <text class="bar-txt" :class="{'on':page=='catalog'}" @click="switchTab('catalog')">分类</text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont" :class="{'on':page=='shopcart'}">&#xe7d8;</text>
    <text class="bar-txt" :class="{'on':page=='shopcart'}" @click="switchTab('shopcart')">购物车</text>
  </div>
  <div class="bar-item">
    <text class="bar-icon iconfont" :class="{'on':page=='my'}">&#xe7d6;</text>
    <text class="bar-txt" :class="{'on':page=='my'}" @click="switchTab('my')">个人</text>
    <text class="i-notice">2</text>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    page() {
      return this.$route.name;
    }
  },
  methods: {
    switchTab(target) {
      this.$emit('routeTo', target);
    }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.wrapper {
    position: fixed;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    height: 95px;
    width: 750px;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
}

.bar-item {
    flex: 1;
}

.bar-txt,
.bar-icon {
    color: #666666;
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
    border-radius: 30px;
    /*文字内容*/
    color: #ffffff;
    font-size: 26px;
    text-align: center;
    line-height: 30px;
    /*背景颜色*/
    background-color: #ff0000;
}

.notice-dot {
    position: absolute;
    top: 15px;
    right: 40px;
    height: 15px;
    width: 15px;
    border-radius: 15px;
    background-color: #ff0000;
}

.on {
    color: #ff0000;
}
</style>
