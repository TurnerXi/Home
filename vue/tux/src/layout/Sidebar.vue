<template>
<menu>
  <tux-menu class="nav-container" :data="menu"></tux-menu>
</menu>
</template>

<script>
import { GROUP } from '../packages'
import TuxMenu from '../assets/components/menu'
const MENU = Object.values(GROUP).map(value => {
  let { NAME, META } = value;
  let children = Object.keys(META).map(key => {
    return { component: key, name: META[key]['name'], thumbnail: META[key]['thumbnail'] };
  })
  return { name: NAME, children };
})
export default {
  name: 'TuxSidebar',
  components: {
    TuxMenu
  },
  data() {
    return {
      menu: MENU
    }
  },
  mounted() {}
}
</script>

<style lang="css">
.nav-container{
  padding: 20px 0 20px 20px;
}
.nav-container>li{
  width: 258px;
  padding-bottom: 2px;
  font-size: 16px;
  color: #666;
}
.menu-title{
  height: 40px;
  border: 1px solid #f6f6f6;
  border-radius: 2px;
  line-height: 40px;
}

.tux-collapse-transition {
    transition: height .3s ease-in-out,padding-top .3s ease-in-out,padding-bottom .3s ease-in-out
}
</style>
