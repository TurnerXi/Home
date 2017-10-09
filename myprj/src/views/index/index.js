import Vue from 'vue'
import homeIndex from './index.vue'
import store from '../../store/index'
require('../../assets/css/cart.css')
require('../../assets/css/base-order.css')
require('../../assets/css/lottery.css')
require('../../assets/css/trend.css')
require('../../assets/css/dlt-wyjj.css')
require('../../assets/css/dlt.css')

var homeVue = new Vue({
    el: '#home',
    store,
    template: '<home-index ></home-index>',
    components: {
        'home-index': homeIndex
    }
});