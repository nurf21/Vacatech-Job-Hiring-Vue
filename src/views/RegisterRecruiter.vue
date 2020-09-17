<template>
  <div class="register-container">
    <b-row>
      <b-col md="6" sm="6" class="content-left">
        <ImageOverlay />
      </b-col>
      <b-col md="6" sm="6" class="content-right">
        <Form />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.register-container {
  background-color: #f6f7f8;
  padding: 40px 75px;
  height: 100vh;
  overflow: hidden;
}

.register-container .content-right {
  overflow: auto;
  height: 90vh;
}
</style>

<script>
import Form from '../components/_base/FormRegisterRecruiter'
import ImageOverlay from '../components/_base/ImageOverlay'

export default {
  name: 'Login',
  components: {
    Form,
    ImageOverlay
  }
}
</script>
