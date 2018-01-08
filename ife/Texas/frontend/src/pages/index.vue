<template lang="html">
  <span> hello room</span>
</template>
<script>
import ajax from '@/core/http'
export default {
  data: () => {
    return {}
  },
  mounted() {
    let self = this;
    ajax.get("/login/check_login").then(function(response) {
      if(+response.data.code !== 1){
        self.$router.push("login");
      }
    })
    // function getQueryString(param, url) {
    //   url = url || window.location.href;
    //   var query = url.split("?")[1];
    //   var list = query.split("&");
    //   for (var i = 0; i < list.length; i++) {
    //     var key = list[i].split("=")[0];
    //     if (key == param) {
    //       return list[i].split("=")[1];
    //     }
    //   }
    // }
    // var room_num = getQueryString("room_num");
    var socket = io("ws://127.0.0.1:3004",{
      query: 'token='+localStorage.token
    });
    // socket.on("monitor",function(data){
    //   console.log(data);
    // })
    socket.on("enter the hall",function(data){
      console.log(data);
    })
    // socket.emit("join room", room_num);
    // window.onload = function() {
    //   document.getElementsByTagName("body")[0].innerHTML = room_num;
    // }
  }
}
</script>

<style lang="css">
</style>
