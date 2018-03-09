import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    baseRoute: null,
    pageName: null
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {},
    async login({ commit }, { username, password, token }) {
      try {
        await this.$axios.$post('/admin/login', { username, password, token })
        localStorage.setItem('isLogin', true)
      } catch (error) {
        localStorage.setItem('isLogin', false)
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },
    async logout({ commit }) {
      await this.$axios.$post('/api/logout')
      localStorage.setItem('isLogin', false)
    },
    async islogin() {
      let data = await this.$axios.$get('/admin/checklogin')
      return data.flag === 1
    }
  },
  mutations: {
    SELECT_MENU(state, route) {
      state.baseRoute = route
    }
  }
})

export default store
