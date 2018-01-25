<template>
<section class="container">
  <div class="view-port">
    <svg class="scanner-bg">
      <g>
          <path d="M0,0L640,0" style="fill:#000;opacity:0.75;stroke:#7f7f7f;stroke-width:280"/>
          <path d="M640,140L640,340" style="fill:#000;opacity:0.75;stroke:#7f7f7f;stroke-width:440"/>
          <path d="M640,480L0,480" style="fill:#000;opacity:0.75;stroke:#7f7f7f;stroke-width:280"/>
          <path d="M0,340L0,140" style="fill:#000;opacity:0.75;stroke:#7f7f7f;stroke-width:440"/>
          <rect fill="#000000" stroke-width="7" stroke-dashoffset="20" stroke-dasharray="40,160"   x="220" y="140"  width="200" height="200" id="svg_5" fill-opacity="0" stroke="#55f755"/>
          <ellipse cx="320" cy="240" rx="150" ry="2" fill="url(#grad1)" >
            <animate id="c1" attributeName="cy" attributeType="XML"  dur="4s" values="140;340;140" repeatCount="indefinite" opacity="0"/>
          </ellipse>
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:rgb(0,255,0);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
            </radialGradient>
            <animateTransform from="140" to="340" type="skewY" id=""/>
          </defs>
        </g>
    </svg>
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
  width: 640px;
  height: 480px;
}
</style>
<script>
import scanner from '~/plugins/scanner.js'
import axios from '~/plugins/axios.js'
export default {
  data() {
    return {
      message: ""
    }
  },
  mounted() {
    console.log(this.axios.defaults.baseURL);
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
      quagga.onProcessed(function(result) {});
    })
  }
}
</script>
