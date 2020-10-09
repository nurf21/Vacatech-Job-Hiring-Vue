<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Reset Password</h3>
        <p>You need to change your password to activate your account</p>
      </b-col>
    </b-row>
    <b-row class="login-form">
      <b-col>
        <b-alert show variant="success" v-show="isSuccess"
          >Reset Password Success ! <br />
          Click
          <router-link to="/login">here</router-link>
          to login</b-alert
        >
        <b-alert show variant="danger" v-show="isError">{{ error }}</b-alert>
        <b-form @submit.prevent="onSubmit" v-show="!isSuccess">
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="password">Kata sandi</label>
              <b-input
                type="password"
                id="password"
                v-model="form.user_password"
                required
              ></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="confirmpassword">Konfirmasi kata sandi</label>
              <b-input
                type="password"
                id="confirmpassword"
                v-model="form.confirm_password"
                required
              ></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col>
              <b-button
                type="submit"
                block
                style="background-color: #fbb017; border-color: transparent"
                >Reset Password</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
p {
  margin: 0;
}

.login-form {
  padding: 3vh 0vw;
}

.component-form {
  padding: 1.8vh 0vw;
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormResetPassword',
  data() {
    return {
      form: {},
      isError: false,
      isSuccess: false,
      error: ''
    }
  },
  methods: {
    ...mapActions(['changePassword']),
    onSubmit() {
      const payload = {
        keys: this.$route.query.keys,
        form: this.form
      }
      this.changePassword(payload)
        .then((result) => {
          this.isError = false
          this.isSuccess = true
        })
        .catch((error) => {
          this.isError = true
          this.error = error.data.msg
          this.makeToast(this.error, 'Error', 'danger')
        })
    },
    makeToast(msg, title, variant) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }
}
</script>
