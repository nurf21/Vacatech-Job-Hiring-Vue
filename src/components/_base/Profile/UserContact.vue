<template>
  <b-row class="contact" cols="12">
    <b-col md="12" sm="12" class="text-center title">
      <h1>Social Media</h1>
    </b-col>
    <b-col >
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/mail.png')"></b-img>
          <p>{{ talentData[0].user_email }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/instagram.png')"></b-img>
          <p>{{talentData[0].profile[0].profile_instagram}}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/github.png')"></b-img>
          <p>{{talentData[0].profile[0].profile_git}}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <b-img :src="require('../../../assets/icon/gitlab.png')"></b-img>
          <p>{{talentData[0].profile[0].profile_git}}</p>
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

@media screen and (max-width: 767px) {
  .contact {
    display: flex;
    flex-direction: column;
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserContact',
  computed: {
    ...mapGetters({ talentData: 'getTalentData' })
  }
}
</script>
