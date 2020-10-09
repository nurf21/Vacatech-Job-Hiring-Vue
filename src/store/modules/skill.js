import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    postSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/skill`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/skill/${payload.id}`, payload.form)
          .then(response => {
            resolve(response.data)
          }).catch(error => {
            reject(error.response)
          })
      })
    },
    deleteSkill(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_BASE_URL}/skill/${payload}`)
          .then(response => {
            resolve(response.data)
          }).catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {}
}
