<template>
  <div>
    <b-col cols="12" style="padding: 0;">
      <Header class="py-3" :img="profile[0].profile_img"/>
      <TopJobs />
      <b-container>
        <div class="form pt-3">
          <div class="search-name">
            <b-form-input id="input-1" v-model="search" placeholder="Search for talent's location"></b-form-input>
          </div>
          <div class="img-search">
            <img src="../assets/icon/search.png" alt />
          </div>
          <div class="line"></div>
          <div class="form-sort">
            <b-form-group id="input-group-3">
              <b-form-select id="input-3" v-model="sort" :options="sortBy"  @change="onChange($event)" ></b-form-select>
            </b-form-group>
          </div>
          <div>
            <b-button class="btn-search" @click="onSearch()">Search</b-button>
          </div>
        </div>
        <div class="worker mt-5">
          <div class="workers" v-for="(value, index) in workers" :key="index">
            <div class="profile">
              <b-img :src="url + '/' + value.profile[0].profile_img" fluid class="profile-img" />
              <div class="profile-details">
                <h4>{{ value.user_name }}</h4>
                <p style="color: #9EA0A5; margin-bottom: 0px">{{ value.profile[0].profile_job }}</p>
                <p style="color: #9EA0A5;">{{ value.profile[0].job_type }}</p>
                <p style="color: #9EA0A5; margin-top: -10px">{{ value.profile[0].job_address }}</p>
                <div class="skills">
                  <div class="skill" v-for="(item, index) in value.skill" :key="index">{{ item.skill_name }}</div>
                </div>
              </div>
            </div>
            <div style="position: relative">
            <b-button class="btn-profile" @click="goTo(value.user_id)">See Profile</b-button>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-5">
          <b-pagination
            class="pagination-btn"
            align="center"
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="rows"
            @change="onPage"
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
import router from '../router'
import { mapGetters, mapActions, mapMutations } from 'vuex'

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
        { text: 'Sortir berdasarkan nama', value: 'ORDER BY user_name' },
        { text: 'Sortir berdasarkan lokasi', value: 'ORDER BY job_address' },
        { text: 'Sortir berdasarkan freelance', value: 'AND job_type = "Freelance"' },
        { text: 'Sortir berdasarkan fulltime', value: 'AND job_type = "Full Time"' }
      ],
      url: process.env.VUE_APP_BASE_URL,
      currentPage: 1
    }
  },
  methods: {
    ...mapActions(['getProfileDataCompany', 'getAllWorkerData', 'getTalentDataById', 'logout']),
    ...mapMutations(['pageChange', 'setSort', 'setTalentId']),
    onPage(value) {
      this.pageChange(value)
      this.getAllWorkerData()
    },
    onChange(event) {
      if (event === null) {
        this.setSort('ORDER BY user.user_id')
      } else {
        this.setSort(event)
      }
      this.getAllWorkerData()
    },
    onSearch() {
      if (this.search === '') {
        this.setSort('ORDER BY user.user_id')
      } else {
        this.setSort(`AND profile.job_address = "${this.search}"`)
      }
      this.getAllWorkerData()
    },
    goTo(data) {
      this.setTalentId(data)
      this.getTalentDataById(data).then(result => {
        router.push('/profile/talent')
      })
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser', profile: 'getProfileCompany', workers: 'getAllWorker', perPage: 'getLimit', rows: 'getTotalRows', talentData: 'getTalentData' })
  },
  created() {
    this.getProfileDataCompany(this.user.user_id).catch(error => {
      this.logout()
      throw error
    })
    this.getAllWorkerData()
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
