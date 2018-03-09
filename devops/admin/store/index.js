import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    baseRoute: null,
    pageName: null,
    islogin: false
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
      await this.$axios.$post('/admin/logout')
      localStorage.setItem('isLogin', false)
    },
    async check_login({ commit }) {
      let data = await this.$axios.$get('/admin/checklogin')
      console.log(data)
      commit('CHECK_LOGIN', data.flag === 1)
    }
  },
  mutations: {
    SELECT_MENU(state, route) {
      state.baseRoute = route
    },
    CHECK_LOGIN(state, islogin) {
      state.islogin = islogin
    }
  }
})

export default store
