<template>
  <div class="up-container">
    <Navbar class="nav" :img="talentData[0].profile[0].profile_img" />

    <div class="content">
      <b-row class="main-content">
        <b-col class="main-profile" md="4">
          <b-row>
            <b-col md="12">
              <b-card border-variant="white" class="text-center">
                <b-img
                  :src="url + '/' + talentData[0].profile[0].profile_img"
                  rounded="circle"
                  style="width: 150px; height: 150px; object-fit: cover"
                ></b-img>
                <div class="edit-icon">
                  <input
                    type="file"
                    ref="file"
                    @change="upFile"
                    style="display: none"
                  />
                  <p @click="$refs.file.click()" style="cursor: pointer">
                    Edit <b-icon icon="pencil-fill"></b-icon>
                  </p>
                </div>
                <div class="text-left">
                  <b-card-text class="name">{{
                    talentData[0].user_name
                  }}</b-card-text>
                  <b-card-text class="job">{{
                    talentData[0].profile[0].profile_job
                  }}</b-card-text>
                  <b-card-text class="location">{{
                    talentData[0].profile[0].job_address
                  }}</b-card-text>
                  <b-card-text class="role">{{
                    talentData[0].profile[0].job_type
                  }}</b-card-text>
                </div>
              </b-card>
            </b-col>
            <b-col md="12" sm="12" class="b-button-container">
              <b-button block size="md" class="b-button-save" @click="onSave()"
                >Simpan</b-button
              >
            </b-col>
            <b-col md="12" sm="12" class="b-button-container">
              <router-link to="/profile">
                <b-button block size="md" class="b-button-cancel"
                  >Batal</b-button
                >
              </router-link>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="edit-profile" md="8">
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
                        <label for="name" class="l-label">Nama Lengkap</label>
                        <b-input
                          type="text"
                          v-model="formProfile.user_name"
                          id="name"
                          placeholder="Masukan nama lengkap"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="job" class="l-label">Job Desk</label>
                        <b-input
                          type="text"
                          v-model="formProfile.profile_job"
                          id="job"
                          placeholder="Masukan job desk"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <b-form-radio-group
                          v-model="formProfile.job_type"
                          :options="options"
                          plain
                          name="type"
                        ></b-form-radio-group>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="domisili" class="l-label">Domisili</label>
                        <b-input
                          type="text"
                          v-model="formProfile.profile_address"
                          id="domisili"
                          placeholder="Masukan domisili"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="place" class="l-label">Tempat Kerja</label>
                        <b-input
                          type="text"
                          v-model="formProfile.job_address"
                          id="place"
                          placeholder="Masukan tempat kerja"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="place" class="l-label">Instagram</label>
                        <b-input
                          type="text"
                          v-model="formProfile.profile_instagram"
                          id="instagram"
                          placeholder="Masukan akun Instagram"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="place" class="l-label">Git</label>
                        <b-input
                          type="text"
                          v-model="formProfile.profile_git"
                          id="Git"
                          placeholder="Masukan akun Git"
                          required
                        ></b-input>
                      </b-col>
                    </b-row>
                    <b-row class="component-form">
                      <b-col class="text-left">
                        <label for="description" class="l-label"
                          >Deskripsi Singkat</label
                        >
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
                  </b-form>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
          <Skill />
          <Experience />
          <Portofolio />
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
  background-size: 100% 25%;
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
.content .text-left .role {
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
</style>

<script>
import Navbar from '../_base/NavigationBar'
import Footer from '../_base/Footer'
import Skill from '../_base/UpdateProfile/FormSkill'
import Experience from '../_base/UpdateProfile/FormPengalamanData'
import Portofolio from '../_base/UpdateProfile/FormPortofolio'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UpdateProfile',
  components: {
    Navbar,
    Footer,
    Skill,
    Experience,
    Portofolio
  },
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      form: {},
      selected: 'Full Time',
      options: [
        { text: 'Full Time', value: 'Full Time' },
        { text: 'Freelance', value: 'Freelance' }
      ],
      formProfile: {}
    }
  },
  methods: {
    ...mapActions([
      'patchProfileImageTalent',
      'getTalentDataById',
      'patchProfileTalent'
    ]),
    upFile(event) {
      this.form.profile_img = event.target.files[0]
      const data = new FormData()
      data.append('profile_img', this.form.profile_img)
      const payload = {
        id: this.talentData[0].profile[0].profile_id,
        form: data
      }
      this.patchProfileImageTalent(payload)
        .then((result) => {
          this.talentData = {}
          this.form = {}
          console.log(result)
          this.makeToast('Profile image updated', 'Success', 'success')
          this.getTalentDataById(this.user.user_id)
        })
        .catch((error) => {
          this.makeToast(error.data.msg, 'Error', 'danger')
        })
    },
    onSave() {
      const payload = {
        id: this.talentData[0].profile[0].profile_id,
        form: this.formProfile
      }
      this.patchProfileTalent(payload).then((result) => {
        this.talentData = {}
        this.makeToast('Profile updated', 'Success', 'success')
        this.getTalentDataById(this.user.user_id)
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
  created() {
    this.getTalentDataById(this.user.user_id).then((response) => {
      if (!response.data[0].profile[0].profile_address) {
        this.makeToast('Please update your profile first', 'Info', 'info')
      }
    })
    this.formProfile = {
      user_id: this.talentData[0].user_id,
      user_name: this.talentData[0].user_name,
      profile_job: this.talentData[0].profile[0].profile_job,
      job_type: this.talentData[0].profile[0].job_type,
      profile_address: this.talentData[0].profile[0].profile_address,
      job_address: this.talentData[0].profile[0].job_address,
      profile_instagram: this.talentData[0].profile[0].profile_instagram,
      profile_git: this.talentData[0].profile[0].profile_git,
      profile_desc: this.talentData[0].profile[0].profile_desc
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser', talentData: 'getTalentData' })
  }
}
</script>
