import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Profile from './modules/profile'
import Skill from './modules/skill'
import Experience from './modules/experience'
import Portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Profile,
    Skill,
    Experience,
    Portfolio
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      path: ['Auth.user'],
      storage: window.sessionStorage
    })
  ]
})
