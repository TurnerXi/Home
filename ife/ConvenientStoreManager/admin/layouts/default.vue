<template>
<el-container class="wrapper">
  <el-header height="80px" style="background-color: #3B8070;">
    <!-- <img src="./assets/element-logo.svg" alt="element-logo" class="header-logo" /> -->
    <ul class="header-operations">
      <!-- <li @click="showThemeDialog">{{ langConfig.header.switch[lang] }}</li> -->
      <!-- <li class="header-download" :class="{ 'is-available': canDownload }" @click="downloadZip"> {{ langConfig.header.download[lang] }} </li> -->
      <!-- <li @click="showHelpDialog">{{ langConfig.header.help[lang] }}</li> -->
      <!-- <li> <span @click="switchLang('/zh-CN')" :class="{ 'is-active': lang === '/zh-CN' }" class="header-lang">
            中文
          </span> <span>/</span> <span @click="switchLang('/en-US')" :class="{ 'is-active': lang === '/en-US' }" class="header-lang">
            En
          </span> </li> -->
    </ul>
  </el-header>
  <el-container>
    <el-aside class="menu" ·>
      <el-menu default-active="1" >
        <el-menu-item index="1">页面１</el-menu-item>
        <el-menu-item index="/about">页面２</el-menu-item>
        <el-menu-item index="3">页面３</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="content">
      <nuxt /> </el-main>
  </el-container>
  <el-footer>
    <my-footer/> </el-footer>
</el-container>
<!-- <div>

  <my-footer/> </div> -->
</template>

<script>
import MyFooter from '../components/Footer.vue'
export default {
  components: {
    MyFooter
  },
  methods: {
    selectMenuEvent() {
      this.$router.push('about')
    }
  }
}
</script>

<style>
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.title {
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
