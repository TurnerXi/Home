import { Vue, $ } from 'js/base'
import homeIndex from './cp.vue'
require('../../assets/css/cart.css')
require('../../assets/css/base-order.css')
require('../../assets/css/lottery.css')
require('../../assets/css/trend.css')
require('../../assets/css/dlt-wyjj.css')
require('../../assets/css/dlt.css')

var homeVue = new Vue({
    el: '#home',
    template: '<home-index ></home-index>',
    components: {
        'home-index': homeIndex
    }
});