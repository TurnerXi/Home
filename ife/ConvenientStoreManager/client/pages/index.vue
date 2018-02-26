<template>
<section class="container">
  <div class="view-port"> <svg width="100%" height="100%" style="position:absolute;">
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#00f735;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00f735;stop-opacity:0.5" />
      </radialGradient>
    </defs>
     <g>
      <line :x1="borderWidth/2" :y1="hdistance/2+borderWidth/2" :x2="screenWidth-borderWidth/2" :y2="hdistance/2+borderWidth/2" :stroke-width="hdistance" stroke="#7f7f7f"  fill-opacity="0" :opacity="maskOpacity"/>
      <line :x1="borderWidth/2" :y1="screenHeight-borderWidth/2-hdistance/2" :x2="screenWidth-borderWidth/2" :y2="screenHeight-borderWidth/2-hdistance/2" :stroke-width="hdistance" stroke="#7f7f7f"  fill-opacity="0" :opacity="maskOpacity"/>

      <line :x1="borderWidth/2+vdistance/2" :y1="borderWidth/2" :x2="borderWidth/2+vdistance/2" :y2="screenHeight-borderWidth/2" :stroke-width="vdistance" stroke="#7f7f7f"  fill-opacity="0" :opacity="maskOpacity"/>
      <line :x1="screenWidth-borderWidth/2-vdistance/2" :y1="borderWidth/2" :x2="screenWidth-borderWidth/2-vdistance/2" :y2="screenHeight-borderWidth/2" :stroke-width="vdistance" stroke="#7f7f7f"  fill-opacity="0" :opacity="maskOpacity"/>

      <rect fill="#000000" stroke="#7f7f7f" :stroke-width="borderWidth" x="0" y="0" width="100%" height="100%" id="svg_1" fill-opacity="0" :opacity="maskOpacity"/>
      <rect fill="#000000" stroke-width="7" :stroke-dashoffset="(screenWidth-2*vdistance-borderWidth)*0.1" :stroke-dasharray="(screenWidth-2*vdistance-borderWidth)*0.2+','+(screenWidth-2*vdistance-borderWidth)*0.8"   :x="borderWidth/2+vdistance" :y="hdistance+borderWidth/2" :style="{width: screenWidth-2*vdistance-borderWidth, height: screenWidth-2*vdistance-borderWidth}" fill-opacity="0" stroke="#00f735"/>
      <ellipse cx="50%" :cy="hdistance+borderWidth/2" :rx="15+(screenWidth-2*vdistance-borderWidth)/2" ry="3" fill="url(#grad1)" >
        <animate attributeName="cy" :to="screenHeight-borderWidth/2-hdistance" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="rx" :to="10+(screenWidth-2*vdistance-borderWidth)/2" begin="0s" dur="1s" repeatCount="indefinite" />
      </ellipse>
     </g>
    </svg> </div>
  <nuxt-link class="footer_btn fix_footer" to="/list"> Show List </nuxt-link>
</section>
</template>
<style >
.view-port {
  position: relative;
  display: block;
  background-color: #89c4a8;
  width: 100%;
  height: 100%;
}

.view-port * {
  height: 100%;
  width: 100%;
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
      hdistance: 0,
      vdistance: 0,
      maskOpacity: 0.75,
      message: "",
      code: ""
    }
  },
  computed: {
    borderWidth: function() {
      return Math.round(this.screenWidth / 6) * 2
    }
  },
  methods: {
    render: function(){
      if (this.screenWidth == 0) {
        this.screenWidth = document.body.clientWidth
      }
      if (this.screenHeight == 0) {
        this.screenHeight = document.body.clientHeight
      }
      if (this.hdistance == 0 && document.body.clientWidth <= document.body.clientHeight) {
        this.hdistance = Math.abs(document.body.clientWidth - document.body.clientHeight) / 2
      }
      if (this.vdistance == 0 && document.body.clientWidth >= document.body.clientHeight) {
        this.vdistance = Math.abs(document.body.clientWidth - document.body.clientHeight) / 2
      }
    },
    resizeEvent: function(){
      this.screenWidth = document.body.clientWidth
      this.screenHeight = document.body.clientHeight
      if (document.body.clientWidth <= document.body.clientHeight) {
        this.vdistance = 0
        this.hdistance = Math.abs(document.body.clientWidth - document.body.clientHeight) / 2
      } else {
        this.hdistance = 0
        this.vdistance = Math.abs(document.body.clientWidth - document.body.clientHeight) / 2
      }
    },
    init_scanner: function(){
      const self = this
      let viewportclass = 'view-port'
      scanner.init(`.${viewportclass}`).then((quagga) => {
        quagga.start();
        quagga.onDetected((data) => {
          let hasProduct = false;
          if(data.codeResult.code != self.code){
            self.code = data.codeResult.code
          }else{
            if(!hasProduct){
              hasProduct = true;
              self.$http.get(`/api/product/${self.code}`).then((result)=>{
                  if(result.data != null){
                    this.$router.push('list');
                    quagga.stop();
                  }else{
                    hasProduct = false;
                  }
              })
            }
          }

        })
        quagga.onProcessed(function(result) {});
      })
    }
  },
  mounted() {
    const self = this
    this.init_scanner();
    this.render();
    window.onresize = () => {
      return self.resizeEvent();
    }
  },
}
</script>
