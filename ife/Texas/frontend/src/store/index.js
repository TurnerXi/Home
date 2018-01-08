import Vue from 'vue'
import Vuex from 'vuex'
import UserModel from './modules/UserModel'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    UserModel
  }
})
