<template>
  <b-navbar>
    <b-navbar-brand href="#">
      <b-img v-bind="styleImg" :src="require('../../assets/logo/primary.png')"></b-img>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-button size="sm" class="mr-sm-2 b-button-login">Masuk</b-button>
      <b-button size="sm" class="my-2 my-sm-0 b-button-register">Daftar</b-button>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
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
