import axios from 'axios'

export default {
  state: {
    profileTalent: {},
    profileDataCompany: {},
    workerList: {},
    talentId: null,
    talentData: {},
    page: 1,
    limit: 4,
    sort: 'ORDER BY user.user_id',
    totalRows: null
  },
  mutations: {
    setProfile(state, payload) {
      state.profileData = payload
    },
    setProfileTalent(state, payload) {
      state.profileTalent = payload
    },
    setWorkers(state, payload) {
      state.workerList = payload.data
      state.totalRows = payload.pagination.totalData
    },
    pageChange(state, payload) {
      state.page = payload
    },
    setSort(state, payload) {
      state.sort = payload
    },
    setTalentId(state, payload) {
      state.talentId = payload
    },
    setTalentData(state, payload) {
      state.talentData = payload
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
    getProfileDataTalent(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/profile/worker/${payload}`)
          .then(response => {
            context.commit('setProfileTalent', response.data.data)
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
    },
    getTalentDataById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/users/${payload}`)
          .then(response => {
            context.commit('setTalentData', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProfileImageTalent(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/profile/worker/image/${payload.id}`, payload.form)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProfileTalent(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/profile/worker/${payload.id}`, payload.form)
          .then(response => {
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
    getProfileTalent(state) {
      return state.profileTalent
    },
    getAllWorker(state) {
      return state.workerList
    },
    getTotalRows(state) {
      return state.totalRows
    },
    getLimit(state) {
      return state.limit
    },
    getTalentData(state) {
      return state.talentData
    },
    getTalentId(state) {
      return state.talentId
    }
  }
}
