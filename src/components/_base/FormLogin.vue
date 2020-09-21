<template>
  <b-container>
    <b-row>
      <b-col class="text-left">
        <h3>Halo, Vacafriends</h3>
        <p>Masuk untuk memulai koneksi dengan perusahaan dan developer terbaik.</p>
      </b-col>
    </b-row>
    <b-row class="login-form">
      <b-col>
        <b-alert show variant="danger" v-show="isError">{{ error }}</b-alert>
        <b-form @submit.prevent="onSubmit">
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
            <b-col class="text-left">
              <label for="password">Kata Sandi</label>
              <b-input
                type="password"
                id="password"
                v-model="form.user_password"
                placeholder="Masukkan kata sandi"
                required
              ></b-input>
            </b-col>
          </b-row>
          <b-row class="component-form">
            <b-col class="text-right">
              <router-link to="/reset">
                <p style="color: black">Lupa kata sandi?</p>
              </router-link>
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
          <span
            style="color: #FBB017;cursor:pointer"
            id="popover-target-1"
          >Daftar disini</span>
          <b-popover target="popover-target-1" triggers="hover" placement="bottom">
            <router-link to="/register/worker">Daftar sebagai pekerja ></router-link>
            <br />
            <router-link to="/register/recruiter">Daftar sebagai perekrut ></router-link>
          </b-popover>
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
import { mapActions } from 'vuex'

export default {
  name: 'FormLogin',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      },
      isError: false,
      error: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then((result) => {
          if (result.data.user_role === 1) {
            this.$router.push('/profile')
          } else if (result.data.user_role === 2) {
            this.$router.push('/home')
          }
        })
        .catch((error) => {
          this.isError = true
          this.error = error.data.msg
        })
    }
  }
}
</script>
