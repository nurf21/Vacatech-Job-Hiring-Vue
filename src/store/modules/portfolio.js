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
    }
  },
  getters: {}
}
