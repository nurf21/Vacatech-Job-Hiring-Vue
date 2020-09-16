<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Halo, Teman Vaca!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
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
            <b-col class="text-left">
              <label for="password">Kata Sandi</label>
              <b-input type="password" id="password"></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-right">
              <p>Lupa kata sandi?</p>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col>
              <b-button
                type="submit"
                block
                style="background-color: #FBB017; border-color: transparent;"
              >Login</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <p>
          Anda belum punya akun?
          <span style="color: #FBB017">Daftar disini</span>
        </p>
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
  name: 'FormLogin'
}
</script>
