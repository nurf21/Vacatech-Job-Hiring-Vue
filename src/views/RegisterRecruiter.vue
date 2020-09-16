<template>
  <b-container fluid class="register-container">
    <b-row>
      <b-col md="6" sm="6"></b-col>
      <b-col md="6" sm="6">
        <Form />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.register-container {
  background-color: #f6f7f8;
  height: 150vh;
  width: 100%;
  display: grid;
  align-items: center;
}
</style>

<script>
import Form from '../components/_base/FormRegisterRecruiter'

export default {
  name: 'Login',
  components: {
    Form
  }
}
</script>
