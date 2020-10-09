<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Reset Password</h3>
        <p>
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
      </b-col>
    </b-row>
    <b-row class="login-form">
      <b-col>
        <b-alert show variant="danger" v-show="isError">{{ error }}</b-alert>
        <b-alert show variant="success" v-show="isSuccess"
          >Password reset link has been sent to your email.</b-alert
        >
        <b-form @submit.prevent="onSubmit" v-show="!isSuccess">
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="email">Email</label>
              <b-input
                type="email"
                id="email"
                v-model="form.user_email"
                placeholder="Masukkan alamat email"
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
                >Send password reset email</b-button
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
    ...mapActions(['sendEmail']),
    onSubmit() {
      this.sendEmail(this.form)
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
