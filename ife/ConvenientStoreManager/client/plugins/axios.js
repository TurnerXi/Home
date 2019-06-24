import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
var axio = axios.create({
  baseURL: process.env.API_HOST||'/'
})
Vue.use(Vueaxios, axio)
export default axio
