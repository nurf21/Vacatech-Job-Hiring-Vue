import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    postPortfolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/portfolio`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchPortfolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/portfolio/${payload.id}`, payload.form)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    deletePortfolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_BASE_URL}/portfolio/${payload}`)
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
