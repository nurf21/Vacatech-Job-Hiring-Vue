<template>
  <b-container fluid class="login-container">
    <b-row>
      <b-col md="6" sm="6">
        <ImageOverlay />
      </b-col>
      <b-col md="6" sm="6">
        <Form />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.login-container {
  background-color: #f6f7f8;
  height: 100vh;
  width: 100%;
  display: grid;
  align-items: center;
}
</style>

<script>
import Form from '../components/_base/FormLogin'
import ImageOverlay from '../components/_base/ImageOverlay'

export default {
  name: 'Login',
  components: {
    Form,
    ImageOverlay
  }
}
</script>
