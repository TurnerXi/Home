<template>
<section class="container"> <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
  <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
  <nuxt-link class="button" to="/about"> About page </nuxt-link>
</section>
</template>
<script>
export default {
  head() {
    return {
      title: `商品管理1`
    }
  },
  mounted() {
  }
}
</script>
<style scoped>
.title {
  text-align: left;
  margin: 50px 0;
}
</style>
