import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    wordGroups: []
  },
  getters: {},
  actions: {
    signIn ({commit}, user) {
      commit('setUser', user)
    },
    logOut ({commit}) {
      commit('clearUser')
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = null
    }
  }
})
