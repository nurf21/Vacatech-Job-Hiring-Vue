<template>
  <div class="login-container">
    <b-row>
      <b-col md="6" sm="6" class="content-left">
        <ImageOverlay />
      </b-col>
      <b-col md="6" sm="6" class="content-right">
        <ActivateResult />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.login-container {
  background-color: #f6f7f8;
  padding: 40px 75px;
  height: 100vh;
}

.login-container .content-right {
  padding: 5em 0em;
}
</style>

<script>
import ActivateResult from '../components/_base/ActivateResult'
import ImageOverlay from '../components/_base/ImageOverlay'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    ActivateResult,
    ImageOverlay
  },
  methods: {
    ...mapActions(['activateUser'])
  },
  created() {
    this.activateUser(this.$route.query.keys)
  }
}
</script>
