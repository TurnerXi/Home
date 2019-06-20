<template>
<div class="wrapper">
  <header></header>
  <nav></nav>
  <scroller class="main-list" loadmoreoffset='300' offset-accuracy='300'>
    <div class="cell-btn">
      <img-slider></img-slider>
      <div class="slogen">
        <text class="i-slg iconfont">&#xe657; 网易自营品牌</text>
        <text class="i-slg iconfont">&#xe657; 30天无忧退货</text>
        <text class="i-slg iconfont">&#xe657; 48小时快速退款</text>
      </div>
    </div>
  </scroller>
  <block></block>
</div>
</template>

<script>
import Header from '@/assets/components/home/Header'
import Nav from '@/assets/components/home/Nav'
import ImgSlider from '@/assets/components/home/ImgSlider'
import Block from '@/assets/components/home/Block'
export default {
  components: {
    Header,
    Nav,
    ImgSlider,
    Block
  }
}
</script>

<style scoped>
.iconfont {
    font-family: "myiconfont";
}

.main-list {
    position: fixed;
    top: 168px;
    bottom: 90px;
    left: 0;
    right: 0;
}

.cell-btn {
    padding-bottom: 18px;
}

.slogen {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: #FFF;
}

.i-slg {
    flex: 1;
    height: 64px;
    padding-top: 16px;
    font-size: 24px;
    color: #FF0000;
    text-align: center;
}
</style>
