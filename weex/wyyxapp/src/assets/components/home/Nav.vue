<template >
<div class="wrapper">
  <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false">
    <div class="scroll-line" ref="scrollLine"></div>
    <text class="i-c" v-for="(item,idx) in columns" ref="columns" :key="item.id" :class="{'c-act': item.id === chooseId}" @click="chooseItem(item.id,idx)">{{item.title}}</text>
    <text class="i-c"></text>
  </scroller>
  <div class="fix-nav" v-if="showFixNav">
    <text class="fix-nav-title">全部频道</text>
    <text class="f-c" v-for="(item,idx) in columns" :key="item.id" :class="{'f-act': item.id === chooseId}" @click="chooseItem(item.id,idx)">{{item.title}}</text>
  </div>
  <text class="more iconfont" :class="{'fold':showFixNav}" @click="showFixNav=!showFixNav">&#xe661;</text>
</div>
</template>

<script>
const dom = weex.requireModule('dom');
export default {
  data() {
    return {
      chooseId: 1,
      showFixNav: false,
      columns: [
        { id: 1, title: '推荐' },
        { id: 2, title: '限购品' },
        { id: 3, title: '新品' },
        { id: 4, title: '居家' },
        { id: 5, title: '餐饮' },
        { id: 6, title: '运动' },
        { id: 7, title: '数码' },
        { id: 8, title: '服装' }
      ]
    }
  },
  methods: {
    chooseItem(itemId, idx) {
      this.showFixNav = false;
      this.chooseId = itemId;
      let l = this.$refs.columns[idx].offsetLeft;
      let w = this.$refs.columns[idx].offsetWidth;
      this.$refs.scrollLine.style.left = `${l + 15}px`;
      this.$refs.scrollLine.style.width = `${w - 30}px`;
      dom.scrollToElement(this.$refs.columns[idx], { offset: -100 });
    }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: "myiconfont";
}

.wrapper {
    position: fixed;
    top: 114px;
    height: 54px;
    left: 0;
    right: 0;
    background-color: #FAFAFA;
    border-bottom-width: 1px;
    border-bottom-color: #DADADA;
    z-index: 100;
}

.scroller {
    height: 54px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.i-c {
    padding-top: 10px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 6px;
    font-size: 26px;
    color: #333;
}

.c-act {
    color: #b4282d;
}

.more {
    position: absolute;
    top: 0;
    right: 0;
    height: 52px;
    width: 100px;
    padding-top: 10px;
    text-align: center;
    background-color: #fafafa;
    opacity: 0.96;
    box-shadow: -6px -4px 4px #fafafa;
}

.fold {
    transition-property: transform;
    transition-duration: .3s;
    transform: rotateX(180deg);
}

.scroll-line {
    position: absolute;
    bottom: 0;
    left: 30px;
    width: 82px;
    height: 4px;
    background-color: #f40;
    transition-property: left, width;
    transition-duration: .3s;
}

.fix-nav {
    position: absolute;
    height: 290px;
    left: 0;
    right: 0;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fafafa;
    overflow: scroll;
    border-bottom-width: 1px;
    border-bottom-color: #DADADA;
}

.f-c {
    width: 210px;
    height: 52px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #ddd;
    text-align: center;
    font-size: 26px;
    padding-top: 8px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    color: #333;
}

.f-act {
    border-color: #f40;
    color: #f40;
    box-shadow: 0px -4px 4px #fafafa;
}

.fix-nav-title {
    width: 750px;
    height: 54px;
    line-height: 54px;
    padding-left: 20px;
    font-size: 26px;
    color: #333;
}
</style>
