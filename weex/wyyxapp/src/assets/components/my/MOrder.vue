<template >
<div class="wrapper">
  <div class="header">
    <text class="header-title">我的订单</text>
    <text class="header-right iconfont">&#xe6a3;</text>
  </div>
  <div class="list">
    <div class="list-item">
      <div class="item-icon iconfont">&#xe673;</div>
      <div class="item-name">待付款</div>
    </div>
    <div class="list-item">
      <div class="item-icon iconfont">&#xe675;</div>
      <div class="item-name">待发货</div>
    </div>
    <div class="list-item">
      <div class="item-icon iconfont">&#xe671;</div>
      <div class="item-name">已发货</div>
    </div>
    <div class="list-item">
      <div class="item-icon iconfont">&#xe672;</div>
      <div class="item-name">待评价</div>
    </div>
    <div class="list-item">
      <div class="item-icon iconfont">&#xe6ac;</div>
      <div class="item-name">退换/售后</div>
    </div>
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
    font-family: myico;
}

.wrapper {
    height: 226px;
    padding-left: 26px;
    background-color: #ffffff;
}

.header {
    height: 93px;
    padding-top: 34px;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
    flex-direction: row;
    flex-wrap: nowrap;
}

.header-title {
    flex: 1;
    font-size: 26px;
    color: #333333;
}

.header-right {
    margin-right: 30px;
    font-size: 26px;
    color: #333333;
}

.list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-right: 30px;
}

.list-item {
    width: 130px;
    height: 132px;
}

.item-icon {
    text-align: center;
    height: 79px;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 50px;
    color: #666666;
}

.item-name {
    text-align: center;
    font-size: 26px;
    color: #666666;
}
</style>
