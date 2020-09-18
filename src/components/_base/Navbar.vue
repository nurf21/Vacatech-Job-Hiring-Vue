<template>
  <b-navbar class="nav-container">
    <b-navbar-brand>
      <b-img v-bind="styleImg" :src="require('../../assets/logo/dark.png')"></b-img>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <router-link to="/login">
        <b-button size="sm" class="mr-sm-2 b-button-login">Masuk</b-button>
      </router-link>
      <b-button size="sm" class="my-2 my-sm-0 b-button-register" id="popover-target-1">Daftar</b-button>
      <b-popover target="popover-target-1" triggers="hover" placement="top">
        <router-link to="/register/worker">Daftar sebagai pekerja ></router-link>
        <br />
        <router-link to="/register/recruiter">Daftar sebagai perekrut ></router-link>
      </b-popover>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
.nav-container {
  padding: 2em 7em;
}

.b-button-login {
  background-color: white;
  border: 1px solid #5e50a1;
  color: #5e50a1;
}

.b-button-login:hover {
  background-color: #5e50a1;
  border: transparent;
  color: white;
}

.b-button-register {
  background-color: #5e50a1;
  border: transparent;
  color: white;
}

.b-button-register:hover {
  background-color: white;
  border: 1px solid #5e50a1;
  color: #5e50a1;
}
</style>

<script>
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      styleImg: { width: 127, height: 35, class: 'm1' }
    }
  }
}
</script>
