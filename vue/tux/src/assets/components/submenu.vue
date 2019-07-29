<template>
<tux-collapse-transition>
  <ul class="submenu" v-show="opened">
    <li v-for="(item,idx) in data" :key="idx">
      <div class="thumbnail-wrapper">
        <img :src="item.thumbnail" :alt="item.component" draggable :data-name="item.component" class="thumbnail" />
      </div>
      <div class="submenu-title">{{item.name}}</div>
    </li>
  </ul>
</tux-collapse-transition>
</template>

<script>
import TuxCollapseTransition from '../../transition/collapse'
export default {
  name: 'TuxSubmenu',
  components: {
    TuxCollapseTransition
  },
  props: {
    data: Array,
    opened: Boolean
  },
  mounted() {
    console.log(this.opened)
  }
}
</script>
<style scoped>
.submenu {
    margin: 40px 10px;
}

.submenu>li {
    text-align: center;
}

.thumbnail-wrapper {
    width: 160px;
    margin: 2px auto;
}

.thumbnail {
    width: 100%;
}

.submenu-title{
  font-size: 14px;
}
</style>
