import axios from 'axios'

export default {
  state: {
    notification: {},
    roomChat: {},
    messages: {}
  },
  mutations: {
    setNotif(state, payload) {
      state.notification = payload
    },
    setRoom(state, payload) {
      state.roomChat = payload
    },
    setMessages(state, payload) {
      state.messages = payload
    }
  },
  actions: {
    postRoomChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/roomchat`, payload)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getNotification(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/roomchat/chat/notif/${payload}`)
          .then(response => {
            context.commit('setNotif', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getRoomChatById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/roomchat/chat/room/${payload}`)
          .then(response => {
            context.commit('setRoom', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getMessageChatByRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_BASE_URL}/roomchat/chat/message/${payload}`)
          .then(response => {
            context.commit('setMessages', response.data.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    sendMessage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/roomchat/message`, payload)
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
    getNotif(state) {
      return state.notification
    },
    getRoom(state) {
      return state.roomChat
    },
    getMessages(state) {
      return state.messages
    }
  }
}
