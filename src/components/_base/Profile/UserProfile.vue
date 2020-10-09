<template>
  <b-row>
    <b-col>
      <b-row class="profile-image">
        <b-col>
          <b-img
            center
            :src="url + '/' + talentData[0].profile[0].profile_img"
            style="width: 150px; height: 150px; object-fit: cover"
            rounded="circle"
          ></b-img>
        </b-col>
      </b-row>

      <b-row class="main-profile">
        <b-col md="12" sm="12" class="text-center title">
          <h1>{{ talentData[0].user_name }}</h1>
        </b-col>
        <b-col md="12" sm="12" class="text-center role">
          <p v-if="talentData[0].profile[0].profile_job">
            {{ talentData[0].profile[0].profile_job }}
          </p>
        </b-col>
        <b-col md="12" sm="12" class="text-center location">
          <b-row
            class="justify-content-center"
            v-if="talentData[0].profile[0].job_address"
          >
            <b-col md="auto" style="padding: 0" class="mr-1">
              <b-img :src="require('../../../assets/icon/pin.png')"></b-img>
            </b-col>
            <b-col md="auto" align-self="end" class="mr-3" style="padding: 0">
              <p>{{ talentData[0].profile[0].job_address }}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="12" sm="12" class="text-center roles">
          <p>{{ talentData[0].profile[0].job_type }}</p>
        </b-col>
        <b-col md="12" sm="12" class="text-center about">
          <p>{{ talentData[0].profile[0].profile_desc }}</p>
        </b-col>
        <b-col md="4"></b-col>
        <b-col md="4" class="text-center hire">
          <router-link to="/hire">
            <b-button size="md" block class="b-button-hire">Hire</b-button>
          </router-link>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped>
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
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserProfile',
  props: ['img', 'name'],
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL
    }
  },
  computed: {
    ...mapGetters({ talentData: 'getTalentData' })
  }
}
</script>
