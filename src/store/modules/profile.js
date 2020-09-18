import axios from 'axios'

export default {
  state: {
    profileDataCompany: {}
  },
  mutations: {
    setProfile(state, payload) {
      state.profileData = payload
    }
  },
  actions: {
    getProfileDataCompany(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/profile/company/${payload}`)
          .then(response => {
            context.commit('setProfile', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getProfileCompany(state) {
      return state.profileData
    }
  }
}
