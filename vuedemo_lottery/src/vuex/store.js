import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import cp from './modules/cp'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        cp
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
