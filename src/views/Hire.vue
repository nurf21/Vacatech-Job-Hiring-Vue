<template>
  <div style="width:100%; background-color: #E5E5E5;">
    <Header class="py-3" :img="profile[0].profile_img"/>
    <div class="page-container">
      <div class="profile-info">
        <div class="image"><b-img :src="url + '/' + talentData[0].profile[0].profile_img" class="image"></b-img></div>
        <div style="padding:0 30px">
          <h4>{{talentData[0].user_name}}</h4>
          <p>{{talentData[0].profile[0].profile_job}}</p>
          <p>{{talentData[0].profile[0].job_address}}</p>
          <p style="color: #9EA0A5;">{{talentData[0].profile[0].profile_desc}}</p>
          <h4>Skill</h4>
          <div class="skills">
            <div class="skill" v-for="(value, index) in talentData[0].skill" :key="index">{{value.skill_name}}</div>
          </div>
        </div>
      </div>
      <div class="hire-info">
        <h2>Hubungi {{talentData[0].user_name}}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <br />
        <div>
          <b-form @submit.prevent="onSubmit()">
            <b-form-group
              style="color: #9EA0A5;"
              id="input-group-2"
              label="Pesan"
              label-for="textarea"
            >
              <b-form-textarea
                style="color: #9EA0A5;"
                id="textarea"
                v-model="form.msg"
                placeholder="Masukkan pesan yang ingin anda kirimkan kepada talent"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-button block class="mt-5 btn-hire" type="submit">Hire</b-button>
          </b-form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/NavigationBar'
import { mapGetters, mapActions } from 'vuex'
import Footer from '../components/_base/Footer'
export default {
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      form: {}
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions(['postRoomChat']),
    onSubmit() {
      this.postRoomChat(this.form)
    }
  },
  computed: {
    ...mapGetters({ profile: 'getProfileCompany', talentData: 'getTalentData' })
  },
  created() {
    this.form = {
      user_worker: this.talentData[0].user_id,
      user_recruiter: this.profile[0].user_id
    }
  }
}
</script>

<style scoped>
.btn-hire {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-hire:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}
.page-container {
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
}
.profile-info {
  width: 400px;
  height: 700px;
  border-radius: 8px;
  background-color: white;
}
.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 30px auto 50px auto;
}
.hire-info {
  width: 700px;
  height: 1000px;
  border-radius: 8px;
}
/* Skills */
.skills {
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 300px;
}
.skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  border-radius: 4px;
  text-align: center;
  padding: 3px 15px;
  color: white;
  margin: 0 5px 5px 0px;
}
@media (max-width: 700px) {
  .page-container {
    grid-template-columns: 1fr;
  }
  .profile-info {
    width: 375px;
  }
  .hire-info {
    margin-top: 50px;
    width: 375px;
    margin-bottom: -250px;
  }
}
</style>
