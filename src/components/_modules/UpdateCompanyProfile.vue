<template>
  <div class="up-container">
    <Navbar class="nav" :img="profile[0].profile_img" />

    <div class="content">
      <b-row class="main-content">
        <b-col class="main-profile" md="4" xs="12">
          <b-row>
            <b-col md="12">
              <b-card border-variant="white" class="text-center">
                <b-img
                  :src="url + '/' + profile[0].profile_img"
                  rounded="circle"
                  style="width: 150px; height: 150px; object-fit: cover;"
                ></b-img>
                <div class="edit-icon">
                  <input type="file" ref="file" @change="upFile" style="display: none">
                  <p @click="$refs.file.click()" style="cursor: pointer;">Edit <b-icon icon="pencil-fill"></b-icon>
                  </p>
                </div>
                <div class="text-left">
                  <b-card-text class="name">{{user.company_name}}</b-card-text>
                  <b-card-text class="job">{{profile[0].profile_field}}</b-card-text>
                  <b-card-text class="location">{{profile[0].profile_city}}</b-card-text>
                </div>
              </b-card>
            </b-col>
            <b-col md="12" sm="12" class="b-button-container">
              <b-button block size="md" class="b-button-save" @click="onSave()">Simpan</b-button>
            </b-col>
            <b-col md="12" sm="12" class="b-button-container">
              <router-link to="/profile/company">
                <b-button block size="md" class="b-button-cancel">Batal</b-button>
              </router-link>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="edit-profile" md="8" xs="12">
          <b-row class="f-form">
            <b-col md="12">
              <b-card border-variant="white" class="text-center">
                <b-card-header header-bg-variant="white" class="text-left">
                  <p>Data Diri</p>
                </b-card-header>
                <b-card-body>
                  <b-form>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="name" class="l-label">Nama Perusahaan</label>
                        <b-input type="text" v-model="formProfile.company_name" id="name" placeholder="Masukan nama perusahaan" required></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="bidang" class="l-label">Bidang</label>
                        <b-input
                          type="text"
                          v-model="formProfile.profile_field"
                          id="bidang"
                          placeholder="Masukan bidang perusahaan ex: financial"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="city" class="l-label">Kota</label>
                        <b-input type="text" v-model="formProfile.profile_city" id="city" placeholder="Masukan kata" required></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="description" class="l-label">Deskripsi Singkat</label>
                        <b-form-textarea
                          type="text"
                          v-model="formProfile.profile_desc"
                          rows="4"
                          id="description"
                          placeholder="Tuliskan deskripsi singkat"
                          required
                        ></b-form-textarea>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="email" class="l-label">Email</label>
                        <b-input type="text" v-model="formProfile.profile_email" id="email" placeholder="Masukan email" required></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="instagram" class="l-label">Instagram</label>
                        <b-input type="text" v-model="formProfile.profile_instagram" id="instagram" placeholder="Masukan nama instagram" required></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="phone" class="l-label">Nomor Telepon</label>
                        <b-input type="text" v-model="formProfile.user_phone" id="phone" placeholder="Masukan nomor telepon" required></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="linkedin" class="l-label">Linkedin</label>
                        <b-input type="text" v-model="formProfile.profile_linkedin" id="linkedin" placeholder="Masukan nama Linkedin" required></b-input>
                      </b-col>
                    </b-row>
                  </b-form>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.up-container {
  overflow-x: hidden;
}

.nav {
  box-shadow: none;
}

.content {
  padding: 2em 7em;
  background: linear-gradient(to bottom, #5e50a1 50%, #f6f7f8 50%) no-repeat;
  background-size: 100% 30%;
  background-color: #f6f7f8;
}

.main-content {
  margin: 4.3em 0em;
}

.edit-icon p {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #9ea0a5;
}

.main-profile .name {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.main-profile .job {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #1f2a36;
}

.main-profile .location {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
}

.main-profile .role {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
}
.main-profile .b-button-container .b-button-save {
  margin: 1em 0em;
  border: transparent;
  background-color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.main-profile .b-button-container .b-button-cancel {
  border: 1px solid #5e50a1;
  background-color: white;
  color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
}
.f-form {
  margin: 0em 0em 3em 0em;
}

.f-form p {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 56px;
  color: #1f2a36;
}

.component-form {
  padding: 1.8vh 0vw;
}

.component-form .l-label {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #9ea0a5;
}

@media screen and (max-width: 768px) {

.main-content {
  margin: 1em -6em;
}

.content .text-left .name {
  text-align: center !important;
}
.content .text-left .job {
  text-align: center !important;
}
.content .text-left .location {
  text-align: center !important;
}
.main-profile .b-button-container .b-button-save {
  margin: 1em 0em;
  border: transparent;
  background-color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.main-profile .b-button-container .b-button-cancel {
  margin-bottom: 15px;
  border: 1px solid #5e50a1;
  background-color: white;
  color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
}
}

/* @media (min-width: 506px) and (max-width: 700px) {

.main-content {
  margin: 10em -5em;
  width: 520px;
}
.content .edit-profile{
  margin-top: 10px;
}

.content .text-left .name {
  text-align: center !important;
}
.content .text-left .job {
  text-align: center !important;
}
.content .text-left .location {
  text-align: center !important;
}
.main-profile .b-button-container .b-button-save {
  margin: 1em 1em;
  width: 460px;
  border: transparent;
  background-color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}

.main-profile .b-button-container .b-button-cancel {
  margin: 0em 1em;
  width: 460px;
  border: 1px solid #5e50a1;
  background-color: white;
  color: #5e50a1;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
}
} */

</style>

<script>
import Navbar from '../_base/NavigationBar'
import Footer from '../_base/Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UpdateProfile',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      form: {},
      formProfile: {}
    }
  },
  methods: {
    ...mapActions(['patchProfileImageCompany', 'getProfileDataCompany', 'patchProfileCompany']),
    upFile(event) {
      this.form.profile_img = event.target.files[0]
      const data = new FormData()
      data.append('profile_img', this.form.profile_img)
      console.log(data)
      const payload = {
        id: this.profile[0].profile_id,
        form: data
      }
      this.patchProfileImageCompany(payload).then(result => {
        this.profile = {}
        this.form = {}
        this.makeToast('Profile image updated', 'Success', 'success')
        this.getProfileDataCompany(this.user.user_id)
      }).catch(error => {
        this.makeToast(error.data.msg, 'Error', 'danger')
        console.log(error)
      })
    },
    onSave() {
      const payload = {
        id: this.profile[0].profile_id,
        form: this.formProfile
      }
      this.patchProfileCompany(payload).then(result => {
        this.profile = {}
        this.makeToast('Profile updated', 'Success', 'success')
        this.getProfileDataCompany(this.user.user_id)
      })
    },
    makeToast(msg, title, variant) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  computed: {
    ...mapGetters({ profile: 'getProfileCompany', user: 'getUser' })
  },
  created() {
    console.log(this.profile)
    console.log(this.user)
    this.formProfile = {
      user_id: this.user.user_id,
      company_name: this.user.company_name,
      profile_field: this.profile[0].profile_field,
      profile_city: this.profile[0].profile_city,
      profile_desc: this.profile[0].profile_desc,
      profile_email: this.profile[0].profile_email,
      profile_instagram: this.profile[0].profile_instagram,
      user_phone: this.user.user_phone,
      profile_linkedin: this.profile[0].profile_linkedin
    }
  }
}
</script>
