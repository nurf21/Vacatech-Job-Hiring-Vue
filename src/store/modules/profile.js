import axios from 'axios'

export default {
  state: {
    profileDataCompany: {},
    workerList: {},
    page: 1,
    limit: 4,
    sort: 'user_id',
    totalRows: null
  },
  mutations: {
    setProfile(state, payload) {
      state.profileData = payload
    },
    setWorkers(state, payload) {
      state.workerList = payload.data
      state.totalRows = payload.pagination.totalData
    },
    pageChange(state, payload) {
      state.page = payload
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
    },
    getAllWorkerData(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/users/worker?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}`)
          .then(response => {
            context.commit('setWorkers', response.data)
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
    },
    getAllWorker(state) {
      return state.workerList
    },
    getTotalRows(state) {
      return state.totalRows
    },
    getLimit(state) {
      return state.limit
    }
  }
}
