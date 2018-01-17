import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
var axio = axios.create({
  baseURL: process.env.baseUrl||'127.0.0.1'
})
Vue.use(Vueaxios, axio)
export default axio
