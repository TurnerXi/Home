import { Vue, $ } from 'js/base'
import homeIndex from './cp.vue'
import store from '../../vuex/store'
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