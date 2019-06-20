<template>
<div class="search-wrapper">
  <input type="text" height="100%" class="search-input">
  <div class="search-placeholder">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="css">
.search-wrapper{
  width: 100%;
  padding: 2px;
  background-color: #666;
}
.search-input,.search-input:focus{
  width: 100%;
  height: 90px;
  border-width: 0px;
  opacity: 0.1;
}

.search-placeholder{
  position: absolute;
  height: 100%;
  text-align: center;
  line-height: 90px;
}

</style>
