<template>
<section class=""> <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
  <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
  <nuxt-link class="button" to="/about"> About page </nuxt-link>
</section>
</template>

<style scoped>
.title {
  margin: 50px 0;
}
</style>
<script type="text/javascript">
export default {
  mounted() {
    this.$axios.$get('/admin/products')
  }
}
</script>
