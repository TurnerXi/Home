<template >
<div class="mask-wrapper" v-if="isShow">
  <div class="mask-closer" @click="$emit('show',false)">x</div>
  <codemirror ref="myCm" :value="content" :options="codeOpts"></codemirror>
</div>
</template>

<script>
export default {
  name: 'CodeMask',
  model: {
    prop: 'isShow',
    event: 'show'
  },
  props: {
    content: String,
    isShow: Boolean
  },
  data() {
    return {
      codeOpts: {
        theme: 'monokai'
      }
    }
  }
}
</script>

<style scoped>
.mask-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    opacity: .8;
    z-index: 99;
}

.mask-closer {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 18px;
    color: #f40;
    cursor: pointer;
    z-index: 10;
}
</style>
