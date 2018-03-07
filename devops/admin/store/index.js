import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    baseRoute: null,
    pageName: null,
    authUser: null
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },
    async login({ commit }, { username, password }) {
      try {
        const data = await this.$axios.$post('/admin/login', { username, password })
        commit('SET_USER', data)
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
    SET_USER(state, user) {
      state.authUser = user
    }
  }
})

export default store
