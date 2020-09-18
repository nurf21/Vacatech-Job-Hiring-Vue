<template>
  <div>
    <b-col cols="12" style="padding: 0;">
      <Header class="py-3" :img="profile[0].profile_img"/>
      <TopJobs />
      <b-container>
        <div class="form pt-3">
          <div class="search-name">
            <b-form-input id="input-1" v-model="search" required placeholder="Search for any skill"></b-form-input>
          </div>
          <div class="img-search">
            <img src="../assets/icon/search.png" alt />
          </div>
          <div class="line"></div>
          <div class="form-sort">
            <b-form-group id="input-group-3">
              <b-form-select id="input-3" v-model="sort" :options="sortBy" required></b-form-select>
            </b-form-group>
          </div>
          <div>
            <b-button class="btn-search">Search</b-button>
          </div>
        </div>
        <div class="worker mt-5">
          <div class="workers">
            <div class="profile">
              <div class="profile-img"></div>
              <div class="profile-details">
                <h4>Louis Tomlinson</h4>
                <p style="color: #9EA0A5;">Web Developer</p>
                <p style="color: #9EA0A5; margin-top: -10px">Lorem Ipsum</p>
                <div class="skills">
                  <div class="skill">PHP</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">HTML</div>
                </div>
              </div>
            </div>
            <div style="position: relative">
              <b-button class="btn-profile">See Profile</b-button>
            </div>
          </div>
          <hr style="color:#9ea0a5" />
          <div class="workers">
            <div class="profile">
              <div class="profile-img"></div>
              <div class="profile-details">
                <h4>Harry Styles</h4>
                <p style="color: #9EA0A5;">Web Developer</p>
                <p style="color: #9EA0A5; margin-top: -10px">Lorem Ipsum</p>
                <div class="skills">
                  <div class="skill">PHP</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">HTML</div>
                </div>
              </div>
            </div>
            <div style="position: relative">
              <b-button class="btn-profile">See Profile</b-button>
            </div>
          </div>
          <hr style="color:#9ea0a5" />
          <div class="workers">
            <div class="profile">
              <div class="profile-img"></div>
              <div class="profile-details">
                <h4>Niall Horam</h4>
                <p style="color: #9EA0A5;">Web Developer</p>
                <p style="color: #9EA0A5; margin-top: -10px">Lorem Ipsum</p>
                <div class="skills">
                  <div class="skill">PHP</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">HTML</div>
                </div>
              </div>
            </div>
            <div style="position: relative">
              <b-button class="btn-profile">See Profile</b-button>
            </div>
          </div>
          <hr style="color:#9ea0a5" />
          <div class="workers">
            <div class="profile">
              <div class="profile-img"></div>
              <div class="profile-details">
                <h4>Liam Payne</h4>
                <p style="color: #9EA0A5;">Web Developer</p>
                <p style="color: #9EA0A5; margin-top: -10px">Lorem Ipsum</p>
                <div class="skills">
                  <div class="skill">PHP</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">HTML</div>
                </div>
              </div>
            </div>
            <div style="position: relative">
              <b-button class="btn-profile">See Profile</b-button>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-5">
          <b-pagination
            class="pagination-btn"
            align="center"
            v-model="currentPage"
            :total-rows="rows"
          ></b-pagination>
        </div>
      </b-container>
      <Footer />
    </b-col>
  </div>
</template>

<script>
import Header from '../components/_base/NavigationBar'
import TopJobs from '../components/_base/HeaderTopJobs.vue'
import Footer from '../components/_base/Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    TopJobs,
    Footer
  },
  data() {
    return {
      search: '',
      sort: null,
      sortBy: [
        { text: 'Sort', value: null },
        'Sortir berdasarkan nama',
        'Sortir berdasarkan lokasi',
        'Sortir berdasarkan freelance',
        'Sortir berdasarkan fulltime'
      ],
      show: true,
      rows: 100,
      currentPage: 1
    }
  },
  methods: {
    ...mapActions(['getProfileDataCompany'])
  },
  computed: {
    ...mapGetters({ user: 'getUser', profile: 'getProfileCompany' })
  },
  created() {
    this.getProfileDataCompany(this.user.user_id)
    console.log(this.profile[0])
  }
}
</script>

<style scoped>
.form {
  display: flex;
}
.container {
  background: #ffffff;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
  border-radius: 8px;
}
.search-name {
  width: 800px;
  color: #9ea0a5;
}
.search-name input {
  border-color: white;
}
.img-search {
  margin: 5px 10px 0 10px;
}
.line {
  width: 2px;
  background-color: #9ea0a5;
  margin-top: -12px;
}
.form-sort {
  width: 200px;
}
.form-sort select {
  color: #9ea0a5;
  border-color: white;
}
.btn-search {
  background-color: #5e50a1;
  border-radius: 4px;
  width: 121px;
}
.btn-search:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-profile {
  background-color: #5e50a1;
  border-radius: 4px;
  width: 120px;
  height: 40px;
  position: absolute;
  top: 100px;
  right: 40px;
}
.btn-profile:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
.worker {
  max-width: 100%;
}
/* WORKERS */
.workers {
  width: 100%;
  height: 250px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.profile {
  display: flex;
}
.profile-img {
  width: 130px;
  height: 130px;
  margin: 60px 40px;
  border-radius: 50%;
  background-color: #000;
}
.profile-details {
  margin: 30px 0;
}
.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* margin-right: 0 5px 10px 5px; */
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
</style>
