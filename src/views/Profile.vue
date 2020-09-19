<template>
  <div class="p-container">
    <header>
      <Navbar :img="talentData[0].profile[0].profile_img"/>
    </header>

    <div class="content">
      <div class="card-container">
        <UserProfile />
        <UserSkill />
        <UserContact />
        <UserPortfolio />
      </div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/NavigationBar'
import UserProfile from '../components/_base/Profile/AllProfile'
import UserSkill from '../components/_base/Profile/UserSkill'
import UserContact from '../components/_base/Profile/UserContact'
import UserPortfolio from '../components/_base/Profile/UserPortfolio'
import Footer from '../components/_base/Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    UserProfile,
    UserSkill,
    UserContact,
    UserPortfolio,
    Footer
  },
  name: 'Profile',
  methods: {
    ...mapActions(['getTalentDataById'])
  },
  computed: {
    ...mapGetters({ user: 'getUser', talentData: 'getTalentData' })
  },
  created() {
    this.getTalentDataById(this.user.user_id)
  }
}
</script>

<style scoped>
.content {
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.35em 9em;
}

.card-container {
  width: 83vw;
  background: linear-gradient(to bottom, #5e50a1 50%, #ffffff 50%) no-repeat;
  background-size: 100% 35%;
  background-color: white;
  background: white;
  border-radius: 8px;
  padding: 3.15em 4.35em;
}

.footer {
  overflow-x: hidden;
}
</style>
