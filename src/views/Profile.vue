<template>
  <div class="p-container">
    <header>
      <Navbar />
    </header>

    <div class="content">
      <div class="card-container">
        <b-row>
          <b-col>
            <b-row class="profile-image">
              <b-col>
                <b-img
                  center
                  v-bind="profilePict"
                  :src="require('../assets/profile/louis.jpg')"
                  style="width: 150px; height: 150px; object-fit: cover"
                  rounded="circle"
                ></b-img>
              </b-col>
            </b-row>

            <b-row class="main-profile">
              <b-col md="12" sm="12" class="text-center title">
                <h1>Louis Tomlinson</h1>
              </b-col>
              <b-col md="12" sm="12" class="text-center role">
                <p>Web Developer</p>
              </b-col>
              <b-col md="12" sm="12" class="text-center location">
                <b-row class="justify-content-center">
                  <b-col md="auto">
                    <b-img :src="require('../assets/icon/pin.png')"></b-img>
                  </b-col>
                  <b-col md="auto" align-self="end">
                    <p>Purwokerto, Jawa Tengah</p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="12" sm="12" class="text-center roles">
                <p>Freelancer</p>
              </b-col>
              <b-col md="12" sm="12" class="text-center about">
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </b-col>
              <b-col md="4"></b-col>
              <b-col md="4" class="text-center hire">
                <b-button size="md" block class="b-button-hire">Hire</b-button>
              </b-col>
              <b-col md="4"></b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="skills">
          <b-col md="12" sm="12" class="text-center title">
            <h1>Skill</h1>
          </b-col>
          <b-col md="12" sm="12" class="text-center skill">
            <b-button disabled size="md" class="b-button-skill">Java</b-button>
            <b-button disabled size="md" class="b-button-skill">Phyton</b-button>
            <b-button disabled size="md" class="b-button-skill">JavaScript</b-button>
          </b-col>
        </b-row>
        <b-row class="contact" cols="3">
          <b-col md="12" sm="12" class="text-center title">
            <h1>Social Media</h1>
          </b-col>
          <b-col>
            <b-row class="justify-content-center">
              <b-col md="auto">
                <b-img :src="require('../assets/icon/mail.png')"></b-img>
              </b-col>
              <b-col md="auto" align-self="end">
                <p>Louistommo@gmail.com</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <b-row class="justify-content-center">
              <b-col md="auto">
                <b-img :src="require('../assets/icon/mail.png')"></b-img>
              </b-col>
              <b-col md="auto" align-self="end">
                <p>Louistommo@gmail.com</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <b-row class="justify-content-center">
              <b-col md="auto">
                <b-img :src="require('../assets/icon/mail.png')"></b-img>
              </b-col>
              <b-col md="auto" align-self="end">
                <p>Louistommo@gmail.com</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <b-row class="justify-content-center">
              <b-col md="auto">
                <b-img :src="require('../assets/icon/mail.png')"></b-img>
              </b-col>
              <b-col md="auto" align-self="end">
                <p>Louistommo@gmail.com</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" sm="12">
            <b-tabs content-class="mt-3">
              <b-tab title="Portofolio" active>Card goes here</b-tab>
              <b-tab title="Pengalaman Kerja">Card goes here</b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.35em 9em;
}

.card-container {
  width: 83vw;
  background: white;
  border-radius: 8px;
  padding: 3.15em 4.35em;
}

.main-profile .title h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.main-profile .role p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #1f2a36;
}

.main-profile .location p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
  margin: 0;
}

.main-profile .roles p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #9ea0a5;
  margin: 16px 0px;
}

.main-profile .about p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #9ea0a5;
}

.main-profile .hire .b-button-hire {
  color: white;
  background-color: #5e50a1;
}

.skills {
  padding: 2.75em 0em;
}

.skills .title h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.skills .skill .b-button-skill {
  color: white;
  background-color: #fdd074;
  border: 1px solid #fbb017;
  margin: 0em 0.5em;
}

.contact {
  padding: 2.75em 0em;
}

.contact h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.footer {
  overflow-x: hidden;
}
</style>

<script>
import Navbar from '../components/_base/NavigationBar'
import Footer from '../components/_base/Footer'

export default {
  name: 'Profile',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {}
  }
}
</script>
