<template>
<section class="container">
  <div class="view-port">
    <div class="scanner-bg"></div>
  </div>
  <div class="">
    {{message}}
  </div>
</section>
</template>
<style>
  .view-port{
    position: relative;
    display: inline-block;
    width: 640px;
    height: 480px;
    margin-top: 20px;
  }
  .scanner-bg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 288px;
    height: 288px;
    border: 2px solid #3B8070 ;
    opacity: .1;
  }
</style>
<script>
import scanner from '~/plugins/scanner.js'
export default {
  data(){
    return {
      message:""
    }
  },
  mounted() {
    let viewportclass = 'view-port'
    let $viewport = document.getElementsByClassName(viewportclass)[0]
    let radio = 0.2
    let area = {
      top: ($viewport.clientHeight>$viewport.clientWidth?Math.round((1-$viewport.clientWidth*(1-radio*2)/$viewport.clientHeight)/0.02):radio*100)+"%",
      bottom: ($viewport.clientHeight>$viewport.clientWidth?Math.round((1-$viewport.clientWidth*(1-radio*2)/$viewport.clientHeight)/0.02):radio*100)+"%",
      right: ($viewport.clientHeight>$viewport.clientWidth?radio*100:Math.round((1-$viewport.clientHeight*(1-radio*2)/$viewport.clientWidth)/0.02))+"%",
      left: ($viewport.clientHeight>$viewport.clientWidth?radio*100:Math.round((1-$viewport.clientHeight*(1-radio*2)/$viewport.clientWidth)/0.02))+"%"
    }
    console.log(area);
    scanner.init(`.${viewportclass}`).then((quagga) => {
      quagga.start();
      quagga.onDetected((data) => {
        // console.log(data)
        this.message = data
      })
    quagga.onProcessed(function(result) {
       var drawingCtx =quagga.canvas.ctx.overlay,
           drawingCanvas =quagga.canvas.dom.overlay;

       if (result) {
           if (result.boxes) {
               drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
               result.boxes.filter(function (box) {
                   return box !== result.box;
               }).forEach(function (box) {
                  quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
               });
           }

           if (result.box) {
              quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
           }

           if (result.codeResult && result.codeResult.code) {
              quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
           }
       }
   });
    })
  }
}
</script>
