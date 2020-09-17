<template>
  <div class="p-container">
    <header>
      <Navbar />
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
  background: white;
  border-radius: 8px;
  padding: 3.15em 4.35em;
}

.footer {
  overflow-x: hidden;
}
</style>

<script>
import Navbar from '../_base/NavigationBar'
import Footer from '../_base/Footer'
import UserProfile from '../_base/Profile/UserProfile'
import UserSkill from '../_base/Profile/UserSkill'
import UserContact from '../_base/Profile/UserContact'
import UserPortfolio from '../_base/Profile/UserPortfolio'

export default {
  name: 'ProfileComponent',
  components: {
    Navbar,
    Footer,
    UserProfile,
    UserSkill,
    UserContact,
    UserPortfolio
  },
  data() {
    return {}
  }
}
</script>
