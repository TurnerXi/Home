<template>
<div id='login' class='login'>
  <el-row style='z-index: 1;height: 100%;'>
    <el-card class='login-box' element-loading-background='rgba(0, 0, 0, 0.8)'>
      <nuxt></nuxt>
    </el-card>
  </el-row>
</div>
</template>
<script>
import starcanvas from '../utils/starcanvas'
export default {
  mounted() {
    starcanvas({ context: 'login' })
  }
}
</script>
<style scoped>
.login {
  background-color: #324057;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}

.login-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 350px;
  max-width: 80%;
  padding: 20px 50px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
}

@media screen and (max-width: 700px) {
  .login-box {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 80%;
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
    border: none;
  }
}
</style>
