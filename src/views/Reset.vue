<template>
  <div class="login-container">
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
.login-container {
  background-color: #f6f7f8;
  padding: 40px 75px;
  height: 100vh;
}

.login-container .content-right {
  padding: 5em 0em;
}

@media screen and (max-width: 768px) {
  .login-container .content-right {
    padding: 0;
  }
}

@media screen and (max-width: 500px) {
  .login-container .content-left {
    display: none;
  }

  .login-container .content-right {
    padding: 0;
  }
}
</style>

<script>
import Form from '../components/_base/FormResetPassword'
import ImageOverlay from '../components/_base/ImageOverlay'

export default {
  name: 'Login',
  components: {
    Form,
    ImageOverlay
  }
}
</script>
