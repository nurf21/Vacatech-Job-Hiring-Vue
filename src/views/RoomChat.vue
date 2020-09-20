<template>
  <div class="p-container">
    <header>
      <Navbar />
    </header>

    <div class="content">
      <b-col class="roomchat" md="12">
        <b-row class="f-form">
          <b-col md="4">
            <b-card border-variant="white" class="text-center">
              <b-card-header header-bg-variant="white" class="text-left">
                <p>Chat</p>
              </b-card-header>
              <b-card-body>
                <b-form>
                  <img src="../assets/img/nochat.png" alt />
                  <h6 style="margin-top:20px">Belum ada chat</h6>
                </b-form>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="8">
            <b-card border-variant="white" class="text-center">
              <b-card-header header-bg-variant="white" class="text-left" style="margin-top:23px">
                <p></p>
              </b-card-header>
              <b-card-body>
                <b-row>
                  <b-col md="11">
                    <b-form-input id="input-1" v-model="chat" placeholder="Type a message"></b-form-input>
                  </b-col>
                  <b-col md="1" class="send">
                    <img src="../assets/icon/send.png" alt style="margin-top:10px" />
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
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
  name: 'Roomchat'
}
</script>

<style scoped>
.content {
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.35em 9em;
}

.content .send {
  background-color: #5e50a1;
  border-radius: 100%;
  cursor: pointer;
}
.content .footer {
  overflow-x: hidden;
}
</style>
