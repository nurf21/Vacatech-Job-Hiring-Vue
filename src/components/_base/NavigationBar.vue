<template>
  <b-navbar class="nav-container">
    <b-navbar-brand class="nav-brand">
      <img src="../../assets/logo/primary.png" />
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto nav-item">
      <b-nav-item>
        <b-row>
          <b-col>
            <b-img :src="require('../../assets/icon/bell.png')"></b-img>
          </b-col>
          <b-col>
            <b-img :src="require('../../assets/icon/mail.png')"></b-img>
          </b-col>
          <b-col>
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
          </b-col>
        </b-row>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style scoped>
.nav-container {
  padding: 2em 9em;
  box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25);
  background-color: white;
  width: 100%;
}

.nav-brand img {
  width: 127px;
  height: 35px;
  object-fit: cover;
}
</style>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 32,
        height: 32,
        class: 'm1'
      }
    }
  }
}
</script>
