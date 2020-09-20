<template>
  <b-row class="contact" cols="4">
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/mail.png')"></b-img>
          <p>{{ company[0].profile_email }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/instagram.png')"></b-img>
          <p>{{ company[0].profile_instagram }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/phone.png')"></b-img>
          <p>{{ user.user_phone }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/linkedin.png')"></b-img>
          <p>{{ company[0].profile_linkedin }}</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped>
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

.contact p {
  margin: 0.8em 0em;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #9ea0a5;
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserContact',
  computed: {
    ...mapGetters({ company: 'getProfileCompany', user: 'getUser' })
  },
  created() {
    console.log(this.company)
    console.log(this.user)
  }
}
</script>
