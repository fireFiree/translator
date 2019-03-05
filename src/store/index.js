import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    wordGroups: []
  },
  getters: {},
  actions: {
    authorize (state) {
      return axios
        .get('/api/auth/authorize')
        .then(res => {
          state.commit('setUser', res.data)
        })
        .catch(() => {
          router.push('/login')
        })
    },
    login ({commit}, user) {
      axios
        .post('/api/auth/login', user)
        .then(res => {
          if (res.data.success) {
            commit('setUser', res.data.user)
            router.push({name: 'Words'})
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    registr ({commit}, user) {
      axios
        .post('/api/auth/registration', user)
        .then(res => {
          if (res.data.success) {
            commit('setUser', res.data.user)
            router.push({name: 'Words'})
          }
        })
        .catch(err => {
          console.log(err)
        })
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
