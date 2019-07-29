<template lang="html">
  <ul >
    <li v-for="(item,idx) in data" :key="idx" @click="current=current===idx?-1:idx">
      <div :class="['menu-title',current===idx?'opened':'']">{{item.name}}</div>
      <tux-submenu :data="item.children" :opened="current===idx"></tux-submenu>
    </li>
  </ul>
</template>

<script>
import TuxSubmenu from './submenu'
export default {
  name: 'TuxMenu',
  components: {
    TuxSubmenu
  },
  props: {
    data: Array
  },
  data() {
    return {
      current: -1
    }
  }
}
</script>

<style  scoped>
.menu-title {
    position: relative;
    padding-left: 20px;
    font-size: 14px;
}

.menu-title::after {
    content: "";
    width: 5px;
    height: 5px;
    border: 1px solid #666;
    display: inline-block;
    border-left: none;
    border-bottom: none;
    transform: rotate(45deg);
    position: absolute;
    top: 17.5px;
    right: 10px;
    transition: transform .3s;
}

.menu-title.opened::after {
    transform: rotate(135deg);
}
</style>
