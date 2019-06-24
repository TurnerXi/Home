<template>
<div class="wrapper">
  <div class="header-scanner">
    <text class="icon iconfont">&#xe7e1;</text>
    <text class="txt">扫一扫</text>
  </div>
  <text class="header-search iconfont">&#xe754; 搜索商品，共8888款好物</text>
  <div class="header-msg">
    <text class="icon iconfont">&#xe70a;</text>
    <text class="txt">消息</text>
  </div>
</div>
</template>

<script>
import SearchForm from '../common/SearchForm'
export default {
  components: {
    SearchForm
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 114px;
    padding-top: 44px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FAFAFA;
    opacity: .99;
}

.header-scanner,
.header-msg {
    height: 80px;
    width: 96px;
}

.icon,
.txt,
.header-search {
    color: #9c9c9c;
    font-weight: 300;
    text-align: center;
}

.icon {
    font-size: 32px;
}

.txt {
    font-size: 18px;
}

.header-search {
    flex: 1;
    height: 60px;
    padding-top: 13px;
    font-size: 26px;
    border-radius: 8px;
    background-color: #EDEDED;
}
</style>
