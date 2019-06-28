<template>
<div class="main-wrapper">
  <m-header></m-header>
  <m-order class="cell-btn"></m-order>
  <m-service class="cell-btn"></m-service>
  <div class="logout"></div>
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
    padding-bottom: 120px;
}

.cell-btn {
    margin-bottom: 18px;
}

.header {
    /* height: 380px; */
}

.order {
    /* height: 226px; */
    /* padding-left: 26px; */
}

.service {
    /* padding-left: 26px; */
    /* margin-bottom: 40px; */
    /* background-color: #ffffff; */
}

.logout {
    height: 94px;
    background-color: #ffffff;
}
</style>
