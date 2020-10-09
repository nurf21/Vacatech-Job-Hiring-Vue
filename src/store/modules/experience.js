import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    postExp(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/experience`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchExp(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/experience/${payload.id}`, payload.form)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    deleteExp(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_BASE_URL}/experience/${payload}`)
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
