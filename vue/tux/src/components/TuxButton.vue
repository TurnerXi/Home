<template lang="html">
  <div class="tux-button"><div class="dropzone"><slot> </slot></div></div>
</template>

<script>
export default {
  data() {
    return {
      button: 'button'
    }
  }

}
</script>

<style lang="css" scoped>
.tux-button{
  width: 120px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #666;
  border-radius: 5px;
  text-align: center;
}

.dropzone{
  height: 100%;
}
</style>
