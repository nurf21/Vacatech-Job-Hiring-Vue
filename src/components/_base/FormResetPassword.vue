<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Reset Password</h3>
        <p>Enter your user account's verified email address and we will send you a password reset link.</p>
      </b-col>
    </b-row>
    <b-row class="login-form">
      <b-col>
        <b-form>
          <b-row class="component-form">
            <b-col class="text-left">
              <label for="email">Email</label>
              <b-input type="email" id="email"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col>
              <b-button
                type="submit"
                block
                style="background-color: #FBB017; border-color: transparent;"
              >Send password reset email</b-button>
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
export default {
  name: 'FormResetPassword'
}
</script>
