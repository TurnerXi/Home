<template>
<div class="wrapper">
  <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false">
    <div class="topic-item" v-for="(item,idx) in topics" :key="idx">
      <image class="bkg" resize="cover" :src="item.img"></image>
      <text class="title">{{item.title}}</text>
    </div>
  </scroller>
</div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        { title: '123', img: '' }
      ]
    }
  }
}
</script>

<style scoped>
.bkg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.wrapper {
  height: 217px;
  padding-bottom: 25px;
}

.scroller {
}
</style>
