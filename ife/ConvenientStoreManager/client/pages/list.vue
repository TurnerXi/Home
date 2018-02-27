<template>
<section class="container">
  <h1 class="title">商品列表</h1>
  <ul class="case-list">
    <li v-for="item in product_list" @click.prevent>
      <div class="image"><img width="64" data-src="item.pic" src="/pdt_default.png"></div>
      <div class="description">
        <h6>{{item.code}}</h6>
        <p>单价：{{item.price}}</p>
      </div>
      <div class="number"> <button @click.prevent="minus(item)">-</button> <input value=1 v-model="item.number" @keyup="numberChangeEvent(item)" @change="numberChangeEvent(item)" /> <button @click.prevent="plus(item)">+</button> </div>
      <div class="del_btn">删除</div>
    </li>
    <li>
      <p class="total" v-if="total_price > 0">总计：{{total_price}}</p>
    </li>
  </ul>
  <nuxt-link class="footer_btn fix_footer" to="/"> 继续扫描 </nuxt-link>
</section>
</template>
<script>
import axios from '~/plugins/axios.js'
import { mapGetters } from 'vuex'
export default {
  methods: {
    plus: function(item) {
      if (item.number < 99) {
        this.$store.commit('update', Object.assign({}, item, { number: item.number + 1 }))
      }
    },
    minus: function(item) {
      if (item.number > 1) {
        this.$store.commit('update', Object.assign({}, item, { number: item.number - 1 }))
      }
    },
    numberChangeEvent: function(item) {
      let number = item.number;
      if (item.number > 99) {
        number = 99;
      } else if (item.number < 1) {
        number = 1;
      }
      this.$store.commit('update', Object.assign({}, item, { number }))
    }
  },
  computed: { ...mapGetters(['product_list', 'total_price'])
  }
}
</script>

<style scoped>
.title {
  position: fixed;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #3B8070;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 0;
  font-size: 1.25rem;
}

.case-list {
  list-style: none;
  overflow: hidden;
  padding: 58px 0;
  margin: 0;
  background: #fff;
}

.case-list>li {
  position: relative;
  padding: 10px;
}

.case-list>li>.image {
  width: 20%;
  height: 64px;
  display: inline-block;
  text-align: right;
}

.case-list>li>.description {
  display: inline-block;
  vertical-align: top;
  margin-left: 5%;
  width: 35%;
  border-bottom: 1px dashed #ececec;
  padding-bottom: 10px;
  text-align: left;
}

.case-list>li>.description>h6 {
  font-size: 14px;
  font-weight: 700;
  height: 32px;
}

.case-list>li>.description>h6 {
  margin: 0;
  padding: 0;
}

.case-list>li>.description>p {
  font-size: 12px;
  color: #717171;
  font-weight: 300;
  height: 32px;
}

.case-list>li>.description>p {
  margin: 0;
  padding: 5px 0;
}

.case-list>li>.number {
  display: inline-block;
  vertical-align: top;
  margin-left: 2%;
  width: 38%;
  height: 100%;
}

.case-list>li>.number>button {
  display: inline-block;
  outline: 0;
  height: 100%;
  width: 2.5rem;
  padding: 1rem 0;
  font-size: 1.25rem;
  border: 1px solid #ffffff;
  background-color: #ffffff;
}

.case-list>li>.number>input {
  border: none;
  outline: 0;
  height: 100%;
  width: 2.5rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  background-color: #ffffff;
  box-sizing: border-box;
  appearance: none;
}

.case-list>li>.total {
  text-align: right;
  font-size: 1rem;
  font-weight: 700;
  padding-right: 1rem;
  color: #82ABBA;
}

.case-list>li>.del_btn {
  position: absolute;
  top: 0;
  right: -80px;
  text-align: center;
  background: #ffcb20;
  color: #fff;
  width: 80px;
}
</style>
