<template>
<div class="wrapper">
  <div class="header">
    <text class="header-search iconfont">&#xe754; 搜索商品，共8888款好物</text>
  </div>
  <div class="main">
    <m-sidebar class="sidebar" v-model="cataId"></m-sidebar>
    <m-content class="content" :cataId="cataId"></m-content>
  </div>
</div>
</template>

<script>
import MContent from '@/assets/components/catalog/MContent'
import MSidebar from '@/assets/components/catalog/MSidebar'
export default {
  components: {
    MContent,
    MSidebar
  },
  data() {
    return {
      cataId: '0'
    }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.wrapper {
    background-color: #FFFFFF;
}

.header {
    height: 90px;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom-width: 2px;
    border-bottom-color: #ededed;
    flex-direction: row;
    align-items: center;
}

.header-search {
    flex: 1;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-radius: 10px;
    background-color: #ededed;
    font-size: 26px;
    color: #666666;
}

.main {
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 90px;
    flex-direction: row;
    flex-wrap: nowrap;
}

.sidebar {
    width: 162px;
}

.content {
    flex: 1;
}
</style>
