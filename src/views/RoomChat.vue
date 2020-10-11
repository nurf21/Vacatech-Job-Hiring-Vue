<template>
  <div class="p-container">
    <header v-if="user.user_role === 1">
      <Navbar :img="talentData[0].profile[0].profile_img" />
    </header>
    <header v-if="user.user_role === 2">
      <Navbar :img="company[0].profile_img" />
    </header>

    <div class="content">
      <b-row>
        <b-col md="4" class="chat-list">
          <b-card border-variant="white">
            <b-card-header header-bg-variant="white">
              <p>Chat</p>
            </b-card-header>
            <b-card-body>
              <div v-show="!isChat">
                <b-img :src="require('../assets/img/nochat.png')" center />
              </div>
              <b-row
                v-show="isChat"
                v-for="(value, index) in room"
                :key="index"
              >
                <b-col md="3" class="thumbnail">
                  <b-img
                    v-bind="mainProps"
                    :src="url + '/' + value.profile_img"
                    rounded="circle"
                    alt="Circle image"
                    >></b-img
                  >
                </b-col>
                <b-col
                  md="9"
                  align-self="center"
                  class="person"
                  @click="select(value)"
                >
                  <h1>{{ value.user_name }}</h1>
                  <p>{{ value.msg.slice(0, 15) }}...</p>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="8" class="room-chat" v-show="isSelect">
          <b-card border-variant="white">
            <b-card-header header-bg-variant="white">
              <b-row>
                <b-col md="1">
                  <b-img
                    v-bind="mainProps"
                    :src="url + '/' + selectedRoom.profile_img"
                    rounded="circle"
                    alt="Circle image"
                    >></b-img
                  >
                </b-col>
                <b-col md="11" align-self="center">
                  <p>{{ selectedRoom.user_name }}</p>
                </b-col>
              </b-row>
            </b-card-header>
            <b-card-body class="chat-content">
              <b-row
                class="bubble-chat"
                v-for="(value, index) in messages"
                :key="index"
              >
                <b-col md="9" class="text-left purp">
                  <p>{{ value.user_name }}: {{ value.msg }}</p>
                </b-col>
                <b-col md="2" align-self="center">
                  <span class="chat-date">
                    {{
                      value.msg_created_at.split('T').join(', ').slice(0, 17)
                    }}
                  </span>
                </b-col>
              </b-row>
            </b-card-body>
            <b-card-footer
              footer-bg-variant="white"
              footer-border-variant="white"
            >
              <b-row>
                <b-col md="11">
                  <b-form-input
                    v-model="textToSend"
                    placeholder="Type a message"
                  ></b-form-input>
                </b-col>
                <b-col md="1" class="send text-center" @click="send()">
                  <b-img :src="require('../assets/icon/send.png')" />
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/NavigationBar'
import Footer from '../components/_base/Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    Footer
  },
  name: 'Roomchat',
  data() {
    return {
      form: {},
      mainProps: {
        width: 40,
        height: 40
      },
      isChat: false,
      isSelect: false,
      selectedRoom: {},
      textToSend: null,
      url: process.env.VUE_APP_BASE_URL
    }
  },
  methods: {
    ...mapActions(['getRoomChatById', 'getMessageChatByRoom', 'sendMessage']),
    select(data) {
      this.isSelect = true
      this.selectedRoom = data
      this.getMessageChatByRoom(this.selectedRoom.roomchat_id)
    },
    send() {
      this.form = {
        roomchat_id: this.selectedRoom.roomchat_id,
        user_id: this.user.user_id,
        receiver_id: this.messages.filter(
          (value) => value.user_id !== this.user.user_id
        )[0].user_id,
        msg: this.textToSend
      }
      console.log(this.form)
      this.sendMessage(this.form)
        .then((result) => {
          this.getMessageChatByRoom(this.selectedRoom.roomchat_id)
          this.textToSend = null
        })
        .catch((error) => console.log(error))
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      talentData: 'getTalentData',
      company: 'getProfileCompany',
      room: 'getRoom',
      messages: 'getMessages'
    })
  },
  created() {
    this.isSelect = false
    this.getRoomChatById(this.user.user_id)
      .then((result) => {
        this.isChat = true
      })
      .catch((error) => {
        this.isChat = false
        console.log(error)
      })
  }
}
</script>

<style scoped>
.p-container {
  overflow-x: hidden;
}

.person {
  cursor: pointer;
}

.content {
  background-color: #f6f7f8;
  padding: 4.35em 9em;
}

.content .send {
  background-color: #5e50a1;
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;
}

.chat-list .card-body {
  min-height: 400px;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

.chat-content {
  min-height: 318px;
  max-height: 319px;
  overflow-y: auto;
  overflow-x: hidden;
}

.content .chat-list p {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1f2a36;
  margin: 0;
}

.content .chat-list .person h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1f2a36;
  margin: 0;
}

.content .chat-list .person p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #9b9b9b;
}

.content .room-chat p {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1f2a36;
  margin: 0;
}

.content .room-chat .bubble-chat .purp {
  background: rgba(94, 80, 161, 0.8);
  padding: 1em;
  border-radius: 30px 30px 0px 30px;
  margin: 0.3em;
}

.content .room-chat .bubble-chat .purp p {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;
  margin: 0;
}

.chat-date {
  font-size: 14px;
}

.content .room-chat .bubble-chat .or {
  background: rgba(251, 176, 23, 0.6);
  padding: 1em;
  border-radius: 30px 30px 0px 30px;
  margin: 0.3em;
}

.content .room-chat .bubble-chat .or p {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1f2a36;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .content {
    padding: 4em 3em;
  }

  .content img.mx-auto.d-block {
    max-height: 100px;
  }

  .content .card-body{
    padding: 10px;
  }

  .content .chat-list .person h1 {
    font-size: 14px;
    margin-left: 10px;
  }

  .content .room-chat .card-header {
    padding: 10px;
  }

  .content .room-chat .bubble-chat {
    padding: 32px;
  }

  .content .room-chat .card-header p {
    margin-left: 20px;
  }

  .content .room-chat .bubble-chat .purp p {
    font-size: 14px;
    line-height: 20px;
    text-align: right;
  }

  .content .room-chat .bubble-chat .purp {
    padding: 14px;
  }

  .content .room-chat .card-footer .send {
    padding: 5px 10px;
  }

  .content .room-chat .card-footer .send img {
    width: 14px;
    height: 14px;
  }
}

@media screen and (max-width: 425px) {
  .content .chat-list {
    margin-bottom: 18px;
  }

  .thumbnail.col-md-3, .card-header .col-md-1 {
    width: 50px;
    height: 50px;
  }

  .person.col-md-9, .card-header .col-md-11 {
    width: 200px;
  }

  .card-header .col-md-11 {
    padding: 0;
  }

  .card-body .row.bubble-chat {
    padding: 22px;
  }

  .card-footer .col-md-11 {
    padding-left: 0;
    width: 259px;
  }

  .card-footer .col-md-1 {
    width: 38px;
  }
}

@media screen and (max-width: 375px) {
  .card-footer .col-md-11 {
    padding-left: 0;
    width: 209px;
  }

  .card-footer .col-md-1 {
    width: 38px;
  }
}

@media screen and (max-width: 320px) {
  .content {
    padding: 2em;
  }

  .card-body .row.bubble-chat {
    padding: 16px;
  }

  .person.col-md-9, .card-header .col-md-11 {
    width: 194px;
  }

  .card-footer .col-md-11 {
    padding-left: 0;
    width: 186px;
  }

  .card-footer .col-md-1 {
    width: 38px;
  }
}
</style>
