import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
  // plugins: [
  //   createPersistedState({
  //     path: ['Auth.user'],
  //     storage: window.sessionStorage
  //   })
  // ]
})
