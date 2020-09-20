<template>
  <div class="p-container">
    <header>
      <Navbar />
    </header>

    <div class="content">
      <b-row>
        <b-col md="4" class="chat-list">
          <b-card border-variant="white">
            <b-card-header header-bg-variant="white">
              <p>Chat</p>
            </b-card-header>
            <b-card-body>
              <!-- <div>
                <b-img :src="require('../assets/img/nochat.png')" />
              </div>-->
              <b-row>
                <b-col md="3" class="thumbnail">
                  <b-img
                    v-bind="mainProps"
                    :src="require('../assets/profile/louis.jpg')"
                    rounded="circle"
                    alt="Circle image"
                  >></b-img>
                </b-col>
                <b-col md="9" align-self="center" class="person">
                  <h1>Name goes here</h1>
                  <p>Permisi kak...</p>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="8" class="room-chat">
          <b-card border-variant="white">
            <b-card-header header-bg-variant="white">
              <b-row>
                <b-col md="1">
                  <b-img
                    v-bind="mainProps"
                    :src="require('../assets/profile/louis.jpg')"
                    rounded="circle"
                    alt="Circle image"
                  >></b-img>
                </b-col>
                <b-col md="11" align-self="center">
                  <p>Name goes here</p>
                </b-col>
              </b-row>
            </b-card-header>
            <b-card-body>
              <b-row class="bubble-chat">
                <b-col md="12" class="text-left purp">
                  <p>chat goes here</p>
                </b-col>
                <b-col md="12" class="text-right or">
                  <p>chat goes here</p>
                </b-col>
              </b-row>
            </b-card-body>
            <b-card-footer footer-bg-variant="white" footer-border-variant="white">
              <b-row>
                <b-col md="11">
                  <b-form-input v-model="chat" placeholder="Type a message"></b-form-input>
                </b-col>
                <b-col md="1" class="send text-center">
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

export default {
  components: {
    Navbar,
    Footer
  },
  name: 'Roomchat',
  data() {
    return {
      mainProps: {
        width: 40,
        height: 40
      }
    }
  }
}
</script>

<style scoped>
.p-container {
  overflow-x: hidden;
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
  border-radius: 30px 30px 30px 0px;
  margin: 0.3em;
}

.content .room-chat .bubble-chat .purp p {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: white;
  margin: 0;
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
</style>
