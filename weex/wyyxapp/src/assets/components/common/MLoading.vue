<template>
<div class="wrapper">
  <div :class="['indicator',active==item?'active':'']" v-for="item in list" :key="item"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      active: 0,
      list: [0, 1, 2, 3, 4]
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.active = (this.active + 1) % 5;
    }, 250);
  },
  destroyed() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.wrapper {
    height: 60px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
}

.indicator {
    margin-left: 5px;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #aeadba;
    opacity: .8;
    transition-property: opacity, transform;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.5,0,0.5,1);
}

.active {
    opacity: 1;
    transform: scale(.1);
}
</style>
