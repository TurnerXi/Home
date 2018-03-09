import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    baseRoute: null,
    pageName: null,
    token: null
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const data = await this.$axios.$post('/admin/login', { username, password })
        // localStorage.setItem('token', data['token'])
        // localStorage.setItem('is_supper', data['is_supper'])
        // localStorage.setItem('permissions', data['permissions'])
        // localStorage.setItem('nickname', data['nickname'])
        commit('SET_USER', data['token'])
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    },
    async logout({ commit }) {
      await this.$axios.$post('/api/logout')
      commit('SET_USER', null)
    }
  },
  mutations: {
    SELECT_MENU(state, route) {
      state.baseRoute = route
    },
    SET_USER(state, token) {
      state.token = token
    }
  }
})

export default store
