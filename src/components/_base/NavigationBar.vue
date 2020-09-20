<template>
  <b-navbar class="nav-container">
    <b-navbar-brand class="nav-brand" v-if="user.user_role === 2">
      <router-link to="/home">
        <img src="../../assets/logo/vacatechPurple.png" />
      </router-link>
    </b-navbar-brand>
    <b-navbar-brand class="nav-brand" v-else>
      <img src="../../assets/logo/vacatechPurple.png" />
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto nav-item">
      <b-nav-item>
        <b-row>
          <b-col>
            <b-img :src="require('../../assets/icon/bell.png')" id="popover-target-1"></b-img>
            <b-popover target="popover-target-1" triggers="hover" placement="bottom">
              <b-img :src="require('../../assets/img/notif0.png')" v-show="!isNotif"></b-img>
              <div class="notification" v-for="(value, index) in notif" :key="index">
                <p>{{ value.notif }} (<span>{{value.notif_created_at.split('T').join(', ').slice(0, 17)}}</span>)</p>
              </div>
            </b-popover>
          </b-col>
          <b-col>
            <router-link to="/roomchat">
              <b-img :src="require('../../assets/icon/mail.png')"></b-img>
            </router-link>
          </b-col>
          <b-col>
            <b-img
              v-bind="mainProps"
              :src="url + '/' + img"
              rounded="circle"
              alt="Circle image"
              id="popover-target-2"
            >></b-img>
            <b-popover target="popover-target-2" triggers="hover" placement="bottom">
              <b-navbar variant="faded" type="light">
                <router-link to="/profile" v-if="user.user_role === 1">
                  <b-navbar-brand>Profile</b-navbar-brand>
                </router-link>
                <router-link to="/profile/company" v-if="user.user_role === 2">
                  <b-navbar-brand>Profile</b-navbar-brand>
                </router-link>
              </b-navbar>
              <b-navbar variant="faded" type="light">
                <b-navbar-brand @click="confirmLogout" class="logout">Logout</b-navbar-brand>
              </b-navbar>
            </b-popover>
          </b-col>
        </b-row>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
.nav-container {
  padding: 2em 7em;
  box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25);
  background-color: white;
  width: 100%;
}

.nav-brand img {
  width: 127px;
  height: 35px;
  object-fit: fill;
}

.logout {
  cursor: pointer;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavigationBar',
  props: ['img'],
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      mainProps: {
        width: 32,
        height: 32,
        class: 'm1'
      },
      form: {},
      isNotif: false
    }
  },
  methods: {
    ...mapActions({ handleLogout: 'logout', handleNotif: 'getNotification' }),
    confirmLogout() {
      this.$bvModal
        .msgBoxConfirm('Are you sure want to logout?', {
          cancelVariant: 'danger',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(value => {
          this.isLogout = value
          if (this.isLogout) {
            this.handleLogout()
          }
        })
    }
  },
  computed: {
    ...mapGetters({ user: 'getUser', notif: 'getNotif' })
  },
  created() {
    this.handleNotif(this.user.user_id).then(result => {
      this.isNotif = true
    }).catch(error => {
      this.isNotif = false
      console.log(error)
    })
  }
}
</script>
