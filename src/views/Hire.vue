<template>
  <div style="width:100%; background-color: #E5E5E5;">
    <Header class="py-3" :img="profile[0].profile_img" />
    <b-row class="page-container">
      <b-col md="4" sm="12" class="profile-info">
        <div class="image">
          <b-img :src="url + '/' + talentData[0].profile[0].profile_img" class="image"></b-img>
        </div>
        <div style="padding:0 30px">
          <h4>{{talentData[0].user_name}}</h4>
          <p>{{talentData[0].profile[0].profile_job}}</p>
          <p>{{talentData[0].profile[0].job_address}}</p>
          <p style="color: #9EA0A5;">{{talentData[0].profile[0].profile_desc}}</p>
          <h4>Skill</h4>
          <div class="skills">
            <div
              class="skill"
              v-for="(value, index) in talentData[0].skill"
              :key="index"
            >{{value.skill_name}}</div>
          </div>
        </div>
      </b-col>
      <b-col md="6" sm="12" class="hire-info">
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
      </b-col>
    </b-row>
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
  /* display: grid; */
  margin: 70px auto;
  width: 85%;
  /* grid-template-columns: 1fr 1fr; */
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
  /* grid-template-columns: 1fr 1fr 1fr; */
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
@media screen and (max-width: 375px) {
  .page-container {
    /* display: grid; */
    margin: 70px auto;
    width: 85%;
    /* grid-template-columns: 1fr 1fr; */
  }
  .profile-info {
    width: 270px;
    height: 700px;
    border-radius: 8px;
    background-color: white;
    text-align: center;
  }
  .hire-info {
    margin-top: 50px;
    width: 375px;
    margin-bottom: -250px;
  }
  .skills {
    margin: 20px 0;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 5px;
    width: 200px;
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
}

@media (min-width: 376px) and (max-width: 425px) {
  .profile-info {
    width: 350px;
    height: 700px;
    border-radius: 8px;
    /* margin-right: 20px; */
    background-color: white;
    text-align: center;
  }
  .hire-info {
    margin-top: 50px;
    width: 400px;
    height: 1000px;
    border-radius: 8px;
  }
  .skills {
    margin: 20px 0;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 5px;
    width: 270px;
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
}

@media (min-width: 426px) and (max-width: 768px) {
  .profile-info {
    width: 500px;
    height: 700px;
    border-radius: 8px;
    /* margin-right: 20px; */
    background-color: white;
    text-align: center;
  }
  .hire-info {
    margin: 20px auto;
    width: 400px;
    height: 1000px;
    border-radius: 8px;
  }
  .skills {
    margin: 20px 0;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 5px;
    width: auto;
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
}

@media (min-width: 769px) and (max-width: 1024px) {
  .profile-info {
    width: 500px;
    height: 700px;
    border-radius: 8px;
    /* margin-right: 20px; */
    background-color: white;
    text-align: center;
  }
  .hire-info {
    margin-left: auto;
    width: 400px;
    height: 1000px;
    border-radius: 8px;
  }
  .skills {
    margin: 20px 0;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 5px;
    width: auto;
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
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .profile-info {
    width: 500px;
    height: 700px;
    border-radius: 8px;
    /* margin-right: 20px; */
    background-color: white;
    text-align: center;
  }
  .hire-info {
    margin-left: auto;
    width: 400px;
    height: 1000px;
    border-radius: 8px;
  }
  .skills {
    margin: 20px 0;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    gap: 5px;
    width: auto;
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
}
</style>
