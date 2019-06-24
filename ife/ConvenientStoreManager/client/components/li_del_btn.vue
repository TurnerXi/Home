<template lang="html">
  <li :style="{transform:`translateX(${translateX}px)`,transition: `transform ${transition}s`}"  @touchstart="beginMoveEvent" @touchmove="moveEvent" @touchend="endMoveEvent">
    <slot/>
    <div class="del_btn">
      <span class="btn_wrapper" @click="delItemEvent">删除</span>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      translateX: 0,
      touchBeginX: 0,
      initX: 0,
      transition: 0
    }
  },
  methods: {
    beginMoveEvent: function(event) {
      this.touchBeginX = event.targetTouches[0].pageX;
      this.initX = this.translateX
      this.transition = 0
    },
    moveEvent: function(event) {
      let X = event.targetTouches[0].pageX - this.touchBeginX;
      if (this.initX == 0) {
        if (X > 0) {
          this.translateX = 0;
        } else if (X < 0) {
          this.translateX = Math.abs(X) > 80 ? -80 : -Math.abs(X);
        }
      } else if (this.initX < 0) {
        if (X > 0) {
          this.translateX = X > 80 ? 0 : X - 80;
        } else { //向左滑动
          this.translateX = -80;
        }
      }
    },
    endMoveEvent: function() {
      this.transition = 0.25
      if (this.translateX > -40) {
        this.translateX = 0;
      } else {
        this.translateX = -80;
      }
    },
    delItemEvent: function() {
      this.$emit("delete");
    }
  }
}
</script>

<style lang="css">
.del_btn {
  position: absolute;
  top: 0;
  right: -80px;
  text-align: center;
  background: #DC143C;
  color: #fff;
  width: 5rem;
  height: 100%;
}
.btn_wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
