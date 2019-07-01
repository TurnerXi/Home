<template>
<div class="main-wrapper">
  <m-header></m-header>
  <m-order class="order-btn"></m-order>
  <m-service class="service-btn"></m-service>
  <text class="logout">退出登录</text>
</div>
</template>

<script>
import MHeader from '@/assets/components/my/MHeader';
import MOrder from '@/assets/components/my/MOrder';
import MService from '@/assets/components/my/MService';
export default {
  components: {
    MHeader,
    MOrder,
    MService
  }
}
</script>

<style>
.main-wrapper {
    padding-bottom: 150px;
}

.order-btn {
    margin-bottom: 18px;
}

.service-btn {
    margin-bottom: 80px;
}

.logout {
    height: 94px;
    background-color: #ffffff;
    font-size: 28px;
    text-align: center;
    line-height: 94px;
}
</style>
