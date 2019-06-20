<template>
<div class="app-wrapper">
  <router-view />
  <tab-bar />
</div>
</template>

<script>
import tabBar from './assets/components/TabBar'
const module = weex.requireModule('dom')
export default {
  name: 'App',
  components: {
    tabBar
  },
  created() {
    module.addRule('fontFace', {
      'fontFamily': 'myiconfont',
      'src': "url('//at.alicdn.com/t/font_588629_2r11va3psf8.woff2')"
    })
  }
}
</script>
<style scoped>
.app-wrapper {
    background-color: #f4f4f4;
}
</style>
<style src="@/assets/css/application.css"></style>
