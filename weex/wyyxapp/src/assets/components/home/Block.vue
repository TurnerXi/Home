<template>
<div class="wrapper">
  <div class="banner">
    <div class="banner-items">
      <slider class="slider">
        <div class="frame">
          <image class="banner-img" src="http://yanxuan.nosdn.127.net/7cd9f22c8ca9515d8e8e0861f57f19e9.png"></image>
          <text class="banner-txt">¥69</text>
        </div>
      </slider>
    </div>
  </div>
  <div class="main-items">

  </div>
  <div class="title"></div>
  <div class="list-items"></div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
    background-image: url('https://yanxuan.nosdn.127.net/fe5a4fe84fd7f58c588927cf54181981.jpg?imageView&quality=75');
}

.banner {
    height: 280px;
    background-image:url('https://yanxuan.nosdn.127.net/1f898fc569dc58a8b9a589a16ca83d20.gif?imageView&quality=75');
}

.banner-items {
    position: absolute;
    top: 56px;
    right: 56px;
    width: 168px;
    height: 168px;
}

.slider,
.frame,
.banner-img {
    width: 168px;
    height: 168px;
}

.banner-txt {
    position: absolute;
    bottom: 0;
    height: 30px;
    text-align: center;
    background-color: #F49321;
    color: #FFF;
    border-radius: 10px;
}
</style>
