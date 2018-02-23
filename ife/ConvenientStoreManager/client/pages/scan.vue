<template>
<section>
  <div class="view-port"> <svg width="100%" height="100%" style="position:absolute;">
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#00f735;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00f735;stop-opacity:0.5" />
      </radialGradient>
    </defs>
     <g>
      <line :x1="borderWidth/2" :y1="distance/2+borderWidth/2" :x2="screenWidth-borderWidth/2" :y2="distance/2+borderWidth/2" :stroke-width="distance" stroke="#7f7f7f"  fill-opacity="0" :opacity="maskOpacity"/>
      <line :x1="borderWidth/2" :y1="screenHeight-borderWidth/2-distance/2" :x2="screenWidth-borderWidth/2" :y2="screenHeight-borderWidth/2-distance/2" :stroke-width="distance" stroke="#7f7f7f"  fill-opacity="0" :opacity="maskOpacity"/>
      <rect fill="#000000" stroke="#7f7f7f" :stroke-width="borderWidth" x="0" y="0" width="100%" height="100%" id="svg_1" fill-opacity="0" :opacity="maskOpacity"/>
      <rect fill="#000000" stroke-width="7" :stroke-dashoffset="(screenWidth-borderWidth)*0.1" :stroke-dasharray="(screenWidth-borderWidth)*0.2+','+(screenWidth-borderWidth)*0.8"   :x="borderWidth/2" :y="distance+borderWidth/2" :style="{width: screenWidth-borderWidth, height: screenWidth-borderWidth}" fill-opacity="0" stroke="#00f735"/>
      <ellipse cx="50%" :cy="distance+borderWidth/2" :rx="15+(screenWidth-borderWidth)/2" ry="3" fill="url(#grad1)" >
        <animate attributeName="cy" :to="screenHeight-borderWidth/2-distance" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="rx" :to="10+(screenWidth-borderWidth)/2" begin="0s" dur="1s" repeatCount="indefinite" />
      </ellipse>
     </g>
    </svg> </div>
  <!-- <div class=""> {{message}} </div> -->
</section>
</template>
<style>
.view-port {
  position: relative;
  display: block;
  background-color: #89c4a8;
  width: 100%;
  height: 100%;
}
</style>
<script>
import scanner from '~/plugins/scanner.js'
import axios from '~/plugins/axios.js'
export default {
  data() {
    return {
      screenWidth: 0,
      screenHeight: 0,
      distance: 0,
      maskOpacity: 0.75,
      message: ""
    }
  },
  computed: {
    borderWidth: function() {
      return Math.round(this.screenWidth / 6) * 2
    }
  },
  mounted() {
    let viewportclass = 'view-port'
    scanner.init(`.${viewportclass}`).then((quagga) => {
      quagga.start();
      quagga.onDetected((data) => {
        alert(data);
        quagga.stop();
      })
      quagga.onProcessed(function(result) {});
    })
    if (this.screenWidth == 0) {
      this.screenWidth = document.body.clientWidth
    }
    if (this.screenHeight == 0) {
      this.screenHeight = document.body.clientHeight
    }
    if (this.distance == 0) {
      this.distance = Math.abs(document.body.clientWidth - document.body.clientHeight) / 2
    }
    const self = this
    window.onresize = () => {
      return (() => {
        self.screenWidth = document.body.clientWidth
        self.screenHeight = document.body.clientHeight
        this.distance = Math.abs(document.body.clientWidth - document.body.clientHeight) / 2
      })()
    }
  },
}
</script>
