<template>
<div class="wrapper">
  <m-header></m-header>
  <scroller class="main-list" loadmoreoffset='300' offset-accuracy='300'>
    <div class="cell-btn">
      <img-slider></img-slider>
      <div class="slogen">
        <text class="i-slg iconfont">&#xe657; 网易自营品牌</text>
        <text class="i-slg iconfont">&#xe657; 30天无忧退货</text>
        <text class="i-slg iconfont">&#xe657; 48小时快速退款</text>
      </div>
    </div>
    <block1 class="cell-btn"></block1>
    <block2 class="cell-btn"></block2>
    <block3 class="cell-btn"></block3>
  </scroller>
  <nav class="main-nav"></nav>
</div>
</template>

<script>
import MHeader from '@/assets/components/home/Header'
import Nav from '@/assets/components/home/Nav'
import ImgSlider from '@/assets/components/home/ImgSlider'
import Block1 from '@/assets/components/home/Block1'
import Block2 from '@/assets/components/home/Block2'
import Block3 from '@/assets/components/home/Block3'
export default {
  components: {
    MHeader,
    Nav,
    ImgSlider,
    Block1,
    Block2,
    Block3
  },
  data() {
    return {
      isShowNav: false
    }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.main-list {
    position: fixed;
    top: 168px;
    bottom: 90px;
    left: 0;
    right: 0;
}

.main-nav {
    position: fixed;
    top: 114px;
    left: 0;
    right: 0;
    z-index: 100;
}

.cell-btn {
    padding-bottom: 18px;
    margin-bottom: 20px;
}

.slogen {
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
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
