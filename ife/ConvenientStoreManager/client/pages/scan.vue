<template>
<section class="container">
  <div class="view-port">
    <div class="scanner-bg"></div>
  </div>
  <div class=""> {{message}} </div>
</section>
</template>
<style>
.view-port {
  position: relative;
  display: inline-block;
  width: 640px;
  height: 480px;
  margin-top: 20px;
}

.scanner-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 288px;
  height: 288px;
  border: 2px solid #3B8070;
  opacity: .1;
}
</style>
<script>
import scanner from '~/plugins/scanner.js'
export default {
  data() {
    return {
      message: ""
    }
  },
  mounted() {
    let viewportclass = 'view-port'
    let $viewport = document.getElementsByClassName(viewportclass)[0]
    let radio = 0.2
    let area = {
      top: ($viewport.clientHeight > $viewport.clientWidth ? Math.round((1 - $viewport.clientWidth * (1 - radio * 2) / $viewport.clientHeight) / 0.02) : radio * 100) + "%",
      bottom: ($viewport.clientHeight > $viewport.clientWidth ? Math.round((1 - $viewport.clientWidth * (1 - radio * 2) / $viewport.clientHeight) / 0.02) : radio * 100) + "%",
      right: ($viewport.clientHeight > $viewport.clientWidth ? radio * 100 : Math.round((1 - $viewport.clientHeight * (1 - radio * 2) / $viewport.clientWidth) / 0.02)) + "%",
      left: ($viewport.clientHeight > $viewport.clientWidth ? radio * 100 : Math.round((1 - $viewport.clientHeight * (1 - radio * 2) / $viewport.clientWidth) / 0.02)) + "%"
    }
    scanner.init(`.${viewportclass}`).then((quagga) => {
      quagga.start();
      quagga.onDetected((data) => {
        quagga.stop();
      })
      quagga.onProcessed(function(result) {

      });
    })
  }
}
</script>
