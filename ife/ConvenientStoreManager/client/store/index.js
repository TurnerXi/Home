import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    products: [{name:'123222',code:"264564581354",price:15,number:1},
              {name:'123222',code:"264564581354",price:15,number:1}]
  },
  getters: {
    product_list: state => {
      return state.products;
    },
    pdt_codes: state => {
      return state.products.map(item => item.code)
    },
    total_price: state => {
      return state.products.reduce((privous, current) => {
        return current.number * current.price + privous
      }, 0);
    }
  },
  mutations: {
    add(state, pdt) {
      if (this.getters.pdt_codes.indexOf(pdt.code) < 0) {
        state.products.push(pdt)
      }
    },
    del(state, code) {
      let index = this.getters.indexOf(code)
      state.products.splice(index)
    },
    update(state, pdt) {
      let index = this.getters.pdt_codes.indexOf(pdt.code)
      Vue.set(state.products, index, pdt)
    }
  }
})

export default store
