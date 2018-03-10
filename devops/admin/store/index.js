import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    baseRoute: null,
    pageName: null
  },
  getters: {
    is_login: function () {
      return localStorage.getItem('login')
    }
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {},
    async login({ commit }, { username, password, token }) {
      try {
        await this.$axios.$post('/admin/login', { username, password, token })
        localStorage.setItem('login', 1)
      } catch (error) {
        localStorage.removeItem('login')
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },
    async logout({ commit }) {
      await this.$axios.get('/admin/logout')
      localStorage.removeItem('login')
    },
    async check_login({ commit }) {
      let data = await this.$axios.$get('/admin/checklogin')
      if (data.flag === 1) {
        localStorage.setItem('login', 1)
      } else {
        localStorage.removeItem('login')
      }
    }
  },
  mutations: {
    SELECT_MENU(state, route) {
      state.baseRoute = route
    }
  }
})

export default store
