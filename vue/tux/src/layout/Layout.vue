<template>
<div class="wrapper">
  <tux-header class="header-wrapper" @gencode="$emit('gencode')"></tux-header>
  <main class="main-wrapper">
    <tux-sidebar class="sidebar-wrapper"></tux-sidebar>
    <section class="content-wrapper">
      <slot></slot>
    </section>
  </main>
</div>
</template>

<script>
import TuxHeader from './Header'
import TuxSidebar from './Sidebar'
export default {
  components: {
    TuxHeader,
    TuxSidebar
  }
}
</script>

<style lang="css" scoped>
.wrapper{
  min-width: 960px;
}
.header-wrapper{
  height: 40px;
  padding: 10px 60px;
  border-bottom: 1px solid #f6f6f6;
}
.main-wrapper{
  position: fixed;
  top:61px;
  bottom: 0;
  left: 0;
  right: 0;
}
.sidebar-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  overflow: auto;
}
.content-wrapper{
  margin-left: 281px;
  height: 100%;
}
</style>
